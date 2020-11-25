import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../util/styles/palette";

const NavigationBorder = styled.div`
  z-index: 1;
`;
const BodyBorder = styled.div`
  display: flex;
  width: 60%;
  height: 60rem;
  margin: 0 auto;
  overflow-y: scroll;
`;

const FooterBorder = styled.div`
  display: flex;
  width: 100%;
  z-index: 1;
`;

export { BodyBorder, NavigationBorder, FooterBorder };
