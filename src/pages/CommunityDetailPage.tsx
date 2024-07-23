import { useParams } from 'react-router-dom';
import CommunityLayout from '@/components/templates/CommunityLayout';
import CommunityDetail from '@/components/organisms/CommunityDetail';

const CommunityDetailPage = () => {
  const { id } = useParams();
  console.log({ id });

  return <CommunityLayout main={<CommunityDetail />} />;
};

export default CommunityDetailPage;
