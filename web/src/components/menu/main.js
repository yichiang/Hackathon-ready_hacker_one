import React, { Component } from 'react';
import './../../App.css';
import { Button, Checkbox, Form, Segment, Divider, Header } from 'semantic-ui-react'
import './../../css/home.css';
import myData from './data/menu.json';

class MenuMain extends Component {
  constructor(props) {
   super(props);
 }


  render() {
    console.log(myData)
    return (
      <div>

    </div>

    );
  }
}

export default MenuMain;
