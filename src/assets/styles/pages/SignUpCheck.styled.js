
import styled from "styled-components";

export const UpContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
export const UpInBox = styled.div`
  width: 961px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 43px;
  border-radius: 30px;
  box-shadow: 1px 1px 20px 5px grey;
`;
export const UpLogoDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const UpLogoDivDiv = styled.div`
  width: 48px;
  height: 48px;

  background-color: black;
`;
export const UpTopTextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 119.43px;
`;
export const UpTopTextSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold}; ;
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
`;

export const UpTbmBtmDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 65px;
  gap: 20px;
`;

export const UpTbmBtmDivDiv = styled.div`
  width: 411px;
  height: auto;
  display: flex;

  margin-bottom: 119px;
  border-top: 1px solid #bcbcbc;
`;

export const Googleicon = styled.div`

  display: flex;
  position: relative;
  top: 25%;
  .icon-google {
    width: 30px;
    height: 30px;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    left: 35.5%;
  }

`;

export const Kakaoicon = styled.div`

  display: flex;
  position: relative;
  top: 18%;
  .icon-kakao {
    width: 40px;
    height: 35px;
    color: #959595;
    position: absolute;
    left: 35%;
  }

`;
