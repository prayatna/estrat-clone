import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Intro from './Components/Intro';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <section >
                    <Intro/>
                </section>
                <section>
                </section>

            </div>
        );
    }
}

export default App;
