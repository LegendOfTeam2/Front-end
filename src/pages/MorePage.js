import { Fragment, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MoreBtmDataDiv,
  MoreBtmImgDiv,
  MoreBtmTextDiv,
  MoreBtmTextDivDiv,
  MoreContainer,
  MoreContainerDiv,
  MoreTopDiv,
  MoreTopSpan,
} from "../assets/styles/pages/MorePage.styled";
import Header from "../components/Header";
import PostBig from "../components/PostBig";
import useLikeStore from "../zustand/like";
import usePostStore from "../zustand/post";

const MorePage = () => {
  const { position, ctg } = useParams();
  const leftRef = useRef();
  const rightRef = useRef();

  const [recent, setRecent] = useState(false);
  const [best, setBest] = useState(false);
  const [category, setCategory] = useState(ctg);

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
      case "new": {
        leftRef.current.style.borderTopColor = "rgba(40, 202, 124, 1)";
        rightRef.current.style.borderTopColor = "rgba(180, 180, 180, 1)";
        leftRef.current.style.color = "rgba(40, 202, 124, 1)";
        rightRef.current.style.color = "rgba(180, 180, 180, 1)";
        setCategory("new");
        break;
      }
      case "popular": {
        leftRef.current.style.borderTopColor = "rgba(180, 180, 180, 1)";
        rightRef.current.style.borderTopColor = "rgba(40, 202, 124, 1)";
        leftRef.current.style.color = "rgba(180, 180, 180, 1)";
        rightRef.current.style.color = "rgba(40, 202, 124, 1)";
        setCategory("popular");
        break;
      }
      default:
        break;
    }
  };
  useEffect(() => {
    if (category === "new") {
      leftRef.current.style.borderTopColor = "rgba(40, 202, 124, 1)";
      leftRef.current.style.color = "rgba(40, 202, 124, 1)";
      rightRef.current.style.borderTopColor = "rgba(180, 180, 180, 1)";
    } else {
      rightRef.current.style.borderTopColor = "rgba(40, 202, 124, 1)";
      rightRef.current.style.color = "rgba(40, 202, 124, 1)";
      leftRef.current.style.borderTopColor = "rgba(180, 180, 180, 1)";
    }
  }, []);

  useEffect(() => {
    if (position === "singer") {
      getSingerLikePost().then((res) => {
        if (res) {
          getRecentSinger();
          getBestSinger();
        }
      });
    } else {
      getMakerLikePost().then((res) => {
        if (res) {
          getRecentMaker();
          getBestMaker();
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
            {position === "singer" ? (
              <MoreTopSpan>싱어</MoreTopSpan>
            ) : (
              <MoreTopSpan>메이커</MoreTopSpan>
            )}
          </MoreTopDiv>

          <MoreBtmTextDiv>
            <MoreBtmTextDivDiv ref={leftRef}>
              <MoreBtmDataDiv onClick={() => categoryHandle("new")}>
                최신
              </MoreBtmDataDiv>
            </MoreBtmTextDivDiv>
            <MoreBtmTextDivDiv ref={rightRef}>
              <MoreBtmDataDiv onClick={() => categoryHandle("popular")}>
                인기
              </MoreBtmDataDiv>
            </MoreBtmTextDivDiv>
          </MoreBtmTextDiv>
          <MoreBtmImgDiv>
            {position === "singer" ? (
              category === "new" ? (
                recentSingerIsLoaded ? (
                  recentSinger.map((x) => (
                    <PostBig
                      key={x.postId}
                      imageUrl={x.imageUrl.imageUrl}
                      likeCount={x.likeCount}
                      nickname={x.nickname}
                      title={x.title}
                      collaborate={x.collaborate}
                      mediaUrl={x.mediaUrl.mediaUrl}
                      postId={x.postId}
                      position={x.position}
                    />
                  ))
                ) : (
                  <Fragment></Fragment>
                )
              ) : bestSingerIsLoaded ? (
                bestSinger.map((x) => (
                  <PostBig
                    key={x.postId}
                    imageUrl={x.imageUrl.imageUrl}
                    likeCount={x.likeCount}
                    nickname={x.nickname}
                    title={x.title}
                    collaborate={x.collaborate}
                    mediaUrl={x.mediaUrl.mediaUrl}
                    postId={x.postId}
                    position={x.position}
                  />
                ))
              ) : (
                <Fragment></Fragment>
              )
            ) : category === "new" ? (
              recentMakerIsLoaded ? (
                recentMaker.map((x) => (
                  <PostBig
                    key={x.postId}
                    imageUrl={x.imageUrl.imageUrl}
                    likeCount={x.likeCount}
                    nickname={x.nickname}
                    title={x.title}
                    collaborate={x.collaborate}
                    mediaUrl={x.mediaUrl.mediaUrl}
                    postId={x.postId}
                    position={x.position}
                  />
                ))
              ) : (
                <Fragment></Fragment>
              )
            ) : bestMakerIsLoaded ? (
              bestMaker.map((x) => (
                <PostBig
                  key={x.postId}
                  k
                  imageUrl={x.imageUrl.imageUrl}
                  likeCount={x.likeCount}
                  nickname={x.nickname}
                  title={x.title}
                  collaborate={x.collaborate}
                  mediaUrl={x.mediaUrl.mediaUrl}
                  postId={x.postId}
                  position={x.position}
                />
              ))
            ) : (
              <Fragment></Fragment>
            )}
          </MoreBtmImgDiv>
        </MoreContainer>
      </MoreContainerDiv>
    </Fragment>
  );
};

export default MorePage;
