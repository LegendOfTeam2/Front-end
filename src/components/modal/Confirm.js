// React

// Redux

// Package
import { AiOutlineExclamation } from "react-icons/ai";

// Element
import Button from "../../elements/Button";

// styled


import styled from "styled-components";

const Confirm = () => {
  return (
    <CfContainer>
      <CfInBox>
        <CfTopicon>
          <div>
            <AiOutlineExclamation size={139} />
          </div>
        </CfTopicon>
        <CfTopTextDiv>
          <CfTopTextSpan>리드미는 아티스트님과 함께 하고싶습니다!</CfTopTextSpan>
        </CfTopTextDiv>
        <CfBtmTextDiv>
          <CfBtmTextSpan>지금까지 입력하신 모든 정보가 삭제됩니다.</CfBtmTextSpan>
          <CfBtmTextSpan>정말 삭제하시겠습니다까?</CfBtmTextSpan>
        </CfBtmTextDiv>
        <CfWlDiv>
          <CfWlDivDiv>
            <Button
              _style={{
                width: "109px",
                height: "60px",
                bg_color: "rgba(0, 0, 0, 1)",
                bd_radius: "11px",
                color: "rgba(255, 255, 255, 1)",
                ft_size: "14",
                ft_weight: "700",
              }}
              _text={"삭제하기"}
            />
  
            <Button
              _style={{
                width: "109px",
                height: "60px",
                bg_color: "rgba(0, 0, 0, 1)",
                bd_radius: "11px",
                color: "rgba(255, 255, 255, 1)",
                ft_size: "14",
                ft_weight: "700",
              }}
              _text={"취소하기"}
            />

          </CfWlDivDiv>
        </CfWlDiv>
      </CfInBox>
    </CfContainer>
  );
};

export default Confirm;



export const CfContainer = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
`;
export const CfInBox = styled.div`
width: 620px;
height: auto;
display: flex;
justify-content: center;
flex-direction: column;
background-color: #F9F9F9;
padding: 47px;
border-radius: 40px;
`;
export const CfTopicon = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
`;

export const CfTopTextDiv = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
margin-top: 5px;
`;
export const CfTopTextSpan = styled.span`
font-size: ${(props) => props.theme.fontSizes.sm};
line-height: ${(props) => props.theme.lineHeight.xs};
font-weight: ${(props) => props.theme.fontWeight.Regular}; ;
`;

export const CfBtmTextDiv = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
margin-top: 22px;
`;
export const CfBtmTextSpan = styled.span`
font-size: ${(props) => props.theme.fontSizes.xxxl};
line-height: ${(props) => props.theme.lineHeight.xxxl};
font-weight: ${(props) => props.theme.fontWeight.Bold}; ;
`;

export const CfWlDiv = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
flex-direction: row;
text-align: center;
margin-top: 37px;
margin-bottom: 19px;
`;

export const CfWlDivDiv = styled.div`
width: auto;
height: auto;
display: flex;
gap: 19px;
`;