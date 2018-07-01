import React, { Component } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import './../../css/menu.css';

class MenuCard extends Component {
  state = {}
   constructor(props) {
     super(props);

   }
  render() {
    const maxDescLength = 150;
    const { menu, itemIndex } = this.props;
    const { name, desc, imageSrc, price} = menu;
    return (
      <Card className='menu_card'>
        <Image src={imageSrc} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>

          <Card.Description>{desc.length > maxDescLength? desc.substring(0,maxDescLength) + '...': desc}</Card.Description>
          {/* <Card.Meta>
            <span className='date'>${price}</span>
          </Card.Meta> */}
          <Card.Meta className='price_meta'>
            <div>${price}</div>

          </Card.Meta>
        </Card.Content>

        <Card.Content extra>
          <div className='buttonGroup'>
            <div onClick={(e) => this.props.handleChangeOrder(itemIndex, -1)}><Icon name='minus'/></div>
            <div>{menu.order || 0}</div>
            <div onClick={(e) => this.props.handleChangeOrder(itemIndex, 1)}><Icon name='plus'/></div>
          </div>
        </Card.Content>
      </Card>
    )
  }
}
export default MenuCard
