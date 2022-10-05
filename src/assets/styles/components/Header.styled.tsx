import styled from 'styled-components';

export const HeaderContainerDiv : any = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #1b1e2f;
  position: fixed;
  border-bottom: 2px solid #28ca7c;
  z-index: 10;
`;

export const HeaderContainer : any = styled.div`
  width: 1024px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const HeaderTopDiv : any = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 0.3px solid #28ca72;
`;

export const HeaderTopLeftSpan : any = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xxs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: rgba(255, 255, 255, 1);
  &:hover {
    cursor: pointer;
  }
`;
export const HeaderTopRightSpan : any = styled.span`
  z-index: 10;
  line-height: ${(props) => props.theme.lineHeight.xxs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: rgba(40, 202, 114, 1);
  &:hover {
    cursor: pointer;
  }
`;

export const HeaderDiv : any = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  border-radius: 10px;
  margin-top: 18px;
`;

export const LogoDiv : any = styled.div`
  width: auto;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`;

export const SearchDiv : any = styled.div`
  width: 551px;
  height: 34px;
  border-radius: 44px;
  display: flex;
  flex-direction: row;
  background-color: white;
  align-items: center;
  gap: 15px;
  background: #f4f4f4;
  position: relative;
`;

export const SearchIconDiv : any = styled.div`
  margin-left: 12px;
  position: absolute;
  &:hover {
    cursor: pointer;
  }
  top: 2px;
`;

export const LeftDiv : any = styled.div`
  display: flex;
  flex-direction: row;
  gap: 37px;
  align-items: center;
`;

export const RightDiv : any = styled.div`
  display: flex;
  flex-direction: row;
  gap: 37px;
  align-items: center;
`;

export const ProfileDiv : any = styled.div`
  width: 56px;
  height: 56px;
`;

export const ProfileImg : any = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

export const BtmDiv : any = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;
`;
