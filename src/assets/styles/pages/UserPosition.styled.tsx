import styled from 'styled-components';

export const UserContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
export const UserInBox = styled.div`
  width: 961px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 43px;
  border-radius: 30px;
  box-shadow: 1px 1px 20px 5px grey;
`;
export const LogoDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const LogoDivDiv = styled.div`
  width: 48px;
  height: 48px;

  background-color: black;
`;
export const TopTextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 39px;
`;
export const TopTextSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold}; ;
`;

export const TopSmTextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 64px;
`;
export const TopSmTextSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  color: #9a9a9a;
`;

export const TopBtmDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 63px;
  gap: 20px;
`;

export const TopBtmDivDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 63px;
  gap: 20px;
`;

export const BtmSmTextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 64px;
  margin-bottom: 97px;
`;
export const BtmSmTextSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  color: #9a9a9a;
`;
