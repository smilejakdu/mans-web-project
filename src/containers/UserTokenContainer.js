import React, { useState } from "react";

// connect
import { connect } from "react-redux";

import * as searchInputActions from "../modules/search_input";

import { tokenAdd } from "../modules/usertoken";
import InputModal from "../components/InputModal/InputModal";

const UserTokenContainer = ({ tokenData }) => {
  return <InputModal tokenData={tokenData} />;
};

const mapStateToProps = (state) => ({
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  tokenData: (token) => dispatch(tokenAdd(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTokenContainer);
