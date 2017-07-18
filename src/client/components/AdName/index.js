import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from 'fixed-data-table-2';

const AdName = ({rowIndex, data, ...props}) => (
  <Cell {...props}>
    {data[rowIndex] ? data[rowIndex].name : null}
  </Cell>
);

AdName.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired
};

export default AdName;
