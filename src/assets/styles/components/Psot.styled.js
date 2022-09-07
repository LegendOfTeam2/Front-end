import styled from "styled-components";


export const MyImgDivDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  position: relative;
`;

export const Myimg = styled.img`
  width: ${(props)=> props.width};
  height: ${(props)=> props.height};
  border-radius: 19px;
  ${MyImgDivDiv}:hover & {
    filter: brightness(50%);
  }
`;

export const ImgMyBtmRight = styled.div`
  position: absolute;
  top: 7%;
  left: 7%;
  display: block;
  ${MyImgDivDiv}:hover & {
    display: none;
    cursor: pointer;
  }
`;
export const MyImgTopLeft = styled.div`
  position: absolute;
  top: 8%;
  left: 8%;
  color: white;
  display: none;
  ${MyImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyImgTopRight = styled.div`
  position: absolute;
  top: 8%;
  right: 9%;
  display: none;
  ${MyImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyImgBtmLeft = styled.div`
  position: absolute;
  bottom: 8%;
  left: 8%;
  color: white;
  display: none;
  ${MyImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyImgBtmRight = styled.div`
  position: absolute;
  bottom: 7%;
  right: 9%;
  display: none;
  ${MyImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;
export const ImgNotSlideSpan = styled.span`
  color: #FFFFFF;
  line-height: ${(props) => (props.line_height ? (props.line_height) / 16 : 1)}rem;
  font-weight: ${(props) => (props.ft_weight ? props.ft_weight : '400')};
  font-size: ${(props) => (props.ft_size ? (props.ft_size) / 16 : 1)}rem;
`;
