import { GET_ADS_METRICS } from '../constants/actionTypes';

const getAdsMetrics = () => dispatch => {
  fetch('/ads_metrics', {
    credentials: 'include'
  })
  .then(res => res.json())
  .then(adsMetrics => {
    dispatch({
      type: GET_ADS_METRICS,
      payload: adsMetrics
    });
  });
};

export default getAdsMetrics;
