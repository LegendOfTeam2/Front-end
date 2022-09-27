import styled from 'styled-components';

export const BackgroudColor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #1b1e2f;
  z-index: -2;
`;
export const SignUpContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SignUpBox = styled.div`
  width: 961px;
  height: 809px;
  border-radius: 30px;
  border: 1px solid #28ca7c;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: scroll;
  background-color: #ffffff;
  &::-webkit-scrollbar {
    display: none;
  }
  @media ${(props) => props.theme.device.desktopL} {
    width: 861px;
    height: 709px;
  }
`;
export const SignUpIcon = styled.div`
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
`;
export const SignUpForm = styled.form`
  width: auto;
  height: auto;
`;
export const SignUpLogo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SignUpLogoImg = styled.img`
  width: auto;
  height: auto;
  padding-top: 36px;
  padding-bottom: 27px;
`;
export const SignUpBoxInputContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 37px;
`;
export const SignUpBoxInputGroup = styled.div`
  width: 528px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0px;
  }
`;
export const SignUpBoxInputGroupTitle = styled.div`
  width: 100%;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const SignUpboxInputGroupData = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  .icon-hidden {
    position: absolute;
    font-size: ${(props) => props.theme.fontSizes.xxl};
    right: 10px;
    top: 50%;
    transform: translateY(-11px);
    &:hover {
      cursor: pointer;
    }
  }
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
  .icon-password-cancel {
    position: absolute;
    font-size: ${(props) => props.theme.fontSizes.xxl};
    right: 45px;
    top: 50%;
    transform: translateY(-11px);
    &:hover {
      cursor: pointer;
    }
  }
`;
export const SignUpBoxInputGroupAlert = styled.div`
  width: 100%;
  height: ${(props) => props.theme.lineHeight.xxs};
  line-height: ${(props) => props.theme.lineHeight.xxs};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const SignUpBoxInputGroupAlertError = styled.div`
  width: 100%;
  height: ${(props) => props.theme.lineHeight.xxs};
  line-height: ${(props) => props.theme.lineHeight.xxs};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #f2153e;
`;
export const SignUpBoxInputGroupAlertSuccess = styled.div`
  width: 100%;
  height: ${(props) => props.theme.lineHeight.xxs};
  line-height: ${(props) => props.theme.lineHeight.xxs};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: rgba(40, 202, 124, 1);
`;
export const SignUpBoxPasswordValidGroup = styled.div`
  width: auto;
  height: auto;
  display: flex;
  gap: 8px;
`;
export const SignUpBoxPasswordValidText = styled.span`
  color: #d9d9d9;
  font-size: ${(props) => props.theme.fontSizes.xs};
  line-height: ${(props) => props.theme.lineHeight.xxs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const SignUpBoxPasswordValidTextSuccess = styled.span`
  color: #d9d9d9;
  font-size: ${(props) => props.theme.fontSizes.xs};
  line-height: ${(props) => props.theme.lineHeight.xxs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: rgba(40, 202, 124, 1);
`;
export const SignUpBoxInputTagsAlert = styled.span`
  width: 100%;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.xxs};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #d9d9d9;
`;
export const SignUpBoxInputTags = styled.input`
  width: 100%;
  height: auto;
  line-height: ${(props) => props.theme.fontSizes.sm};
  font-size: ${(props) => props.theme.fontSizes.sm};
  padding: 20px 40px 20px 19px;
  border-radius: 10px;
  border: 1px solid #28ca7c;
  line-height: ${(props) => props.theme.lineHeight.xs};
  outline: none;
  &::placeholder {
    color: #b4b4b4;
  }
`;
export const SignUpBoxTagBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
`;
export const SignUpBoxImageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;
export const SignUpBoxImagePreviewBox = styled.div`
  width: 50%;
  height: 236px;
  position: relative;
`;
export const SignUpBoxImagePreviewBoxImg = styled.img`
  position: absolute;
  width: 236px;
  height: 236px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 60%;
  background-color: #d9d9d9;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
export const SignUpBoxImagePreviewBoxSkeleton = styled.div`
  position: absolute;
  width: 236px;
  height: 236px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 60%;
  background-color: #d9d9d9;
`;
export const SignUpButtonContainer = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 50px;
`;
