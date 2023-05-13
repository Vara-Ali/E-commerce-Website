import React, { useState } from "react";
import { Header, Card, Icon, Button, Image, Popup } from 'semantic-ui-react';
import Desc from "./Desc";


const JewellaryCard = ({ item }) => {

    var [id, setid] = useState(-1);
    const [cartItems, setCartItems] = useState([]);
    // let id;

    function showDescription(idProduct) {
        // console.log(`Button with id ${idProduct} was clicked`);
        setid(idProduct);
        console.log(`Now Button with id ${id} was clicked`);

    }

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    //   {(() => {

    console.log(`Now Button with id ${id} was clicked`);
    return (

        <div>
            {(() => {
                if (id === -1) {
                    return (
                        <Card>
                            {/* console.log(`Now Button with id ${id} was clicked`); */}
                            <Image src={item.image} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>{item.title}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Price: ${item.price}</span>
                                </Card.Meta>
                                {/* <Card.Description>
                    {item.description}
                    </Card.Description> */}
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Button animated="vertical" onClick={() => addToCart(item)}>
                                        <Button.Content hidden>Cart</Button.Content>
                                        <Button.Content visible>
                                            <Icon name="cart" />
                                        </Button.Content>
                                    </Button>

                                    <Button animated='vertical' onClick={() => showDescription(item.id)}>
                                        <Button.Content hidden>Details</Button.Content>
                                        <Button.Content visible>
                                            <Icon name='sticky note outline' />
                                        </Button.Content>
                                    </Button>
                                </a>
                            </Card.Content>
                        </Card>

                    )
                }
                else if (id !== -1) {
                    return (
                        <>
                            <Desc item={item} />
                        </>
                    )
                }
            })()}

       

        </div>
    )


    // return (
    //     <>
    //         {id === -1  ? (
    //             <>
    //                      <Card>
    //             <Image src={item.image} wrapped ui={false} />
    //             <Card.Content>
    //                 <Card.Header>{item.title}</Card.Header>
    //                 <Card.Meta>
    //                     <span className='date'>Price: {item.price}</span>
    //                 </Card.Meta>
    //                 {/* <Card.Description>
    //                 {item.description}
    //                 </Card.Description> */}
    //             </Card.Content>
    //             <Card.Content extra>
    //                 <a>
    //                     <Button animated='vertical' >
    //                         <Button.Content hidden>Shop</Button.Content>
    //                         <Button.Content visible>
    //                             <Icon name='shop' />
    //                         </Button.Content>
    //                     </Button>
    //                     <Button animated='vertical' onClick={() => showDescription(item.id)}>
    //                         <Button.Content hidden>Details</Button.Content>
    //                         <Button.Content visible>
    //                             <Icon name='sticky note outline' />
    //                         </Button.Content>
    //                     </Button>
    //                 </a>
    //             </Card.Content>
    //         </Card>

    //             </>
    //         ) 
    //         :
    //         (
    //             <>
    //                console.log("hhhhhhhh")
    //             </>
    //         )
    //         }
    //     </>
    // );

    // })}


}


// <div class="card" style={{ width: '18rem' ,height: '30rem'}}>
//     <img src={item.image} width={150} height={150} class="card-img-top" alt="..."></img>
//     <div class="card-body">
//         <h5 class="card-title">{item.title}</h5>
//         <p class="card-text">{item.description}</p>
//         <a href="#" class="btn btn-primary">Add to Cart</a>

//     </div>
// </div>



export default JewellaryCard;