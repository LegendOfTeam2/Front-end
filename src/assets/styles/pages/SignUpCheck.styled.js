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
export const UpContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
`;
export const UpInBox = styled.div`
  width: 961px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 43px;
  border-radius: 30px;
  border: 1px solid rgba(40, 202, 124, 1);
  background-color: #ffffff;
  position: relative;
  @media ${(props) => props.theme.device.desktopL} {
    width: 861px;
  }
`;
export const UpInIcon = styled.div`
  position: absolute;
  opacity: 0.3;
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
export const UpLogoDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const UpLogoDivDiv = styled.div`
  width: auto;
  height: auto;
  @media ${(props) => props.theme.device.desktopL} {
    width: auto;
    height: auto;
  }
`;
export const UpLogoImg = styled.img`
  width: auto;
  height: auto;
`
export const UpTopTextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 115.43px;
  @media ${(props) => props.theme.device.desktopL} {
    margin-top: 55px;
  }
`;
export const UpTopTextSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: rgba(40, 202, 124, 1);
`;
export const UpTopBtmDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 48px;
  gap: 20px;
  @media ${(props) => props.theme.device.desktopL} {
    margin-top: 35px;
    gap: 15px;
  }
`;
export const UpTbmBtmDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
  gap: 20px;
  @media ${(props) => props.theme.device.desktopL} {
    margin-top: 45px;
    gap: 15px;
  }
`;
export const UpTbmBtmDivDiv = styled.div`
  width: 411px;
  height: auto;
  display: flex;
  margin-bottom: 119px;
  border-top: 1px solid #bcbcbc;
  @media ${(props) => props.theme.device.desktopL} {
    width: 361px;
    gap: 15px;
    margin-bottom: 60px;
  }
`;
// export const Googleicon = styled.div`
//   display: flex;
//   position: relative;
//   top: 25%;
//   .icon-google {
//     width: 30px;
//     height: 30px;
//     color: rgba(255, 255, 255, 1);
//     position: absolute;
//     left: 35.5%;
//   }
//   @media ${(props) => props.theme.device.desktopL} {
//     .icon-google {
//       width: 25px;
//       height: 25px;
//     }
//   }
// `;
// export const Kakaoicon = styled.div`
//   display: flex;
//   position: relative;
//   top: 22%;
//   .icon-kakao {
//     width: 40px;
//     height: 35px;
//     color: #959595;
//     position: absolute;
//     left: 34%;
//   }
//   @media ${(props) => props.theme.device.desktopL} {
//     .icon-kakao {
//       width: 35px;
//       height: 30px;
//     }
//   }
// `;