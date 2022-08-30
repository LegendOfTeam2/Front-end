// _style
import { StyledButton } from '../assets/styles/elements/Button.styled';

const Button = ({ _type, _text, _style, _onClick }) => {
  return (
    <StyledButton
      type={_type}
      onClick={_onClick}
      width={_style?.width}
      height={_style?.height}
      ft_size={_style?.ft_size}
      bg_color={_style?.bg_color}
      color={_style?.color}
      mg_top={_style?.mg_top}
      mg_bottom={_style?.mg_bottom}
      mg_left={_style?.mg_left}
      mg_right={_style?.mg_right}
      pd_top={_style?.pd_top}
      pd_bottom={_style?.pd_bottom}
      pd_left={_style?.pd_left}
      pd_right={_style?.pd_right}
      bd_radius={_style?.bd_radius}
      bd_color={_style?.bd_color}
      position={_style?.position}
    >
      {_text}
    </StyledButton>
  );
};

export default Button;