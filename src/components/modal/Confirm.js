// Package
import { AiOutlineExclamation, AiOutlineClose } from 'react-icons/ai';
import ReactModal from 'react-modal';

// Element
import Button from '../../elements/Button';

// Assests
import {
  CancelDiv,
  CfBtmTextDiv,
  CfBtmTextSpan,
  CfContainer,
  CfInBox,
  CfTopicon,
  CfTopTextDiv,
  CfTopTextSpan,
  CfWlDiv,
  CfWlDivDiv,
} from '../../assets/styles/components/modal/Confirm.styled';

const Confirm = ({ isOpen, onCancel }) => {
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
      width: '620px',
      height: '510px',
      borderRadius: '40px',
      backgroundColor: '#F9F9F9',
    },
  };

  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <CfContainer>
        <CfInBox>
          <CfTopicon>
            <CancelDiv>
              <AiOutlineClose
                className='icon-cancel'
                onClick={handleClickCancel}
              />
            </CancelDiv>
            <div>
              <AiOutlineExclamation size={139} />
            </div>
          </CfTopicon>
          <CfTopTextDiv>
            <CfTopTextSpan>
              리드미는 아티스트님과 함께 하고싶습니다!
            </CfTopTextSpan>
          </CfTopTextDiv>
          <CfBtmTextDiv>
            <CfBtmTextSpan>
              지금까지 입력하신 모든 정보가 삭제됩니다.
            </CfBtmTextSpan>
            <CfBtmTextSpan>정말 삭제하시겠습니다까?</CfBtmTextSpan>
          </CfBtmTextDiv>
          <CfWlDiv>
            <CfWlDivDiv>
              <Button
                _style={{
                  width: '109px',
                  height: '60px',
                  bg_color: 'rgba(0, 0, 0, 1)',
                  bd_radius: '11px',
                  color: 'rgba(255, 255, 255, 1)',
                  ft_size: '14',
                  ft_weight: '700',
                }}
                _text={'삭제하기'}
              />

              <Button
                _style={{
                  width: '109px',
                  height: '60px',
                  bg_color: 'rgba(0, 0, 0, 1)',
                  bd_radius: '11px',
                  color: 'rgba(255, 255, 255, 1)',
                  ft_size: '14',
                  ft_weight: '700',
                }}
                _text={'취소하기'}
                _onClick={handleClickCancel}
              />
            </CfWlDivDiv>
          </CfWlDiv>
        </CfInBox>
      </CfContainer>
    </ReactModal>
  );
};

export default Confirm;
