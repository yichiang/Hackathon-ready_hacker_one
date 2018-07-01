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
            {this.props.userInfo &&
              <Menu.Menu position='right'>
             <Menu.Item>
               <Header size='huge' className='main_logo'>Hi {this.props.userInfo.displayName}</Header>

             </Menu.Item>
             <Menu.Item
            name='view order history'
            active={activeItem === 'orderhistory'}
            onClick={this.handleItemClick}
          />

            </Menu.Menu>}

           </Menu>
    )
  }
}
export default HeaderMenu
