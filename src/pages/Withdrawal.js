// React
import { useState, Fragment, useCallback, useEffect, useRef } from 'react';

// Packages
import { useNavigate } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

// Components
import Header from '../components/Header';
import WithdrawalConfirmModal from '../components/modal/WithdrawalConfirmModal';
import WithdrawalNoticeModal from '../components/modal/WithdrawalNoticeModal';

// Elements
import Input from '../elements/Input';

// Assets
import {
  WithdrawalContainer,
  WithdrawalBox,
  WithdrawalNaviContainer,
  WithdrawalNaviInfo,
  WithdrawalNaviText,
  WithdrawalNoticeContainer,
  WithdrawalNoticeBox,
  WithdrawalNoticeText,
  WithdrawalNoticeLogo,
  WithdrawalNoticeLogoImg,
  WithdrawalInputContainer,
  WithdrawalInputBox,
  WithdrawalInputTitle,
  WithdrawalInputText,
  WithdrawalInputDataBox,
  WithdrawalInputIconBox,
} from '../assets/styles/pages/Withdrawal.styled';
import { ErrorLogo } from '../assets/images/image';

const Withdrawal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOpenConfirm, setOpenConfirm] = useState(false);
  const [isOpenNotice, setOpenNotice] = useState(false);

  const emailIconRef = useRef();
  const passwordIconRef = useRef();

  const navigate = useNavigate();

  const onHandleConfirmModal = () => {
    setOpenConfirm(true);
  };

  const onCancelConfirmModal = useCallback(() => {
    setOpenConfirm(false);
  }, [isOpenConfirm]);

  const onChangeModal = () => {
    setOpenConfirm(false);
    setOpenNotice(true);
  };

  const deleteText = useCallback(
    (state) => {
      switch (state) {
        case 'email': {
          setEmail('');
          break;
        }
        case 'password': {
          setPassword('');
          break;
        }
        default:
          break;
      }
    },
    [email, password]
  );

  useEffect(() => {
    if (email !== '') emailIconRef.current.style.display = 'block';
    else emailIconRef.current.style.display = 'none';
    if (password !== '') passwordIconRef.current.style.display = 'block';
    else passwordIconRef.current.style.display = 'none';
  }, [email, password]);

  return (
    <Fragment>
      <WithdrawalConfirmModal
        isOpen={isOpenConfirm}
        onCancel={onCancelConfirmModal}
        onChange={onChangeModal}
      />
      <WithdrawalNoticeModal isOpen={isOpenNotice} />
      <Header />
      <WithdrawalContainer>
        <WithdrawalBox>
          <WithdrawalNaviContainer>
            <WithdrawalNaviText onClick={() => navigate('/')}>
              ??????
            </WithdrawalNaviText>
            <WithdrawalNaviInfo>????????????</WithdrawalNaviInfo>
            <WithdrawalNaviText onClick={onHandleConfirmModal}>
              ??????
            </WithdrawalNaviText>
          </WithdrawalNaviContainer>
          <WithdrawalNoticeContainer>
            <WithdrawalNoticeBox>
              <WithdrawalNoticeText>
                ???????????? ??? ???????????? ??? ??????????????? ???????????? ?????? ????????????
                ???????????????.
              </WithdrawalNoticeText>
            </WithdrawalNoticeBox>
            <WithdrawalNoticeLogo>
              <WithdrawalNoticeLogoImg src={ErrorLogo} />
            </WithdrawalNoticeLogo>
          </WithdrawalNoticeContainer>
          <WithdrawalInputContainer>
            <WithdrawalInputBox>
              <WithdrawalInputTitle>
                <WithdrawalInputText>?????????</WithdrawalInputText>
              </WithdrawalInputTitle>
              <WithdrawalInputDataBox>
                <WithdrawalInputIconBox
                  onClick={() => deleteText('email')}
                  ref={emailIconRef}
                >
                  <GrClose className='icon'></GrClose>
                </WithdrawalInputIconBox>
                <Input
                  _type={'text'}
                  _value={email}
                  _onChange={(e) => setEmail(e.target.value)}
                  _placeholder={'???????????? ????????? ?????????.'}
                  _style={{
                    width: '100%',
                    height: 'auto',
                    bd_px: '0px',
                    pd_top: '35px',
                    pd_bottom: '35px',
                    pd_right: '30px',
                    ft_size: '20',
                    line_height: '29',
                    bg_color: 'transparent',
                  }}
                />
              </WithdrawalInputDataBox>
            </WithdrawalInputBox>
            <WithdrawalInputBox>
              <WithdrawalInputTitle>
                <WithdrawalInputText>????????????</WithdrawalInputText>
              </WithdrawalInputTitle>
              <WithdrawalInputDataBox>
                <WithdrawalInputIconBox
                  onClick={() => deleteText('password')}
                  ref={passwordIconRef}
                >
                  <GrClose className='icon' />
                </WithdrawalInputIconBox>
                <Input
                  _type={'password'}
                  _value={password}
                  _onChange={(e) => setPassword(e.target.value)}
                  _placeholder={'??????????????? ????????? ?????????.'}
                  _style={{
                    width: '100%',
                    height: 'auto',
                    bd_px: '0px',
                    pd_top: '35px',
                    pd_bottom: '35px',
                    pd_right: '30px',
                    ft_size: '20',
                    line_height: '29',
                    bg_color: 'transparent',
                  }}
                />
              </WithdrawalInputDataBox>
            </WithdrawalInputBox>
          </WithdrawalInputContainer>
        </WithdrawalBox>
      </WithdrawalContainer>
    </Fragment>
  );
};

export default Withdrawal;
