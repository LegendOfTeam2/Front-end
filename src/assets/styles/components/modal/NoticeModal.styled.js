import styled from 'styled-components';

export const NoticeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: -1;
`;
export const NoticeIcon = styled.div`
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
export const NoticeQuestionText = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  width: 100%;
  height: auto;
  position: absolute;
  top: 211px;
  left: 51%;
  transform: translateX(-50%);
  text-align: center;
  color: #28ca72;
`;

export const NoticeLogo = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 42px;
  left: 50%;
  transform: translateX(-50%);
`;
export const NoticeLogoImg = styled.img`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
