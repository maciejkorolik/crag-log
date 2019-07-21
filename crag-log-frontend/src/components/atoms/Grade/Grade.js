import styled from 'styled-components';

const gradeColor = ({ grade }) => {
  switch (grade) {
    case '4a':
    case '4b':
    case '4c':
      return '#E5D9D5';
    case '5a':
    case '5b':
      return '#C1AAA1';
    case '5c':
    case '6a':
    case '6a+':
    case '6b':
    case '6b+':
    case '6c':
    case '6c+':
    case '7':
    case '7+':
    case '7a':
    case '7a+':
      return '#C69683';
    case '7b':
    case '7b+':
    case '7c':
    case '7c+':
    case '8a':
    case '8a+':
    case '8b':
    case '8b+':
    case '8c':
    case '8c+':
    case '9a':
    case '9a+':
    case '9b':
    case '9b+':
    case '9c':
    case '9c+':
      return '#C37859';
    default:
      return 'white';
  }
};

const Grade = styled.div`
  position: absolute;
  top: -10px;
  right: ${({ details }) => (details ? '30px' : '15px')};
  width: 90px;
  height: 90px;
  border-radius: 50px;
  background-color: ${gradeColor};
  color: ${({ theme }) => theme.color1};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.semibold};
`;

export default Grade;
