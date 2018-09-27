import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { ApolloProvider,Query } from "react-apollo";
import styled from 'styled-components';
import Trigger from './Trigger';
import Loading from './Loading';
import Input from './Input';
import RootStore from './stores/RootStore'
import { Provider } from 'mobx-react'

const client = new ApolloClient({
  uri:"http://localhost:4000/"
});

client.query({
  query:gql`
      {
          users{
              firstName
              age
          }
      }
  `
}).then(result=>{console.log(result)});


class App extends Component {

  constructor(){
    super();

    this.state = {isLoading:false};
  }

  componentDidMount(){
      this.setState({isLoading:true});
      setTimeout(() => {
        console.log("GOT IN");
        this.setState({isLoading:false});
      }, 5000);
  }

  render() {
    if(this.state.isLoading){
      return <Loading/>;
    }

    return (
      <div className="App">
      <Provider store={RootStore}>
      <ApolloProvider client={client}>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <ul>
            <Trigger/>
          </ul>
          <Input/>
       </ApolloProvider>
      </Provider>
       
      </div>
    );
  }
}


export default App;
