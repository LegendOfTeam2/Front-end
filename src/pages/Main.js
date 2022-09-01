import { Fragment } from 'react';
import Header from '../components/Header';

import styled from "styled-components";

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Fragment>
      <Header />
      <MainContainerDiv>
        <MainContainer>
          <div>prev</div>
          <div>next</div>

          <MainImgDiv>
            <Slider>
            {Array(5)
            .fill("")
            .map(() => (
              <div style={{ margin: 20 }}>
                <img
                  style={{ width: 310, objectFit: "contain", borderRadius: 10 }}
                  src="https://image.fmkorea.com/files/attach/new2/20211210/486616/3265746926/4152272994/cd0a93262a53c4d283e9d472e1afbf74.jpg"
                  alt=""
                />
                  </div>
                ))}
            </Slider>
          </MainImgDiv>

        </MainContainer>
      </MainContainerDiv>
    </Fragment>
  );
};

export default Main;

export const MainContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #eeeceb;
`;

export const MainContainer = styled.div`
  width: ${(props) => props.theme.deviceSizes.tabletL};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainImgDiv = styled.div`
  margin: 30px;
`;

export const Mainimg = styled.img`
  width: 261px;
  height: 261px;
`;
