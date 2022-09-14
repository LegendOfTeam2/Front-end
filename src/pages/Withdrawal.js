// React
import { useState, Fragment, useCallback, useEffect, useRef } from "react";

// Packages
import { useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr";

// Components
import Header from "../components/Header";
import WithdrawalConfirmModal from "../components/modal/WithdrawalConfirmModal";
import WithdrawalNoticeModal from "../components/modal/WithdrawalNoticeModal";

// Elements
import Input from "../elements/Input";

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
} from "../assets/styles/pages/Withdrawal.styled";
import { ErrorLogo } from "../assets/images/image";

const Withdrawal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const onHandleNoticeModal = () => {
    setOpenNotice(true);
  };

  const onCancelNoticeModal = useCallback(() => {
    setOpenNotice(false);
  }, [isOpenNotice]);

  const onChangeModal = () => {
    setOpenConfirm(false);
    setOpenNotice(true);
  };

  const deleteText = useCallback(
    (state) => {
      switch (state) {
        case "email": {
          setEmail("");
          break;
        }
        case "password": {
          setPassword("");
          break;
        }
        default:
          break;
      }
    },
    [email, password]
  );

  useEffect(() => {
    if (email !== "") emailIconRef.current.style.display = "block";
    else emailIconRef.current.style.display = "none";
    if (password !== "") passwordIconRef.current.style.display = "block";
    else passwordIconRef.current.style.display = "none";
  }, [email, password]);

  return (
    <Fragment>
      <WithdrawalConfirmModal
        isOpen={isOpenConfirm}
        onCancel={onCancelConfirmModal}
        onChange={onChangeModal}
      />
      <WithdrawalNoticeModal isOpen={isOpenNotice} />
      <Header></Header>
      <WithdrawalContainer>
        <WithdrawalBox>
          <WithdrawalNaviContainer>
            <WithdrawalNaviText onClick={() => navigate("/")}>
              취소
            </WithdrawalNaviText>
            <WithdrawalNaviInfo>회원탈퇴</WithdrawalNaviInfo>
            <WithdrawalNaviText onClick={onHandleConfirmModal}>
              완료
            </WithdrawalNaviText>
          </WithdrawalNaviContainer>
          <WithdrawalNoticeContainer>
            <WithdrawalNoticeBox>
              <WithdrawalNoticeText>
                회원탈퇴 시 개인정보 및 리드미에서 만들어진 모든 데이터는
                삭제됩니다.
              </WithdrawalNoticeText>
            </WithdrawalNoticeBox>
            <WithdrawalNoticeLogo>
              <WithdrawalNoticeLogoImg
                src={ErrorLogo}
              ></WithdrawalNoticeLogoImg>
            </WithdrawalNoticeLogo>
          </WithdrawalNoticeContainer>
          <WithdrawalInputContainer>
            <WithdrawalInputBox>
              <WithdrawalInputTitle>
                <WithdrawalInputText>이메일</WithdrawalInputText>
              </WithdrawalInputTitle>
              <WithdrawalInputDataBox>
                <WithdrawalInputIconBox
                  onClick={() => deleteText("email")}
                  ref={emailIconRef}
                >
                  <GrClose className='icon'></GrClose>
                </WithdrawalInputIconBox>
                <Input
                  _type={"text"}
                  _value={email}
                  _onChange={(e) => setEmail(e.target.value)}
                  _placeholder={"이메일을 입력해 주세요."}
                  _style={{
                    width: "100%",
                    height: "auto",
                    bd_px: "0px",
                    pd_top: "35px",
                    pd_bottom: "35px",
                    pd_right: "30px",
                    ft_size: "20",
                    line_height: "29",
                    bg_color: "transparent",
                  }}
                ></Input>
              </WithdrawalInputDataBox>
            </WithdrawalInputBox>
            <WithdrawalInputBox>
              <WithdrawalInputTitle>
                <WithdrawalInputText>패스워드</WithdrawalInputText>
              </WithdrawalInputTitle>
              <WithdrawalInputDataBox>
                <WithdrawalInputIconBox
                  onClick={() => deleteText("password")}
                  ref={passwordIconRef}
                >
                  <GrClose className='icon'></GrClose>
                </WithdrawalInputIconBox>
                <Input
                  _type={"password"}
                  _value={password}
                  _onChange={(e) => setPassword(e.target.value)}
                  _placeholder={"비빌번호를 입력해 주세요."}
                  _style={{
                    width: "100%",
                    height: "auto",
                    bd_px: "0px",
                    pd_top: "35px",
                    pd_bottom: "35px",
                    pd_right: "30px",
                    ft_size: "20",
                    line_height: "29",
                    bg_color: "transparent",
                  }}
                ></Input>
              </WithdrawalInputDataBox>
            </WithdrawalInputBox>
          </WithdrawalInputContainer>
        </WithdrawalBox>
      </WithdrawalContainer>
    </Fragment>
  );
};

export default Withdrawal;
