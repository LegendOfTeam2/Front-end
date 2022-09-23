// Packages
import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

// Elements
import Button from '../../elements/Button';

// Assets
import {
  ConfirmModalContainer,
  ConfirmModalIcon,
  ConfirmModalLogo,
  ConfirmModalLogoImg,
  ConfirmModalQuestionText,
  ConfirmModalBtnGroup,
} from '../../assets/styles/components/modal/WithdrawalConfirmModal.styled';
import { WithdrawalLogo } from '../../assets/images/image';

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

const WithdrawalConfirmModal = ({ isOpen, onCancel, onChange }) => {

  const handelClickChange = () => {
    onChange();
  };
  const handleClickCancel = () => {
    onCancel();
  };
  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <ConfirmModalContainer>
        <ConfirmModalIcon onClick={handleClickCancel}>
          <GrClose className='icon'></GrClose>
        </ConfirmModalIcon>
        <ConfirmModalLogo>
          <ConfirmModalLogoImg src={WithdrawalLogo} />
        </ConfirmModalLogo>
        <ConfirmModalQuestionText>
          지금까지 공유한 모든 데이터가 삭제됩니다.
          <br />
          정말 탈퇴하시겠습니까?
        </ConfirmModalQuestionText>
        <ConfirmModalBtnGroup>
          <Button
            _type={'button'}
            _text={'탈퇴하기'}
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
            _onClick={handelClickChange}
          />
          <Button
            _type={'button'}
            _text={'취소하기'}
            _style={{
              width: '109px',
              line_height: '20',
              font: '14',
              pd_top: '20px',
              pd_bottom: '20px',
              bg_color: '#ffffff',
              color: '#b4b4b4',
              height: 'auto',
              bd_radius: '10px',
              bd_px: '#b4b4b4',
              bd_color: '#b4b4b4',
              ft_weight: '800',
            }}
            _onClick={handleClickCancel}
          />
        </ConfirmModalBtnGroup>
      </ConfirmModalContainer>
    </ReactModal>
  );
};

export default WithdrawalConfirmModal;
