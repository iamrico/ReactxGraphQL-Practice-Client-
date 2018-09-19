import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { ApolloProvider,Query } from "react-apollo";

const GET_BOOKS =
    gql`
    {
        books {
            title
            author
        }
    }
    `;
const Trigger = () =>{
    return (   
        <Query query={GET_BOOKS}>
            <ul>
            {({loading,error,data})=>{
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
        
                return data.books.map((book)=>(
                <li>book.title</li>
                ));
            }}
            </ul>
     
       </Query>
    );
    
}
const client = new ApolloClient({
  uri:"http://localhost:4000/"
});

client.query({
  query:gql`
      {
          books {
              title
              author
          }
      }
  `
}).then(result=>{console.log(result)});

class App extends Component {
  render() {
    return (
      <div className="App">
       <ApolloProvider client={client}>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.Trigger}>CLICK ME</button>
       </ApolloProvider>
      </div>
    );
  }

  
    
  
}


export default App;
