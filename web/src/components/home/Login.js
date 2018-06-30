import React, { Component } from 'react';
import './../../App.css';
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react'
import homeStyle from './../../css/home.css';

class Login extends Component {
  render() {
    return (
      <div>
        <div className={homeStyle.pl_login_form}> Hi </div>
      <Segment raised className={homeStyle.pl_login_form}>
        <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
        </Form>

      </Segment>
    </div>

    );
  }
}

export default Login;
