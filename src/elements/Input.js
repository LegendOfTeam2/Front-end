// _style
import { StyledInput } from '../assets/styles/elements/Input.styled';

const Input = ({ _type, _value, _onChange, _onKeyUp,  _minLength, _maxLength, _ref, _style }) => {
  return (
    <StyledInput
      type={_type}
      value={_value}
      onChange={_onChange}
      onKeyUp={_onKeyUp}
      minLength={_minLength}
      maxLength={_maxLength}
      ref={_ref}
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
      bd_radius={_style?.bd_radius}
      bd_color={_style?.bd_color}
      flex={_style?.flex}
      placeholder = {_style?.placeholder}
      required
    />
  );
};

export default Input;