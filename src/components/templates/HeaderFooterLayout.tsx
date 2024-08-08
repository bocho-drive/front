import * as S from '@/styles/index.style';
import Header from '@/components/organisms/Header';
import Footer from '@/components/atoms/Footer';
import { Fragment } from 'react/jsx-runtime';

interface Props {
  children: React.ReactNode;
}

const HeaderFooterLayout = ({ children }: Props) => {
  return (
    <Fragment>
      <div style={{ position: 'sticky', top: 0, width: '100%', zIndex: 100, backgroundColor: 'white', boxShadow: '0 0px 10px rgba(0,0,0,0.1)' }}>
        <Header />
      </div>
      <S.div.Container>
        <S.div.Gap $height={70} />
        <S.div.Container $width={90}>{children}</S.div.Container>
        <Footer />
      </S.div.Container>
    </Fragment>
  );
};

export default HeaderFooterLayout;
