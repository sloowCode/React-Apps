import React, { Component, createContext } from 'react';
import Addcontacts from './Addcontacts';

import { Link, NavLink, withRouter } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from '../Contact';

export const HomeContext = createContext();

class HomeProvider extends Component {
  state = {
    contacts: [
      { id: 1, Name: 'Kwaku', Company: 'Nakwa Arms', Email: 'code@gmail.com', Phone: '0552236555', Address: 'Taifa', Group: 'Family' },
      { id: 2, Name: 'Kwaku', Company: 'Nakwa Arms', Email: 'code@gmail.com', Phone: '0552236555', Address: 'Taifa', Group: 'Family' },
      { id: 3, Name: 'Kwaku', Company: 'Nakwa Arms', Email: 'code@gmail.com', Phone: '0552236555', Address: 'Taifa', Group: 'Family' }
    ]
  }
  addContact = (contact) => {
    let contacts = [...this.state.contacts, contact]
    contact.id = Math.random();
    this.setState({
      contacts: contacts
    })
  }

  deleteContact = (id) => {
    let contacts = this.state.contacts.filter(contact => {
      return contact.id !== id
    })
    this.setState({
      contacts: contacts
    })
  }
  editContact = (id, editedContact) => {
    const editedContacts = this.state.contacts.map(contact => {
      if (contact.id === id) {
        return { ...contact, ...editedContact }
      }
      return contact;
    });
    this.setState({
      contacts: editedContacts
    })
  }
  render() {
    const contactList = this.state.contacts.map(contact => {
      return (
        <Contact key={contact.id} contact={contact} deleteContact={this.deleteContact} editContact={this.editContact} />
      )
    })




    return (
      <div className="container">

        <div>
          <HomeContext.Provider value={{ ...this.state, addContact: this.addContact }}>
          <Route path='/Addcontacts' component={Addcontacts} />
          </HomeContext.Provider>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 sideList">
              <div className='list-item'>
                <a href='#' className='list-group-item active'>All Contacts <span class="badge">{this.state.contacts.length}</span></a>
                <a href='#' className='list-group-item'>Family</a>
                <a href='#' className='list-group-item'>Friends</a>
                <a href='#' className='list-group-item'>Other</a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">My Contacts</h5>
                </div>

                <div className="card-body">
                  {contactList}
                </div>


              </div>
            </div>
          </div>
          {/* { <HomeProvider>
           <Route path='/Addcontacts' component={Addcontacts} />
          </HomeProvider> } */}


        </div>
      </div>



    )

  }
}
export default HomeProvider;