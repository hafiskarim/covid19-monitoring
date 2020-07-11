import React, { Component } from "react";
import { connect } from "react-redux";
import { getCases } from "../actions/casesAction";
import IndonesiaCases from "./IndonesiaCases";
import MalaysiaCases from "./MalaysiaCases";
import SingaporeCases from "./SingaporeCases";

class CasesByCountry extends Component {
  componentDidMount() {
    this.props.onGetCases();
  }
  render() {
    const totalCasesByCountry = this.props.cases.casesData.Countries;
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-4 mb-4">
            <IndonesiaCases propsIndonesiaCases={totalCasesByCountry} />
          </div>
          <div className="col-sm-4 mb-4">
            <MalaysiaCases propsMalaysiaCases={totalCasesByCountry} />
          </div>
          <div className="col-sm-4 mb-4">
            <SingaporeCases propsSingaporeCases={totalCasesByCountry} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cases: state.cases,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCases: () => dispatch(getCases()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CasesByCountry);
