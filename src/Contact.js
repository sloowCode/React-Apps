import React, { Component } from 'react';
import slider from './slider-2.png';

 class Contact extends Component {
    constructor(props) {
        super(props);
        const { Name, Company,Email, Phone,Address, Group } = this.props.contact;
        this.state= {
            isEditing: false,
            Name,
            Company,
            Email,
            Phone,
            Address,
            Group
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editContact(this.props.contact.id, this.state);
        this.setState({
            isEditing: false
        })
    }

    render() {
        return (
            <div className="contact">
                {this.state.isEditing ?
                    (
                        <div className="editcontact">
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    
                                    <input
                                        type="text"
                                        id="Name"
                                        onChange={this.handleChange}
                                        value={this.state.Name} />
                                </div>
                                <div>
                                    
                                    <input
                                        type="text"
                                        id="Company"
                                        onChange={this.handleChange}
                                        value={this.state.Company} />
                                </div>
                                <div>
                                    
                                    <input
                                        type="text"
                                        id="Email"
                                        onChange={this.handleChange}
                                        value={this.state.Email} />
                                </div>
                                <div>
                                    
                                    <input
                                        type="text"
                                        id="Phone"
                                        onChange={this.handleChange}
                                        value={this.state.Phone} />
                                </div>
                                <div>
                                    
                                    <input
                                        type="text"
                                        id="Address"
                                        onChange={this.handleChange}
                                        value={this.state.Address} />
                                </div>
                                <div>
                                    
                                    <input
                                        type="text"
                                        
                                        id="Group"
                                        onChange={this.handleChange}
                                        value={this.state.Group} />
                                </div>
                                <div>
                                    <button>Save</button>
                                </div>
                            </form>
                            <hr/>
                        </div>
                    )
                    :
                    (
                        
                        <div className="contact" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3"><img src={slider} alt=""/></div>
                                    <div className="col-md-7">
                                    <div> {this.props.contact.Name}</div>
                                    <div> {this.props.contact.Company}</div>
                                    <div> {this.props.contact.Email}</div>
                                    <div> {this.props.contact.Phone}</div>
                                    <div> {this.props.contact.Address}</div>
                                    <div> {this.props.contact.Group}</div>
                                    </div>
                                    <div className="col-md-2 icons">
                                    
                                        <button onClick={() => {
                                            this.props.deleteContact(this.props.contact.id)
                                        }
                                        }>  <i class="material-icons">&#xE872;</i>
                                            
                                            </button>
                                        <button onClick={() => {
                                            this.setState({ isEditing: !this.state.isEditing })
                                        }
                                        }> <span class="material-icons">&#xE254;</span>
                                            
                                            </button>
                            
                                    </div>
                                </div>
                            </div>
                            
                           
                            <hr/>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Contact;

