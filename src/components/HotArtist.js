// React
import { useRef } from 'react';

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

  const followButtonRef = useRef();

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
            followButtonRef.current.innerText = '팔로잉';
            followButtonRef.current.style.backgroundColor = '#CC0000';
            toast.info(`${nickname.slice(0, 9)}님을 팔로우 하였습니다.`, {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 1500,
              draggablePercent: 60,
              hideProgressBar: true,
            });
          } else {
            followButtonRef.current.innerText = '팔로우';
            followButtonRef.current.style.backgroundColor = '#28CA7C';
            toast.info(`${nickname.slice(0, 9)}님 팔로우를 취소하였습니다.`, {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 1500,
              draggablePercent: 60,
              hideProgressBar: true,
            });
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
          <BtmTextDivSmSpan>{follower} 팔로워</BtmTextDivSmSpan>
        </BtmTextDivDivSmDiv>
        <BtmBunDiv>
          {isFollow ? (
            <Button
              _onClick={onHandleFollow}
              _style={{
                width: '155px',
                height: '33px',
                bg_color: '#CC0000',
                bd_radius: '8px',
                color: '#FFFFFF',
                ft_weight: '700',
                ft_size: '16',
                bd_px: '1px',
                bd_color: 'transparent',
              }}
              _text={'팔로잉'}
              _ref={followButtonRef}
            />
          ) : (
            <Button
              _onClick={onHandleFollow}
              _style={{
                width: '155px',
                height: '33px',
                bg_color: '#28CA7C',
                bd_radius: '8px',
                color: '#FFFFFF',
                ft_weight: '700',
                ft_size: '16',
                bd_px: '1px',
                bd_color: 'transparent',
              }}
              _text={'팔로우'}
              _ref={followButtonRef}
            />
          )}
        </BtmBunDiv>
      </BtmProfileDivDiv>
    </HotArtistImgDivDiv>
  );
};

export default HotArtist;
