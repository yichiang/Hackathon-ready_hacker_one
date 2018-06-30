import React, { Component } from 'react';
import { Header, Image, Table, Button, Icon } from 'semantic-ui-react'
import './../../App.css';

class Basket extends Component {
  render() {
    return (
        <div>
            <h1>Basket</h1>
            <Table basic='very' celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Item</Table.HeaderCell>
                    <Table.HeaderCell>Cost</Table.HeaderCell>
                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                <Table.Row>
                    <Table.Cell>
                    <Header as='h4' image>
                        <Image src='/images/avatar/small/lena.png' rounded size='mini' />
                        <Header.Content>
                        Dish 1
                        <Header.Subheader>Small</Header.Subheader>
                        </Header.Content>
                    </Header>
                    </Table.Cell>
                    <Table.Cell>$22.13</Table.Cell>
                    <Table.Cell>1</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                    <Header as='h4' image>
                        <Image src='/images/avatar/small/matthew.png' rounded size='mini' />
                        <Header.Content>
                        Dish 1
                        <Header.Subheader>Small</Header.Subheader>
                        </Header.Content>
                    </Header>
                    </Table.Cell>
                    <Table.Cell>$15.23</Table.Cell>
                    <Table.Cell>1</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                    <Header as='h4' image>
                        <Image src='/images/avatar/small/lindsay.png' rounded size='mini' />
                        <Header.Content>
                        Dish 1
                        <Header.Subheader>Small</Header.Subheader>
                        </Header.Content>
                    </Header>
                    </Table.Cell>
                    <Table.Cell>$15.23</Table.Cell>
                    <Table.Cell>1</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                    <Header as='h4' image>
                        <Image src='/images/avatar/small/mark.png' rounded size='mini' />
                        <Header.Content>
                        Dish 1
                        <Header.Subheader>Large</Header.Subheader>
                        </Header.Content>
                    </Header>
                    </Table.Cell>
                    <Table.Cell>$15.23</Table.Cell>
                    <Table.Cell>1</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>
                    <Header as='h4' image>
                        <Header.Content>
                        Total
                        </Header.Content>
                    </Header>
                    </Table.Cell>
                    <Table.Cell colSpan='2'><Header as='h4' image>$115.23</Header></Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
            <Button animated floated='right'>
                <Button.Content visible>Place order</Button.Content>
                <Button.Content hidden>
                    <Icon name='right arrow' />
                </Button.Content>
            </Button>     
        </div>
    );
  }
}

export default Basket;
