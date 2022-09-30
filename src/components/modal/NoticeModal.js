// Packages
import ReactModal from 'react-modal';

// Elements

// Assets
import {
  WriteModalContainer,
  WriteModalIcon,
  WriteModalQuestionText,
  WriteModalBtnGroup,
  WriteModalLogo,
  WriteModalLogoImg,
  NoticeContainer,
  NoticeIcon,
  NoticeLogo,
  NoticeLogoImg,
  NoticeQuestionText,
} from '../../assets/styles/components/modal/NoticeModal.styled';
import { WithdrawalLogo, Xbox20 } from '../../assets/images/image';


const NoticeModal = ({isOpen , onCancel}) => {

  const handleClickCancel = () => {
    onCancel();
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
      width: '452px',
      height: '334px',
      borderRadius: '10px',
      backgroundColor: 'rgba(27, 30, 47, 0.8)',
      border: '1px solid #28ca72',
    },
  };

  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <NoticeContainer>
        <NoticeIcon >
        <img src={Xbox20} alt='Xbox' onClick={handleClickCancel} />
        </NoticeIcon>
        <NoticeLogo>
          <NoticeLogoImg src={WithdrawalLogo} alt="로고"/>
        </NoticeLogo>
        <NoticeQuestionText>
            서비스 점검 중입니다.
        </NoticeQuestionText>
      </NoticeContainer>
     </ReactModal>
  );
};

export default NoticeModal;


