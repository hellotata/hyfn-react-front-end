import { combineReducers } from 'redux';

import ads from './ads';
import adsMetrics from './adsMetrics';

export default combineReducers({
  ads,
  adsMetrics
});
