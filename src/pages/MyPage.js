import { Fragment, useRef, useEffect, useState } from "react";
import Header from "../components/Header";

import styled from "styled-components";

import { AiFillLike, AiOutlineClose } from "react-icons/ai";

import {
  BsFillAlarmFill,
  BsFillArchiveFill,
  BsPlayCircle,
} from "react-icons/bs";

import { BiCollapse } from "react-icons/bi";
import { BsMusicNoteList, BsMic } from "react-icons/bs";
import Button from "../elements/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyPage = () => {
  const leftRef = useRef();
  const midRef = useRef();
  const rightRef = useRef();

  const [tagSlider, setTagSlider] = useState(false);

  const clickTag = () => {
    setTagSlider(!tagSlider);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    centerPadding: "3px",
    arrows: false,
  };

  const categoryHandle = (state) => {
    switch (state) {
      case "work": {
        leftRef.current.style.borderTopColor = "black";
        midRef.current.style.borderTopColor = "transparent";
        rightRef.current.style.borderTopColor = "transparent";
        leftRef.current.style.color = "black";
        midRef.current.style.color = "rgba(180, 180, 180, 1)";
        rightRef.current.style.color = "rgba(180, 180, 180, 1)";
        break;
      }
      case "like": {
        leftRef.current.style.borderTopColor = "transparent";
        midRef.current.style.borderTopColor = "black";
        rightRef.current.style.borderTopColor = "transparent";
        leftRef.current.style.color = "rgba(180, 180, 180, 1)";
        midRef.current.style.color = "black";
        rightRef.current.style.color = "rgba(180, 180, 180, 1)";
        break;
      }
      case "save": {
        leftRef.current.style.borderTopColor = "transparent";
        midRef.current.style.borderTopColor = "transparent";
        rightRef.current.style.borderTopColor = "black";
        leftRef.current.style.color = "rgba(180, 180, 180, 1)";
        midRef.current.style.color = "rgba(180, 180, 180, 1)";
        rightRef.current.style.color = "black";
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    leftRef.current.style.borderTopColor = "black";
    leftRef.current.style.color = "black";
  }, []);

  return (
    <Fragment>
      <Header />
      <MyContainerDiv>
        <MyContainer>
          <MyProfileContainer>
            <Myleft>
              <MyleftDiv>
                <MyleftDivImg
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXC4jJpUonPTloaWOqn7U5jyshqEL0mPfqg&usqp=CAU'
                  alt='프로필 이미지'
                />
              </MyleftDiv>
            </Myleft>

            <MyRight>
              <MyRightTopDivCl>
                <MyRightTopDivClDiv>
                  <MyRightTopDiv>
                    <div>
                      <MyRightTopDivSpan>baekyeriiin</MyRightTopDivSpan>
                    </div>

                    <MyRightTopIconDiv>
                      <div>
                        <BsMusicNoteList size={25} />
                      </div>
                      <div>
                        <BsMic size={25} />
                      </div>
                    </MyRightTopIconDiv>
                    <MyRightTopButDiv>
                      <Button
                        _style={{
                          width: "124px",
                          height: "40px",
                          bg_color: "rgba(0, 0, 0, 1)",
                          bd_radius: "11px",
                          color: "rgba(255, 255, 255, 1)",
                          ft_size: "12",
                          ft_weight: "700",
                        }}
                        _text={"메세지 보내기"}
                      />
                      <Button
                        _style={{
                          width: "124px",
                          height: "40px",
                          bg_color: "rgba(0, 0, 0, 1)",
                          bd_radius: "11px",
                          color: "rgba(255, 255, 255, 1)",
                          ft_size: "12",
                          ft_weight: "700",
                        }}
                        _text={"팔로우"}
                      />
                    </MyRightTopButDiv>
                  </MyRightTopDiv>
                  <MyRightTopBtmDiv>
                    <MyRightTopBtmDivSpan>곡 작업 10</MyRightTopBtmDivSpan>
                    <MyRightTopBtmDivSpan>팔로워 4,000</MyRightTopBtmDivSpan>
                    <MyRightTopBtmDivSpan>팔로우 350</MyRightTopBtmDivSpan>
                  </MyRightTopBtmDiv>
                </MyRightTopDivClDiv>
                <MyTagBox>
                  <MyTagBoxText tagSlider={tagSlider}>
                    <MyTagBoxTextDivDiv>
                    <div>
                    <MyTagBoxTextSpan> # 감성 래퍼</MyTagBoxTextSpan>
                    </div>
                    <div>
                    <MyTagBoxTextSpan> # 랩 커버</MyTagBoxTextSpan>
                    </div>
                    <div>
                    <MyTagBoxTextSpan> # 랩 커버</MyTagBoxTextSpan>
                    </div>
                    <div>
                    <MyTagBoxTextSpan> # 랩 커버</MyTagBoxTextSpan>
                    </div>
                    <div>
                    <MyTagBoxTextSpan onClick={clickTag}>
                      {" "}
                      더 보기
                    </MyTagBoxTextSpan>
                    </div>
                    </MyTagBoxTextDivDiv>
                  </MyTagBoxText>

                  <MyTagBoxTextSlide tagSlider={tagSlider} onClick={clickTag}>
                    <MyTagBoxTextSlideIcon>
                      <AiOutlineClose
                        className='x-icon'
                        size={16}
                      />
                    </MyTagBoxTextSlideIcon>
                    <Slider {...settings}>
                      {Array(12)
                        .fill("")
                        .map(() => (
                          <MyTagBoxTextSlideDiv>
                            <MyTagBoxTextSpanSlide>
                              {" "}
                              # 더 보기보기
                            </MyTagBoxTextSpanSlide>
                          </MyTagBoxTextSlideDiv>
                        ))}
                    </Slider>
                  </MyTagBoxTextSlide>
                </MyTagBox>
                <MyRightBtmDiv>
                  <MyRightBtmDivSpan>
                    {" "}
                    감성을 전하는 래퍼 백예린 -ˋˏ * ٩( ◡̉̈ )۶ * ˎˊ-{" "}
                  </MyRightBtmDivSpan>
                </MyRightBtmDiv>
              </MyRightTopDivCl>
            </MyRight>
          </MyProfileContainer>
          <MyMidTextDiv>
            <MyMidTextDivDiv>
              <MyMidTextDivDivSpan>메인 게시물</MyMidTextDivDivSpan>
            </MyMidTextDivDiv>
            <MyTextDiv>
              {Array(4)
                .fill("")
                .map(() => (
                  <MyImgDivDiv>
                    <Myimg
                      src='https://i.pinimg.com/originals/51/31/a8/5131a8244ab74ea8523d59e1ba81606a.jpg'
                      alt=''
                    />
                    <ImgMyBtmRight>
                      <BsPlayCircle size={25} color='white' />
                    </ImgMyBtmRight>
                    <MyImgTopLeft>나는 백예린</MyImgTopLeft>
                    <MyImgTopRight>
                      <BsFillAlarmFill color='white' />
                    </MyImgTopRight>
                    <MyImgBtmLeft>
                      <AiFillLike color='white' />
                      372
                    </MyImgBtmLeft>
                    <MyImgBtmRight>
                      <BsFillArchiveFill color='white' />
                    </MyImgBtmRight>
                  </MyImgDivDiv>
                ))}
            </MyTextDiv>
          </MyMidTextDiv>
          <MyBtmTextDiv>
            <MyBtmTextDivDiv ref={leftRef}>
              <MyBtmDataDiv onClick={() => categoryHandle("work")}>
                작업물
              </MyBtmDataDiv>
            </MyBtmTextDivDiv>
            <MyBtmTextDivDiv ref={midRef}>
              <MyBtmDataDiv onClick={() => categoryHandle("like")}>
                좋아요
              </MyBtmDataDiv>
            </MyBtmTextDivDiv>
            <MyBtmTextDivDiv ref={rightRef}>
              <MyBtmDataDiv onClick={() => categoryHandle("save")}>
                저장
              </MyBtmDataDiv>
            </MyBtmTextDivDiv>
          </MyBtmTextDiv>

          <MyBtmImgDiv>
            {Array(12)
              .fill("")
              .map(() => (
                <MyBtmImgDivDiv>
                  <MyBtmimg
                    src='https://post-phinf.pstatic.net/MjAyMDEyMDhfOTMg/MDAxNjA3NDI5MzkxMjEx.iPqD1FE-bQkTnkafG_NHKjwYzP77vAorHJQudD8U-Oog.fYcOIP249W2jhGGro6q_UKFiu6XWfUyxehMKYE7zGXcg.JPEG/YerinBaek_tellusboutyourself_Cover.jpg?type=w1200'
                    alt=''
                  />
                  <ImgMyBtmBtmRight>
                    <BsPlayCircle size={25} color='white' />
                  </ImgMyBtmBtmRight>
                  <MyBtmImgTopLeft>나는 백예린</MyBtmImgTopLeft>
                  <MyBtmImgTopTopRight>
                    <BsFillAlarmFill color='white' />
                  </MyBtmImgTopTopRight>

                  <MyBtmImgTopBtmRight>
                    <BiCollapse color='white' />
                  </MyBtmImgTopBtmRight>
                  <MyBtmImgBtmLeft>
                    <AiFillLike color='white' />
                    372
                  </MyBtmImgBtmLeft>
                  <MyBtmImgBtmRight>
                    <BsFillArchiveFill color='white' />
                  </MyBtmImgBtmRight>
                </MyBtmImgDivDiv>
              ))}
          </MyBtmImgDiv>
        </MyContainer>
      </MyContainerDiv>
    </Fragment>
  );
};

