import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import AppTemplate from 'templates/AppTemplate';
import ClimbCard from 'components/molecules/ClimbCard/ClimbCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 30px;
  margin: 20px;
`;

// const climbs = [
//   {
//     id: 1,
//     name: 'nazwa drogi',
//     grade: '5a+',
//     date: '25.07.19',
//     location: 'Świebodzice',
//     crag: 'Pełcznica',
//     type: 'lead',
//     style: 'OS',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//   },
//   {
//     id: 2,
//     name: 'nazwa drogi',
//     grade: '4b',
//     date: '25.07.19',
//     location: 'Świebodzice',
//     crag: 'Pełcznica',
//     type: 'lead',
//     style: 'OS',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//   },
//   {
//     id: 3,
//     name: 'nazwa drogi',
//     grade: '6b+',
//     date: '25.07.19',
//     location: 'Świebodzice',
//     crag: 'Pełcznica',
//     type: 'lead',
//     style: 'OS',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//   },
//   {
//     id: 4,
//     name: 'nazwa drogi',
//     grade: '8c',
//     date: '25.07.19',
//     location: 'Świebodzice',
//     crag: 'Pełcznica',
//     type: 'lead',
//     style: 'OS',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//   },
//   {
//     id: 5,
//     name: 'nazwa drogi',
//     grade: '4c',
//     date: '25.07.19',
//     location: 'Świebodzice',
//     crag: 'Pełcznica',
//     type: 'lead',
//     style: 'OS',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//   },
//   {
//     id: 6,
//     name: 'nazwa drogi',
//     grade: '7a',
//     date: '25.07.19',
//     location: 'Świebodzice',
//     crag: 'Pełcznica',
//     type: 'lead',
//     style: 'OS',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//   },
//   {
//     id: 7,
//     name: 'nazwa drogi',
//     grade: '6b+',
//     date: '25.07.19',
//     location: 'Świebodzice',
//     crag: 'Pełcznica',
//     type: 'lead',
//     style: 'OS',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//   },
// ];

const Climbs = ({ climbs }) => (
  <AppTemplate>
    <Grid>
      {climbs.map(climb => (
        <ClimbCard id={climb.id} climb={climb} key={climb.id} />
      ))}
    </Grid>
  </AppTemplate>
);

const mapStateToProps = state => {
  const { climbs } = state;
  return { climbs };
};

export default connect(mapStateToProps)(Climbs);

//  {climbs.map(({ id, name, grade, date, location, crag, type, style }) => (
//          <ClimbCard id={id} name={name} grade={grade} date={date} location={location} crag={crag} type={type} style={style} key={id} />
//       ))}
