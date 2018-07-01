import React, { Component } from 'react';
import { Header, Image, Table, Button, Icon, Segment } from 'semantic-ui-react'
import HeaderMenu from '../shared/HeaderMenu';

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
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

  getOrders = () => {
    // let url = "http://localhost:3300/api/orders/";
    // var self = this;
    // $.ajax({
    //   url: url,
    //   type: "GET",
    // }).done(function(data) {
    //   console.log(data);
    //   data = [
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
    //   self.setState({orders: data })
    // });
    let data = [
      {
        id: 1,
        status: 'processing',
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

  componentDidMount() {
    this.getOrders();
  }

  render() {

    return (
        <div>
          <HeaderMenu/>
          <Segment>                
              <h1>
                <Icon name='shopping food'></Icon>
                Orders
              </h1>
              <Table basic='very' celled>
                  <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Order ID</Table.HeaderCell>
                      <Table.HeaderCell>Status</Table.HeaderCell>
                      <Table.HeaderCell>Last updated</Table.HeaderCell>
                      <Table.HeaderCell>Action</Table.HeaderCell>
                  </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {this.state.orders.map(order => {
                      let polar = {};
                      let status = null;
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
                          <Table.Cell>{order.id}</Table.Cell>
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
              </Table>
            </Segment>
        </div>
    );
  }
}

export default OrderList;
