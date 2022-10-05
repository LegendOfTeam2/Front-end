// Style
import { StyledInput } from '../assets/styles/elements/Input.styled';

interface InputProps {
  _type: any;
  _value: any;
  _style: any;
  _ref: any;
  _onChange: any;
  _onKeyUp: any;
  _onKeyDown: any;
  _minLength: any;
  _maxLength: any;
  _placeholder: any;
  _autoComplete: any;
}

const Input = ({
  _type,
  _value,
  _onChange,
  _onKeyUp,
  _onKeyDown,
  _minLength,
  _maxLength,
  _ref,
  _placeholder,
  _autoComplete,
  _style,
}: InputProps) => {
  return (
    <StyledInput
      type={_type}
      value={_value}
      onChange={_onChange}
      onKeyUp={_onKeyUp}
      onKeyDown={_onKeyDown}
      minLength={_minLength}
      maxLength={_maxLength}
      placeholder={_placeholder}
      ref={_ref}
      autoComplete={_autoComplete}
      width={_style?.width}
      height={_style?.height}
      ft_size={_style?.ft_size}
      bg_color={_style?.bg_color}
      color={_style?.color}
      pd_top={_style?.pd_top}
      pd_bottom={_style?.pd_bottom}
      pd_left={_style?.pd_left}
      pd_right={_style?.pd_right}
      mg_top={_style?.mg_top}
      mg_bottom={_style?.mg_bottom}
      mg_left={_style?.mg_left}
      mg_right={_style?.mg_right}
      bd_px={_style?.bd_px}
      bd_radius={_style?.bd_radius}
      bd_color={_style?.bd_color}
      flex={_style?.flex}
      line_height={_style?.line_height}
      required
    />
  );
};

export default Input;
