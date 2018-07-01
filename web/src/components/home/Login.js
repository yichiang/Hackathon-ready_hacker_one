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
  constructor(props) {
   super(props);
   this.takePicture = this.takePicture.bind(this);
   this.state = {
    showManualLogin: false,
    message: 'Looking for your face...'
   }
 }

 takePicture() {
   this.camera.capture()
   .then(blob => {
     this.img.src = URL.createObjectURL(blob);
     this.img.onload = () => { URL.revokeObjectURL(this.src); }
   })
 }

 showManual() {
  this.setState({
    showManualLogin: true
  });
 }

 showMenu() {
  this.props.history.push('/menu');
 }

 componentDidMount() {
   setTimeout(() => {
      this.setState({
        message: 'Joseph, smile to get started :)'
      })
   }, 5000);
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
                          <label>First Name</label>
                          <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                          <label>Last Name</label>
                          <input placeholder='Last Name' />
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
