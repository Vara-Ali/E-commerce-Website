import React from "react";
import { Card, Icon, Button, Image } from 'semantic-ui-react';

const ProductsCard = ({ item }) => {

    return (
        <Card>
            <Image src={item.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{item.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>Price: {item.price}</span>
                </Card.Meta>
                {/* <Card.Description>
                {item.description}
                </Card.Description> */}
            </Card.Content>
            <Card.Content extra>
                <a>
                <Button animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
                </a>
            </Card.Content>
        </Card>
    )
}


        // <div class="card" style={{ width: '18rem' ,height: '30rem'}}>
        //     <img src={item.image} width={150} height={150} class="card-img-top" alt="..."></img>
        //     <div class="card-body">
        //         <h5 class="card-title">{item.title}</h5>
        //         <p class="card-text">{item.description}</p>
        //         <a href="#" class="btn btn-primary">Add to Cart</a>

        //     </div>
        // </div>
    


export default ProductsCard;