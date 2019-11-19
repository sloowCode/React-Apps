import React, { Component } from 'react';
import slider from '../slider-2.png';
import { HomeContext, HomeProvider } from './Home';


class Addcontacts extends Component {
    static contextType = HomeContext;
    state = {
        Name: '',
        Company: '',
        Email: '',
        Phone: '',
        Address: '',
        Group: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.context.addContact(this.state)
        this.setState({
            Name: '',
            Company: '',
            Email: '',
            Phone: '',
            Address: '',
            Group: ''
        })

    }
    render() {


        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-3">
                        <div className="sideList">
                            <div className='list-item'>
                                <a href='#' className='list-group-item active'>All Contacts <span class="badge">{this.state.length}</span></a>
                                <a href='#' className='list-group-item'>Family</a>
                                <a href='#' className='list-group-item'>Friends</a>
                                <a href='#' className='list-group-item'>Other</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="card">
                            <div className='card-header'>
                                <h5 className='card-title'>Add Contact</h5>
                            </div>
                            <div className="card-content">
                                <div className="row">
                                    <div className="col-md-8">
                                        <form className="form form-horizontal " onSubmit={this.handleSubmit}>

                                            <div className="form-group row">
                                                <label className="col-md-3">Name :</label>
                                                <input type="text" id='Name' className='form-control col-md-9' placeholder='Name' onChange={this.handleChange} value={this.state.Name} />
                                            </div>

                                            <div className="form-group row" >
                                                <label className="col-md-3">Company :</label>
                                                <input type="text" id='Company' className='form-control col-md-9' placeholder='Company' onChange={this.handleChange} value={this.state.Company} />
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3">Email :</label>
                                                <input type="text" id='Email' className='form-control col-md-9' placeholder='Email' onChange={this.handleChange} value={this.state.Email} />
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3">Phone :</label>
                                                <input type="text" id='Phone' className='form-control col-md-9' placeholder='Phone' onChange={this.handleChange} value={this.state.Phone} />
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3">Address :</label>
                                                <input type="text" id='Address' className='form-control col-md-9' placeholder='Address' onChange={this.handleChange} value={this.state.Address} />
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3">Group :</label>
                                                <select id='Group' className='form-control col-md-5' onChange={this.handleChange}>
                                                    <option value={this.state.Group} selected='' disabled=''>Select Group</option>
                                                    <option value="Family">Family</option>
                                                    <option value="Friends">Friends</option>
                                                    <option value="Others">Other</option>
                                                </select>
                                                <div className='col-md-4'><button>Add Group</button></div>
                                            </div>
                                            <div className="form-actions">
                                                <button>Save</button><button>Close</button>
                                            </div>

                                        </form>
                                    </div>
                                    <div className="col-md-3 upload center ">
                                        <img src={slider} />
                                        <button className='btn btn-danger picButt'>Choose Photo</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }

}










export default Addcontacts;