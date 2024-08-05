import ErrorFallbackUI from '@/components/templates/ErrorFallback';
import GlobalStyle from '@/styles/global.style';
import theme from '@/styles/theme.style';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';

import { ThemeProvider } from 'styled-components';

interface Props {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

const Provider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />

      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <ErrorBoundary FallbackComponent={ErrorFallbackUI}>{children}</ErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Provider;
