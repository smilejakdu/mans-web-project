import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../util/styles/palette";

const FooterBorder = styled.div`
  outline: none !important;
  background: ${palette.gray[2]};
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FooterItemBorder = styled.div`
  margin: 0 auto;
`;

const LinkItem = styled(Link)`
  justify-content: space-between;
  margin-right: 20px;
  height: 50px;
`;

const FooterBadge = styled.div`
  display: flex;
`;

export { FooterBorder, FooterItemBorder, LinkItem, FooterBadge };
