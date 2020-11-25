import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../util/styles/palette";

const HeaderBorder = styled.div`
  background: white;
  border-bottom: 1px solid ${palette.gray[5]};
  width: 100%;
`;

const Logo = styled.div`
  border-radius: 10px;
  color: white;
  background: black;
  margin: 0 auto;
  padding: 1px;
`;
export { HeaderBorder, Logo };
