import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 20vh;
`;
export const SignInBox = styled.div`
  width: 961px;
  height: auto;
  display: flex;
`;
export const SignInBoxMain = styled.div`
  width: 470px;
  height: auto;
  border-radius: 30px 0 0 30px;
  box-shadow: 1px 1px 20px 5px grey;
`;
export const SignInBoxIntroContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 31px;
  margin-top: 99px;
`;
export const SignInBoxIntroTop = styled.span`
  width: 100%;
  height: auto;
  text-align: center;
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
`;
export const SignInBoxIntroBottom = styled.span`
  width: 100%;
  height: auto;
  text-align: center;
  line-height: ${(props) => props.theme.lineHeight.xxs};
  font-size: ${(props) => props.theme.fontSizes.xs};
`;
export const SignInBoxForm = styled.form`
  width: 100%;
  height: auto;
`;
export const SignInBoxInputContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
  margin-top: 23px;
`;
export const SignInBoxInputGroup = styled.div`
  width: 411px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const SignInBoxInputGroupTitle = styled.span`
  width: 100%;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const SignInboxInputGroupData = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;
export const SignUpDataInputGroupIcon = styled.div`
  .icon-cancel {
    position: absolute;
    font-size: ${(props) => props.theme.fontSizes.xxl};
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    &:hover {
      cursor: pointer;
    }
  }
`;
export const SignInBoxInputGroupAlert = styled.span`
  width: 100%;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const SignInBoxButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
export const SignInBoxButtonBox = styled.div`
  width: 411px;
  height: auto;
`;
export const SignInBoxDetailContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;
export const SignInBoxDetailBox = styled.div`
  width: 411px;
  height: auto;
  display: flex;
  justify-content: space-between;
`;
export const SignInBoxDetailAutoSignIn = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  gap: 14px;
`;
export const SignInBoxDetailAutoSignInText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xs};
  line-height: ${(props) => props.theme.lineHeight.xxs};
`;
export const SignInBoxDetailFind = styled.span`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  gap: 20.5px;
`;
export const SignInBoxDetailFindText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xs};
  line-height: ${(props) => props.theme.lineHeight.xxs};
  color: #a3a3a3;
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  &:hover {
    cursor: ${(props) => (props.cursor ? props.cursor : "none")};
  }
`;
export const SignInBoxSignUpContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const SignInBoxSignUpBox = styled.div`
  width: 411px;
  height: auto;
  display: flex;
  justify-content: flex-end;
`;
export const SignInBoxSignUpQuestion = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const SignInBoxSignUpQuestionText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: ${(props) => (props.color ? props.color : "#a3a3a3")};
  line-height: ${(props) => props.theme.lineHeight.xxs};
  cursor: pointer;
`;
export const SignInBoxSocialContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 23px 0 28px 0;
`;
export const SignInBoxSocialBox = styled.div`
  width: 411px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;
export const SignInBoxSocialBoxTitle = styled.span`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  text-align: center;
`;
export const SignInBoxSocialBoxSocialGroup = styled.div`
  width: 100%;
  height: 87px;
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;
  .icon-kakao {
    width: 60px;
    height: 60px;
    background-color: #fee500;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 1px grey;
    &:hover {
      cursor: pointer;
    }
  }
  .icon-google {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 1px grey;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const SignInBoxSocialBoxSocialIcon = styled.div`
  width: auto;
  height: auto;
`;
export const SignInBoxCover = styled.div`
  width: 491px;
  height: auto;
  background-color: #cecece;
  border-radius: 0 30px 30px 0;
  box-shadow: 1px 1px 20px 5px grey;
`;
