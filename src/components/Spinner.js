/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

function Spinner() {
  return <div css={{ animation: `${spin} 2000ms ease infinite` }}>&#9741;</div>;
}

export default Spinner;
