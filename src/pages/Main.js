import { Fragment } from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Fragment>
      <TextTest>test</TextTest>
    </Fragment>
  )
};

export default Main;

const TextTest = styled.span`
  font-size: 1rem;
`