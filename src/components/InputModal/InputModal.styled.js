import styled from "styled-components";
import palette from "../../util/styles/palette";

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.16);
`;
const ModalBody = styled.div`
  position: fixed;
  z-index: 3;
  margin: 5rem auto;
  left: 0;
  right: 0;
  width: 320px;
  border-radius: 20px;
  background: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  & > * {
    &:first-child {
      margin-top: 16px;
    }
    margin-left: 16px;
    margin-right: 16px;
  }

  p.title {
    font-size: 16pt;
    font-weight: bold;
    color: #333;
  }

  .content {
    margin-top: 16px;
  }
`;

const Input = styled.input`
  font-size: 1rem;
  display: flex;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  width: 80%;
  margin: 30px;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid ${palette.cyan[6]};
  }
`;

const ModalButtonWrap = styled.div`
  margin: 0;
  margin-top: 8px;
  border-top: 1px solid #bebebe;

  p {
    font-size: 12px;
    color: black;
    display: flex;
    justify-content: center;
    font-weight: bold;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const LoginRegisterBtn = styled.div`
  border-radius: 10px;
  width: 30%;
  margin: 0 auto;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: ${palette.cyan[6]};

  &:hover {
    cursor: pointer;
    background: ${palette.cyan[8]};
  }
`;

export { ModalButtonWrap, ModalBody, ModalOverlay, Input, LoginRegisterBtn };
