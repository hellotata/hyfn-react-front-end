import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAds, getAdsMetrics } from '../../actions';
import { Table, Column, Cell } from 'fixed-data-table-2';
import Dimensions from 'react-dimensions';
import AdName from '../../components/AdName';
import DataField from '../../components/DataField';

class AdsTable extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAds();
    this.props.getAdsMetrics();
  }

  render() {
    const column_names = this.props.adsMetrics.get('column_names').toJS();
    const rows = this.props.adsMetrics.get('rows').toJS();
    const ads = this.props.ads.get('ads').toJS();
    return (
      <Table rowsCount={100} rowHeight={50} width={this.props.containerWidth} height={this.props.containerHeight} headerHeight={50}>
        <Column 
            header={<Cell>Ad Name</Cell>} 
            cell={props => (
              <AdName data={ads} {...props} />
            )} 
            width={200}
            fixed={true}
        />
        {column_names.map((element, idx) => {
          return (
            <Column key={idx} header={<Cell>{element}</Cell>} 
            cell={props => (
              <DataField data={ads} metrics={rows} col={element} {...props} />
            )}
            width={200}  />
          );
        })}
      </Table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ads: state.ads,
    adsMetrics: state.adsMetrics    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAds: () => dispatch(getAds()),
    getAdsMetrics: () => dispatch(getAdsMetrics())
  };
};

AdsTable.propTypes = {
  ads: PropTypes.object.isRequired,
  adsMetrics: PropTypes.object.isRequired,
  getAds: PropTypes.func.isRequired,
  getAdsMetrics: PropTypes.func.isRequired
};

export default Dimensions()(connect(mapStateToProps, mapDispatchToProps)(AdsTable));