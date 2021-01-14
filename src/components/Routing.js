import React from 'react';
import {Route,Router,Switch} from 'react-router-dom';
import Login from './Login';
import userStory from './UserStory';
import UserList from './UserList';
import history from './history';

const Routing=()=>{

    return(
        <div>
            <Router history={history}>
         <Switch>
             <Route exact path='/' component={Login}></Route>
            
            <Route path='/userStory'component={ userStory} history={history}></Route>

            <Route path='/UserList'component={UserList}></Route>
         </Switch>

            </Router>
        </div>
    )
}

export default Routing