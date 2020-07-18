import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomeButton from '../../components/custom-button/custome-button.component';
import {auth, SignInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
email: '',
password: ''
        };
    }
     handleSubmit= async event=>{
    event.preventDefault();
    const {email,password}=this.state;
    try{
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({email:'', password:''});
    }catch(error){
        console.log(error);
    }       
    };
    handleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value});
    }
    render(){
        return(
        <div className='sign-in'>
            <h2>I have already have an account</h2>
            <span>Sign in with your Email and Password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                name='email' 
                type='email'  
                handleChange={this.handleChange} 
                value={this.state.email} 
                label="email"
                required/>


                <FormInput 
                name="password" 
                type="password" 
                value={this.state.password}
                handleChange={this.handleChange} 
                label="password"
                required/>
              
        <div className='buttons'> 
       <CustomeButton type="submit">Sign in </CustomeButton>
        <CustomeButton onClick={SignInWithGoogle} isGoogleSignIn>Sign in with Google </CustomeButton> 
                 </div> 
            </form>
        </div>

        );
    }
}
        
export default SignIn;