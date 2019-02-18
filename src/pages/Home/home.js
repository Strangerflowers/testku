import React from 'react';
import Header from '../../components/header/header.js';
import Mode from './modules.js';
import Banner from './banner.js';
class Home extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return (
            <div>
                <Header />
                <Mode />
                <Banner />
            </div>
        )
    }
}

export default Home;