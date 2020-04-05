import update from "immutability-helper";
import { connect } from "react-redux";
import { applyScope } from "./utils";
import { pageSelector } from "./selectors";

import { createSelector } from "reselect";
import parseData from "@utils/Parser";

const scope = "report";

const initialState = {
  result: [],
  mode: undefined,
  region: ["KA"],
  service: []
};

export const types = applyScope(scope, [
  "SET_RESULT",
  "SEARCH",
  "SET_MODE",
  "SET_REGION",
  "SET_SERVICE"
]);

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_RESULT:
      return update(state, {
        result: { $set: action.result }
      });
    case types.SET_MODE:
      return update(state, {
        mode: { $set: action.mode }
      });
    case types.SET_REGION:
      return update(state, {
        region: { $set: action.region }
      });
    case types.SET_SERVICE:
      return update(state, {
        service: { $set: action.service }
      });
  }
  return state;
};

// dispatch actions
const mapDispatchToProps = (dispatch) => ({
  setResult: (result) =>
    dispatch({
      type: types.SET_RESULT,
      result
    }),
  setMode: (mode) =>
    dispatch({
      type: types.SET_MODE,
      mode
    }),
  setRegion: (region) =>
    dispatch({
      type: types.SET_REGION,
      region
    }),
  setService: (service) =>
    dispatch({
      type: types.SET_SERVICE,
      service
    }),
  search: (params) =>
    dispatch({
      type: types.SEARCH,
      params
    })
});

// parsed result selector
const getResult = (state) => state.report.result;
export const parsedResultSelector = createSelector([getResult], (result) => {
  const parsedResult = parseData(result);
  return parsedResult;
});

// state from root state
const mapStateToProps = pageSelector(scope, { result: parsedResultSelector });

// connect
export const connecter = (Report) =>
  connect(mapStateToProps, mapDispatchToProps)(Report);

export default reportReducer;