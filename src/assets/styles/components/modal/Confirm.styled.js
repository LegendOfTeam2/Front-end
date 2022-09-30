import styled from 'styled-components';

export const CfContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;
export const CfInBox = styled.div`
  width: 620px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #f9f9f9;
  padding: 47px;
  border-radius: 40px;
`;
export const CfTopicon = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const CfTopTextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 5px;
`;
export const CfTopTextSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Regular}; ;
`;

export const CfBtmTextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 22px;
`;
export const CfBtmTextSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold}; ;
`;

export const CfWlDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  margin-top: 37px;
  margin-bottom: 19px;
`;

export const CfWlDivDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  gap: 19px;
`;

export const CancelDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  .icon-cancel {
    width: 30px;
    height: 30px;
    position: absolute;
    right: -10px;
    bottom: -5px;
    &:hover {
      cursor: pointer;
    }
  }
`;
