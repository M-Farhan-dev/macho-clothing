import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomeButton from '../custom-button/custome-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
constructor(){
    super();
    this.state={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    };
}
handleSubmit=async event=>{
    event.preventDefault();

    const {displayName, email, password, confirmPassword}=this.state;
    if(password!==confirmPassword){
        alert("password don't match");
        return;
    }
    try{
const {user} =await auth.createUserWithEmailAndPassword(email, password);
await createUserProfileDocument(user, {displayName});
this.setState({
    displayName:'',
        email:'',
        password:'',
        confirmPassword:''
});
    }
    catch(error){
console.error(error);
    }
};
handleChange=event=>{
    const {name, value} = event.target;
    this.setState({[name]:value});
}
render(){
    const {displayName,email,password,confirmPassword}=this.state;
    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form'onSubmit={this.handleSubmit}> 

            <FormInput
            type='text'
            name='displayname'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            requried
            />
            

            <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            requried
            />

            <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            requried
            />

            <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            requried
            />
            <CustomeButton type='submit'>SIGN UP</CustomeButton>
            </form>
        </div>
    );
}
}
export default SignUp;