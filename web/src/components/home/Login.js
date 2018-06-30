import React, { Component } from 'react';
import './../../App.css';
import { Button, Checkbox, Form, Segment, Divider, Header } from 'semantic-ui-react'
import './../../css/home.css';
import Camera from 'react-camera';


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
 }

 takePicture() {
   this.camera.capture()
   .then(blob => {
     this.img.src = URL.createObjectURL(blob);
     this.img.onload = () => { URL.revokeObjectURL(this.src); }
   })
 }

  render() {
    return (
      <div>

      <Segment raised className={'pl_login_form'}>
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
        <Divider horizontal>Or</Divider>
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

            <Header size='huge'>Is Yi?</Header>
            <Button primary>Login</Button>

        </div>
      </Segment>


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

export default Login;
