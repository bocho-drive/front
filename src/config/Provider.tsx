import GlobalStyle from '@/styles/global.style';
import theme from '@/styles/theme.style';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import { ThemeProvider } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RecoilRoot>{children}</RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Provider;
