import styled from 'styled-components';

export const HotArtistImgDivDiv = styled.div`
  width: 220px;
  position: relative;
`;
export const BtmProfileDivDiv = styled.div`
  width: 220px;
  height: 220px;
  border: 1px solid #28ca7c;
  display: flex;
  flex-direction: column;
`;
export const BtmProfileDivDivDiv = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 6px;
`;
export const MainProfileimg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
  &:hover {
    cursor: pointer;
  }
`;
export const BtmTextDivDivDiv = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
`;
export const BtmTextDivSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.lg};
`;
export const BtmTextDivDivSmDiv = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
`;
export const BtmTextDivSmSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xxs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: rgba(204, 204, 204, 1);
`;
export const BtmBunDiv = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4px;
  display: flex;
  gap: 10px;
`;
