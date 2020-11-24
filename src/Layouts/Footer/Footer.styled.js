import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../util/styles/palette";

const FooterBorder = styled.div`
  background: ${palette.gray[2]};
  border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  position: absolute;
  height: 20%;
  bottom: 0;
  right: 0;
  left: 0;
`;

const FooterItemBorder = styled.div`
  display: flex;
  outline: none !important;
  margin: 0 auto;
  min-width: 400px;
`;

const LinkItem = styled(Link)`
  margin-right: 20px;
`;

export { FooterBorder, FooterItemBorder, LinkItem };
