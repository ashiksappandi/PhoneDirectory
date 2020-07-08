import React, {Component} from "react";
import Header from "./Header";
import './AddSubscribers.css';

class AddSubscribers extends Component{
    render() {
        return(
            <div className='main-page'>
                <Header heading="Add Subscriber"/>
                <div className='main-body'>
                    <div className='layout-top'>
                        <button className='btn btn-back'> Back</button>
                    </div>
                    <div className='layout-middle'>
                        <form className='subscriber-form'>
                            <label htmlFor='name' className='label'>Name:</label>
                            <input id='name' className='ipt ipt-name' type='text' name='name'/>
                            <label htmlFor='phone' className='label'>Phone:</label>
                            <input id='phone' className='ipt ipt-phone' type='text' name='phone'/>
                        </form>
                        <div className='subscriber-info'>
                            <span className='subscriber-info-heading'>Subscriber to be added:</span><br/>
                            <span className='subscriber-info-name'>Name: </span><br/>
                            <span className='subscriber--info-phone'>Phone: </span>
                        </div>
                    </div>
                </div>
                <div className='main-footer'>
                </div>
            </div>
        )
    }
}

export default AddSubscribers;