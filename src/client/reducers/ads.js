import { Map, List, fromJS } from 'immutable';
import { GET_ADS } from '../constants/actionTypes';

const initalState = Map({
  ads: List()
})

const ads = (state = initalState, action) => {
  switch (action.type) {
  case GET_ADS: 
    return state.set('ads', fromJS(action.payload));
  default:
    return state;
  }
};

export default ads;
