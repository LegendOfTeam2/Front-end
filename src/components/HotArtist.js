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
import Button from "../elements/Button";

const HotArtist = () => {
  return (
    <HotArtistImgDivDiv>
      <BtmProfileDivDiv>
        <BtmProfileDivDivDiv>
          <MainProfileimg
            src='https://blog.kakaocdn.net/dn/bRSp9b/btqDbkIMBLv/uFGktm4owJCRMMsXkQBgKk/img.jpg'
            alt=''
          />
        </BtmProfileDivDivDiv>
        <BtmTextDivDivDiv>
          <BtmTextDivSpan>youngi_2</BtmTextDivSpan>
        </BtmTextDivDivDiv>
        <BtmTextDivDivSmDiv>
          <BtmTextDivSmSpan>4,000팔로워</BtmTextDivSmSpan>
        </BtmTextDivDivSmDiv>
        <BtmBunDiv>
          <Button
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