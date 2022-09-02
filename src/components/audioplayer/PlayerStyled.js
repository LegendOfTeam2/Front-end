import styled from "styled-components";

export const Playercontainer = styled.div`
  width: 50%;
  padding: 1rem;
  border: 1px solid rgb(141, 141, 141);
  border-radius: 10px;
  color: rgb(218, 218, 218);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: black;

  *{
    color: rgb(202, 202, 202);
  }
`;

export const Title = styled.div`
  font-size: inherit;
`;

export const Navigation = styled.div`
  width: 100%;
  position: relative;
`;

export const Navigationwrapper = styled.div`
  min-width: 100%;
  background-color: rgba(119, 119, 119, 0.781);
  height: 6px;
  border-radius: 30px;
  cursor: pointer;
`;

export const Seekbar = styled.div`
  width: 0;
  height: 100%;
  background-color: rgba(40, 202, 124, 1);
  border-radius: 30px;
  
`;



export const Controls = styled.div`
  font-size: inherit;
  display: flex;
  align-items: center;
`;

export const Btnaction = styled.span`
  font-size: 16px;

  margin: 0 1rem;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
export const BtnactionDiv = styled.div`
    margin-top: 10px;
`;

export const InputSty = styled.input`
  width: 100%;
  -webkit-appearance: none;
  background-color: rgba(40, 202, 124, 1);
  height: 6px;
  cursor: pointer;
  opacity: 1;
  margin: 0 auto;
  border-radius: 20px;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    background-color: white;
  }
  
`;

export const Seekbarthumb = styled.div`
  width: 15px;
  height: 15px;
  background-color: rgb(24, 128, 3);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
`;