export default MyPage;

export const MyContainerDiv = styled.div`
  width: 100%;
  background-color: #eeeceb;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 176px;
`;

export const MyContainer = styled.div`
  width: ${(props) => props.theme.deviceSizes.tabletL};
  height: auto;
  display: flex;
  flex-direction: column;
  .center {
    /* center 모드일때 center 외 속성에게 사용 */
    opacity: 0.8;
    transition: all 300ms ease;
    transform: scale(0.99);
  }
`;
export const MyProfileContainer = styled.div`
  width: ${(props) => props.theme.deviceSizes.tabletL};
  height: auto;
  display: flex;
  border-bottom: 1px solid rgba(231, 231, 231, 1);
`;

export const Myleft = styled.div`
  width: 325px;
  height: auto;
  display: flex;
  margin-bottom: 50px;
`;

export const MyRight = styled.div`
  width: 699px;
  height: auto;
  display: flex;
  margin-bottom: 50px;
  padding-left: 46px;
  padding-right: 38px;
`;

export const MyleftDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  border-radius: 50%;
`;

export const MyleftDivImg = styled.img`
  display: flex;
  flex-direction: row-reverse;
  border-radius: 50%;
`;

export const MyRightTopDivCl = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const MyRightTopDivClDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
  border-bottom: 2px solid rgba(231, 231, 231, 1);
`;

