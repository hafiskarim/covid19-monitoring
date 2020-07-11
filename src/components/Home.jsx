import React, { Component } from "react";
import { connect } from "react-redux";
import { getCases } from "../actions/casesAction";

class Home extends Component {
  componentDidMount() {
    this.props.onGetCases();
  }

  render() {
    const globalCases = this.props.cases.casesData.Global;
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 mb-3">
            <div className="card custom--bg">
              <div className="card-body">
                <div className="case confirmed">
                  {globalCases ? globalCases.TotalConfirmed : null}
                </div>
                <div className="status">Confirmed</div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mb-3">
            <div className="card custom--bg">
              <div className="card-body">
                <div className="case recovered">
                  {globalCases ? globalCases.TotalRecovered : null}
                </div>
                <div className="status">Recovered</div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mb-3">
            <div className="card custom--bg">
              <div className="card-body">
                <div className="case deaths">
                  {globalCases ? globalCases.TotalDeaths : null}
                </div>
                <div className="status">Deaths</div>
              </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
