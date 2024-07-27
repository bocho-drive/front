import React, { ReactElement, useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import styled, { css } from 'styled-components';

interface Props {
  children: ReactElement<HTMLImageElement>;
}
const ImagePlaceholder = ({ children }: Props) => {
  const { width, height } = children.props;

  const [isLoading, setIsLoading] = useState(true);

  return (
    <Fragment>
      {isLoading && (
        <Placeholder width={width} height={height}>
          Loading...
        </Placeholder>
      )}

      {/* img 태그의 onLoad함수를 사용하기 위해, createElement를 사용했습니다. */}
      {/* props로 img태그 설정에 필요한 요소를 받아와 img태그를 직접 만드는 방법이 있겠지만, 활용하는 입장에서 속성이 추가될때마다 props가 추가되지 않도록 하고 싶었습니다 */}
      {React.createElement(children.type, {
        ...children.props,
        onLoad: () => setIsLoading(false),
        style: { display: isLoading ? 'none' : 'block' },
      })}
    </Fragment>
  );
};

export default ImagePlaceholder;

interface ImagePlaceholderProps {
  width: number;
  height: number;
}
const Placeholder = styled.div<ImagePlaceholderProps>`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;
