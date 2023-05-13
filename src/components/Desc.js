import React, { useState } from "react";
import { Header, Card, Icon, Button, Image, Popup } from 'semantic-ui-react';
import JewellaryCard from "./JewellaryCard";
import ProductsCard from "./ProductsCard";


const Desc = ({ item }) => {

    var [id, setid] = useState(-1);
    // let id;

    function showImage(idProduct) {
        // console.log(`Button with id ${idProduct} was clicked`);
        setid(idProduct);
        console.log(`Now Button with id ${id} was clicked`);

    }


    //   {(() => {

    console.log(`Now Button with id ${id} was clicked`);
    return (

        <div>
            {(() => {
                if (id === -1) {
                    return (
                        <Card>
                            <Card.Content header='Description' />
                            <Card.Content description={item.description} />
                            <Card.Content extra>
                                <Icon name='money' /> ${item.price}
                                <a>
                                    <Button fluid animated='vertical' onClick={() => showImage(item.id)}>
                                        <Button.Content hidden>Back</Button.Content>
                                        <Button.Content visible>
                                            <Icon name='picture' />
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
                            <JewellaryCard item={item} />
                        </>
                    )
                }
            })()}
        </div>
    )

}

export default Desc;