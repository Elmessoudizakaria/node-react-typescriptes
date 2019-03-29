import * as React from 'react';
import Axios from 'axios';
interface Contact{
    firsName: String,
    lastName: String,
    email: String,
    company?: String,
    phone?: Number
}
interface IState{
    contactList: Contact[]
}
export default class App extends React.Component<{},IState>{
    constructor(props){
        super(props);
        this.state={
            contactList:[]
        }
    }
    componentDidMount(){
        Axios.get('/api/contact').then(res=>{
            this.setState({contactList:res.data});
        });
    }
    render(){
        return(
            <div>
                <h1>HELLO</h1>
                {this.state.contactList.length>0 ? 
                    <ul>
                        {this.state.contactList.map(contact=>(
                            <li>My Contact :{contact.firsName}/{contact.lastName}/{contact.email}</li>
                        ))}
                    </ul>
                    
                    :null}
            </div>
        )
    }
}