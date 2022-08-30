import styled from "styled-components";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { FiSearch } from "react-icons/fi";

const Header = () => {
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
                    bg_color: '#F4F4F4',
                    bd_radius: '44px',
                    pd_left: '50px'
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
                    width: "124px",
                    height: "40px",
                    bg_color: "rgba(0, 0, 0, 1)",
                    bd_radius: "11px",
                    color: "rgba(255, 255, 255, 1)",
                    ft_size: "12px",
                    
                  }}
                  _text={"업로드"}
                />
                <Button
                  _style={{
                    width: "124px",
                    height: "40px",
                    bg_color: "rgba(0, 0, 0, 1)",
                    bd_radius: "11px",
                    color: "rgba(255, 255, 255, 1)",
                    ft_size: "12px",
                  }}
                  _text={"로그인"}
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

/* font-size: ${(props) => props.theme.fontSizes.small}; */

const HeaderContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  width: ${(props) => props.theme.deviceSizes.tabletL};
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 24px;
  margin-top: 64px;
  background-color: #eeeceb;
`;

const HeaderDiv = styled.div`
  width: 976px;
  height: auto;
  display: flex;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  padding: 8px;
  flex-direction: row;
  gap: 41px;
  align-items: center;
  border-radius: 10px;
`;

const LogoDiv = styled.div`
  width: 48px;
  height: 48px;
  
  
  background-color: black;
`;

const SearchDiv = styled.div`
  width: 524px;
  height: 36px;
  border-radius: 44px;
  display: flex;
  flex-direction: row;
  background-color: white;
  align-items: center;
  gap: 15px;
  background: #F4F4F4;
  position: relative;
`;

const SearchIconDiv = styled.div`
  height: 20px;
  margin-left: 16px;
  position: absolute;
`;

const LeftDiv = styled.div`

  display: flex;
  flex-direction: row;
  margin-left: 22px;
  gap: 15px;
  align-items: center;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

const ProfileDiv = styled.div`
  width: 42px;
  height: 42px;
`;

const ProfileImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

const BtmDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
`;
