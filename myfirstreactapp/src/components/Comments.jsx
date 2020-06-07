import React from 'react';
import { ListGroup } from 'react-bootstrap';
import AddComment from './AddComment'

class Comments extends React.Component{
    
        state = {
            comments:[]
        }

    
    componentDidMount = async () => {
        try{
            let response = await fetch("https://striveschool.herokuapp.com/api/comments/",{
            method: "GET",
            headers:{
                "Content-Type": 'application/json',
                "Authorization": "Basic " + btoa('user27:ZGDWyFCA8umbgpvZ')
            }
        })
         let comments = await response.json()
         console.log(comments)
         this.setState({
             comments:comments
         })
    } catch(err){
        console.log('error!',err)
    }
}

render(){
    return(
        <div className = "mt-2">
            <ListGroup>
                {this.state.comments.map((comment,i)=>{
                    return(
                        <ListGroup.Item key = {i}>
                            From: {comment.name}, for {comment.elementId},
                            {comment.rate}
                        </ListGroup.Item>
                    )
                }
                )}
            </ListGroup>
            <AddComment asin={this.state.book.asin}/>
        </div>
    )
}
    
        

}


export default Comments;
