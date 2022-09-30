// React
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Zustand
import useFollowStore from '../zustand/follow';
import useChatStore from '../zustand/chat';
import useMemberStore from '../zustand/member';

// Packages
import jwt_decode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCookie } from '../utils/cookie';

// Utils
import { warning, info } from '../utils/toast';

// Elements
import Button from '../elements/Button';

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
} from '../assets/styles/components/HotArtistBig.styled';

const HotArtistBig = ({ nickname, follower, imageUrl, isFollow }) => {
  const follow = useFollowStore((state) => state.follow);
  const makeRoom = useChatStore((state) => state.makeRoom);
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);

  const [counter, setCounter] = useState(follower);
  const [followCheck, setFollowCheck] = useState(isFollow);

  const navigate = useNavigate();

  const onHandleFollow = () => {
    if (getCookie('authorization') !== undefined) {
      if (jwt_decode(getCookie('authorization')).sub === nickname) {
        warning('자기 자신은 팔로우 할 수 없습니다.')
      } else {
        follow(nickname).then((res) => {
          if (res.success) {
            if (res.data) {
              setFollowCheck(true);
              info(`${nickname.slice(0, 9)}님을 팔로우 하였습니다.`);
              setCounter((prev) => parseInt(prev) + 1);
            } else {
              setFollowCheck(false);
              info(`${nickname.slice(0, 9)}님 팔로우를 취소하였습니다.`);
              setCounter((prev) => parseInt(prev) - 1);
            }
          }
        });
      }
    } else {
      warning('로그인 후에 이용 가능합니다.');
    }
  };

  const profilPage = () => {
    navigate(`/mypage/${nickname}`);
  };

  const onHandleChatRoom = () => {
    if (getCookie('authorization') !== undefined) {
      makeRoom({ nickname, profileUrl: 'test', userId: 1 });
    } else {
      warning('로그인 후에 이용 가능합니다.');
    }
  };

  return (
    <HotArtistImgDivDiv key={nickname}>
      <ToastContainer />
      <BtmProfileDivDiv>
        <BtmProfileDivDivDiv>
          <MainProfileimg
            src={
              imageUrl === null
                ? profileImgArr[random]
                : imageUrl === ''
                ? profileImgArr[random]
                : imageUrl
            }
            alt=''
            onClick={profilPage}
          />
        </BtmProfileDivDivDiv>
        <BtmTextDivDivDiv>
          <BtmTextDivSpan>{nickname.slice(0, 9)}</BtmTextDivSpan>
        </BtmTextDivDivDiv>
        <BtmTextDivDivSmDiv>
          <BtmTextDivSmSpan style={{ color: '#28CA7C' }}>
            {counter}
          </BtmTextDivSmSpan>
          <BtmTextDivSmSpan> 팔로워</BtmTextDivSmSpan>
        </BtmTextDivDivSmDiv>
        <BtmBunDiv>
          {followCheck ? (
            <Button
              _onClick={onHandleFollow}
              _style={{
                width: '90px',
                height: '40px',
                bg_color: '#28CA7C',
                bd_radius: '8px',
                color: '#FFFFFF',
                ft_weight: '700',
                ft_size: '16',
                bd_px: '1px',
                bd_color: 'transparent',
              }}
              _text={'팔로잉'}
            />
          ) : (
            <Button
              _onClick={onHandleFollow}
              _style={{
                width: '90px',
                height: '40px',
                bg_color: '#FFFFFF',
                bd_radius: '8px',
                color: '#28CA7C',
                ft_weight: '700',
                ft_size: '16',
                bd_px: '1px',
                bd_color: '#28CA7C',
              }}
              _text={'팔로우'}
            />
          )}
          <Button
            _onClick={onHandleChatRoom}
            _style={{
              width: '90px',
              height: '40px',
              bg_color: '#ffffff',
              bd_radius: '8px',
              color: '#28CA7C',
              ft_weight: '700',
              ft_size: '16',
              bd_px: '1px',
              bd_color: '#28CA7C',
            }}
            _text={'메시지'}
          />
        </BtmBunDiv>
      </BtmProfileDivDiv>
    </HotArtistImgDivDiv>
  );
};

export default HotArtistBig;
