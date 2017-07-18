import { Map, List, fromJS } from 'immutable';
import { GET_ADS_METRICS } from '../constants/actionTypes';

const initalState = Map({
  "column_names": List(),
  "rows": List(),
})

const adsMetrics = (state = initalState, action) => {
  switch (action.type) {
  case GET_ADS_METRICS: 
    return state.set("column_names", fromJS(action.payload.column_names)).set("rows", fromJS(action.payload.rows));
  default:
    return state;
  }
};

export default adsMetrics;
