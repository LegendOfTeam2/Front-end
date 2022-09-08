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
export const WriteModalNoticeText = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  width: 100%;
  height: auto;
  position: absolute;
  top: 129px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

export const WriteModalQuestionText = styled.span`
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
export const WriteModalBtnGroup = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  top: 278px;
  gap: 19px;
`;