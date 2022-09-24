import styled from 'styled-components';

export const TagBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  height: auto;
  color: black;
  padding-left: 5px;
  border: 1px solid #d9d9d9;
  background-color: transparent;
  .tag {
    padding-bottom: 2px;
  }
`;
export const TagBoxText = styled.span`
  line-height: ${(props) => props.theme.lineHeight.base};
  font-size: ${(props) => props.theme.fontSizes.base};
  margin: 3px;
`;
export const TagBoxIcon = styled.div`
  width: auto;
  height: auto;
  margin-left: 6px;
  margin-top: 3px;
  margin-right: 3px;
  margin-bottom: 3px;
  cursor: pointer;
`;
