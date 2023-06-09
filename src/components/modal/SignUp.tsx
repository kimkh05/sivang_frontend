import styled from 'styled-components';
import Input from '../common/input';
import Button from '../common/button';
import { useState } from 'react';
import { SignUpType } from '@/types/signUp';
import { customToast } from '@/utils/toast';
import { useModal } from '@/hooks/useModal';
import { SignUp } from '@/apis/signUp';

const SignUpModal = () => {
  const { closeModal } = useModal();
  const [data, setData] = useState<SignUpType>({
    email: '',
    name: '',
    password: '',
    passwordConfirmation: '',
  });

  const onClickSignUp = () => {
    SignUp(data)
      .then(res => {
        customToast('회원가입이 완료되었습니다.', 'success');
        console.log(res);
        closeModal();
      })
      .catch(err => {
        customToast(err.response.data.message, 'error');
      });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <_Wrapper onClick={closeModal}>
      <_SignUpModal onClick={(e: React.MouseEvent<HTMLDivElement | MouseEvent>) => e.stopPropagation()}>
        <_Title>
          <_LogoText>SIVANG</_LogoText> 회원가입
        </_Title>
        <Input type="text" placeholder="홍길동" onChange={onChange} value={data.name} name="name" text="이름" />
        <Input
          type="text"
          placeholder="test1234@gmail.com"
          onChange={onChange}
          value={data.email}
          name="email"
          text="이메일"
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요."
          onChange={onChange}
          value={data.password}
          name="password"
          text="비밀번호"
        />
        <Input
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요. "
          onChange={onChange}
          value={data.passwordConfirmation}
          name="passwordConfirmation"
          text="비밀번호 확인"
        />
        <Button onClick={onClickSignUp} color="main01">
          생성
        </Button>
      </_SignUpModal>
    </_Wrapper>
  );
};

export default SignUpModal;

const _Wrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const _SignUpModal = styled.div`
  width: 40%;
  height: 85%;
  background: ${({ theme }) => theme.color.background};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const _Title = styled.p`
  ${({ theme }) => theme.font.title1};
  color: ${({ theme }) => theme.color.black};
`;

const _LogoText = styled.span`
  color: ${({ theme }) => theme.color.main01};
`;
