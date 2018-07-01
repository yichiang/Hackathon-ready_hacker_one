import $ from 'jquery'
import React, { Component } from 'react';
import './../../App.css';
import './../../css/menu.css';
import menuData_json from './../../data/menu.json';
import PropTypes from 'prop-types';
import MenuCard from './MenuCard';
import Checkout from './Checkout';
import Basket from '../order/Basket';
import HeaderMenu from '../shared/HeaderMenu';
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
  Form,
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
  isCheckoutPage: false,
  isConfirmationPage: false,
  userInfo: {},
  user: {cardNumber: '',expiry: '', cvc:''},
  urlDomain: 'http://localhost:3300/',
  confirmationNumber: null

}

componentDidMount() {
     console.log("componentDidMount")
     //this.getItems();
     this.getUserId();
     console.log(this.props.match.params.id)

   }

   getUserId = () =>{
     var userID = this.props.match.params.id || 1;
     let url = this.state.urlDomain+'api/user/'+userID;
     var self = this;
     $.ajax({
       url: url,
       type: "GET",

     }).done(function(data) {
       console.log(data);
       if(data&&data.length > 0){
         self.setState({userInfo: data[0] })
         console.log("userinfo",self.state)
       }
       //console.log("eva: data" ,data);
     });
   }
    getItems = (lat, long) => {
      let url = this.state.urlDomain+"/api/item/";
      var self = this;
      $.ajax({
        url: url,
        type: "GET",

      }).done(function(data) {
        console.log(data);
        self.setState({menuData: data })
        //console.log("eva: data" ,data);
      });
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
handleSubmitReview = () => {
  this.setState({isCheckoutPage: !this.state.isCheckoutPage})
}
handleCardNumberChange = (e) => {
  console.log(e.target.value)
  var inputVal = e.target.value;
  var currentUser = this.state.user;
  currentUser.cardNumber=inputVal;
  this.setState({user: currentUser})

}

handleCardExpiryChange = (e) => {
  console.log(e.target.value)
  var inputVal = e.target.value;
  var currentUser = this.state.user;
  currentUser.expiry=inputVal;
  this.setState({user: currentUser})

}
handleCardCVCChange = (e) => {
  console.log(e.target.value)
  var inputVal = e.target.value;
  var currentUser = this.state.user;
  currentUser.cvc=inputVal;
  this.setState({user: currentUser})

}

handleSubmitCheckout = () => {
  console.log("submit order", this.state)
  //Post Request: {cardNumber: '',expiry: '', cvc:''}
  var order = {};
  order.user = this.state.userInfo;
  order.user.UserId= this.state.userInfo.userId;
  if(order.user){
    order.user.cardNumber= this.state.user.cardNumber;
    order.user.expiry= this.state.user.expiry;
    order.user.cvc= this.state.user.cvc;
  }

  order.items=this.state.selecItems;
  console.log("order",order);
  this.submitOrdertoServer(order);

}
submitOrdertoServer = (order) =>{
  let url = this.state.urlDomain+'api/order/create';
  var self = this;
  $.ajax({
    url: url,
    type: "post",
    dataType: 'json',
    contentType: 'application/json',
    success: function(data) {
      console.log(data);
      if(data){
        self.setState({isConfirmationPage: true, selecItems: [], visible: false, confirmationNumber: data})
      }
      //console.log("eva: data" ,data);
    },
    error: function(){
    },
    data: JSON.stringify(order)
  });
}
render() {
  const { animation, dimmed, direction, visible, menuData, selecItems
    , currentTotal, isCheckoutPage
    , isConfirmationPage, user, userInfo,
  confirmationNumber } = this.state
  const vertical = direction === 'bottom' || direction === 'top'

  return (
    <div>
      {/* <Button onClick={this.handleAnimationChange('push')}>Push</Button> */}

      <HeaderMenu userInfo={userInfo}/>
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

            <Basket selecItems={selecItems}
              currentTotal={currentTotal}
              handleSubmitReview={this.handleSubmitReview}
              isCheckoutPage={isCheckoutPage}
            />
          </Sidebar>
        )}

        <Sidebar.Pusher dimmed={dimmed && visible}>

          <Segment basic className={visible? 'minWidth':''}>
            <Header as='h2'>
              <Icon name='food'/>
              New Order
            </Header>

            {isCheckoutPage?
              isConfirmationPage?
              <Segment className='menu_card_parent'>
                {confirmationNumber?
                  <p>
                    Thank you for ordering with us!
                    Your confirmation number is {confirmationNumber}
                  </p>:<p>
                    Sorry, there is an error!
                  </p>
                }

              </Segment>
              :
              <Checkout
                user={user}
                handleCardNumberChange={this.handleCardNumberChange}
                handleCardExpiryChange={this.handleCardExpiryChange}
                handleCardCVCChange={this.handleCardCVCChange}
                handleSubmitCheckout={this.handleSubmitCheckout}
              />
            :
              <Segment className='menu_card_parent'>
                {menuData.map((x, i)=>
                  {return (
                    <div>
                      <MenuCard menu={x}
                        handleChangeOrder={this.handleChangeOrder}
                        itemIndex={i} selecItems={selecItems}></MenuCard>
                    </div>
                  )}
                )

                }

              </Segment>


            }

          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}
}

export default MenuMain;
