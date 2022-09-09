// Element
import Button from "../elements/Button";

// Assets
import {
  BtmSmTextDiv,
  BtmSmTextSpan,
  LogoDiv,
  LogoDivDiv,
  TopBtmDiv,
  TopSmTextDiv,
  TopSmTextSpan,
  TopTextDiv,
  TopTextSpan,
  UserContainer,
  UserInBox,
} from "../assets/styles/pages/UserPosition.styled";


const UserPosition = () => {
  return (
    <UserContainer>
      <UserInBox>
        <LogoDiv>
          <LogoDivDiv></LogoDivDiv>
        </LogoDiv>
        <TopTextDiv>
          <TopTextSpan>리드미에서</TopTextSpan>
          <TopTextSpan>어떤 분야의 아티스트로서</TopTextSpan>
          <TopTextSpan>작업물을 고류하고 싶으세요?</TopTextSpan>
        </TopTextDiv>

        <TopSmTextDiv>
          <TopSmTextSpan>원하는 분야를 선택하세요.</TopSmTextSpan>
          <TopSmTextSpan>장르는 가입 후에도 추가가 가능합니다.</TopSmTextSpan>
        </TopSmTextDiv>

        <TopBtmDiv>
          <div>
            <Button
              _style={{
                width: "348px",
                height: "60px",
                bg_color: "rgba(255, 255, 255, 1)",
                bd_radius: "10px",
                color: "rgba(0, 0, 0, 1)",
                ft_weight: "500",
                ft_size: "18",
                bd_px: "1.5px",
              }}
              _text={"싱어"}
            />
          </div>
          <div>
            <Button
              _style={{
                width: "348px",
                height: "60px",
                bg_color: "rgba(255, 255, 255, 1)",
                bd_radius: "10px",
                color: "rgba(0, 0, 0, 1)",
                ft_weight: "500",
                ft_size: "18",
                bd_px: "1.5px",
              }}
              _text={"메이커"}
            />
          </div>
        </TopBtmDiv>

        <BtmSmTextDiv>
          <BtmSmTextSpan>
            아티스트님과 가장 가까운 분야를 선택해주세요.
          </BtmSmTextSpan>
          <BtmSmTextSpan>
            구체적은 분야를 수정하고 싶다면 마이페이지에서
          </BtmSmTextSpan>
          <BtmSmTextSpan>추가 및 수정이 가능합니다.</BtmSmTextSpan>
        </BtmSmTextDiv>
      </UserInBox>
    </UserContainer>
  );
};

export default UserPosition;