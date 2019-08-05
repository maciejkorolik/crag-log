import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form } from 'formik';
import Input from 'components/atoms/Input/Input';
import Textarea from 'components/atoms/Textarea/Textarea';
import Select from 'components/atoms/Select/Select';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import StarIcon from 'assets/icons/star-active.svg';

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
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 30px;
  border-radius: 0 0 30px 30px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '-110%')});
  transition: transform 0.4s ease-in-out;
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
  > *:first-child {
    margin-right: 10px;
  }
  > div {
    width: 50%;
  }
`;

const StyledLabel = styled.label`
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.regular};
  font-family: Open Sans, sans-serif;
  color: ${({ theme }) => theme.darkgrey};
`;

const StyledButton = styled(Button)`
  align-self: center;
`;

const Star = styled.img`
  height: 15px;
  display: inline-block;
  margin-left: 5px;
  transform: translateY(2px);
`;

const NewItemPanel = ({ isVisible, handleClose, addItem }) => (
  <>
    <Overlay isVisible={isVisible} onClick={handleClose} />
    <StyledWrapper isVisible={isVisible}>
      <Heading>Add new finished route!</Heading>
      <Formik
        initialValues={{
          name: '',
          grade: '',
          location: '',
          crag: '',
          type: '',
          rating: '',
          description: '',
        }}
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
                  <Input
                    small
                    name="name"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name || ''}
                  />
                  <Select
                    name="grade"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.grade || ''}
                  >
                    <option value="" disabled hidden>
                      Grade
                    </option>
                    {grades.map(grade => (
                      <option value={grade} key={grade}>
                        {grade}
                      </option>
                    ))}
                  </Select>
                </HorizontalWrapper>
                <StyledLabel>Date:</StyledLabel>
                <Input
                  small
                  width="160px"
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
                  <Input
                    small
                    placeholder="Location"
                    name="location"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location || ''}
                  />
                  <Input
                    small
                    placeholder="Crag name"
                    name="crag"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.crag || ''}
                  />
                </HorizontalWrapper>
                <HorizontalWrapper>
                  <div>
                    <StyledLabel>Type of the climb: </StyledLabel>
                    <Select
                      placeholder="Type"
                      name="type"
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.type || ''}
                    >
                      <option value="" disabled hidden>
                        Type
                      </option>
                      {climbTypes.map(type => (
                        <option value={type} key={type}>
                          {type}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <StyledLabel>Rating: </StyledLabel>
                    <Star src={StarIcon} />
                    <Select
                      placeholder="Rating"
                      name="rating"
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.rating || ''}
                    >
                      <option value="" disabled hidden>
                        1
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </Select>
                  </div>
                </HorizontalWrapper>
              </InnerWrapper>
              <InnerWrapper>
                <StyledLabel>Short description: </StyledLabel>
                <Textarea
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
