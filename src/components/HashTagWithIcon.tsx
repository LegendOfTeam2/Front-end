// React
import { memo } from 'react';

// Packages
import { BsX } from 'react-icons/bs';

// Assets
import {
  TagBox,
  TagBoxText,
  TagBoxIcon,
} from '../assets/styles/components/HashTagWithIcon.styled';

interface HashTagWithIconProps {
  tag : any;
  removeTag : any;
}

function HashTagWithIcon({ tag, removeTag } : HashTagWithIconProps) {
  return (
    <TagBox>
      <TagBoxText>#</TagBoxText>
      <TagBoxText className='tag'>{tag}</TagBoxText>
      <TagBoxIcon onClick={() => removeTag(tag)}>
        <BsX className='icon' fontSize={'20px'} />
      </TagBoxIcon>
    </TagBox>
  );
};

export default memo(HashTagWithIcon);
