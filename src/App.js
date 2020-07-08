import React, {Component} from 'react';
import Header from "./Header";
import './App.css'

class App extends Component {

    render() {

        let subscribers = [
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
        ]

        return (
            <div className='main-page'>
                <Header heading="Phone Directory"/>
                <div className='main-body'>
                    <div className='layout-top'>
                        <button className='btn btn-add'> Add</button>
                    </div>
                    <div className='layout-middle'>
                        <div className='subscriber-item'>
                            <span className='col col-head col-name'>Name</span>
                            <span className='col col-head col-phone'>Phone</span>

                        </div>
                        {
                            subscribers.map(sub => {
                                return(
                                    <div className='subscriber-item' key={sub.id}>
                                        <span className='col col-data col-name'>{sub.name}</span>
                                        <span className='col col-data col-phone'>{sub.phone}</span>
                                        <button className='btn btn-delete'>Delete</button>
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


export default App;
