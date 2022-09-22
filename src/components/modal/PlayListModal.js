// Packages

// Elements

// Assets
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { DisLike38, Like38, Share38, Xbox20 } from '../../assets/images/image';

const PlayListModal = ({ modalOpen, playListCancel, ModalList }) => {
  const PlayListClose = () => {
    playListCancel();
  };

  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(20, 20, 20, 0.75)',
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '630px',
      height: '990px',
      borderRadius: '20px',
      backgroundColor: 'rgba(27, 30, 47, 0.8)',
      border: '1px solid #28ca72',
    },
  };
  return (
    <ReactModal isOpen={modalOpen} style={customStyles}>
      {ModalList !== undefined ? (
        <ListModalContainer>
          <XboxDiv onClick={PlayListClose}>
            <img src={Xbox20} alt='Xbox' />
          </XboxDiv>
          <ListModalTopDiv>
            <ListModalTitleSpan>{ModalList.title}</ListModalTitleSpan>
            <ListModalNicknameSpan>{ModalList.nickname}</ListModalNicknameSpan>
          </ListModalTopDiv>
          <ListModalImgDiv>
            <ListModalImg src={ModalList.imageUrl} alt='리스트 이미지' />
          </ListModalImgDiv>
          <ListModalMidDiv>
            <ListModalMidDivDiv>
              <ListModalMidDivSpan>소개글</ListModalMidDivSpan>
            </ListModalMidDivDiv>
          </ListModalMidDiv>
          <ListModalLyrics>
            <ListModalLyricsSpan>{ModalList.lyrics}</ListModalLyricsSpan>
          </ListModalLyrics>
          <ListModalProfileDiv>
            <ListModalProfileDivDiv>
              <ListModalProfileImg
                src={ModalList.imageUrl}
                alt='프로필 이미지'
              />
              <ListModalProfileNickname>
                {ModalList.nickname}
              </ListModalProfileNickname>
              <ListModalProfilePosition>
                <ListModalProfilePositionLeft>
                  싱어
                </ListModalProfilePositionLeft>
                <ListModalProfilePositionrRight>
                  메이커
                </ListModalProfilePositionrRight>
              </ListModalProfilePosition>
              <ListModalProfileDetail>
                <ListModalProfileDetailTop>
                  아티스트 보기
                </ListModalProfileDetailTop>
                <ListModalProfileDetailBtm>
                  팔로우 하기
                </ListModalProfileDetailBtm>
              </ListModalProfileDetail>
            </ListModalProfileDivDiv>
          </ListModalProfileDiv>
          <ListModalBtnDiv>
            <ListModalBtnLeft>
              <img src={DisLike38} alt='좋아요' />
              <ListModalBtnSpan>좋아요</ListModalBtnSpan>
            </ListModalBtnLeft>
            <ListModalBtnRight>
              <img src={Share38} alt='공유하기' />
              <ListModalBtnSpan>공유하기</ListModalBtnSpan>
            </ListModalBtnRight>
          </ListModalBtnDiv>
        </ListModalContainer>
      ) : (
        <></>
      )}
    </ReactModal>
  );
};

export default PlayListModal;

export const ListModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const XboxDiv = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  right: 20px;
  top: 15px;
  :hover {
    cursor: pointer;
  }
`;

export const ListModalTopDiv = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 37px;
`;

export const ListModalTitleSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: rgba(255, 255, 255, 1);
`;

export const ListModalNicknameSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: rgba(180, 180, 180, 1);
`;

export const ListModalImgDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 31px;
`;

export const ListModalImg = styled.img`
  width: 247px;
  height: 247px;
  margin-left: auto;
  margin-right: auto;
`;

export const ListModalMidDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListModalMidDivDiv = styled.div`
  width: 120px;
  height: auto;
  padding-bottom: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #28ca72;
`;

export const ListModalMidDivSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: rgba(255, 255, 255, 1);
`;

export const ListModalLyrics = styled.div`
  width: 228px;
  height: 164px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ListModalLyricsSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  white-space: pre-wrap;
  word-break: break-all;
  overflow: auto;
  color: rgba(255, 255, 255, 1);
`;

export const ListModalProfileDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 130px;
`;

export const ListModalProfileDivDiv = styled.div`
  width: 553px;
  height: auto;
  padding: 18px;
  border: 1px solid #28ca72;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ListModalProfileImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const ListModalProfileNickname = styled.span`
  width: 80px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  overflow: hidden;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  margin-left: 30px;
`;

export const ListModalProfilePosition = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-left: 40px;
`;

export const ListModalProfilePositionLeft = styled.div`
  width: 44px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #28ca72;
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #28ca72;
`;

export const ListModalProfilePositionrRight = styled.div`
  width: 56px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #28ca72;
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #28ca72;
`;

export const ListModalProfileDetail = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 85px;
`;

export const ListModalProfileDetailTop = styled.div`
  width: auto;
  height: auto;
  display: flex;
  border-bottom: 1px solid #28ca72;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.sm};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  padding-bottom: 18px;
`;

export const ListModalProfileDetailBtm = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #28ca72;
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.sm};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  margin-top: 18px;
`;

export const ListModalBtnDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 63px;
`;

export const ListModalBtnLeft = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const ListModalBtnSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #28ca72;
`;

export const ListModalBtnRight = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;
