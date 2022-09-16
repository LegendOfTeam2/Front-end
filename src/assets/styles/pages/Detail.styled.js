import styled from "styled-components";

export const DetailContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 96.5px;
  z-index: -1;
`;
export const DetailContainer = styled.div`
  width: 1024px;
  height: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const DetailProfileImgTextTopDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 35px;
  margin-left: 57px;
`;

export const DetailProfileDiv = styled.div`
  width: 56px;
  height: 56px;
`;

export const DetailProfileImg = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;
export const DetailTopDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(180, 180, 180, 1);
  padding-bottom: 12px;
`;

export const DetailProfileImgTextTop = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeight.xl};
  font-weight: ${(props) => props.theme.fontWeight.Bold}; ;
`;

export const DetailProfileBtnTopDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-right: 27px;
`;
export const DetailProfileBtnTopDivBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 19px;
`;

export const DetailProfileMidleTopDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 12px;
`;

export const PositionAllDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 53px 37px 80px 74px;
  gap: 12px;
  border-bottom: 1px solid rgba(180, 180, 180, 1);
`;

export const PositionMarkerDiv = styled.div`
  width: 90px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #28ca7c;
  border-radius: 25px;
`;

export const PositionMarkerSpan = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeight.xl};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  color: #28ca7c;
`;

export const PositionMidDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 36px;
`;

export const PositionMidLeftImgDiv = styled.div`
  width: 247px;
  height: 247px;
  float: left;
`;

export const PositionMidLeftImg = styled.img`
  width: 247px;
  height: 247px;
`;

export const PositionMidRightDiv = styled.div`
  width: 672px;
  height: 247px;
  float: right;
  position: relative;
`;

export const PositionMidRighTopTextDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 13px;
`;

export const PositionMidRighTopLeftTextDiv = styled.div`
  max-width: 450px;
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  line-height: ${(props) => props.theme.lineHeight.xxxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;

export const PositionMidRighTopRigtTextDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  gap: 12px;
  align-items: end;
`;
export const PositionMidRighTopRightLeftTextSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  color: rgba(180, 180, 180, 1);
`;
export const PositionMidRighTopRightRightTextSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.lg};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  color: rgba(180, 180, 180, 1);
`;

export const PositionMidMidTextDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PositionMidMidLeftTextDiv = styled.div`
  width: auto;
  height: auto;
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeight.xl};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  color: rgba(180, 180, 180, 1);
`;

export const PositionMidMidRightTextDiv = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  right: 18px;
  top: 70 px;
`;

export const DetailProfileBtmDiv = styled.div`
  width: 100%;  
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 74px;
  top: 214px;
  position: absolute;
`;

export const DetailProfileBtmFirDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;