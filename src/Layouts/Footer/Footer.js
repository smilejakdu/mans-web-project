import React, { Component } from "react";
import {
  FooterBorder,
  FooterItemBorder,
  LinkItem,
  FooterBadge,
} from "./Footer.styled";
import { Badge } from "react-bootstrap";

const FooterItem = ({ key, content }) => {
  return <LinkItem key={key}>{content}</LinkItem>;
};

const Footer = () => {
  const footerlist = [
    {
      id: 1,
      content: "제휴문의",
    },
    {
      id: 2,
      content: "고객문의",
    },
    {
      id: 3,
      content: "이용약관",
    },
    {
      id: 4,
      content: "개인정보처리방침",
    },
  ];

  return (
    <FooterBorder>
      <FooterItemBorder>
        {footerlist.map((footer) => {
          return <FooterItem key={footer.id} content={footer.content} />;
        })}
        <FooterBadge>
          <Badge>man's commerce</Badge>
        </FooterBadge>
      </FooterItemBorder>
    </FooterBorder>
  );
};

export default Footer;
