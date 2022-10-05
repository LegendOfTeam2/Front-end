// React
import { Fragment, useEffect, useState } from 'react';

// Zustand
import useLikeStore from '../zustand/like';
import usePostStore from '../zustand/post';

// Packages
import { useParams } from 'react-router-dom';

// Utils
import { getCookie } from '../utils/cookie';

// Components
import Post from '../components/Post';
import Header from '../components/Header';

// Assests
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

const MorePage = () => {
  const getRecentMaker = usePostStore((state) => state.getRecentMaker);
  const getRecentSinger = usePostStore((state) => state.getRecentSinger);
  const getBestMaker = usePostStore((state) => state.getBestMaker);
  const getBestSinger = usePostStore((state) => state.getBestSinger);
  const recentSinger = usePostStore((state) => state.recentSinger);
  const bestSinger = usePostStore((state) => state.bestSinger);
  const recentMaker = usePostStore((state) => state.recentMaker);
  const bestMaker = usePostStore((state) => state.bestMaker);
  const getSingerLikePost = useLikeStore((state) => state.getSingerLikePost);
  const getMakerLikePost = useLikeStore((state) => state.getMakerLikePost);
  const singerIsLike = useLikeStore((state) => state.singerIsLike);
  const makerIsLike = useLikeStore((state) => state.makerIsLike);
  const bestSingerIsLoaded = usePostStore((state) => state.bestSingerIsLoaded);
  const bestMakerIsLoaded = usePostStore((state) => state.bestMakerIsLoaded);
  const singerIsLikeIsLoaded = useLikeStore(
    (state) => state.singerIsLikeIsLoaded
  );
  const makerIsLikeIsLoaded = useLikeStore(
    (state) => state.makerIsLikeIsLoaded
  );

  const recentMakerIsLoaded = usePostStore(
    (state) => state.recentMakerIsLoaded
  );
  const recentSingerIsLoaded = usePostStore(
    (state) => state.recentSingerIsLoaded
  );

  const { position, ctg } = useParams();

  const [category, setCategory] = useState(ctg);

  const categoryHandle = (state: any) => {
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
      getSingerLikePost().then((res: any) => {
        if (res.success) {
          getRecentSinger();
          getBestSinger();
        }
      });
    } else {
      getMakerLikePost().then((res: any) => {
        if (res.success) {
          getRecentMaker();
          getBestMaker();
        }
      });
    }
  }, []);

  return (
    <Fragment>
      <Header />
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
                      recentSinger.map((x: any) => {
                        if (
                          [...singerIsLike, ...makerIsLike].indexOf(x.postId) >
                          -1
                        ) {
                          return (
                            <Post
                              key={x.postId}
                              imageUrl={x.imageUrl.imageUrl}
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
                            <Post
                              key={x.postId}
                              imageUrl={x.imageUrl.imageUrl}
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
                      <Fragment />
                    )
                  ) : (
                    <Fragment />
                  )
                ) : recentSingerIsLoaded ? (
                  bestSingerIsLoaded ? (
                    bestSinger.map((x: any) => {
                      if (
                        [...singerIsLike, ...makerIsLike].indexOf(x.postId) > -1
                      ) {
                        return (
                          <Post
                            key={x.postId}
                            imageUrl={x.imageUrl.imageUrl}
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
                          <Post
                            key={x.postId}
                            imageUrl={x.imageUrl.imageUrl}
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
                    <Fragment />
                  )
                ) : (
                  <Fragment />
                )
              ) : category === 'new' ? (
                makerIsLikeIsLoaded ? (
                  recentMakerIsLoaded ? (
                    recentMaker.map((x: any) => {
                      if (
                        [...singerIsLike, ...makerIsLike].indexOf(x.postId) > -1
                      ) {
                        return (
                          <Post
                            key={x.postId}
                            imageUrl={x.imageUrl.imageUrl}
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
                          <Post
                            key={x.postId}
                            imageUrl={x.imageUrl.imageUrl}
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
                    <Fragment />
                  )
                ) : (
                  <Fragment />
                )
              ) : makerIsLikeIsLoaded ? (
                bestMakerIsLoaded ? (
                  bestMaker.map((x: any) => {
                    if (
                      [...singerIsLike, ...makerIsLike].indexOf(x.postId) > -1
                    ) {
                      return (
                        <Post
                          key={x.postId}
                          imageUrl={x.imageUrl.imageUrl}
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
                        <Post
                          key={x.postId}
                          imageUrl={x.imageUrl.imageUrl}
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
                  <Fragment />
                )
              ) : (
                <Fragment />
              )
            ) : position === 'singer' ? (
              category === 'new' ? (
                recentSingerIsLoaded ? (
                  recentSinger.map((x: any) => (
                    <Post
                      key={x.postId}
                      imageUrl={x.imageUrl.imageUrl}
                      nickname={x.nickname}
                      title={x.title}
                      collaborate={x.collaborate}
                      mediaUrl={x.mediaUrl.mediaUrl}
                      postId={x.postId}
                      position={x.position}
                      likeState={false}
                    />
                  ))
                ) : (
                  <Fragment />
                )
              ) : bestSingerIsLoaded ? (
                bestSinger.map((x: any) => (
                  <Post
                    key={x.postId}
                    imageUrl={x.imageUrl.imageUrl}
                    nickname={x.nickname}
                    title={x.title}
                    collaborate={x.collaborate}
                    mediaUrl={x.mediaUrl.mediaUrl}
                    postId={x.postId}
                    position={x.position}
                    likeState={false}
                  />
                ))
              ) : (
                <Fragment />
              )
            ) : category === 'new' ? (
              recentMakerIsLoaded ? (
                recentMaker.map((x: any) => (
                  <Post
                    key={x.postId}
                    imageUrl={x.imageUrl.imageUrl}
                    nickname={x.nickname}
                    title={x.title}
                    collaborate={x.collaborate}
                    mediaUrl={x.mediaUrl.mediaUrl}
                    postId={x.postId}
                    position={x.position}
                    likeState={false}
                  />
                ))
              ) : (
                <Fragment />
              )
            ) : bestMakerIsLoaded ? (
              bestMaker.map((x: any) => (
                <Post
                  key={x.postId}
                  imageUrl={x.imageUrl.imageUrl}
                  nickname={x.nickname}
                  title={x.title}
                  collaborate={x.collaborate}
                  mediaUrl={x.mediaUrl.mediaUrl}
                  postId={x.postId}
                  position={x.position}
                  likeState={false}
                />
              ))
            ) : (
              <Fragment />
            )}
          </MoreBtmImgDiv>
        </MoreContainer>
      </MoreContainerDiv>
    </Fragment>
  );
};

export default MorePage;
