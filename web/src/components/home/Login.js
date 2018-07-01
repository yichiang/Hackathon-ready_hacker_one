import $ from 'jquery'
import React, { Component } from 'react';
import './../../App.css';
import { Button, Checkbox, Form, Segment, Divider, Header, Image, Grid } from 'semantic-ui-react'
import './../../css/home.css';
import Logo from '../../data/logo.png';
import Camera from 'react-camera';
import { withRouter } from 'react-router-dom'


const style = {
  preview: {
    position: 'relative',
  },
  captureContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '100%'
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 56,
    width: 56,
    color: '#000',
    margin: 20
  },
  captureImage: {
    width: '100%',
  }
};

class Login extends Component {
  state = {
  //ususally you use User object
  user: {username: '', password: ''},
  showManualLogin: false,
  message: 'Looking for your face...'
}

  constructor(props) {
   super(props);
   this.takePicture = this.takePicture.bind(this);
   this.handleUserNameChange = this.handleUserNameChange.bind(this);
   this.handlePasswordChange = this.handlePasswordChange.bind(this);
   // this.state = {
   //  showManualLogin: false,
   //  message: 'Looking for your face...'
   // }
 }

 handleUserNameChange(event) {
   var cUser = this.state.user;
   cUser.username = event.target.value;
   this.setState({user: cUser});
 }
 handlePasswordChange(event) {
   var cUser = this.state.user;
   cUser.password = event.target.value;
   this.setState({user: cUser}); }

 takePicture() {
   // this.camera.capture()
   // .then(blob => {
   //   this.img.src = URL.createObjectURL(blob);
   //   this.img.onload = () => { URL.revokeObjectURL(this.src); }
   // })
 }

 showManual() {
  this.setState({
    showManualLogin: true
  });
 }

 showMenu() {
   //SINGIN
  this.loginUser();
  // this.props.history.push('/menu');
 }

 loginUser = () => {
   let url = "http://localhost:3300/api/login/";
   var self = this;
   var cUser = this.state.user;
   console.log("try to log in cUser", cUser);
   $.ajax({
       url: url,
       type: 'post',
       dataType: 'json',
       contentType: 'application/json',
       success: function (data) {
           console.log("login", data)
           if(data&&data.length > 0){
             self.props.history.push('/menu/'+data[0].userId);
           }else{
             self.props.history.push('/menu/'+ 1);
           }
       },
       error: function(){
         self.props.history.push('/menu/'+ 1);
       },
       data: JSON.stringify(cUser)
   });
 }

 componentDidMount() {
   setTimeout(() => {
      this.setState({
        message: 'Identifying...'
      })
   }, 5000);
   setTimeout(() => {
    this.setState({
      message: 'Joseph, smile to get started :)'
    })
 }, 10000);
 }

  render() {
    return (
      <div className='login-container'>
       <Grid centered aligned middle columns={2}>
        <Grid.Column>
        <div className='welcome'>Welcome to Bonnie's!</div>
        <Segment raised padded centered className={'pl_login_form'}>
                <div>
                   <Camera
                        style={style.preview}
                        ref={(cam) => {
                          this.camera = cam;
                        }}
                      >
                        <div style={style.captureContainer} onClick={this.takePicture}>
                          <div style={style.captureButton} />
                        </div>
                    </Camera>
                     {/* <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium centered' circular /> */}
                    <div className='instruction' onClick={() => this.showMenu()}>{this.state.message}</div>
                    <Divider horizontal>Or</Divider>
                    <div class="ui one column stackable center aligned page grid">
                      <div class="column twelve wide">
                      {this.state.showManualLogin
                      ? (
                      <Form>
                        <Form.Field>
                          <label>Username</label>
                          <input placeholder='Username' onChange={this.handleUserNameChange}/>
                        </Form.Field>
                        <Form.Field>
                          <label>Password</label>
                          <input placeholder='Password' onChange={this.handlePasswordChange}/>
                        </Form.Field>
                        <Button type='submit' onClick={() => this.showMenu()}>Submit</Button>
                        </Form>
                      )
                      : (
                        <Button type='submit' onClick={() => this.showManual()}>Sign in Manually</Button>
                      )}
                      </div>
                    </div>
                </div>
        </Segment>

        </Grid.Column>
        </Grid>

        {/* <img
          style={style.captureImage}
          ref={(img) => {
            this.img = img;
          }}
        /> */}
    </div>

    );
  }
}

export default withRouter(Login);
