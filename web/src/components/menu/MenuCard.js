import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import './../../css/menu.css';

class MenuCard extends Component {
  state = {}
   constructor(props) {
     super(props);

   }
  render() {
    const { menu } = this.props;
    const { name, desc, imageSrc, price} = menu;
    return (
      <Card className='menu_card'>
        <Image src={imageSrc} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className='date'>{price}</span>
          </Card.Meta>
          <Card.Description>{desc}</Card.Description>
        </Card.Content>
        <Card.Content extra>

        </Card.Content>
      </Card>
    )
  }
}
export default MenuCard
