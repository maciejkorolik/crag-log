const initialState = {
  climbs: [
    {
      id: 1,
      name: 'nazwa drogi',
      grade: '5a+',
      date: '25.07.19',
      location: 'Świebodzice',
      crag: 'Pełcznica',
      type: 'lead',
      style: 'OS',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
    {
      id: 2,
      name: 'nazwa drogi',
      grade: '4b',
      date: '25.07.19',
      location: 'Świebodzice',
      crag: 'Pełcznica',
      type: 'lead',
      style: 'OS',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
    {
      id: 3,
      name: 'nazwa drogi',
      grade: '6b+',
      date: '25.07.19',
      location: 'Świebodzice',
      crag: 'Pełcznica',
      type: 'lead',
      style: 'OS',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
    {
      id: 4,
      name: 'nazwa drogi',
      grade: '8c',
      date: '25.07.19',
      location: 'Świebodzice',
      crag: 'Pełcznica',
      type: 'lead',
      style: 'OS',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
    {
      id: 5,
      name: 'nazwa drogi',
      grade: '4c',
      date: '25.07.19',
      location: 'Świebodzice',
      crag: 'Pełcznica',
      type: 'lead',
      style: 'OS',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
    {
      id: 6,
      name: 'nazwa drogi',
      grade: '7a',
      date: '25.07.19',
      location: 'Świebodzice',
      crag: 'Pełcznica',
      type: 'lead',
      style: 'OS',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
    {
      id: 7,
      name: 'nazwa drogi',
      grade: '6b+',
      date: '25.07.19',
      location: 'Świebodzice',
      crag: 'Pełcznica',
      type: 'lead',
      style: 'OS',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        climbs: [...state.climbs, action.payload.item],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        climbs: [...state.climbs.filter(item => item.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default rootReducer;
