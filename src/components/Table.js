import React, { Component } from 'react';
import contactsArr from "../contacts.json"
import TableRow from './TableRow.js';

class Table extends Component {
  state = {
    contacts: contactsArr.slice(0, 5)
  }

  add() {
    const currentArr = this.state.contacts
    currentArr.push(contactsArr[Math.floor(Math.random() * contactsArr.length)])

    this.setState({ contacts: currentArr });
  }

  sortName() {
    const currentArr = this.state.contacts
    var sorted = currentArr.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })

    this.setState({ contacts: sorted });
  }

  sortPop() {
    const currentArr = this.state.contacts

    var sorted = currentArr.sort((a, b) => {
      return b.popularity > a.popularity ? 1 : -1
    })

    this.setState({ contacts: sorted });

  }

  delete(index) {
    const currentArr = this.state.contacts
    console.log(index);


    // THIS DOES NOT WORK 
    // const deletedItem = currentArr.splice(index, 1)
    // console.log(deletedItem);

    currentArr.splice(index, 1)
    this.setState({ contacts: currentArr });
  }

  render() {

    return (
      <table>
        <thead>
          <tr>

            <td>
              <button onClick={event => this.add()}>Add</button>
            </td>
            <td>
              <button onClick={event => this.sortName()}>Sort name</button>
            </td>
            <td>
              <button onClick={event => this.sortPop()}>Sort Popularity</button>
            </td>
          </tr>
          <tr>
            <th>picture</th>
            <th>name</th>
            <th>popularity</th>
          </tr>
        </thead>
        <tbody>

          {
            this.state.contacts.map((oneItem, index) => {
              return <TableRow
                key={index}
                contactProp={oneItem}
                onClickProp={() => this.delete(index)}
              />
            })
          }

        </tbody>
      </table>);
  }
}

export default Table;