import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import { StaticPage } from "./containers/StaticPage";
import { Header } from "./components/Header";
import './App.css';

const history = createMemoryHistory()

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Switch>
                    <Route path='/static'>
                        <StaticPage/>
                    </Route>

                    <Redirect from='*' to='/static' />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
