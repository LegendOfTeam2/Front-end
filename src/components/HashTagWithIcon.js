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

const HashTagWithIcon = ({ tag, removeTag }) => {
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
