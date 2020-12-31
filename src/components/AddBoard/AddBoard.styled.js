import styled from "styled-components";
import palette from "../../utils/styles/palette";

const WriteContainer = styled.div`
  position: relative;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
`;

const WriteBtn = styled.button`
  float: right;
`;

export {TextArea, WriteBtn, WriteContainer}

