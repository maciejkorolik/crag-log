import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Link, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { connect } from 'react-redux';
import { register as registerAction } from 'actions';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 15px 0;
  height: 40px;
  width: 300px;
  &:last-of-type {
    margin-bottom: 60px;
  }
  @media (max-width: 560px) {
    width: 250px;
    &:last-of-type {
      margin-bottom: 30px;
    }
  }
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const RegisterPage = ({ userID, register }) => (
  <AuthTemplate>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        register(username, password);
      }}
    >
      {({ handleChange, handleBlur, values }) => {
        if (userID) {
          return <Redirect to={routes.home} />;
        }
        return (
          <>
            <Heading>Create new account</Heading>
            <StyledForm>
              <StyledInput
                type="text"
                name="username"
                placeholder="Login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              <StyledInput
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <Button type="submit">Register</Button>
            </StyledForm>
            <StyledLink to={routes.login}>Already have an account? Sign in!</StyledLink>
          </>
        );
      }}
    </Formik>
  </AuthTemplate>
);

RegisterPage.propTypes = {
  userID: PropTypes.string,
  register: PropTypes.func.isRequired,
};

RegisterPage.defaultProps = {
  userID: null,
};

const mapStateToProps = ({ userID }) => ({
  userID,
});

const mapDispatchToProps = dispatch => ({
  register: (username, password) => dispatch(registerAction(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPage);
