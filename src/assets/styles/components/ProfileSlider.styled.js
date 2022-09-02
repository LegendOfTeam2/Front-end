import styled from "styled-components";

export const ProfileContainerDiv = styled.div`
width: 100%;
background-color: #eeeceb;
display: flex;
justify-content: center;
`;

export const ProfileContainer = styled.div`
width: ${(props) => props.theme.deviceSizes.tabletL};
height: auto;
display: flex;
flex-direction: column;
.center {
  /* center 모드일때 center 외 속성에게 사용 */
  opacity: 0.8;
  transition: all 300ms ease;
  transform: scale(0.99);
}
`;

export const ProfileImgDiv = styled.div`
width: 856px;
height: auto;
margin-left: auto;
margin-right: auto;
`;

export const ProfileImgDivDiv = styled.div`
width: 100%;
height: auto;
display: flex;
position: relative;

`;

export const ImgMainBtmRight = styled.div`
position: absolute;
bottom: 8%;
right: 35%;
display: block;
${ProfileImgDivDiv}:hover & {
  display: none;
  cursor: pointer;
}
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

export const Profileimg = styled.img`
width: 167px;
height: 167px;
border-radius: 19px;
${ProfileImgDivDiv}:hover & {
  filter: brightness(50%);
}
`;
export const ProfileTextDiv = styled.div`
width: 100%;
display: flex;
flex-direction: row;
margin-bottom: 26px;
margin-top: 23px;
`;

export const ProfileTextNew = styled.span`
line-height: ${(props) => props.theme.lineHeight.xxxxl};
font-weight: ${(props) => props.theme.fontWeight.Bold};
font-size: ${(props) => props.theme.fontSizes.xxxxl};
`;

export const ProfileTextSinger = styled.span`
line-height: ${(props) => props.theme.lineHeight.xl};
font-weight: ${(props) => props.theme.fontWeight.Medium};
font-size: ${(props) => props.theme.fontSizes.xl};
margin-top: 3px;
`;

export const ProfileTextMake = styled.span`
line-height: ${(props) => props.theme.lineHeight.xl};
font-weight: ${(props) => props.theme.fontWeight.Medium};
font-size: ${(props) => props.theme.fontSizes.xl};
margin-top: 3px;
color: rgba(204, 204, 204, 1);
`;

export const ProfileTextSingMakeDiv = styled.div`
display: flex;
flex-direction: row;
gap: 40px;
margin-top: 3px;
`;

export const ProfileArrowDiv = styled.div`
margin-left: auto;
gap: 30px;
margin-top: 4px;
.icon-prev {
  size: 30px;
  &:hover {
    cursor: pointer;
  }
}
.icon-next {
  size: 30px;
  &:hover {
    cursor: pointer;
  }
}
`;
