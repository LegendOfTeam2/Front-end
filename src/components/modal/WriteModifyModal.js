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
import { Exclamation } from '../../assets/images/image';

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

const WriteModifyModal = ({ isOpen, onCancel }) => {
  const navigate = useNavigate();
  const handleClickCancel = () => {
    onCancel();
  };
  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <WriteModalContainer>
        <WriteModalIcon onClick={handleClickCancel}>
          <GrClose className='icon'></GrClose>
        </WriteModalIcon>
        <WriteModalLogo>
          <WriteModalLogoImg src={Exclamation} />
        </WriteModalLogo>
        <WriteModalQuestionText>
          지금까지 입력하신 모든 정보가 삭제됩니다.
          <br />
          정말 삭제하시겠습니까?
        </WriteModalQuestionText>
        <WriteModalBtnGroup>
          <Button
            _type={'button'}
            _text={'삭제가기'}
            _style={{
              width: '109px',
              line_height: '20',
              font: '14',
              pd_top: '20px',
              pd_bottom: '20px',
              bg_color: 'black',
              color: 'white',
              height: 'auto',
              bd_radius: '10px',
              ft_weight: '800',
            }}
            _onClick={() => navigate(-1)}
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
              bg_color: 'white',
              color: '#b4b4b4',
              height: 'auto',
              bd_radius: '10px',
              bd_px: '#b4b4b4',
              bd_color: '#b4b4b4',
              ft_weight: '800',
            }}
            _onClick={handleClickCancel}
          />
        </WriteModalBtnGroup>
      </WriteModalContainer>
    </ReactModal>
  );
};

export default WriteModifyModal;