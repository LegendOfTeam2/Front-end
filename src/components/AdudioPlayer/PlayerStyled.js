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
`;

export const Navigationwrapper = styled.div`
  min-width: 100%;
  background-color: rgba(119, 119, 119, 0.781);
  height: 5px;
  border-radius: 30px;
  cursor: pointer;
`;

export const Seekbar = styled.div`
  width: 0;
  height: 100%;
  background-color: rgb(24, 128, 3);
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
