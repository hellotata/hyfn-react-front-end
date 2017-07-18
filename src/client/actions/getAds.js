import { GET_ADS } from '../constants/actionTypes';

const getAds = () => dispatch => {
  fetch('/ads', {
    credentials: 'include'
  })
  .then(res => res.json())
  .then(ads => {
    dispatch({
      type: GET_ADS,
      payload: ads.ads
    });
  });
};

export default getAds;
