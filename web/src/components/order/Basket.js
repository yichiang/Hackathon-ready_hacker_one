import React, { Component } from 'react';
import { Header, Image, Table, Button, Icon } from 'semantic-ui-react'
import './../../css/menu.css';

class Basket extends Component {



  render() {
    const { selecItems, currentTotal, handleSubmitReview, isCheckoutPage } = this.props;

    return (
        <div>
            <h1>
              <Icon name='shopping basket'></Icon>
              Basket
            </h1>
            <Table basic='very' celled>
                <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Image</Table.HeaderCell>
                    <Table.HeaderCell>Item</Table.HeaderCell>
                    <Table.HeaderCell>Cost</Table.HeaderCell>
                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                  {selecItems&&selecItems.map((x, i)=>{

                    return (
                      <Table.Row>
                          <Table.Cell>
                          <Header as='h4' image>
                            <Image src={x.imageSrc} rounded/>

                          </Header>
                          </Table.Cell>
                          <Table.Cell>
                          <Header as='h4'>
                              <Header.Content>
                              {x.name}
                              {/* <Header.Subheader>Small</Header.Subheader> */}
                              </Header.Content>
                          </Header>
                          </Table.Cell>
                          <Table.Cell>
                            {x.price}
                          </Table.Cell>
                          <Table.Cell>
                            {x.order}
                          </Table.Cell>
                      </Table.Row>

                    );
                  })}

                </Table.Body>
            </Table>
            <div className='btn_bottom_g'>
              <div>
                Total: <span className='total_dollar'>$ {currentTotal}</span>
              </div>
              {!isCheckoutPage&&
                <Button animated floated='right' onClick={handleSubmitReview}>
                    <Button.Content visible>Place order</Button.Content>
                    <Button.Content hidden>
                        <Icon name='right arrow' />
                    </Button.Content>
                </Button>
              }
          </div>
        </div>
    );
  }
}

export default Basket;
