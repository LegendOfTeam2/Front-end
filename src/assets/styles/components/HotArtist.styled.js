import styled from "styled-components";

export const HotArtistImgDivDiv = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin-top: 24px;
`;

export const BtmProfileDivDiv = styled.div`
  width: 167px;
  height: auto;
  border: 1px solid #cccccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const BtmProfileDivDivDiv = styled.div`
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 11px;
  margin-bottom: 6px;
`;
export const MainProfileimg = styled.img`
  width: 63px;
  height: 63px;
  border-radius: 50%;
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
  margin-bottom: 3px;
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
`;
