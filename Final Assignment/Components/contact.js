import React from 'react';
import './styles.css';import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Contact extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            title:'Send Me a Message',
            name: '',
            email: '',
            message: '',
        }
    }
    
   handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;//Checks if value is checkbox otherwise returns value of other fields
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
    
    render() {
        return(
           <div className="contact">
            
            <h1>{this.state.title}</h1>
            
             <form >
            
            <table>
            <tr>
            <td>
            <label>Name: </label>
            </td>
            <td>
            <input type="text" id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}  required />
            </td>
            </tr>
            <br/><br/><br/>
            <tr>
            <td>
            <label>Email: </label>
            </td>
            <td>
            <input type="email" id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}  required />
            </td>
            </tr>
            <br/><br/><br/>
            <label>Your Message: </label>
            </table>
            <br/>
            <br/>
            <textarea rows="10" cols="50" id="message" name="message" as="textarea" value={this.state.message} onChange={this.handleChange} />                        
            <br/>
            <br/>
            <button type="submit">Send</button>
            
           
            
            </form>
            
            </div>
           
             
        );
    }
}

export default Contact;