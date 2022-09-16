import styled from 'styled-components';

export const ModifyContainer = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: repeat-y;
  display: flex;
  justify-content: center;
`;
export const ModifyBox = styled.div`
  width: 1024px;
  height: auto;
`;
export const ModifyNaviContainer = styled.div`
  margin-top: 137px;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 356px;
`;
export const ModifyNaviInfo = styled.span`
  width: auto;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.xxxxl};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #28ca7c;
`;
export const ModifyNaviText = styled.span`
  width: auto;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #b4b4b4;
  &:hover {
    cursor: pointer;
  }
`;
export const ModifyProfileContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 60px 0 60px 0;
  border-bottom: 1px solid #e7e7e7;
`;
export const ModifyProfileBox = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  overflow: hidden;
  position: relative;
  background-color: #ffffff;
`;
export const ModifyProfileBoxImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
export const ModifyInputContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ModifyInputBox = styled.div`
  width: 800px;
  height: auto;
  display: flex;
  border-bottom: 1px solid #e7e7e7;
`;
export const ModifyInputTitle = styled.div`
  width: 100%;
  height: auto;
  flex: 1;
  position: relative;
`;
export const ModifyInputText = styled.span`
  position: absolute;
  left: 0;
  top: 35px;
  width: auto;
  height: auto;
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const ModifyInputDataBox = styled.div`
  width: 654.01px;
  height: auto;
  position: relative;
`;
export const ModifyInputIconBox = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
  .icon {
    width: 20px;
    height: 20px;
  }
`;
export const ModifyHashTag = styled.input`
  width: 100%;
  height: auto;
  line-height: ${(props) => props.theme.fontSizes.lg};
  font-size: ${(props) => props.theme.fontSizes.xl};
  background-color: transparent;
  padding: 35px 0;
  outline: none;
  border: none;
  &::placeholder {
    color: #b4b4b4;
  }
`;
export const ModifyHashTagBox = styled.span`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const ModifyMemberDeleteContainer = styled.div`
  width: 800px;
  height: auto;
  text-align: end;
  padding-top: 32px;
  cursor: pointer;
`;
export const ModifyMemberDeleteText = styled.span`
  color: rgba(180, 180, 180, 1);
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  &:hover {
    cursor: pointer;
    color: rgba(222, 27, 74, 1);
  }
`;

