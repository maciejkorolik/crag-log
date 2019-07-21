import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Grade from 'components/atoms/Grade/Grade';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 450px;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
`;

const InnerWrapper = styled.div`
  background-color: transparent;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 20px;

  ${({ top }) =>
    top &&
    css`
      border-radius: 15px 15px 0 0;
      padding: 0 20px;
      height: 70px;
      background-color: ${({ theme }) => theme.color3};
      flex-direction: row;
      justify-content: ${({ details }) => (details ? 'center' : 'flex-start')};
      align-items: center;
    `}
`;

const StyledSpan = styled.span`
  font-weight: ${({ theme }) => theme.bold};
  padding-right: 8px;
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

class ClimbCard extends Component {
  state = {
    closeCard: false,
  };

  handleCardClose = () => this.setState({ closeCard: true });

  handleItemDelete = (removeItem, id) => {
    removeItem(id);
    this.handleCardClose();
  };

  render() {
    const { climb, removeItem } = this.props;
    const { id, name, grade, date, location, crag, type, description } = climb;

    const { closeCard } = this.state;

    if (closeCard) {
      return <Redirect to="/climbs" />;
    }
    return (
      <StyledWrapper>
        <InnerWrapper top>
          <Heading light>{name}</Heading>
          <Grade grade={grade}>{grade}</Grade>
        </InnerWrapper>
        <InnerWrapper>
          <div>
            <Paragraph>
              <StyledSpan>Date:</StyledSpan>
              {date}
            </Paragraph>
            <Paragraph>
              <StyledSpan>Location:</StyledSpan>
              {location}
            </Paragraph>
            <Paragraph>
              <StyledSpan>Crag:</StyledSpan>
              {crag}
            </Paragraph>
            <Paragraph>
              <StyledSpan>Type:</StyledSpan>
              {type}
            </Paragraph>
            <Paragraph>
              <StyledSpan>Description:</StyledSpan>
            </Paragraph>
            <Paragraph>{description}</Paragraph>
          </div>
          <StyledButton
            secondary
            onClick={() => {
              if (window.confirm('Are you sure you wish to delete this item?'))
                this.handleItemDelete(removeItem, id);
            }}
          >
            Delete
          </StyledButton>
          <StyledButton secondary onClick={this.handleCardClose}>
            Go back
          </StyledButton>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

ClimbCard.propTypes = {
  climb: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      grade: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      crag: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItemAction(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ClimbCard);
