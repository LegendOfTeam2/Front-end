import styled from 'styled-components';

export const ConfirmModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const ConfirmModalIcon = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  right: 0;
  top: 0;
  .icon {
    width: 20px;
    height: 20px;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const ConfirmModalQuestionText = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  width: 100%;
  height: auto;
  position: absolute;
  top: 171px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;
export const ConfirmModalBtnGroup = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  top: 278px;
  gap: 19px;
`;
export const ConfirmModalLogo = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 33px;
  left: 50%;
  transform: translateX(-50%);
`
export const ConfirmModalLogoImg = styled.img`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 180px;
  height: 111px;
`