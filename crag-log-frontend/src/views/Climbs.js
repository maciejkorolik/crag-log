import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import AppTemplate from 'templates/AppTemplate';
import ClimbCard from 'components/molecules/ClimbCard/ClimbCard';
import NewItemPanel from 'components/organisms/NewItemPanel/NewItemPanel';
import IconButton from 'components/atoms/IconButton/IconButton';
import LoadingIndicator from 'components/atoms/LoadingIndicator/LoadingIndicator';
import plusIcon from 'assets/icons/plus.svg';
import { fetchItems } from 'actions';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  margin: 50px;
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  overflow-y: auto;
`;
const NewItemButton = styled(IconButton)`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 60px;
  height: 60px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

class Climbs extends Component {
  state = {
    isNewItemPanelVisible: false,
  };

  componentDidMount() {
    const { fetchClimbs } = this.props;
    fetchClimbs();
  }

  toggleNewItemPanel = () => {
    this.setState(prevState => ({
      isNewItemPanelVisible: !prevState.isNewItemPanelVisible,
    }));
  };

  render() {
    const { climbs, isLoading } = this.props;
    const { isNewItemPanelVisible } = this.state;
    return (
      <AppTemplate>
        <NewItemPanel handleClose={this.toggleNewItemPanel} isVisible={isNewItemPanelVisible} />
        <StyledWrapper>
        {isLoading && <LoadingIndicator>Loading...</LoadingIndicator>}
          { climbs && (
            <Grid>
            {climbs
              .slice(0)
              .reverse()
              .map(climb => (
                <Fade key={climb._id}>
                  <ClimbCard climb={climb} key={climb._id} />
                </Fade>
              ))}
          </Grid>
           )}
        </StyledWrapper>
        <NewItemButton icon={plusIcon} onClick={this.toggleNewItemPanel} />
      </AppTemplate>
    );
  }
}

Climbs.propTypes = {
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

Climbs.defaultProps = {
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
)(Climbs);
