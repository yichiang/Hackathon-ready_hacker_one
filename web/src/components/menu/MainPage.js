
import React, { Component } from 'react';
import './../../App.css';
import './../../css/menu.css';
import menuData_json from './../../data/menu.json';
import PropTypes from 'prop-types';
import MenuCard from './MenuCard';
import Basket from '../order/Basket';
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'



class MenuMain extends Component {
  state = {
  animation: 'push',
  direction: 'left',
  dimmed: false,
  visible: false,
  menuData: menuData_json,
  selecItems:[],
  currentTotal: 10,

}

handleAnimationChange = animation => () =>
  this.setState({ animation, visible: !this.state.visible })

handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked })

handleDirectionChange = direction => () => this.setState({ direction, visible: false })

handleChangeOrder=(index, diff_count)=>{
  console.log(index, diff_count);
  const menuData = this.state.menuData;
  if(menuData[index].order == null){
    menuData[index].order = 0;
    // trigger sidebar after first time adjust item;
    if(this.state.selecItems.length == 0)
    {
      this.setState({visible: true});
    }
  }
  var calcMenu = [];
  if(menuData[index].order + diff_count >= 0){
    menuData[index].order += diff_count;
  }
  calcMenu = menuData.filter(x=> (x.order != null && x.order > 0))
  this.setState({menuData: menuData, selecItems: calcMenu })
  this.calcTotal(calcMenu);
}
calcTotal = (items) =>{
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    if(items[i].order != null){
      total+=items[i].order * items[i].price;
    }
  }
  this.setState({currentTotal: total})
}
render() {
  const { animation, dimmed, direction, visible, menuData, selecItems, currentTotal } = this.state
  const vertical = direction === 'bottom' || direction === 'top'

  return (
    <div>
      <Button onClick={this.handleAnimationChange('push')}>Push</Button>


      <Sidebar.Pushable as={Segment}>

        {vertical ? null : (
          <Sidebar
            className='menu_sidebar'
            as={Menu}
            animation={animation}
            direction={direction}
            icon='labeled'
            inverted
            vertical
            visible={visible}
            width='wide'
          >

            <Basket selecItems={selecItems} currentTotal={currentTotal}/>
          </Sidebar>
        )}

        <Sidebar.Pusher dimmed={dimmed && visible}>
          <Segment basic className={visible? 'minWidth':''}>
            <Header as='h2'>
              <Icon name='food'/>
              Order #20092
            </Header>
            <Segment className='menu_card_parent'>
              {menuData.map((x, i)=>
                {return (
                  <div>
                    <MenuCard menu={x} handleChangeOrder={this.handleChangeOrder} itemIndex={i} selecItems={selecItems}></MenuCard>
                  </div>
                )}
              )

              }

            </Segment>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}
}

export default MenuMain;
