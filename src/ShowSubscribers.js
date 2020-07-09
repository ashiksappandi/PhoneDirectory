import React, {Component} from 'react';
import Header from "./Header";
import './showSubscribers.css'
import { Link } from 'react-router-dom';

/*let subscribers = [
    {
        id: 1,
        name: 'Ashik',
        phone: '9878945676'
    },
    {
        id: 2,
        name: 'Anita',
        phone: '7456789244'
    }
]*/

class ShowSubscribers extends Component {

    clickHandler(message){
        alert(message);
    }

    render() {

        return (
            <div className='main-page'>
                <Header heading="Phone Directory"/>
                <div className='main-body'>
                    <div className='layout-top'>
                        <Link to="/add">
                            <button className='btn btn-add'> Add</button>
                        </Link>
                    </div>
                    <div className='layout-middle'>
                        <div className='subscriber-item'>
                            <span className='col col-head col-name'>Name</span>
                            <span className='col col-head col-phone'>Phone</span>

                        </div>
                        {
                            this.props.subscribersList.map(sub => {
                                return(
                                    <div className='subscriber-item' key={sub.id}>
                                        <span className='col col-data col-name'>{sub.name}</span>
                                        <span className='col col-data col-phone'>{sub.phone}</span>
                                        <button className='btn btn-delete' onClick={this.clickHandler.bind(this, "Delete Clicked!")}>Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='main-footer'>
                </div>
            </div>
        );
    }
}


export default ShowSubscribers;
