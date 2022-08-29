import { useState } from 'react';
import styled from 'styled-components';
import Input from '../elements/Input';
import { BsX } from 'react-icons/bs';
import shortid from 'shortid';

const HashTag = () => {
  const [tags, setTags] = useState([]);
  const addTag = (event) => {
    if (event.key === 'Enter') {
      if (event.target.value.length > 0) {
        setTags([...tags, event.target.value]);
        event.target.value = '';
      }
    }
  };

  const removeTag = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };
  return (
    <TagContainer>
      {tags.map((tag) => {
        return (
          <TagBox key={shortid.generate()}>
            <TagBoxText>{tag}</TagBoxText>
            <TagBoxIcon onClick={() => removeTag(tag)}>
              <BsX className='icon' fontSize={'20px'} />
            </TagBoxIcon>
          </TagBox>
        );
      })}
      <Input
        _onKeyUp={addTag}
        _style={{ flex: 1, bd_color: 'white', height: 'auto' }}
      />
    </TagContainer>
  );
};

export default HashTag;

const TagContainer = styled.div`
  width: 1024px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
`;
const TagBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: auto;
  color: black;
  padding: 5px;
  gap: 10px;
  color: white;
  background-color: #606060;
`;
const TagBoxText = styled.div`
  line-height: 20px;
  font-size: ${(props) => props.theme.fontSizes.base}
`;
const TagBoxIcon = styled.div`
  line-height: auto;
  cursor: pointer;
`;
