<<<<<<< HEAD
import { Fragment, useState } from "react";
=======
import { Fragment } from 'react';
import PlayerMain from '../components/audioplayer/PlayerMain';
import HashTag from '../components/HashTag';
import Header from '../components/Header';
>>>>>>> 989110a500d89633a8c9b453ebccb5bba3a72586

import Header from "../components/Header";

import styled from "styled-components";

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import Slider from "react-slick";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
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
            {Array(10)
            .fill("")
            .map(() => (
              <div style={{ margin: 20 }}>
                <img
                  style={{ width: 310, objectFit: "contain", borderRadius: 10 }}
                  src="https://resources.platform.iplt20.com/photo-resources/2021/05/02/25eae35d-5165-4608-b666-a27501622f02/H4pPnjIC.jpg?width=390&height=219"
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
