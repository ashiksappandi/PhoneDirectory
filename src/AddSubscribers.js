import React, {Component} from "react";
import Header from "./Header";
import './AddSubscribers.css';
import { Link } from 'react-router-dom';

class AddSubscribers extends Component{

    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }

    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onFormSubmitted = (e) => {
        e.preventDefault()
        this.props.addSubscriberHandler(this.state);
        this.setState({id:0, name:'', phone:''});
        this.props.history.push('/');
    }

    render() {
        return(
            <div className='main-page'>
                <Header heading="Add Subscriber"/>
                <div className='main-body'>
                    <div className='layout-top'>
                        <Link to="/">
                            <button className='btn btn-back'> Back</button>
                        </Link>
                    </div>
                    <div className='layout-middle'>
                        <form className='subscriber-form' onSubmit={this.onFormSubmitted.bind(this)}>
                            <label htmlFor='name' className='label'>Name</label><br/>
                            <input id='name' className='ipt ipt-name' type='text' name='name'
                                   onChange={this.inputChangedHandler}/><br/><br/>
                            <label htmlFor='phone' className='label'>Phone</label><br/>
                            <input id='phone' className='ipt ipt-phone' type='text' name='phone'
                                   onChange={this.inputChangedHandler}/><br/>

                        <div className='subscriber-info'>
                            <span className='subscriber-info-heading'>Subscriber to be added:</span><br/>
                            <span className='subscriber-info-data'>Name: {this.state.name}</span><br/>
                            <span className='subscriber-info-data'>Phone: {this.state.phone}</span>
                        </div>
                            <button type='submit' className='btn btn-add'>Add</button>
                        </form>
                    </div>
                </div>
                <div className='main-footer'>
                </div>
            </div>
        )
    }
}

export default AddSubscribers;