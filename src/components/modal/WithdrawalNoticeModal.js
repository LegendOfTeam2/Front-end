// Packages
import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

// Elements
import Button from '../../elements/Button';

// Assets
import {
  NoticeModalContainer,
  NoticeModalIcon,
  NoticeModalLogo,
  NoticeModalLogoImg,
  NoticeModalQuestionText,
  NoticeModalBtnGroup,
} from '../../assets/styles/components/modal/WithdrawalNoticeModal.styled';
import { ErrorLogo } from '../../assets/images/image';

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
    zIndex: 99,
  },
};

const WithdrawalNoticeModal = ({ isOpen, onCancel }) => {
  const navigate = useNavigate();
  const handleClickCancel = () => {
    onCancel();
  };
  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <NoticeModalContainer>
        <NoticeModalIcon onClick={handleClickCancel}>
          <GrClose className='icon' />
        </NoticeModalIcon>
        <NoticeModalLogo>
          <NoticeModalLogoImg src={ErrorLogo} />
        </NoticeModalLogo>
        <NoticeModalQuestionText>
          리드미를 이용해 주셔서 감사합니다...
        </NoticeModalQuestionText>
        <NoticeModalBtnGroup>
          <Button
            _type={'button'}
            _text={'떠나기'}
            _style={{
              width: '109px',
              line_height: '20',
              font: '14',
              pd_top: '20px',
              pd_bottom: '20px',
              bg_color: '#DE1B4A',
              color: 'white',
              height: 'auto',
              bd_radius: '10px',
              ft_weight: '800',
            }}
            _onClick={() => navigate('/')}
          />
        </NoticeModalBtnGroup>
      </NoticeModalContainer>
    </ReactModal>
  );
};

export default WithdrawalNoticeModal;
