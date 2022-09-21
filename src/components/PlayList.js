// Packages

// Elements

// Assets
import {
  AboutSong,
  DisLike,
  WhiteCollaborate24,
} from '../assets/images/image';
import styled from 'styled-components';


const PlayList = ({ isOpen, playListMember }) => {

  console.log(playListMember);

  return (
      <PlayListAllContainer ListyIndex={isOpen ? 'flex' : 'none' }  >
        <PlayListContainer >
          <PlayListDiv>
            <PlayListTopDiv>
              <PlayListTopLeftSpan>재생목록</PlayListTopLeftSpan>
              <PlayListTopRightSpan>곡({playListMember.length})</PlayListTopRightSpan>
            </PlayListTopDiv>
            <PlayListMidDiv>
              <PlayListMidDivDiv>
                <PlayListTopLeftDiv>
                  <MidDivDivSpan>제목</MidDivDivSpan>
                </PlayListTopLeftDiv>
                <MidMidDivDiv>
                  <MidDivDivSpan>아티스트명</MidDivDivSpan>
                  <MidDivDivSpan>재생시간</MidDivDivSpan>
                </MidMidDivDiv>
              </PlayListMidDivDiv>

              <MidRightDivDiv>
                <MidDivDivSpan>작품정보</MidDivDivSpan>
                <MidDivDivSpan>좋아요</MidDivDivSpan>
                <MidDivDivSpan>콜라보</MidDivDivSpan>
              </MidRightDivDiv>
            </PlayListMidDiv>
            <BtmAllDiv>
            {playListMember.map((x) => 
              <BtmMapDiv key={x.postId}>
                <BtmMapImgDiv>
                  <BtmMapImg
                    src={x.imageUrl}
                    alt='커버 이미지'
                  ></BtmMapImg>
                </BtmMapImgDiv>
                <BtmMapImgSpan>{x.title}</BtmMapImgSpan>
                <BtmMapArtistDiv>
                  <BtmMapArtistSpan>{x.nickname}</BtmMapArtistSpan>
                  <BtmMapArtistSpan> 00 : 00 </BtmMapArtistSpan>
                </BtmMapArtistDiv>
                <BtmMapIconDiv>
                  <img src={AboutSong} alt='곡정보' />
                  <img src={DisLike} alt='곡정보' />
                  <img src={WhiteCollaborate24} alt='곡정보' />
                </BtmMapIconDiv>
              </BtmMapDiv>
            
            ) }
            </BtmAllDiv>
            

          </PlayListDiv>
        </PlayListContainer>
      </PlayListAllContainer>
  );
};

export default PlayList;

export const PlayListAllContainer = styled.div`
  width: 100%;
  height: auto;
  display: ${(props) => props.ListyIndex};
  justify-content: center;
  position: fixed;
  bottom: 200px;
  left: 0;
`;

export const PlayListContainer = styled.div`
  width: 1024px;
  max-height: auto;
  background-color: rgba(27, 30, 47, 0.8);
  border: 1px solid #28ca72;
  box-shadow: 0px 1px 31px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 10px;
`;

export const PlayListDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 63px 72px;
  display: flex;
  flex-direction: column;
`;

export const PlayListTopDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 15px;
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
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
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
  overflow:auto;
  scrollbar-width: none; 
  ::-webkit-scrollbar {
    display: none; 
}
  max-height: 415.5px;
  display: flex;
  flex-direction: column;
`;

export const BtmMapDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 5px 0;
  gap: 24px;
  border-bottom: 0.3px solid rgba(255, 255, 255, 1);
  padding: 12.5px 0;
`;

export const BtmMapImgDiv = styled.div`
  width: 56px;
  height: 56px;
`;

export const BtmMapImg = styled.img`
  width: 56px;
  height: 56px;
`;

export const BtmMapImgSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.xs};
  width: 50px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const BtmMapArtistDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 208px;
  margin-left: 123px;
`;

export const BtmMapArtistSpan = styled.span`
  color: #ffffff;
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.xs};
  width: 50px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const BtmMapIconDiv = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 46px;
  margin-left: 75px;
  margin-right: 5px;
`;
