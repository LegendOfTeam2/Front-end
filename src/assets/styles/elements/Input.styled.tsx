import styled from 'styled-components';

interface StyledProps {
  width: any;
  height: any;
  ft_size: any;
  ft_weight: any;
  bg_color: any;
  color: any;
  mg_top: any;
  mg_bottom: any;
  mg_left: any;
  mg_right: any;
  pd_top: any;
  pd_bottom: any;
  pd_left: any;
  pd_right: any;
  bd_radius: any;
  bd_px: any;
  bd_color: any;
  line_height: any;
  flex: any;
}

export const StyledInput = styled.input<StyledProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '50px')};
  font-size: ${(props) => (props.ft_size ? props.ft_size / 16 : 1)}rem;
  background-color: ${(props) => (props.bg_color ? props.bg_color : 'white')};
  color: ${(props) => (props.color ? props.color : '#000000')};
  padding-top: ${(props) => (props.pd_top ? props.pd_top : '0px')};
  padding-bottom: ${(props) => (props.pd_bottom ? props.pd_bottom : '0px')};
  padding-left: ${(props) => (props.pd_left ? props.pd_left : '0px')};
  padding-right: ${(props) => (props.pd_right ? props.pd_right : '0px')};
  margin-top: ${(props) => (props.mg_top ? props.mg_top : '0px')};
  margin-bottom: ${(props) => (props.mg_bottom ? props.mg_bottom : '0px')};
  margin-left: ${(props) => (props.mg_left ? props.mg_left : '0px')};
  margin-right: ${(props) => (props.mg_right ? props.mg_right : '0px')};
  border-radius: ${(props) => (props.bd_radius ? props.bd_radius : '0px')};
  border-width: ${(props) => (props.bd_px ? props.bd_px : '1px')};
  border-color: ${(props) => (props.bd_color ? props.bd_color : '#000000')};
  border-style: solid;
  line-height: ${(props) => props.line_height ? props.line_height / 16 : 1}rem;
  flex: ${(props) => props.flex};
  outline: none;
  &::placeholder {
    color: #b4b4b4;
  }
`;