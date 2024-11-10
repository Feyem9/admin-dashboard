// export default function DashHome(){
//     return (
//         <div>dash home works</div>
//     )
// }
// import { Component } from "react"
import React , {Component} from 'react'
import axios from 'axios'

 class DashHome extends Component{
    constructor(props: {}){
        super(props)
        this.state = {
            posts:[],
            errormsg:''
        }
    }

    componentDidMount(): void {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response);
            this.setState({posts : response.data})
        })
        .catch(error =>{
            console.log(error);
            this.setState({errorMsg:'error retreiving data'})
        })
    }
    render(){
        const { posts, errorMsg } = this.state as { posts: any[]; errorMsg: string };
        return(
            <div>
                list of posts
                {
                    posts.length?
                    posts.map((post: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => <div key={post.id} >{post.title}</div>):
                    null
                }
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default DashHome