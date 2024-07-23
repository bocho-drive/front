import * as S from '@/styles/index.style';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

interface Props {
  children: React.ReactNode;
}

const HeaderFooterLayout = ({ children }: Props) => {
  return (
    <S.div.Container>
      <div style={{ position: 'sticky', top: 0, width: '100%', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <Header />
      </div>
      <S.div.Gap $height={70} />
      <S.div.Container $width={90}>{children}</S.div.Container>
      <Footer />
    </S.div.Container>
  );
};

export default HeaderFooterLayout;
