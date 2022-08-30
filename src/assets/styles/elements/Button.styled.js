import styled from 'styled-components';

export const StyledButton = styled.button`
  width: ${(props) => (props.width ? props.width : '160px')};
  height: ${(props) => (props.height ? props.height : '44px')};
  font-size: ${(props) => (props.ft_size ? (props.ft_size) / 16 : 1)}rem;
  font-weight: ${(props) => (props.ft_weight ? props.ft_weight : '400')};
  background-color: ${(props) => props.bg_color ? props.bg_color : 'rgba(0, 0, 0, 0.25)'};
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  margin-top: ${(props) => (props.mg_top ? props.mg_top : '0px')};
  margin-bottom: ${(props) => (props.mg_bottom ? props.mg_bottom : '0px')};
  margin-left: ${(props) => (props.mg_left ? props.mg_left : '0px')};
  margin-right: ${(props) => (props.mg_right ? props.mg_right : '0px')};
  padding-top: ${(props) => (props.pd_top ? props.pd_top : '0px')};
  padding-bottom: ${(props) => (props.pd_bottom ? props.pd_bottom : '0px')};
  padding-left: ${(props) => (props.pd_left ? props.pd_left : '0px')};
  padding-right: ${(props) => (props.pd_right ? props.pd_right : '0px')};
  border-radius: ${(props) => (props.bd_radius ? props.bd_radius : '0px')};
  border: ${(props) => (props.bd_px ? props.bd_px : '0px')} solid ${(props) => (props.bd_color ? props.bd_color : '#000000')};
  line-height: ${(props) => (props.line_height ? props.line_height : '0px')};;
  &:hover {
    cursor: pointer;
    outline: none;
  }
`;