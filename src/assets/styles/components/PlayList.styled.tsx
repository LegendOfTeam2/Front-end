import styled from 'styled-components';

interface StyledProps {
  ListyIndex: any
}

export const PlayListAllContainer : any = styled.div<StyledProps>`
  width: 100%;
  height: auto;
  display: ${(props) => props.ListyIndex};
  justify-content: center;
  position: fixed;
  bottom: 200px;
  left: 0;
`;

export const XboxDiv = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  right: 20px;
  top: 15px;
  z-index: 4;
  :hover {
    cursor: pointer;
  }
`;

export const PlayListContainer = styled.div`
  width: 1024px;
  max-height: auto;
  background-color: rgba(27, 30, 47, 0.8);
  border: 1px solid #28ca72;
  box-shadow: 0px 1px 31px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  position: relative;
`;

export const PlayListDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 63px 72px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const PlayListTopDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const PlayListMidALlDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const PlayListTopLeftDiv = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
`;

export const PlayListTopLeftSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: #28ca72;
`;

export const PlayListTopRihtRightSpan = styled.span`
  width: 66px;
  display: flex;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.sm};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.base};
  color: #25b868;
  :hover {
    cursor: pointer;
  }
`;

export const PlayListTopRightSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: #ffffff;
`;

export const PlayListMidDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ffffff;
  margin-top: 47px;
  padding-bottom: 13px;
`;

export const PlayListMidDivDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 205px;
  margin-left: 47px;
`;
export const MidDivDivSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: #ffffff;
`;

export const MidMidDivDiv = styled.div`
  max-width: 400px;
  height: auto;
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 380px;
  gap: 200px;
`;

export const MidRightDivDiv = styled.div`
  width: 300px;
  height: auto;
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  gap: 35px;
`;

export const BtmAllDiv = styled.div`
  width: 100%;
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  max-height: 415.5px;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.device.desktopL} {
    max-height: 125.5px;
  }
`;
