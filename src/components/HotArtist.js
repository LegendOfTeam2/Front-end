// React
import { useState } from 'react';

// Zustand
import useFollowStore from '../zustand/follow';

// Packages
import jwt_decode from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Elements
import Button from '../elements/Button';

// Utils
import { getCookie } from '../utils/cookie';

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
} from '../assets/styles/components/HotArtist.styled';
import useMemberStore from '../zustand/member';
import { useNavigate } from 'react-router-dom';

const HotArtist = ({ nickname, follower, imageUrl, isFollow }) => {
  const follow = useFollowStore((state) => state.follow);
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);

  const [counter, setCounter] = useState(follower);
  const [followCheck, setFollowCheck] = useState(isFollow);

  const navigate = useNavigate();

  const onHandleFollow = () => {
    if (getCookie('authorization') !== undefined) {
      if (jwt_decode(getCookie('authorization')).sub === nickname) {
        toast.warning('자기 자신은 팔로우 할 수 없습니다.', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1500,
          draggablePercent: 60,
          hideProgressBar: true,
        });
      } else {
        follow(nickname).then((res) => {
          if (res) {
            setFollowCheck(true);
            toast.info(`${nickname.slice(0, 9)}님을 팔로우 하였습니다.`, {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 1500,
              draggablePercent: 60,
              hideProgressBar: true,
            });
            setCounter((prev) => parseInt(prev) + 1);
          } else {
            setFollowCheck(false);
            toast.info(`${nickname.slice(0, 9)}님 팔로우를 취소하였습니다.`, {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 1500,
              draggablePercent: 60,
              hideProgressBar: true,
            });
            setCounter((prev) => parseInt(prev) - 1);
          }
        });
      }
    } else {
      alert('로그인 후에 이용 가능합니다.');
      navigate('/signin');
    }
  };

  const ProfilPage = () => {
    navigate(`/mypage/${nickname}`);
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
            onClick={ProfilPage}
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
                width: '66px',
                height: '31px',
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
                width: '66px',
                height: '33px',
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
            _onClick={onHandleFollow}
            _style={{
              width: '66px',
              height: '31px',
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

export default HotArtist;
