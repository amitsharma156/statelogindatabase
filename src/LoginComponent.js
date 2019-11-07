import React,{Component} from 'react';
import axios from 'axios';

export default class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePsw = this.onChangePsw.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state ={
            uname :'', 
            psw :''
        }
    }
    onChangeUserName(e){
        
        this.setState({
            uname:e.target.value
        });
        console.log(this.state.uname);
    }
    onChangePsw(e){
        this.setState({
            psw:e.target.value
        });
    }
    onSubmit(e){
        console.log('hello');
            e.preventDefault();
            const credential ={
                uname:this.state.uname,
                psw:this.state.psw
            }
            axios.post('http://localhost:4200/login',credential).then(re=>{
            console.log(re.data)
            
            if(this.state.uname==='admin'){
                this.props.history.push('/admin');
            }
            else if(this.state.psw ==='user'){
                this.props.history.push('/welcome');
            }
            else{
                this.props.history.push('/');
            }
        }).catch(err=>console.log(err));

        
    }
    render(){
        return(
            <div>
                <h3>Login Form</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" value ={this.state.uname} onChange ={this.onChangeUserName}/>
                    </div>
                    <div>
                        <label>password</label>
                        <input type="text" value ={this.state.psw} onChange ={this.onChangePsw}/>
                    </div>
                    <div>
                        <input type ="submit" value ='login'/>
                    </div>
                </form>
            </div>
        )
    }
}