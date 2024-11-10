import React , {Component } from 'react'
import axios from 'axios'

class PostForm extends Component{
    constructor(props: {}){
        super(props)
        this.state = {
            userId:'',
            title:'',
            body:''
        }
    }

   

    changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts' , this.state)
        .then(response =>{
            console.log(response);
            // this.setState({posts : response.data})
        })
        .catch(error =>{
            console.log(error);
            // this.setState({errorMsg:'error retreiving data'})
        })
    }


    render(){
        const { userId, title, body } = this.state as { userId: string, title: string, body: string };
        return(
            <div>
                <form action="" onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId"  value={userId} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="title"  value={title}  onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="body" value={body}  onChange={this.changeHandler}/>
                    </div>
                    <button type='submit'>submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm