import React from 'react';
import AdsTable from '../AdsTable';

// Wrapper component to provide height for react-dimensions to work with fixed-data-table-2
const Wrapper = () => {
  return (
    <div style={{minWidth:'500px', height:'500px'}}>
      <AdsTable />
    </div>
  )
}

export default Wrapper;