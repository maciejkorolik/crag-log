import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchItems } from 'actions';
import Fade from 'react-reveal/Fade';
import AppTemplate from 'templates/AppTemplate';
import ColumnChart from 'components/molecules/ColumnChart/ColumnChart';
import PieChart from 'components/molecules/PieChart/PieChart';
import LoadingIndicator from 'components/atoms/LoadingIndicator/LoadingIndicator';
import SummaryCard from 'components/molecules/SummaryCard/SummaryCard';
import FavCard from 'components/molecules/FavCard/FavCard';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  justify-content: center;
`;

const StatsPanel = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 15px; */
  /* background-color: ${({ theme }) => theme.color5}; */
  border-radius: 20px;
  /* box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25); */
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(12, 1fr);
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
        <Fade>
          <StyledWrapper>
            {isLoading && <LoadingIndicator>Loading...</LoadingIndicator>}
            {climbs && (
              <StatsPanel>
                <SummaryCard data={climbs} />
                <ColumnChart data={climbs} />
                <PieChart data={climbs} />
                <FavCard data={climbs} />
              </StatsPanel>
            )}
          </StyledWrapper>
        </Fade>
      </AppTemplate>
    );
  }
}

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
