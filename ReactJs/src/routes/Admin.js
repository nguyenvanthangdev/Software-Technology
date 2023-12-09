import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import PeopleManage from "../containers/Admin/PeopleManage";
import Header from "../containers/Header/Header";
class System extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="system-container">
          <div className="system-list">
            <Switch>
              <Route path="/people" component={PeopleManage} />
              <Route
                component={() => {
                  return <Redirect to={"/people"} />;
                }}
              />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
