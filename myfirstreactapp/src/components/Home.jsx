import React, {Component} from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import '../App.css';



class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'Welcome to Strive Bookstore'
        }
    };
    render(){
        return (
            <div>
        <Jumbotron id = "jumbo">
          <h1>Welcome to Strive Bookstore!</h1>
          <p id = "strive">Read Books, Stay Informed!</p>
          <p>
            Here, You will find books of all genre.
            Are you eager to read? click and find out more
         </p>
         <p>
         <Button className ="primary">Learn more</Button>
         </p>
       </Jumbotron>
    
               
            </div>




        )
    }

}


export default Home