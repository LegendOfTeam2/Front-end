// React
import { Fragment, useRef, useEffect, useState } from 'react';

// Zustand
import useMyPageStore from '../zustand/mypage';

// Packages
import { AiFillLike, AiOutlineClose } from 'react-icons/ai';
import {
  BsFillAlarmFill,
  BsFillArchiveFill,
  BsPlayCircle,
} from 'react-icons/bs';
import { BiCollapse } from 'react-icons/bi';
import { BsMusicNoteList, BsMic } from 'react-icons/bs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

// Utils
import Button from '../elements/Button';

// Pages

// Components
import Header from '../components/Header';

// Elements

// Shared

// Assests
import {
  ImgMyBtmBtmRight,
  ImgMyBtmRight,
  MyBtmDataDiv,
  MyBtmimg,
  MyBtmImgBtmLeft,
  MyBtmImgBtmRight,
  MyBtmImgDiv,
  MyBtmImgDivDiv,
  MyBtmImgTopBtmRight,
  MyBtmImgTopLeft,
  MyBtmImgTopTopRight,
  MyBtmTextDiv,
  MyBtmTextDivDiv,
  MyContainer,
  MyContainerDiv,
  Myimg,
  MyImgBtmLeft,
  MyImgBtmRight,
  MyImgDivDiv,
  MyImgTopLeft,
  MyImgTopRight,
  Myleft,
  MyleftDiv,
  MyleftDivImg,
  MyMidTextDiv,
  MyMidTextDivDiv,
  MyMidTextDivDivSpan,
  MyProfileContainer,
  MyRight,
  MyRightBtmDiv,
  MyRightBtmDivSpan,
  MyRightTopBtmDiv,
  MyRightTopBtmDivSpan,
  MyRightTopButDiv,
  MyRightTopDiv,
  MyRightTopDivCl,
  MyRightTopDivClDiv,
  MyRightTopDivSpan,
  MyRightTopIconDiv,
  MyTagBox,
  MyTagBoxText,
  MyTagBoxTextDivDiv,
  MyTagBoxTextSlide,
  MyTagBoxTextSlideDiv,
  MyTagBoxTextSlideIcon,
  MyTagBoxTextSpan,
  MyTagBoxTextSpanSlide,
  MyTextDiv,
} from "../assets/styles/pages/MyPage.styled";
import Post from "../components/Post";

const MyPage = () => {
  const [tagSlider, setTagSlider] = useState(false);
  const [page, setPage] = useState(0);

  const getUploadPost = useMyPageStore((state) => state.getUploadPost);

  const leftRef = useRef();
  const midRef = useRef();
  const rightRef = useRef();

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    getUploadPost(page);
  }, [page]);

  const clickTag = () => {
    setTagSlider(!tagSlider);
  };

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '-10px',
    arrows: false,
    variableWidth: true,
  };

  const categoryHandle = (state) => {
    switch (state) {
      case 'work': {
        leftRef.current.style.borderTopColor = 'black';
        midRef.current.style.borderTopColor = 'transparent';
        rightRef.current.style.borderTopColor = 'transparent';
        leftRef.current.style.color = 'black';
        midRef.current.style.color = 'rgba(180, 180, 180, 1)';
        rightRef.current.style.color = 'rgba(180, 180, 180, 1)';
        break;
      }
      case 'like': {
        leftRef.current.style.borderTopColor = 'transparent';
        midRef.current.style.borderTopColor = 'black';
        rightRef.current.style.borderTopColor = 'transparent';
        leftRef.current.style.color = 'rgba(180, 180, 180, 1)';
        midRef.current.style.color = 'black';
        rightRef.current.style.color = 'rgba(180, 180, 180, 1)';
        break;
      }
      case 'save': {
        leftRef.current.style.borderTopColor = 'transparent';
        midRef.current.style.borderTopColor = 'transparent';
        rightRef.current.style.borderTopColor = 'black';
        leftRef.current.style.color = 'rgba(180, 180, 180, 1)';
        midRef.current.style.color = 'rgba(180, 180, 180, 1)';
        rightRef.current.style.color = 'black';
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    leftRef.current.style.borderTopColor = 'black';
    leftRef.current.style.color = 'black';
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
                          width: '124px',
                          height: '40px',
                          bg_color: 'rgba(0, 0, 0, 1)',
                          bd_radius: '11px',
                          color: 'rgba(255, 255, 255, 1)',
                          ft_size: '12',
                          ft_weight: '700',
                        }}
                        _text={'메세지 보내기'}
                      />
                      <Button
                        _style={{
                          width: '124px',
                          height: '40px',
                          bg_color: 'rgba(0, 0, 0, 1)',
                          bd_radius: '11px',
                          color: 'rgba(255, 255, 255, 1)',
                          ft_size: '12',
                          ft_weight: '700',
                        }}
                        _text={'팔로우'}
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
                          더 보기
                        </MyTagBoxTextSpan>
                      </div>
                    </MyTagBoxTextDivDiv>
                  </MyTagBoxText>

                  <MyTagBoxTextSlide tagSlider={tagSlider}>
                    <MyTagBoxTextSlideIcon onClick={clickTag}>
                      <AiOutlineClose className='x-icon' size={16} />
                    </MyTagBoxTextSlideIcon>
                    <Slider {...settings}>
                      {Array(12)
                        .fill('')
                        .map(() => (
                          <MyTagBoxTextSlideDiv>
                            <MyTagBoxTextSpanSlide>
                              # 더 보기보기
                            </MyTagBoxTextSpanSlide>
                          </MyTagBoxTextSlideDiv>
                        ))}
                    </Slider>
                  </MyTagBoxTextSlide>
                </MyTagBox>
                <MyRightBtmDiv>
                  <MyRightBtmDivSpan>
                    감성을 전하는 래퍼 백예린 -ˋˏ * ٩( ◡̉̈ )۶ * ˎˊ-{' '}
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
                .fill('')
                .map(() => (
                  <Post width='167px' height='167px' line_height='20' ft_weight='500' ft_size='14' />
                ))}
            </MyTextDiv>
          </MyMidTextDiv>
          <MyBtmTextDiv>
            <MyBtmTextDivDiv ref={leftRef}>
              <MyBtmDataDiv onClick={() => categoryHandle('work')}>
                작업물
              </MyBtmDataDiv>
            </MyBtmTextDivDiv>
            <MyBtmTextDivDiv ref={midRef}>
              <MyBtmDataDiv onClick={() => categoryHandle('like')}>
                좋아요
              </MyBtmDataDiv>
            </MyBtmTextDivDiv>
            <MyBtmTextDivDiv ref={rightRef}>
              <MyBtmDataDiv onClick={() => categoryHandle('save')}>
                저장
              </MyBtmDataDiv>
            </MyBtmTextDivDiv>
          </MyBtmTextDiv>

          <MyBtmImgDiv>
            {Array(12)
              .fill('')
              .map(() => (
                <Post width='309px' height='309px' line_height='29' ft_weight='700' ft_size='20' />
              ))}
          </MyBtmImgDiv>
        </MyContainer>
      </MyContainerDiv>
    </Fragment>
  );
};

export default MyPage;
