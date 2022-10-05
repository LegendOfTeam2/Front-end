import styled from 'styled-components';

export const PromotionalContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1e2f;
`;

export const PromotionalDiv = styled.div`
  width: auto;
  height: auto;
  margin-top: 120px;
  display: flex;
  position: relative;
`;

export const PromotionalDivBtn = styled.div`
  width: 200px;
  height: 100px;
  bottom: 340px;
  right: 400px;
  position: absolute;
  &:hover {
    cursor: pointer;
  }
`;

export const PromotionalImg = styled.img`
  width: 1000px;
  height: auto;
`;
