import styled from 'styled-components';

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
  width: 904px;
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
  align-items: center;
  justify-content: space-around;
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
  align-items: flex-start;
  gap: 12px;
  margin-top: 86px;
`;

export const DetailProfileContainer = styled.div`
  width: 100%;
  height: 115px;
  border: 1px solid #28CA7C;
  margin-top: 41px;
  position: relative;
`;

export const DetailProfileBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  left: 50px;
  top: 50%;
  gap: 25px;
  transform: translateY(-50%);
`;

export const DetailProfileBtnVertical = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #28CA7C;
`;

export const DetailProfileBtnGroup = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  right: 25px;
  top: 50%;
  gap: 25px;
  transform: translateY(-50%);
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
  width: 904px;
  height: 381px;
  border: 1px solid #28CA7C;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PositionMidInfoDiv = styled.div`
  width: 100%;
  height: 235px;
  display: flex;
  gap: 35px;
`;

export const PositionMidLeftImgDiv = styled.div`
  width: 202px;
  height: 202px;
  float: left;
  margin-top: 33px;
  margin-left: 26px;
`;

export const PositionMidLeftImg = styled.img`
  width: 202px;
  height: 202px;
`;

export const PositionMidRightDiv = styled.div`
  margin-top: 33px;
  width: auto;
  flex: 1;
  height: 202px;
  float: right;
  position: relative;
`;

export const PositionMidRighTopTextDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;
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
  top: 0px;
`;

export const DetailProfileBtmDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 74px;
  bottom: 10px;
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

export const DetailProfileBtmFirSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  color: rgba(40, 202, 124, 1);
  margin-top: 4px;
`;

export const DetailProfileBtmSecSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.lg};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  color: rgba(40, 202, 124, 1);
  padding-bottom: 3px;
`;

export const DetailIntroContainer = styled.div`
  margin-top: 45px;
  width: auto;
  height: auto;
  border: 1px solid #28CA7C;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 180px;
`;

export const DetailTopLyrics = styled.div`
  font-size: ${(props) => props.theme.fontSizes.lg};
  line-height: ${(props) => props.theme.lineHeight.xxxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #28CA7C;
  padding: 16px 74px;
`;

export const DetailHorizonLine = styled.div`
  border-top: 1px solid #28CA7C;
  width: 98%;
`;

export const DetailBtmLyricsDiv = styled.div`
  width: 100%;
  height: auto;
`;

export const DetailBtmLyricsDivDiv = styled.div`
  width: 379px;
  height: ${(props) => (props.lyrics ? 'auto' : '200px')};
  overflow: hidden;
  padding: 36px 74px;
  text-align: center;
`;

export const DetailBtmLyricsDivSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.lg};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  white-space: pre-wrap;
  word-break: break-all;
  overflow: auto;
  text-align: center;
`;
export const DetailLyricsContainer = styled.div`
  margin-top: 45px;
  width: auto;
  height: auto;
  border: 1px solid #28CA7C;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DetailBtmLyricsDivDivDiv = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailBtmLyricsSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.lg};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;

export const DetailBtmClickLyricsSpan = styled.div`
  width: auto;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

//소개글
export const DetailBtmMoreDiv = styled.div`
  width: auto;
  height: auto;
`;

export const DetailBtmMoreDivDiv = styled.div`
  width: 379px;
  height: ${(props) => (props.introduction ? 'auto' : '200px')};
  overflow: hidden;
  padding: 36px 74px;
  text-align: center;
`;

export const DetailBtmMoreDivSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.lg};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  white-space: pre-wrap;
  word-break: break-all;
  overflow: auto;
`;

export const DetailBtmMoreDivDivDiv = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailBtmMoreSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.lg};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;

export const DetailBtmClickMoreSpan = styled.div`
  width: auto;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const DetailClickHover = styled.div`
  color: #cecece;
  &:hover {
    cursor: pointer;
  }
`;

export const DetailHashtagContainer = styled.div`
  width: 870px;
  height: 68px;
  margin-top: 56px;
`;

export const DetailHashTagBox = styled.div`
  width: auto;
  margin-top: 22px;
  margin-bottom: 22px;
`;
export const DetailHashTag = styled.span`
  width: auto;
  height: auto;
  padding: 9px;
  margin-right: 10px;
  border: 1px solid #28ca72;
  color: #28ca72;
  border-radius: 24px;
  line-height: ${(props) => props.theme.lineHeight.base};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  &:hover {
    cursor: pointer;
    color: black;
    border: 1px solid black;
    background-color: #aaa4a4;
  }
`;
