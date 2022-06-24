import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { StaticPage } from './containers/StaticPage';
import { Header } from './components/Header'
import { RecordsPage } from './containers/RecordsPage'
import { FormPage } from './containers/FormPage'
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header />
                <Switch>
                    <Route path='/static'>
                        <StaticPage/>
                    </Route>

                    <Route path='/records'>
                        <RecordsPage />
                    </Route>

                    <Route path='/form'>
                        <FormPage />
                    </Route>

                    <Redirect from='*' to='/static' />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
