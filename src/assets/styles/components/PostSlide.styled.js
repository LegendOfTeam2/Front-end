import styled from "styled-components";

export const ProfileImgDivDiv = styled.div`
width: 100%;
height: auto;
display: flex;
position: relative;
`;

export const Profileimg = styled.img`
width: ${(props)=> props.width || '167px'};
height: ${(props)=> props.height || '167px'};
border-radius: 19px;
${ProfileImgDivDiv}:hover & {
  filter: brightness(50%);
}
`;

export const ImgMainBtmRight = styled.div`
position: absolute;
top: 7%;
left: 7%;
display: block;
${ProfileImgDivDiv}:hover & {
  display: none;
  cursor: pointer;
}
`;

export const ImgMainSpan = styled.span`
  color: rgba(245, 245, 245, 1);
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const ImgTopLeft = styled.div`
position: absolute;
top: 8%;
left: 8%;
color: white;
display: none;
${ProfileImgDivDiv}:hover & {
  display: block;
  cursor: pointer;
}
`;

export const ImgTopRight = styled.div`
position: absolute;
top: 8%;
right: 35%;
display: none;
${ProfileImgDivDiv}:hover & {
  display: block;
  cursor: pointer;
}
`;

export const ImgBtmLeft = styled.div`
position: absolute;
bottom: 8%;
left: 8%;
color: white;
display: none;
${ProfileImgDivDiv}:hover & {
  display: block;
  cursor: pointer;
}
`;

export const ImgBtmRight = styled.div`
position: absolute;
bottom: 7%;
right: 35%;
display: none;
${ProfileImgDivDiv}:hover & {
  display: block;
  cursor: pointer;
}
`;