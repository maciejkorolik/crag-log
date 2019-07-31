import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import DetailsTemplate from 'templates/DetailsTemplate';

class ClimbDetails extends Component {
  state = {
    activeItem: {},
  };

  componentDidMount() {
    if (this.props.activeItem) {
      const [activeItem] = this.props.activeItem;
      this.setState({ activeItem });
    } else {
      const { id } = this.props.match.params;
      axios
        .get(`/api/climb/${id}`)
        .then(({ data }) => {
          this.setState({ activeItem: data });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;

    return <DetailsTemplate climb={activeItem} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state.climbs) {
    return {
      activeItem: state.climbs.filter(item => item._id === ownProps.match.params.id),
    };
  }
  return {};
};

export default connect(mapStateToProps)(ClimbDetails);
