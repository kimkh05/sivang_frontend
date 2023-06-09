import styled from 'styled-components';
import Header from '../../components/common/header';
import Introduce from '../../components/mypage/Introduce';
import MyPageNav from '../../components/mypage/Nav';
import Footer from '../../components/common/footer';

const MyPage = () => {
  return (
    <_Wrapper>
      <Header />
      <Introduce />
      <MyPageNav/>
      <Footer />
    </_Wrapper>
  );
};

export default MyPage;

const _Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
