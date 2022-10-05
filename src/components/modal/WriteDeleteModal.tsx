// Packages
import ReactModal from 'react-modal';
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

interface WriteDeleteModalProps {
  isOpen: any;
  onCancel: any;
  onDeleteDetail : any;
}

function WriteDeleteModal({ isOpen, onCancel, onDeleteDetail } : WriteDeleteModalProps) {
  const handleClickCancel = () => {
    onCancel();
  };

  const customStyles : any = {
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
  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <WriteModalContainer>
        <WriteModalIcon onClick={handleClickCancel}>
          <GrClose className='icon' />
        </WriteModalIcon>
        <WriteModalLogo>
          <WriteModalLogoImg src={Exclamation} />
        </WriteModalLogo>
        <WriteModalQuestionText>
          게시된 모든 내용이 삭제됩니다.
          <br />
          삭제하시겠습니까?
        </WriteModalQuestionText>
        <WriteModalBtnGroup>
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
            _ref={null}
          />
          <Button
            _type={'button'}
            _text={'삭제하기'}
            _style={{
              width: '109px',
              line_height: '20',
              font: '14',
              pd_top: '20px',
              pd_bottom: '20px',
              bg_color: '#de1b4a',
              color: 'white',
              height: 'auto',
              bd_radius: '10px',
              ft_weight: '800',
            }}
            _onClick={onDeleteDetail}
            _ref={null}
          />
        </WriteModalBtnGroup>
      </WriteModalContainer>
    </ReactModal>
  );
};

export default WriteDeleteModal;
