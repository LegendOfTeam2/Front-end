import styled from "styled-components";


export const HeaderContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #eeeceb;
  position: fixed;
  z-index: 4;
  border-bottom: 1px solid #28CA7C ;
`;

export const HeaderContainer = styled.div`
  width: ${(props) => props.theme.deviceSizes.tabletL};
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin-top: 64px;
`;

export const HeaderDiv = styled.div`
  width: 976px;
  height: auto;
  display: flex;

  padding: 8px;
  flex-direction: row;
  gap: 41px;
  align-items: center;
  border-radius: 10px;
`;

export const LogoDiv = styled.div`
  width: auto;
  height: auto;

`;

export const SearchDiv = styled.div`
  width: 440px;
  height: 34px;
  border-radius: 44px;
  display: flex;
  flex-direction: row;
  background-color: white;
  align-items: center;
  gap: 15px;
  background: #F4F4F4;
  position: relative;
`;

export const SearchIconDiv = styled.div`
  height: 20px;
  margin-left: 16px;
  position: absolute;
`;

export const LeftDiv = styled.div`

  display: flex;
  flex-direction: row;
  margin-left: 22px;
  gap: 37px;
  align-items: center;
`;

export const RightDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 37px;
  align-items: center;
`;

export const ProfileDiv = styled.div`
  width: 42px;
  height: 42px;
`;

export const ProfileImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  &:hover {
      cursor: pointer;
    }
`;

export const BtmDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
`;
