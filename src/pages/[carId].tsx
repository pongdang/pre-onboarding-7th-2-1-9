import styled from '@emotion/styled';
import Loading from '../components/Loading';
import { SSRSuspense } from '../components/SSRSuspense';
import CarDetail from '../components/car/CarDetail';
import TopBar from '../components/car/TopBar';

export default function CarDetailPage() {
  return (
    <>
      <TopBar />
      <Main>
        <SSRSuspense fallback={<Loading />}>
          <CarDetail />
        </SSRSuspense>
      </Main>
    </>
  );
}

const Main = styled.main`
  height: calc(100vh - 62.5px);
  overflow-y: scroll;
`;