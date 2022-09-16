import styled from "styled-components";

export const WlContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
background-color: #F9F9F9;
`

export const WlInBox = styled.div`
width: 600px;
height: 480px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background-color: #F9F9F9;
position: relative;

`;
export const Topicon = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
margin-bottom: 25px;
`;
export const TextDiv = styled.div`
width: 89%;
height: auto;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
margin-top: 69px;
position: absolute;
top: 215px;
`;
export const TextSpan = styled.span`
font-size: ${(props) => props.theme.fontSizes.xxxxl};
line-height: ${(props) => props.theme.lineHeight.xxxxl};
font-weight: ${(props) => props.theme.fontWeight.Bold}; ;
`;
export const TextSpanSpan = styled.span`
font-size: ${(props) => props.theme.fontSizes.xxxxl};
line-height: ${(props) => props.theme.lineHeight.xxxxl};
font-weight: ${(props) => props.theme.fontWeight.Bold}; ;
color: rgba(40, 202, 124, 1);
`;

export const WlDiv = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
margin-top: 75px;

`;
