import React, { Component } from 'react';
import { Header, Image, Table, Button, Icon, Segment } from 'semantic-ui-react'
import HeaderMenu from '../shared/HeaderMenu';

class OrderList extends Component {
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
                    <Table.Row>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>Processing</Table.Cell>
                      <Table.Cell>None</Table.Cell>
                      <Table.Cell><Button negative>Cancel</Button><Button positive>Fulfill</Button></Table.Cell>
                    </Table.Row>
                    <Table.Row positive>
                      <Table.Cell>2</Table.Cell>
                      <Table.Cell>
                        <Icon name='checkmark' />
                        Fulfilled
                      </Table.Cell>
                      <Table.Cell>None</Table.Cell>
                      <Table.Cell><Button negative disabled>Cancel</Button><Button positive disabled>Fulfill</Button></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>3</Table.Cell>
                      <Table.Cell>Processing</Table.Cell>
                      <Table.Cell>
                        5 min ago
                      </Table.Cell>
                      <Table.Cell><Button negative>Cancel</Button><Button positive>Fulfill</Button></Table.Cell>
                    </Table.Row>
                    <Table.Row negative>
                      <Table.Cell>4</Table.Cell>
                      <Table.Cell>
                        <Icon name='close' />
                        Cancelled
                      </Table.Cell>
                      <Table.Cell>10 secs ago</Table.Cell>
                      <Table.Cell><Button negative disabled>Cancel</Button><Button positive disabled>Fulfill</Button></Table.Cell>
                    </Table.Row>
                  </Table.Body>
              </Table>
            </Segment>
        </div>
    );
  }
}

export default OrderList;
