import { Fragment, useState, useEffect, useRef } from 'react';
import Input from '../elements/Input';
import styled from 'styled-components';

const SignUp = () => {
  const [password, setPassword] = useState('');

  const passwordNumRef = useRef();
  const passwordSpecailRef = useRef();
  const passwordEngLgRef = useRef();
  const passwordEngSmRef = useRef();
  const passwordLengthRef = useRef();

  // Regular expression
  const regExpNum = /[0-9]/g;
  const regExpSpecial = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
  const regExpEngLg = /[A-Z]/g;
  const regExpEngSm = /[a-z]/g;

  useEffect(() => {
    if(password.search(regExpEngLg) >= 0) {
      console.log('EngLg');
      passwordEngLgRef.current.style.color= '#3ECA28'
    } else {
      passwordEngLgRef.current.style.color= '#cecece'
    }

    console.log(password.search(regExpEngSm));
    if(password.search(regExpEngSm) >= 0) {
      passwordEngSmRef.current.style.color= '#3ECA28'
    } else {
      passwordEngSmRef.current.style.color= '#cecece'
    }

    if(password.search(regExpSpecial) >= 0) {
      passwordSpecailRef.current.style.color= '#3ECA28'
    } else {
      passwordSpecailRef.current.style.color= '#cecece'
    }

    if(password.search(regExpNum) >= 0) {
      passwordNumRef.current.style.color= '#3ECA28'
    } else {
      passwordNumRef.current.style.color= '#cecece'
    }
    console.log(password.length);

    if(password.length >= 6 && password.length <= 20) {
      passwordLengthRef.current.style.color= '#3ECA28'
    } else {
      passwordLengthRef.current.style.color= '#cecece'
    }
  }, [password]);

  return (
    <Fragment>
      <Input
        _type={'password'}
        _value={password}
        _onChange={(e) => setPassword(e.target.value)}
        _placeholder={'비밀번호를 입력해주세요'}
      ></Input>
      <PasswordValidGroup>
        <PasswordValidText ref={passwordEngLgRef}>
          영문 대문자
        </PasswordValidText>
        <PasswordValidText ref={passwordEngSmRef}>
          영문 소문자
        </PasswordValidText>
        <PasswordValidText ref={passwordNumRef}>숫자</PasswordValidText>
        <PasswordValidText ref={passwordSpecailRef}>특수문자</PasswordValidText>
        <PasswordValidText ref={passwordLengthRef}>6-20글자</PasswordValidText>
      </PasswordValidGroup>
    </Fragment>
  );
};

export default SignUp;

export const PasswordValidGroup = styled.div`
  width: auto;
  height: auto;
  display: flex;
  gap: 8px;
`;
export const PasswordValidText = styled.span`
  color: #d9d9d9;
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;