export const MyRightTopDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 35px;
  align-items: flex-end;
`;

export const MyRightTopIconDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
export const MyRightTopButDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-left: 92px;
`;

export const MyRightTopDivSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold}; ;
`;

export const MyRightTopBtmDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 54px;
  margin-bottom: 22px;
`;

export const MyRightTopBtmDivSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Regular}; ;
`;

export const MyTagBox = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  width: 100%;
  border-bottom: 2px solid rgba(231, 231, 231, 1);
`;

export const MyTagBoxText = styled.div`
  margin-top: 22px;
  margin-bottom: 22px;
  width: 100%;
  height: auto;
  display: ${({ tagSlider }) => (tagSlider ? "none" : "block")}; ;
`;

export const MyTagBoxTextDivDiv = styled.div`
  line-height: ${(props) => props.theme.lineHeight.base};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const MyTagBoxTextSlide = styled.div`
  width: 100%;
  height: auto;
  display: ${({ tagSlider }) => (tagSlider ? "block" : "none")}; ;
`;

export const MyTagBoxTextSlideIcon = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  display: ${({ tagSlider }) => (tagSlider ? "none" : "block")};
  &:hover {
    cursor: pointer;
    color: rgba(40, 202, 124, 1);
  }
  .x-icon {
    position: absolute;
    right: 1%;
    bottom: 3%;
    
  }
`;

