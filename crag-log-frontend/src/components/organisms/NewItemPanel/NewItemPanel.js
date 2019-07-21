import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Input, Select, Textarea } from '@smooth-ui/core-sc';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form } from 'formik';

const grades = [
  '4a',
  '4b',
  '4c',
  '5a',
  '5b',
  '5c',
  '6a',
  '6a+',
  '6b',
  '6b+',
  '6c',
  '6c+',
  '7a',
  '7a+',
  '7b',
  '7b+',
  '7c',
  '7c+',
  '8a',
  '8a+',
  '8b',
  '8b+',
  '8c',
  '8c+',
  '9a',
  '9a+',
  '9b',
  '9b+',
  '9c',
  '9c+',
];
const climbTypes = ['Lead', 'Top rope', 'Multi-pitch', 'Boulder', 'Free solo'];

const StyledWrapper = styled.div`
  width: 800px;
  height: auto;
  position: absolute;
  top: 70px;
  left: calc(100vh - 400px);
  z-index: 999;
  padding: 30px;
  border-radius: 0 0 30px 30px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '-100%')});
  transition: transform 0.25s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 998;
  height: ${({ isVisible }) => (isVisible ? '100vh' : '0')};
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: height 0s, opacity 0.25s ease-in-out;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const InnerWrapper = styled.div`
  width: 50%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-right: 20px;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const HorizontalWrapper = styled.div`
  width: 100%;
  display: flex;
  > input:first-child {
    margin-right: 10px;
  }
`;

const StyledInput = styled(Input)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.regular};
  font-family: Poppins, sans-serif;
  background-color: ${({ theme }) => theme.color5};
  border-radius: 20px;
  padding: 5px 15px;
  margin: 10px 0;
  width: 100%;
  ${({ type }) =>
    type === 'date' &&
    css`
      width: 200px;
    `}
`;

const StyledTextArea = styled(Textarea)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.regular};
  font-family: Poppins, sans-serif;
  background-color: ${({ theme }) => theme.color5};
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 5px 15px;
  margin: 10px 0;
  resize: none;
`;

const StyledSelect = styled(Select)`
  width: 120px;
  margin: 10px 0;

  > select {
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.regular};
    font-family: Poppins, sans-serif;
    background-color: ${({ theme }) => theme.color5};
    border-radius: 50px;
    width: 100%;
    padding: 5px 15px;
  }
`;

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.light};
  font-family: Open Sans, sans-serif;
  color: ${({ theme }) => theme.color3};
`;

const StyledButton = styled(Button)`
  align-self: center;
`;

const NewItemPanel = ({ isVisible, handleClose, addItem }) => (
  <>
    <Overlay isVisible={isVisible} />
    <StyledWrapper isVisible={isVisible}>
      <Heading>Add new finished route!</Heading>
      <Formik
        initialValues={{ name: '', grade: '', location: '', crag: '', type: '', description: '' }}
        onSubmit={(values, { resetForm }) => {
          addItem(values);
          handleClose();
          resetForm({});
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <StyledForm>
            <InputsWrapper>
              <InnerWrapper>
                <StyledLabel>Name and grade of the route:</StyledLabel>
                <HorizontalWrapper>
                  <StyledInput
                    name="name"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name || ''}
                  />
                  <StyledSelect
                    placeholder="Grade"
                    name="grade"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.grade || ''}
                  >
                    <option value="" selected disabled hidden>
                      Grade
                    </option>
                    {grades.map(grade => (
                      <option value={grade}>{grade}</option>
                    ))}
                  </StyledSelect>
                </HorizontalWrapper>
                <StyledLabel>Date:</StyledLabel>
                <StyledInput
                  type="date"
                  placeholder="Date"
                  name="date"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date || ''}
                />
                <StyledLabel>Location and name of the crag:</StyledLabel>
                <HorizontalWrapper>
                  <StyledInput
                    placeholder="Location"
                    name="location"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location || ''}
                  />
                  <StyledInput
                    placeholder="Crag name"
                    name="crag"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.crag || ''}
                  />
                </HorizontalWrapper>
                <StyledLabel>Type of the climb: </StyledLabel>
                <StyledSelect
                  placeholder="Type"
                  name="type"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.type || ''}
                >
                  <option value="" selected disabled hidden>
                    Type
                  </option>
                  {climbTypes.map(type => (
                    <option value={type}>{type}</option>
                  ))}
                </StyledSelect>
              </InnerWrapper>
              <InnerWrapper>
                <StyledLabel>Short description: </StyledLabel>
                <StyledTextArea
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description || ''}
                />
              </InnerWrapper>
            </InputsWrapper>
            <StyledButton type="submit">Add route</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  </>
);

NewItemPanel.propTypes = {
  isVisible: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
};

NewItemPanel.defaultProps = {
  isVisible: false,
};

const mapDispatchToProps = dispatch => ({
  addItem: itemContent => dispatch(addItemAction(itemContent)),
});

export default connect(
  null,
  mapDispatchToProps,
)(NewItemPanel);
