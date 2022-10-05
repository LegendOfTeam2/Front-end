import styled from 'styled-components';

export const WithdrawalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: repeat-y;
  display: flex;
  justify-content: center;
  z-index: -1;
`;
export const WithdrawalBox = styled.div`
  width: 1024px;
  height: auto;
`;
export const WithdrawalNaviContainer = styled.div`
  margin-top: 187px;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 372px;
`;
export const WithdrawalNaviInfo = styled.span`
  width: auto;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.xxxxl};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #de1b4a;
`;
export const WithdrawalNaviText = styled.span`
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
export const WithdrawalNoticeContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #e7e7e7;
  gap: 69px;
`;
export const WithdrawalNoticeBox = styled.div`
  width: 642px;
  height: auto;
  background-color: rgba(222, 27, 74, 0.1);
  border-radius: 8px;
  padding: 18px 24px;
  margin-top: 208px;
`;
export const WithdrawalNoticeText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #de1b4a;
`;
export const WithdrawalNoticeLogo = styled.div`
  width: auto;
  height: auto;
  margin-bottom: 211px;
`;
export const WithdrawalNoticeLogoImg = styled.img`
  background-image: url(${(props) => props.src});
`;
export const WithdrawalProfileBoxImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
export const WithdrawalInputContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const WithdrawalInputBox = styled.div`
  width: 800px;
  height: auto;
  display: flex;
  border-bottom: 1px solid #e7e7e7;
`;
export const WithdrawalInputTitle = styled.div`
  width: 100%;
  height: auto;
  flex: 1;
  position: relative;
`;
export const WithdrawalInputText = styled.span`
  position: absolute;
  left: 0;
  top: 35px;
  width: auto;
  height: auto;
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const WithdrawalInputDataBox = styled.div`
  width: 654.01px;
  height: auto;
  position: relative;
`;
export const WithdrawalInputIconBox = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  .icon {
    width: 20px;
    height: 20px;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const WithdrawalHashTag = styled.input`
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
export const WithdrawalHashTagBox = styled.span`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
