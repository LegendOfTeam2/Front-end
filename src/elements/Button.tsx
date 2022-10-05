// Style
import { StyledButton } from '../assets/styles/elements/Button.styled';

interface ButtonProps {
  _type: any,
  _text: any,
  _style: any,
  _onClick: any,
  _ref: any
}

function Button({ _type, _text, _style, _onClick, _ref } : ButtonProps) {
  return (
    <StyledButton
      type={_type}
      onClick={_onClick}
      width={_style?.width}
      height={_style?.height}
      ft_size={_style?.ft_size}
      ft_weight={_style.ft_weight}
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
      bd_px={_style?.bd_px}
      bd_color={_style?.bd_color}
      line_height={_style.line_height}
      ref={_ref}
    >
      {_text}
    </StyledButton>
  );
};

export default Button;