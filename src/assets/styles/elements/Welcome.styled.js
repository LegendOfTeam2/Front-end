import styled from "styled-components";

export const WlContainer = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
`;
export const WlInBox = styled.div`
width: 620px;
height: auto;
display: flex;
justify-content: center;
flex-direction: column;
background-color: #F9F9F9;
padding: 46px;
border-radius: 40px;
`;
export const Topicon = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
margin-top: 20px;
`;
export const TextDiv = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
margin-top: 69px;
`;
export const TextSpan = styled.span`
font-size: ${(props) => props.theme.fontSizes.xxxl};
line-height: ${(props) => props.theme.lineHeight.xxxl};
font-weight: ${(props) => props.theme.fontWeight.Bold}; ;
`;
export const WlDiv = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
margin-top: 75px;
margin-bottom: 9px;
`;
