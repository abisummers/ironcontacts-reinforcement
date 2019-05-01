import React, { Component } from 'react';

class TableRow extends Component {

  render() {
    // console.log(this.props);

    return (
      <tr>
        <td><img src={this.props.contactProp.pictureUrl} alt="celebrity" />  </td>
        <td>{this.props.contactProp.name}</td>
        <td>{this.props.contactProp.popularity}</td>
        <td><button onClick={this.props.onClickProp}>Delete</button></td>
      </tr>
    );
  }
}

export default TableRow;