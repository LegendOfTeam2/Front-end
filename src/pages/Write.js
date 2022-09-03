import styled from "styled-components";
import { GrClose } from 'react-icons/gr';
import Input from "../elements/Input";

const Write = () => {
  return(<WriteContainer>
    <WriteBox>
      <SignUpIcon>
        <GrClose></GrClose>
      </SignUpIcon>
      <WriteForm>
        <WriteTitleGroup>
          <Input
            _type={'text'}
            
          ></Input>
        </WriteTitleGroup>
      </WriteForm>
    </WriteBox>
  </WriteContainer>);
}

export default Write;

export const WriteContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`
export const WriteBox = styled.div`
  width: 961px;
  height: 809px;
  display: flex;
  justify-content: center;
  position: relative;
`;
export const SignUpIcon = styled.div`
  position: absolute;
  top: 26px;
  right: 26px;
  width: auto;
  height: auto;
  .icon-cancel {
    width: 30px;
    height: 30px;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const WriteForm = styled.form`
  width: 859px;
  height: auto;
`
export const WriteTitleGroup = styled.div`
  width: 100%;
  height: auto;
`