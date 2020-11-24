import React, { Component } from "react";
import { FooterBorder, FooterItemBorder, LinkItem } from "./Footer.styled";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div>
      <FooterBorder>
        <FooterItemBorder>
          {footerlist.map((footer) => {
            return <FooterItem key={footer.id} content={footer.content} />;
          })}
        </FooterItemBorder>
      </FooterBorder>
    </div>
  );
};
export default Footer;
