import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
class Header extends Component {
  handleChangeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };
  render() {
    return (
      <div className="header-container">
        <div className="oheader-tabs-container">
          <nav className="navbar navbar-light bg-light mx-3">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button">
                <i className="navbar-toggler-icon"></i>
              </button>
            </div>
          </nav>
          <Navigator menus={adminMenu} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguageAppRedux: (language) =>
      dispatch(actions.changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
