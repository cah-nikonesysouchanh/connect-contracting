import React, {Component} from 'react';
import './css/Contracting.css';

import './css/bootstrap.min.css';
import {ContractingPanel} from "./components/ContractingPanel";


class App extends Component {
    render() {
        return (
            <div>
                <div className="int-Contracting">
                    <ContractingPanel/>
                </div>
            </div>
        );
    }
}
export default App;
