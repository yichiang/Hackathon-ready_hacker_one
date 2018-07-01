import React, { Component } from 'react';
import { Menu, Header } from 'semantic-ui-react'
import './../../App.css';
import mainLogo from './../../logo.jpg';

class HeaderMenu extends Component {
  state = {}
   constructor(props) {
     super(props);

   }

 handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable className='main_menu_header'>
             <Menu.Item>
               <img src={mainLogo} />
             </Menu.Item>


            <Header size='huge' className='main_logo'>Bonnie's Famous Vegan Diner</Header>


           </Menu>
    )
  }
}
export default HeaderMenu
