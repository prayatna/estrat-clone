import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Intro from './Components/Intro';
import IntroInfo from './Components/IntroInfo';


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                    <Intro/>
                    <IntroInfo/>

            </div>
        );
    }
}

export default App;
