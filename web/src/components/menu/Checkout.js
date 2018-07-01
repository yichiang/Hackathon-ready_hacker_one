import React, { Component } from 'react';

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
import './../../css/menu.css';
import CreditCardInput from 'react-credit-card-input';

class Checkout extends Component {
  state = {}
   constructor(props) {
     super(props);

   }
  render() {
    return (
    <Segment className='menu_card_parent'>
    <Form>
      <Form.Field>

      <label>Credit Card</label>

      <CreditCardInput
          cardNumberInputProps={{ value: this.props.user.cardNumber, onChange: this.props.handleCardNumberChange }}
          cardExpiryInputProps={{ value: this.props.user.expiry, onChange: this.props.handleCardExpiryChange }}
          cardCVCInputProps={{ value: this.props.user.cvc, onChange: this.props.handleCardCVCChange }}
          fieldClassName="input"
        />
      </Form.Field>

      <Form.Field>
        <label>Name on card</label>
        <input placeholder='Name on card' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='Remember my card' />
      </Form.Field>
      <Button type='submit' onClick={this.props.handleSubmitCheckout}>Submit Order</Button>
    </Form>

    </Segment>
    )
  }
}
export default Checkout
