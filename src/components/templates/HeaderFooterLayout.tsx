import * as S from '@/styles/index.style';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

interface Props {
  children: React.ReactNode;
}

const HeaderFooterLayout = ({ children }: Props) => {
  return (
    <S.div.Container>
      <Header />
      {children}
      <Footer />
    </S.div.Container>
  );
};

export default HeaderFooterLayout;
