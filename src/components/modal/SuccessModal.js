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
  WriteModalLogoImg
} from '../../assets/styles/components/modal/WriteModal.styled';
import { Success } from '../../assets/images/image';

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

const SuccessModal = ({ isOpen }) => {
  const navigate = useNavigate();
  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <WriteModalContainer>
        <WriteModalLogo>
          <WriteModalLogoImg src={Success} />
        </WriteModalLogo>
        <WriteModalQuestionText>
          완료되었습니다!
        </WriteModalQuestionText>
        <WriteModalBtnGroup>
          <Button
            _type={'button'}
            _text={'확인 했습니다.'}
            _style={{
              width: '480px',
              line_height: '20',
              font: '16',
              pd_top: '20px',
              pd_bottom: '20px',
              bg_color: '#28ca72',
              color: '#ffffff',
              height: 'auto',
              bd_radius: '10px',
              ft_weight: '800',
            }}
            _onClick={() => navigate('/')}
          />
        </WriteModalBtnGroup>
      </WriteModalContainer>
    </ReactModal>
  );
};

export default SuccessModal;