import { Fragment, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import PostBig from "../components/PostBig";
import useLikeStore from "../zustand/like";
import usePostStore from "../zustand/post";

const MorePage = () => {
  const Params = useParams();
  const leftRef = useRef();
  const rightRef = useRef();

  const [recent, setRecent] = useState(true);
  const [best, setBest] = useState(false);

  const getRecentMaker = usePostStore((state) => state.getRecentMaker);
  const getRecentSinger = usePostStore((state) => state.getRecentSinger);
  const getBestMaker = usePostStore((state) => state.getBestMaker);
  const getBestSinger = usePostStore((state) => state.getBestSinger);

  const recentSingerIsLoaded = usePostStore(
    (state) => state.recentSingerIsLoaded
  );
  const recentSinger = usePostStore((state) => state.recentSinger);
  const bestSingerIsLoaded = usePostStore((state) => state.bestSingerIsLoaded);
  const bestSinger = usePostStore((state) => state.bestSinger);

  const recentMakerIsLoaded = usePostStore(
    (state) => state.recentMakerIsLoaded
  );
  const recentMaker = usePostStore((state) => state.recentMaker);
  const bestMakerIsLoaded = usePostStore((state) => state.bestMakerIsLoaded);
  const bestMaker = usePostStore((state) => state.bestMaker);

  const getSingerLikePost = useLikeStore((state) => state.getSingerLikePost);
  const getMakerLikePost = useLikeStore((state) => state.getMakerLikePost);

  const categoryHandle = (state) => {
    switch (state) {
      case "latest": {
        leftRef.current.style.borderTopColor = "rgba(40, 202, 124, 1)";
        rightRef.current.style.borderTopColor = "rgba(180, 180, 180, 1)";
        leftRef.current.style.color = "rgba(40, 202, 124, 1)";
        rightRef.current.style.color = "rgba(180, 180, 180, 1)";
        break;
      }
      case "public": {
        leftRef.current.style.borderTopColor = "rgba(180, 180, 180, 1)";
        rightRef.current.style.borderTopColor = "rgba(40, 202, 124, 1)";
        leftRef.current.style.color = "rgba(180, 180, 180, 1)";
        rightRef.current.style.color = "rgba(40, 202, 124, 1)";
        break;
      }
      default:
        break;
    }
  };
  useEffect(() => {
    leftRef.current.style.borderTopColor = "rgba(40, 202, 124, 1)";
    leftRef.current.style.color = "rgba(40, 202, 124, 1)";
    rightRef.current.style.borderTopColor = "rgba(180, 180, 180, 1)";
  }, []);

  console.log(Params.position);

  useEffect(() => {
    if (Params.position === "singer") {
      getSingerLikePost().then((res) => {
        if (res) {
          if (recent) {
            getRecentSinger();
          } else {
            getBestSinger();
          }
        }
      });
    } else {
      getMakerLikePost().then((res) => {
        if (res) {
          if (recent) {
            getRecentMaker();
          } else {
            getBestMaker();
          }
        }
      });
    }
  }, []);

  return (
    <Fragment>
      <Header></Header>
      <MoreContainerDiv>
        <MoreContainer>
          <MoreTopDiv>
            <MoreTopSpan>싱어</MoreTopSpan>
          </MoreTopDiv>

          <MoreBtmTextDiv>
            <MoreBtmTextDivDiv ref={leftRef}>
              <MoreBtmDataDiv onClick={() => categoryHandle("latest")}>
                최신
              </MoreBtmDataDiv>
            </MoreBtmTextDivDiv>
            <MoreBtmTextDivDiv ref={rightRef}>
              <MoreBtmDataDiv onClick={() => categoryHandle("public")}>
                인기
              </MoreBtmDataDiv>
            </MoreBtmTextDivDiv>
          </MoreBtmTextDiv>
          <MoreBtmImgDiv>
            {Array(12)
              .fill("")
              .map(() => (
                <PostBig />
              ))}
          </MoreBtmImgDiv>
        </MoreContainer>
      </MoreContainerDiv>
    </Fragment>
  );
};

export default MorePage;

export const MoreContainerDiv = styled.div`
  width: 100%;
  background-color: #eeeceb;
  display: flex;
  justify-content: center;
  position: absolute;
  margin: 0;
  padding: 0;
  top: 156.5px;
`;

export const MoreContainer = styled.div`
  width: 1024px;
  height: auto;
  padding-top: 46px;
  display: flex;
  flex-direction: column;
`;

export const MoreTopDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-top: 2px solid rgba(231, 231, 231, 1);
  border-bottom: 2px solid rgba(231, 231, 231, 1);
`;

export const MoreTopSpan = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  line-height: ${(props) => props.theme.lineHeight.xxxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold}; ;
`;

export const MoreBtmTextDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 34px;
`;

export const MoreBtmTextDivDiv = styled.div`
  padding-top: 7px;
  padding-bottom: 60px;
  width: 51px;
  border-top: 4px solid transparent;
  display: flex;
  justify-content: center;
  color: rgba(180, 180, 180, 1);
  &:hover {
    cursor: pointer;
  }
`;

export const MoreBtmDataDiv = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  margin-top: 21px;
`;

export const MoreBtmImgDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 24px;
`;