export const MyTagBoxTextSlideDiv = styled.div`
  width: 100%;
  margin-top: 22px;
  margin-bottom: 22px;
  display: ${({ tagSlider }) => (tagSlider ? "block" : "none")}; ;
`;

export const MyTagBoxTextSpan = styled.span`
  width: 100%;
  height: auto;
  padding: 9px;
  border: 1px solid #000000;
  border-radius: 24px;
  &:hover {
    cursor: pointer;
    background-color: #aaa4a4;
  }
`;
export const MyTagBoxTextSpanSlide = styled.span`
  width: auto;
  height: auto;
  padding: 9px;
  margin-right: 30px;
  border: 1px solid #000000;
  border-radius: 24px;
  line-height: ${(props) => props.theme.lineHeight.base};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  &:hover {
    cursor: pointer;
    background-color: #aaa4a4;
  }
`;

export const MyRightBtmDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

export const MyRightBtmDivSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Regular};
  margin-top: 28px;
`;

export const MyMidTextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-bottom: 2px solid rgba(231, 231, 231, 1);
`;

export const MyMidTextDivDiv = styled.div`
  width: 100%;
  height: auto;
  padding-top: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyMidTextDivDivSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const MyTextDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 63px;
  padding-left: 83px;
  padding-right: 83px;
  padding-bottom: 43px;
`;

export const MyImgDivDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
`;

export const ImgMyBtmRight = styled.div`
  position: absolute;
  bottom: 5%;
  right: 7%;
  display: block;
  ${MyImgDivDiv}:hover & {
    display: none;
    cursor: pointer;
  }
`;

export const MyImgTopLeft = styled.div`
  position: absolute;
  top: 8%;
  left: 8%;
  color: white;
  display: none;
  ${MyImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyImgTopRight = styled.div`
  position: absolute;
  top: 8%;
  right: 9%;
  display: none;
  ${MyImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyImgBtmLeft = styled.div`
  position: absolute;
  bottom: 8%;
  left: 8%;
  color: white;
  display: none;
  ${MyImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyImgBtmRight = styled.div`
  position: absolute;
  bottom: 7%;
  right: 9%;
  display: none;
  ${MyImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const Myimg = styled.img`
  width: 167px;
  height: 167px;
  border-radius: 19px;
  ${MyImgDivDiv}:hover & {
    filter: brightness(50%);
  }
`;

export const MyBtmTextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 61px;
`;

export const MyBtmTextDivDiv = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  border-top: 4px solid transparent;
  color: rgba(180, 180, 180, 1);
  &:hover {
    cursor: pointer;
  }
`;

export const MyBtmDataDiv = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  margin-top: 28px;
`;

export const MyBtmImgDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 24px;
`;

export const MyBtmImgDivDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  position: relative;
`;

export const ImgMyBtmBtmRight = styled.div`
  position: absolute;
  bottom: 5%;
  right: 7%;
  display: block;
  ${MyBtmImgDivDiv}:hover & {
    display: none;
    cursor: pointer;
  }
`;

export const MyBtmImgTopLeft = styled.div`
  position: absolute;
  top: 8%;
  left: 8%;
  color: white;
  display: none;
  ${MyBtmImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyBtmImgTopTopRight = styled.div`
  position: absolute;
  top: 8%;
  right: 9%;
  display: none;
  ${MyBtmImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;
export const MyBtmImgTopBtmRight = styled.div`
  position: absolute;
  top: 17%;
  right: 9%;
  display: none;
  ${MyBtmImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyBtmImgBtmLeft = styled.div`
  position: absolute;
  bottom: 8%;
  left: 8%;
  color: white;
  display: none;
  ${MyBtmImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyBtmImgBtmRight = styled.div`
  position: absolute;
  bottom: 7%;
  right: 9%;
  display: none;
  ${MyBtmImgDivDiv}:hover & {
    display: block;
    cursor: pointer;
  }
`;

export const MyBtmimg = styled.img`
  width: 309px;
  height: 309px;
  border-radius: 10px;
  ${MyBtmImgDivDiv}:hover & {
    filter: brightness(50%);
  }
`;
