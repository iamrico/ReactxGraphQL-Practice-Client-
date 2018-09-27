import React,{Component} from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { ApolloProvider,Query } from "react-apollo";
import { inject, observer } from "mobx-react";

const GET_USERS =
    gql`
    {
      users{
          firstName
        age
      }
    }
    `;

@inject("store")@observer
const Trigger = () =>{
    return (   
        <Query query={GET_USERS}>
            {({loading,error,data})=>{
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
        
                return data.users.map((user,index)=>(
                <li key={index}>{user.firstName}</li>
                ));
            }}
       </Query>
    );
    
}
  export default Trigger;