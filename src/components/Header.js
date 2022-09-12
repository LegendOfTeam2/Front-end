// React
import { Fragment, useState, useCallback, useEffect } from "react";

//Zustand
import useMemberStore from "../zustand/member";

// Package
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils/cookie";
import jwt_decode from "jwt-decode";
// Element
import Button from "../elements/Button";
import Input from "../elements/Input";

// Utils

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
} from "../assets/styles/components/Header.styled";
import { HeaderlargeLogo, Search } from "../assets/images/image";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const signOutMember = useMemberStore((state) => state.signOutMember);
  const getMyImage = useMemberStore((state) => state.getMyImage);

  useEffect(() => {
    if(getCookie("authorization") !== undefined){
      const nickname =jwt_decode(getCookie("authorization")).sub
      getMyImage({nickname}).then((res)=> {console.log(res);})
    }
    
  }, []);

  const uploadHandle = () => {
    if (getCookie("authorization") !== undefined) {
      navigate("/write");
    } else {
      alert("로그인 후에 이용 가능합니다.");
      navigate("/signin");
    }
  };

  const onHandleSingOut = () => {
    signOutMember({
      nickname: jwt_decode(getCookie("authorization")).sub,
    }).then((res) => {
      if (res) {
        alert("로그아웃 되었습니다.");
      }
    });
  };

  const onClickSearch = useCallback(() => {
    navigate(`/search/${keyword}`);
  }, [keyword]);

  const onKeyUpSearch = useCallback((e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        navigate(`/search/${keyword}`);
      }
    }
  });
  const ProfilPage = () => {
    if (getCookie("authorization") !== undefined) {
      const nickname = jwt_decode(getCookie("authorization")).sub;
      navigate(`/mypage/${nickname}`);
    } else {
      alert("로그인 후에 이용 가능합니다.");
      navigate("/signin");
    }
  };

  return (
    <Fragment>
      <HeaderContainerDiv>
        <HeaderContainer>
          <HeaderDiv>
            <LeftDiv>
              <LogoDiv onClick={() => navigate("/")}>
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
                    width: "100%",
                    height: "36px",
                    border: "1px solid black",
                    bd_color: "rgba(40, 202, 124, 1)",
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
                  onClick={ProfilPage}
                ></ProfileImg>
              </ProfileDiv>
              <BtmDiv>
                <Button
                  _style={{
                    width: "122px",
                    height: "45px",
                    bg_color: "#28CA7C",
                    bd_radius: "11px",
                    color: "rgba(255, 255, 255, 1)",
                    ft_size: "12",
                  }}
                  _text={"업로드"}
                  _onClick={uploadHandle}
                />
                {getCookie("authorization") !== undefined ? (
                  <Button
                    _style={{
                      width: "122px",
                      height: "45 px",
                      bg_color: "rgba(255, 255, 255, 1)",
                      bd_radius: "11px",
                      color: "rgba(0, 0, 0, 1)",
                      ft_size: "12",
                      bd_px: "1px",
                      bd_color: "black",
                    }}
                    _text={"로그아웃"}
                    _onClick={onHandleSingOut}
                  />
                ) : (
                  <Button
                    _style={{
                      width: "122px",
                      height: "45px",
                      bg_color: "rgba(255, 255, 255, 1)",
                      bd_radius: "11px",
                      color: "rgba(0, 0, 0, 1)",
                      ft_size: "12",
                      bd_px: "1px",
                      bd_color: "black",
                    }}
                    _text={"로그인"}
                    _onClick={() => navigate("/signin")}
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
