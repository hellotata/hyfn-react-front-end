import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from 'fixed-data-table-2';

const DataField = ({rowIndex, data, col, metrics, ...props}) => {
  let remote_id = data[rowIndex] ? data[rowIndex].remote_id : null;
  let filteredObj = metrics.filter((element) => element['remote_id'] === remote_id)[0];
  let cellData = filteredObj ? filteredObj[col] : null;
  return (
    <Cell {...props}>
      {cellData}
    </Cell>
  );
}

DataField.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  col: PropTypes.string.isRequired,
  metrics: PropTypes.array.isRequired
};

export default DataField;