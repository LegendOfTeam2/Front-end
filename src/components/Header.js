// React

// Package
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

// Element
import Button from '../elements/Button';
import Input from '../elements/Input';

// Utils
import { getCookie } from '../utils/cookie';

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
import { HeaderlargeLogo } from '../assets/images/image';


const Header = () => {
  const navigate = useNavigate();

  const uploadHandle = () => {
    if (getCookie('authorization') !== undefined) {
      navigate('/write');
    } else {
      alert('로그인 후에 이용 가능합니다.');
      navigate('/signin');
    }
  };

  const onHandleSingOut = () => {};

  return (
    <>
      <HeaderContainerDiv>
        <HeaderContainer>
          <HeaderDiv>
            <LeftDiv>
              <LogoDiv><img src={HeaderlargeLogo} backgrond='white' alt='로고이미지'/></LogoDiv>

              <SearchDiv>
                <SearchIconDiv>
                  <FiSearch size={'20'} />
                </SearchIconDiv>
                <Input
                  _style={{
                    width: '100%',
                    height: '36px',
                    border: '1px solid black',
                    bd_color: 'rgba(40, 202, 124, 1)',
                    bg_color: '#F4F4F4',
                    bd_radius: '44px',
                    pd_left: '50px',
                  }}
                  _placeholder={'Search'}
                />
              </SearchDiv>
            </LeftDiv>
            <RightDiv>
              <ProfileDiv>
                <ProfileImg
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB7pAaft41alybo-nWe0sQZg0kHIUUkrFvA&usqp=CAU'
                  alt='프로필'
                ></ProfileImg>
              </ProfileDiv>
              <BtmDiv>
                <Button
                  _style={{
                    width: '122px',
                    height: '45px',
                    bg_color: 'rgba(0, 0, 0, 1)',
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
                      bg_color: 'rgba(255, 255, 255, 1)',
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
                      bg_color: 'rgba(255, 255, 255, 1)',
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
    </>
  );
};

export default Header;
