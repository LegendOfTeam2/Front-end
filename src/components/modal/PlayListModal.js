// Packages
import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

// Elements
import Button from '../../elements/Button';

// Assets
import {
  WriteModalContainer,
  WriteModalIcon,
  WriteModalQuestionText,
  WriteModalBtnGroup,
  WriteModalLogo,
  WriteModalLogoImg,
} from '../../assets/styles/components/modal/WriteModal.styled';
import { Exclamation } from '../../assets/images/image';
import styled from 'styled-components';

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
    width: '522px',
    height: '404px',
    borderRadius: '10px',
  },
};

const PlayListModal = ({ isOpen, onCancel }) => {
  const navigate = useNavigate();
  const handleClickCancel = () => {
    onCancel();
  };
  return (
    // <ReactModal isOpen={isOpen} style={customStyles}>
    <PlayListContainer>
      <PlayListDiv>
        <PlayListTopDiv>
          <PlayListTopLeftSpan>재생목록</PlayListTopLeftSpan>
          <PlayListTopRightSpan>곡(개수)</PlayListTopRightSpan>
        </PlayListTopDiv>
        <PlayListMidDiv>
          <PlayListMidDivDiv>
            <PlayListTopLeftDiv>
              <MidDivDivSpan>제목</MidDivDivSpan>
            </PlayListTopLeftDiv>
            <MidMidDivDiv>
              <MidDivDivSpan>아티스트명</MidDivDivSpan>
              <MidDivDivSpan>재생시간</MidDivDivSpan>
            </MidMidDivDiv>
          </PlayListMidDivDiv>

          <MidRightDivDiv>
            <MidDivDivSpan>작품정보</MidDivDivSpan>
            <MidDivDivSpan>좋아요</MidDivDivSpan>
            <MidDivDivSpan>콜라보</MidDivDivSpan>
          </MidRightDivDiv>
        </PlayListMidDiv>

        <BtmAllDiv>
          <BtmMapDiv>
            <BtmMapImgDiv>
              <BtmMapImg
                src='https://post-phinf.pstatic.net/MjAxOTAxMjJfMzIg/MDAxNTQ4MTM3NzQ2MDk4.eT96Km-RdCMP3p0MumVIuLdXRlQOmer-6vnVWk82UGkg.icIBTlK7yfQbXHM4aPtHIrVml14v_bj3EUHLRJcKMTUg.JPEG/29_29_123123_v3.jpg?type=w1200'
                alt='커버 이미지'
              ></BtmMapImg>
            </BtmMapImgDiv>
            <BtmMapImgSpan>나는 이영지</BtmMapImgSpan>
          </BtmMapDiv>
          <div></div>
          <div></div>
        </BtmAllDiv>
      </PlayListDiv>
    </PlayListContainer>
    // </ReactModal>
  );
};

export default PlayListModal;

export const PlayListContainer = styled.div`
  width: 1024px;
  height: auto;
  background: rgba(27, 30, 47, 0.8);
  border: 1px solid #28ca72;
  box-shadow: 0px 1px 31px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 10px;
`;

export const PlayListDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 103px 72px;
  display: flex;
  flex-direction: column;
`;

export const PlayListTopDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const PlayListTopLeftDiv = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
`;

export const PlayListTopLeftSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: #28ca72;
`;

export const PlayListTopRightSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: #ffffff;
`;

export const PlayListMidDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ffffff;
  margin-top: 47px;
  padding-bottom: 13px;
`;

export const PlayListMidDivDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 205px;
  margin-left: 47px;
`;
export const MidDivDivSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: #ffffff;
`;

export const MidMidDivDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 200px;
`;

export const MidRightDivDiv = styled.div`
  width: 300px;
  height: auto;
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  gap: 35px;
`;

export const BtmAllDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 12.5px 0;
`;

export const BtmMapDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 12.5px 0;
  gap: 24px;
`;

export const BtmMapImgDiv = styled.div`
  width: 56px;
  height: 56px;
`;

export const BtmMapImg = styled.img`
  width: 56px;
  height: 56px;
`;

export const BtmMapImgSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.xs};
`;
