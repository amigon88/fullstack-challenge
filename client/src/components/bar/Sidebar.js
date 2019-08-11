import React from 'react'
import PropTypes from 'prop-types';
import '../../css/sidebar.css'

class Sidebar extends React.Component {
  static propTypes = {
    locations: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className="side-bar">
        {this.props.locations && this.props.locations.map((location, index) => {
          return <a href={"#" + location.location_name} key={index}>{location.location_name}</a>;
        })}
      </div>
    )
  }
}

export default Sidebar
