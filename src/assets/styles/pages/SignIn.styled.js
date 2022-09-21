import styled from 'styled-components';

export const BackgroudColor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #1b1e2f;
`;
export const SignInContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
export const SignInBox = styled.div`
  width: 961px;
  height: auto;
  display: flex;
  background-color: #ffffff;
  border-radius: 30px;
  @media ${(props) => props.theme.device.desktopL} {
    width: 861px;
  }
`;
export const SignInBoxMain = styled.div`
  width: 470px;
  height: auto;
  border-radius: 30px 0 0 30px;
  border: 1px solid rgba(40, 202, 124, 1);
  border-right: none;
  @media ${(props) => props.theme.device.desktopL} {
    width: 420px;
  }
`;
export const SignInBoxIntroContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 31px;
  margin-top: 99px;
  @media ${(props) => props.theme.device.desktopL} {
    gap: 26px;
    margin-top: 49px;
  }
`;
export const SignInBoxIntroTop = styled.span`
  width: 100%;
  height: auto;
  text-align: center;
  color: rgba(40, 202, 124, 1);
`;

export const SignInBoxIntroTopRegularSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Regular};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
`;

export const SignInBoxIntroTopBoldSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
`;
export const SignInBoxIntroBottom = styled.span`
  width: 100%;
  height: auto;
  color: rgba(40, 202, 124, 1);
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
  @media ${(props) => props.theme.device.desktopL} {
    gap: 6px;
    margin-top: 18px;
  }
`;
export const SignInBoxInputGroup = styled.div`
  width: 411px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media ${(props) => props.theme.device.desktopL} {
    width: 361px;
    gap: 11px;
  }
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
  @media ${(props) => props.theme.device.desktopL} {
    margin-top: 30px;
  }
`;
export const SignInBoxButtonBox = styled.div`
  width: 411px;
  height: auto;
  @media ${(props) => props.theme.device.desktopL} {
    width: 361px;
  }
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
  @media ${(props) => props.theme.device.desktopL} {
    width: 361px;
  }
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
  gap: 21px;
  @media ${(props) => props.theme.device.desktopL} {
    gap: 16px;
  }
`;
export const SignInBoxDetailFindText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xs};
  line-height: ${(props) => props.theme.lineHeight.xxs};
  color: #a3a3a3;
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  &:hover {
    cursor: ${(props) => (props.cursor ? props.cursor : 'none')};
  }
`;
export const SignInBoxSignUpContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media ${(props) => props.theme.device.desktopL} {
    margin-top: 15px;
  }
`;
export const SignInBoxSignUpBox = styled.div`
  width: 411px;
  height: auto;
  display: flex;
  justify-content: flex-end;
  @media ${(props) => props.theme.device.desktopL} {
    width: 361px;
  }
`;
export const SignInBoxSignUpQuestion = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 20px;
  @media ${(props) => props.theme.device.desktopL} {
    gap: 15px;
  }
`;
export const SignInBoxSignUpQuestionText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: ${(props) => (props.color ? props.color : '#a3a3a3')};
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
  @media ${(props) => props.theme.device.desktopL} {
    margin: 18px 0 23px 0;
  }
`;
export const SignInBoxSocialBox = styled.div`
  width: 411px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
  @media ${(props) => props.theme.device.desktopL} {
    width: 361px;
    gap: 29px;
  }
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
    background-color: #fee500;
    border-radius: 50%;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    &:hover {
      cursor: pointer;
    }
  }
  .icon-google {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    &:hover {
      cursor: pointer;
    }
  }
  @media ${(props) => props.theme.device.desktopL} {
    gap: 90px;
    .icon-kakao {
      width: 40px;
      height: 40px;
    }
    .icon-google {
      width: 40px;
      height: 40px;
    }
  }
`;
export const SignInBoxSocialBoxSocialIcon = styled.div`
  width: auto;
  height: auto;
`;
export const SignInBoxCover = styled.div`
  position: relative;
  width: 491px;
  height: auto;
  background-image: url(${(props) => props.bg_img_lg});
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px solid rgba(40, 202, 124, 1);
  border-left: none;
  border-radius: 0 30px 30px 0;
  @media ${(props) => props.theme.device.desktopL} {
    background-image: url(${(props) => props.bg_img_sm});
    width: 441px;
  }
`;
export const SignInBoxIcon = styled.div`
  opacity: 0.3;
  position: absolute;
  top: 26px;
  right: 26px;
  width: auto;
  height: auto;
  .icon-cancel {
    width: 30px;
    height: 30px;
  }
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.device.desktopL} {
    .icon-cancel {
      width: 20px;
      height: 20px;
    }
  }
`;
