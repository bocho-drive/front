export * from './row.style';
export * from './container.style';
export * from './column.style';
export * from './gap.style';
export * from './card.style';
export * from './avatar.style';
export * from './modal.style';

import styled from 'styled-components';

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

export const SearchBarContainer = styled.div`
  margin-bottom: 20px;
`;

export const SidebarContainer = styled.div`
  width: 200px;
  padding: 20px;
  border-right: 1px solid #ccc;
`;

export const PostListContainer = styled.div`
  border: 1px solid #ccc;
`;

export const PostItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ccc;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const PageContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

interface FormContainerProps {
  $gap?: number;
}

export const FormContainer = styled.div<FormContainerProps>`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  ${({ $gap = 0 }) => $gap && `gap: ${$gap}px;`}
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  input {
    margin-right: 0.5rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;