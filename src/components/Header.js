// React

// Package
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// Element
import Button from "../elements/Button";
import Input from "../elements/Input";

// styled
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
} from "../assets/styles/components/Header.styled";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainerDiv>
        <HeaderContainer>
          <HeaderDiv>
            <LeftDiv>
              <LogoDiv></LogoDiv>

              <SearchDiv>
                <SearchIconDiv>
                  <FiSearch size={"20"} />
                </SearchIconDiv>
                <Input
                  _style={{
                    width: "100%",
                    height: "36px",
                    border: "0px solid black",
                    outline: "none",
                    bg_color: "#F4F4F4",
                    bd_radius: "44px",
                    pd_left: "50px",
                  }}
                  _placeholder={"Search"}
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
                    width: "124px",
                    height: "40px",
                    bg_color: "rgba(0, 0, 0, 1)",
                    bd_radius: "11px",
                    color: "rgba(255, 255, 255, 1)",
                    ft_size: "12",
                  }}
                  _text={"업로드"}
                />
                <Button
                  _style={{
                    width: "124px",
                    height: "40px",
                    bg_color: "rgba(255, 255, 255, 1)",
                    bd_radius: "11px",
                    color: "rgba(0, 0, 0, 1)",
                    ft_size: "12",
                    bd_px: '1px',
                    bd_color: 'black'
                  }}
                  _text={"로그인"}
                  _onClick={() => navigate('/signin')}
                />
              </BtmDiv>
            </RightDiv>
          </HeaderDiv>
        </HeaderContainer>
      </HeaderContainerDiv>
    </>
  );
};

export default Header;
