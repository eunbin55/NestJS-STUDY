import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './apollo/client';
import Router from './Router';

function App() {
  return (
    <ApolloProvider client={ client }>
      <Router />
    </ApolloProvider>
  );
}

export default App;
