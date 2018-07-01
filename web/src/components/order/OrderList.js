import $ from 'jquery'
import React, { Component } from 'react';
import { Header, Image, Table, Button, Icon, Segment, Tab } from 'semantic-ui-react'
import HeaderMenu from '../shared/HeaderMenu';
import orderData_json from './../../data/order.json';

class OrderList extends Component {
  state = {
    //give default value in case demo internet issue
    orders: orderData_json,
    // orders: [],
    urlDomain: 'http://localhost:3300/',

  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
      this.getOrders();
  }

  handleFulfilled = () => {
    // POST to server to fulfill

    // Update state
    let data = [
      {
        id: 1,
        status: 'fulfilled',
        lastUpdated: Date.now()
      },
      {
        id: 2,
        status: 'fulfilled',
        lastUpdated: Date.now()
      },
      {
        id: 3,
        status: 'cancelled',
        lastUpdated: Date.now()
      }
    ]
    this.setState({orders: data })
  }

  handleCancel = () => {
    // POST to server to cancel

    // Update state
    let data = [
      {
        id: 1,
        status: 'cancelled',
        lastUpdated: Date.now()
      },
      {
        id: 2,
        status: 'fulfilled',
        lastUpdated: Date.now()
      },
      {
        id: 3,
        status: 'cancelled',
        lastUpdated: Date.now()
      }
    ]
    this.setState({orders: data })
  }

  // getOrders = () => {
  //
  //   let data = [
  //     {
  //       id: 1,
  //       status: 'processing',
  //       lastUpdated: Date.now()
  //     },
  //     {
  //       id: 2,
  //       status: 'fulfilled',
  //       lastUpdated: Date.now()
  //     },
  //     {
  //       id: 3,
  //       status: 'cancelled',
  //       lastUpdated: Date.now()
  //     }
  //   ]
  //   this.setState({orders: data })
  // }
  getOrders = () => {
    let url = this.state.urlDomain+'api/orders/';
    var self = this;
    $.ajax({
      url: url,
      type: "GET",

    }).done(function(data) {
      console.log(data);
      if(data&&data.length > 0){
        data = data.map(x=> {
          if(x.StatusFullfilled){
            x.status = "fulfilled";
            x.lastUpdated  = x.StatusFullfilled;
          } else if(x.StatusCancelled){
            x.status = "cancelled";
            x.lastUpdated  = x.StatusCancelled;
          }else{
            x.status = "processing";
            x.lastUpdated  = x.StatusNew;
          }

          return x;
        })
        self.setState({orders: data })
      }
      //console.log("eva: data" ,data);
    });
  }


  render() {
    const table = (filter) => <Table basic='very' celled>
        <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Order ID</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Last updated</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.orders
            .filter(order => filter === 'all' || order.status === filter)
            .map(order => {
            let polar = {};
            let status = <span><Icon name='uniregistry' /> Processing</span>;
            let disabled = false;

            if (order.status === 'fulfilled') {
              polar.positive = true;
              disabled = true;
              status = <span><Icon name='checkmark' /> Fulfilled</span>;
            }

            if (order.status === 'cancelled') {
              polar.negative = true;
              disabled = true;
              status = <span><Icon name='close' /> Cancelled</span>;
            }

            return (
              <Table.Row {...polar}>
                <Table.Cell>{order.OrderID}</Table.Cell>
                <Table.Cell>{status}</Table.Cell>
                <Table.Cell>{new Date(order.lastUpdated).toLocaleString()}</Table.Cell>
                <Table.Cell>
                  <Button negative disabled={disabled} onClick={this.handleCancel}>Cancel</Button>
                  <Button positive disabled={disabled} onClick={this.handleFulfilled}>Fulfill</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
    </Table>;

    const panes = [
      { menuItem: 'All', render: () => <Tab.Pane attached={false}>{table('all')}</Tab.Pane> },
      { menuItem: 'Active', render: () => <Tab.Pane attached={false}>{table('processing')}</Tab.Pane> },
      { menuItem: 'Cancelled', render: () => <Tab.Pane attached={false}>{table('cancelled')}</Tab.Pane> },
      { menuItem: 'Fulfilled', render: () => <Tab.Pane attached={false}>{table('fulfilled')}</Tab.Pane> },
    ]

    return (
        <div>
          <HeaderMenu/>
          <Segment>
              <h1>
                <Icon name='shopping food'></Icon>
                Orders
              </h1>
              <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
              <Button color='facebook' style={style.export}>
                <Icon name='file excel' /> Export
              </Button>
          </Segment>
        </div>
    );
  }
}

const style = {
  export: {
    marginTop: '20px'
  }
}

export default OrderList;
