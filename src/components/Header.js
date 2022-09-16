// React
import { Fragment, useState, useCallback, useEffect } from 'react';

//Zustand
import useMemberStore from '../zustand/member';
import useSearchStore from '../zustand/search';

// Packages
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

// Elements
import Button from '../elements/Button';
import Input from '../elements/Input';

// Utils
import { getCookie, removeCookie } from '../utils/cookie';

// Assests
import {
  BtmDiv,
  HeaderContainer,
  HeaderContainerDiv,
  HeaderDiv,
  LeftDiv,
  LogoDiv,
  ProfileDiv,
  ProfileImg,
  RightDiv,
  SearchDiv,
  SearchIconDiv,
} from '../assets/styles/components/Header.styled';
import { HeaderlargeLogo, Search } from '../assets/images/image';

const Header = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const setSearchKeyword = useSearchStore((state) => state.setSearchKeyword);
  const signOutMember = useMemberStore((state) => state.signOutMember);
  const getMyImage = useMemberStore((state) => state.getMyImage);
  const myProfileImg = useMemberStore((state) => state.myProfileImg);
  const myProfileImgIsLoaded = useMemberStore(
    (state) => state.myProfileImgIsLoaded
  );
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);

  useEffect(() => {
    if (getCookie('authorization') !== undefined) {
      const nickname = jwt_decode(getCookie('authorization')).sub;
      getMyImage({ nickname });
    }
  }, []);

  const uploadHandle = () => {
    if (getCookie('authorization') !== undefined) {
      navigate('/write');
    } else {
      alert('로그인 후에 이용 가능합니다.');
      navigate('/signin');
    }
  };

  const onHandleSingOut = () => {
    signOutMember({
      nickname: jwt_decode(getCookie('authorization')).sub,
    });
    removeCookie('authorization');
    window.sessionStorage.setItem('refresh-token', '');
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  const onClickSearch = useCallback(() => {
    setSearchKeyword(keyword);
    navigate(`/search`);
  }, [keyword]);

  const onKeyUpSearch = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        if (e.target.value.length > 0) {
          setSearchKeyword(keyword);
          navigate(`/search`);
        }
      }
    },
    [keyword]
  );

  const ProfilPage = () => {
    if (getCookie('authorization') !== undefined) {
      const nickname = jwt_decode(getCookie('authorization')).sub;
      navigate(`/mypage/${nickname}`);
    }
  };
  return (
    <Fragment>
      <HeaderContainerDiv>
        <HeaderContainer>
          <HeaderDiv>
            <LeftDiv>
              <LogoDiv onClick={() => navigate('/')}>
                <img src={HeaderlargeLogo} backgrond='white' alt='로고이미지' />
              </LogoDiv>

              <SearchDiv>
                <SearchIconDiv onClick={onClickSearch}>
                  <img src={Search} backgrond='white' alt='검색' />
                </SearchIconDiv>
                <Input
                  _value={keyword}
                  _onChange={(e) => setKeyword(e.target.value)}
                  _onKeyUp={(e) => onKeyUpSearch(e)}
                  _style={{
                    width: '100%',
                    height: '36px',
                    border: '1px solid black',
                    bd_color: 'rgba(40, 202, 124, 1)',
                    bd_radius: '44px',
                    pd_left: '50px',
                  }}
                  _placeholder={'Search'}
                />
              </SearchDiv>
            </LeftDiv>
            <RightDiv>
              <ProfileDiv>
                {getCookie('authorization') === undefined ? (
                  <Fragment></Fragment>
                ) : myProfileImgIsLoaded ? (
                  <ProfileImg
                    src={
                      myProfileImg === null
                        ? profileImgArr[random]
                        : myProfileImg === ''
                        ? profileImgArr[random]
                        : myProfileImg
                    }
                    alt='프로필'
                    onClick={ProfilPage}
                  ></ProfileImg>
                ) : (
                  <Fragment></Fragment>
                )}
              </ProfileDiv>
              <BtmDiv>
                <Button
                  _style={{
                    width: '122px',
                    height: '45px',
                    bg_color: '#28CA7C',
                    bd_radius: '11px',
                    color: 'rgba(255, 255, 255, 1)',
                    ft_size: '12',
                  }}
                  _text={'업로드'}
                  _onClick={uploadHandle}
                />
                {getCookie('authorization') !== undefined ? (
                  <Button
                    _style={{
                      width: '122px',
                      height: '45 px',
                      bg_color: '#F9F9F9',
                      bd_radius: '11px',
                      color: 'rgba(0, 0, 0, 1)',
                      ft_size: '12',
                      bd_px: '1px',
                      bd_color: 'black',
                    }}
                    _text={'로그아웃'}
                    _onClick={onHandleSingOut}
                  />
                ) : (
                  <Button
                    _style={{
                      width: '122px',
                      height: '45px',
                      bg_color: '#F9F9F9',
                      bd_radius: '11px',
                      color: 'rgba(0, 0, 0, 1)',
                      ft_size: '12',
                      bd_px: '1px',
                      bd_color: 'black',
                    }}
                    _text={'로그인'}
                    _onClick={() => navigate('/signin')}
                  />
                )}
              </BtmDiv>
            </RightDiv>
          </HeaderDiv>
        </HeaderContainer>
      </HeaderContainerDiv>
    </Fragment>
  );
};

export default Header;
