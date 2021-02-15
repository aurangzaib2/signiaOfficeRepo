import  { useState, useEffect, useReducer } from 'react';
import './App.css';
import AppRouter from './routes';
import { ApolloClient, InMemoryCache } from '@apollo/client';
//import * as Constants from './components/constants';

import { ApolloProvider } from '@apollo/client';
import { GRAPHQL_API } from './components/constants';
import {AuthContext} from './DispatchContext';



const client = new ApolloClient({
  uri: GRAPHQL_API,
  cache: new InMemoryCache ()

});





function App() {

  const [userDetails, setUserDetails] = useState();
  const [token, setToken] = useState();

  const login = (token) => {
    setToken(token);
};

  const logout = () => {
    //this.setState({ token: null, userId: null });
};

  return (

    <AuthContext.Provider value={{token, login, logout}}>
      <ApolloProvider client={client}> 
      
      <AppRouter />
      <div>{console.log(userDetails)}</div>
      </ApolloProvider>
      </AuthContext.Provider>
    
  );
}

export default App;
