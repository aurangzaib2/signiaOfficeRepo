import  { useState, useEffect, useReducer } from 'react';
import './App.css';
import AppRouter from './routes';
import { ApolloClient, InMemoryCache } from '@apollo/client';
//import * as Constants from './components/constants';
import { createHttpLink } from 'apollo-link-http';

import { ApolloProvider } from '@apollo/client';
import { GRAPHQL_API } from './components/constants';
import {AuthContext} from './DispatchContext';
import { setContext } from '@apollo/client/link/context';



const httpLink = createHttpLink({
  uri: GRAPHQL_API,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('token'));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});



function App() {

  const [userDetails, setUserDetails] = useState();
  const [userNamePass, setUserNamePass] = useState();
  const [token, setToken] = useState();

  const login = (token, userDetails) => {
    setUserDetails(userDetails);
    setToken(token);
    localStorage.setItem('token', JSON.stringify(token));

    localStorage.setItem('user', JSON.stringify(userDetails));
};

  const logout = () => {
    //this.setState({ token: null, userId: null });
};

  const userNamePassword = (userna) => {
    setUserNamePass(userna);
  } 
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }
  return (

    <AuthContext.Provider value={{token, userDetails, login, logout, userNamePassword, userNamePass}}>
      <ApolloProvider client={client}> 
      
      <AppRouter />
      <div>{console.log('app', userDetails)}</div>
      </ApolloProvider>
      </AuthContext.Provider>
    
  );
}

export default App;
