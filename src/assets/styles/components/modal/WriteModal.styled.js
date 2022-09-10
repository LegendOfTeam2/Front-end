import styled from "styled-components";

export const WriteModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const WriteModalIcon = styled.div`
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
export const WriteModalQuestionText = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  width: 100%;
  height: auto;
  position: absolute;
  top: 191px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;
export const WriteModalBtnGroup = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  top: 288px;
  gap: 19px;
`;
export const WriteModalLogo = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 42px;
  left: 50%;
  transform: translateX(-50%);
`
export const WriteModalLogoImg = styled.img`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 116px;
  height: 116px;
`