import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types'

/* Hands-On Project 1 -- Class Components*/


class TodoList extends React.Component {
  render() {
      return (
          <div>
            <div>
            <h1>{this.props.title}</h1>
          </div>
          <div>
          <ul>
            <li>{this.props.items}</li>
            <li>{this.props.item2}</li>
            <li>{this.props.item3}</li>
          </ul>  
          </div>
          </div>
      )
  }
}


ReactDom.render(
<TodoList title = "Student Todo List" 
        items = "Sign up for code review" 
        item2 = "Finish TodoList component" 
        item3 = "Get lots of sleep" />, 
      document.getElementById('root'));       
      
      /* Hands-On Project 1 -- Class Components*/


class TodoList extends React.Component {
  render() {
      return (
          <div>
            <div>
            <h1>{this.props.title}</h1>
          </div>
          <div>
          <ul>
            <li>Item 1: {this.props.item}</li>
            <li>Item 2: {this.props.item2}</li>
            <li>Item 3: {this.props.item3}</li>
           </ul>
      </div>
      </div>
    );
  }
}

TodoList.defaultProps = {
  title: 'Student Todo List'
}

TodoList.prototypes = {
  title: PropTypes.array
}

ReactDom.render(
<TodoList title = "Student Todo List" 
        item = "Sign up for code review" 
        item2 = "Finish TodoList component" 
        item3 = "Get lots of sleep" />, 
      document.getElementById('root'));     

