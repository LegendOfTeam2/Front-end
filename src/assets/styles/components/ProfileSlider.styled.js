import styled from "styled-components";

export const ProfileContainerDiv = styled.div`
width: 100%;
background-color: #eeeceb;
display: flex;
justify-content: center;
position: relative;
`;

export const ProfileContainer = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
.center {
  /* center 모드일때 center 외 속성에게 사용 */
  opacity: 0.8;
  transition: all 300ms ease;
  transform: scale(0.99);
  width: 100%;
}
`;

export const ProfileImgDiv = styled.div`
width: 856px;
height: auto;
margin-left: auto;
margin-right: auto;
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
&:hover {
    cursor: pointer;
  }
`;

export const ProfileTextSingMakeDiv = styled.div`
display: flex;
flex-direction: row;
margin-left: 36px;
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

export const ArowLeft = styled.div`
display: flex;
position: absolute;
left: 40px;
top: 150px;
 &:hover{
  cursor: pointer;
 }
`;
export const ArowRight = styled.div`
display: flex;
position: absolute;
right: 40px;
bottom: 76px;
&:hover{
  cursor: pointer;
 }
`;
