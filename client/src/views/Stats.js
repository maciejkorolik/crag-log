import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchItems } from 'actions';
import AppTemplate from 'templates/AppTemplate';
import ColumnChart from 'components/molecules/ColumnChart/ColumnChart';
import PieChart from 'components/molecules/PieChart/PieChart';
import LoadingIndicator from 'components/atoms/LoadingIndicator/LoadingIndicator';
import SummaryCard from 'components/molecules/SummaryCard/SummaryCard';
import FavCard from 'components/molecules/FavCard/FavCard';
import CragsCard from 'components/molecules/CragsCard/CragsCard';

const StyledWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  overflow-y: auto;
  padding: 30px;
  display: flex;
  justify-content: center;
`;

const StatsPanel = styled.div`
  width: 100%;
  max-width: 1250px;
  height: 100%;
  display: grid;
  grid-gap: 15px;
  grid-auto-columns: 1fr;
  grid-template-areas:
    'a a a b b b b b c c c c'
    'd d d d d d d e e e e e';
  @media (max-width: 1200px) {
    max-width: 1000px;
    grid-template-areas:
      'a a a a c c c c'
      'b b b b b e e e'
      'd d d d d d d d';
  }
`;

class Stats extends Component {
  componentDidMount() {
    const { fetchClimbs } = this.props;
    fetchClimbs();
  }

  render() {
    const { climbs, isLoading } = this.props;
    return (
      <AppTemplate>
        <StyledWrapper>
          {isLoading && <LoadingIndicator>Loading...</LoadingIndicator>}
          <StatsPanel>
            <SummaryCard data={climbs} />
            <PieChart data={climbs} />
            <FavCard data={climbs} />
            <ColumnChart data={climbs} />
            <CragsCard data={climbs} />
          </StatsPanel>
        </StyledWrapper>
      </AppTemplate>
    );
  }
}

Stats.propTypes = {
  climbs: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      grade: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      crag: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
  fetchClimbs: PropTypes.func.isRequired,
};

Stats.defaultProps = {
  climbs: [],
};

const mapStateToProps = state => {
  const { climbs, isLoading } = state;
  return { climbs, isLoading };
};

const mapDispatchToProps = dispatch => ({
  fetchClimbs: () => dispatch(fetchItems()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Stats);
