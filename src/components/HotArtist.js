// Zustand
import useFollowStore from "../zustand/follow";

// Elements
import Button from "../elements/Button";

// Utils
import { getCookie } from "../utils/cookie";

// Packages
import jwt_decode from 'jwt-decode';
// Assets
import {
  BtmBunDiv,
  BtmProfileDivDiv,
  BtmProfileDivDivDiv,
  BtmTextDivDivDiv,
  BtmTextDivDivSmDiv,
  BtmTextDivSmSpan,
  BtmTextDivSpan,
  HotArtistImgDivDiv,
  MainProfileimg,
} from "../assets/styles/components/HotArtist.styled";
import useMemberStore from "../zustand/member";
import { useNavigate } from "react-router-dom";

const HotArtist = ({nickname, follower,imageUrl}) => {
  const follow = useFollowStore((state) => state.follow);
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);

  const navigate = useNavigate();

  const onHandleFollow = () => {
    if(getCookie('authorization') !== undefined) follow(nickname);
    else alert('로그인 후에 이용 가능합니다.');
  }

  const ProfilPage = () => {
      navigate(`/mypage/${nickname}`);
  };

  return (
    <HotArtistImgDivDiv>
      <BtmProfileDivDiv>
        <BtmProfileDivDivDiv>
          <MainProfileimg
            src={
              imageUrl === null
                ? profileImgArr[random]
                : imageUrl
            }
            alt=''

            onClick={ProfilPage}
          />
        </BtmProfileDivDivDiv>
        <BtmTextDivDivDiv>
          <BtmTextDivSpan>{nickname}</BtmTextDivSpan>
        </BtmTextDivDivDiv>
        <BtmTextDivDivSmDiv>
          <BtmTextDivSmSpan>{follower} 팔로워</BtmTextDivSmSpan>
        </BtmTextDivDivSmDiv>
        <BtmBunDiv>
          <Button
            _onClick={onHandleFollow}
            _style={{
              width: "155px",
              height: "33px",
              bg_color: "#28CA7C",
              bd_radius: "8px",
              color: "#FFFFFF",
              ft_weight: "700",
              ft_size: "16",
              bd_px: "1px",
              bd_color: "transparent",
            }}
            _text={"팔로우"}
          />
        </BtmBunDiv>
      </BtmProfileDivDiv>
    </HotArtistImgDivDiv>
  );
};

export default HotArtist;
