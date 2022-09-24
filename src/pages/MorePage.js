import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  MoreBtmDataDiv,
  MoreBtmDataDivSelect,
  MoreBtmImgDiv,
  MoreBtmTextDiv,
  MoreBtmTextDivDiv,
  MoreContainer,
  MoreContainerDiv,
  MoreTopDiv,
  MoreTopSpan,
} from '../assets/styles/pages/MorePage.styled';
import Header from '../components/Header';
import PostBig from '../components/PostBig';
import { getCookie } from '../utils/cookie';
import useLikeStore from '../zustand/like';
import usePostStore from '../zustand/post';

const MorePage = () => {
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

  const singerIsLikeIsLoaded = useLikeStore(
    (state) => state.singerIsLikeIsLoaded
  );
  const singerIsLike = useLikeStore((state) => state.singerIsLike);
  const makerIsLike = useLikeStore((state) => state.makerIsLike);

  const { position, ctg } = useParams();

  const [category, setCategory] = useState(ctg);

  const categoryHandle = (state) => {
    switch (state) {
      case 'new': {
        setCategory('new');
        break;
      }
      case 'popular': {
        setCategory('popular');
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    if (position === 'singer') {
      getSingerLikePost().then((res) => {
        if (res.success) {
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
            {position === 'singer' ? (
              <MoreTopSpan>싱어</MoreTopSpan>
            ) : (
              <MoreTopSpan>메이커</MoreTopSpan>
            )}
          </MoreTopDiv>

          <MoreBtmTextDiv>
            {category === 'new' ? (
              <Fragment>
                <MoreBtmTextDivDiv onClick={() => categoryHandle('new')}>
                  <MoreBtmDataDivSelect>최신</MoreBtmDataDivSelect>
                </MoreBtmTextDivDiv>
                <MoreBtmTextDivDiv onClick={() => categoryHandle('popular')}>
                  <MoreBtmDataDiv>인기</MoreBtmDataDiv>
                </MoreBtmTextDivDiv>
              </Fragment>
            ) : (
              <Fragment>
                <MoreBtmTextDivDiv onClick={() => categoryHandle('new')}>
                  <MoreBtmDataDiv>최신</MoreBtmDataDiv>
                </MoreBtmTextDivDiv>
                <MoreBtmTextDivDiv onClick={() => categoryHandle('popular')}>
                  <MoreBtmDataDivSelect>인기</MoreBtmDataDivSelect>
                </MoreBtmTextDivDiv>
              </Fragment>
            )}
          </MoreBtmTextDiv>
          <MoreBtmImgDiv>
            {getCookie('authorization') !== undefined ? (
              position === 'singer' ? (
                category === 'new' ? (
                  singerIsLikeIsLoaded ? (
                    recentSingerIsLoaded ? (
                      recentSinger.map((x) => {
                        if (
                          [...singerIsLike, ...makerIsLike].indexOf(x.postId) >
                          -1
                        ) {
                          return (
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
                              likeState={true}
                            />
                          );
                        } else {
                          return (
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
                              likeState={false}
                            />
                          );
                        }
                      })
                    ) : (
                      <Fragment></Fragment>
                    )
                  ) : (
                    <></>
                  )
                ) : recentSingerIsLoaded ? (
                  bestSingerIsLoaded ? (
                    bestSinger.map((x) => {
                      if (
                        [...singerIsLike, ...makerIsLike].indexOf(x.postId) > -1
                      ) {
                        return (
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
                            likeState={true}
                          />
                        );
                      } else {
                        return (
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
                            likeState={false}
                          />
                        );
                      }
                    })
                  ) : (
                    <Fragment></Fragment>
                  )
                ) : (
                  <></>
                )
              ) : category === 'new' ? (
                singerIsLikeIsLoaded ? (
                  recentMakerIsLoaded ? (
                    recentMaker.map((x) => {
                      if (
                        [...singerIsLike, ...makerIsLike].indexOf(x.postId) > -1
                      ) {
                        return (
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
                            likeState={true}
                          />
                        );
                      } else {
                        return (
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
                            likeState={false}
                          />
                        );
                      }
                    })
                  ) : (
                    <Fragment></Fragment>
                  )
                ) : (
                  <></>
                )
              ) : singerIsLikeIsLoaded ? (
                bestMakerIsLoaded ? (
                  bestMaker.map((x) => {
                    if (
                      [...singerIsLike, ...makerIsLike].indexOf(x.postId) > -1
                    ) {
                      return (
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
                          likeState={true}
                        />
                      );
                    } else {
                      return (
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
                          likeState={false}
                        />
                      );
                    }
                  })
                ) : (
                  <Fragment></Fragment>
                )
              ) : (
                <></>
              )
            ) : position === 'singer' ? (
              category === 'new' ? (
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
            ) : category === 'new' ? (
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
