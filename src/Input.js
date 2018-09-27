import gql from 'graphql-tag';
import {Mutation} from "react-apollo";
import React,{Component} from 'react';
import { addTypenameToDocument } from 'apollo-utilities';


const ADD_USER = gql`
    
        mutation AddUser($firstName:String!,$age:Int!){
            addUser(firstName:$firstName,age:$age){
                firstName
                age
            }
        }
    
`;

class Input extends Component{
    render(){
        let input;
        let ageInput;
        return (
            <Mutation mutation={ADD_USER}>
                {(addUser,{data})=>(
                    <div>
                        <form onSubmit={e=>{
                            e.preventDefault();
                            let num = parseInt(ageInput.value);
                            addUser({variables:{firstName:input.value,age:num}});
                        }}>
                            <input
                                ref={node => {
                                    
                                    input = node;
                                }}
                            />
                            <input
                                ref={node => {
                                    
                                    ageInput = node;
                                }}
                            />
                            <button type="submit">Add User</button>
                        </form>
                        
                    </div>
                )}
            </Mutation>
        );
    }
}

export default Input;