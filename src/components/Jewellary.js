import React from "react";
import { Image, Grid, Divider } from 'semantic-ui-react';
import JewellaryCard from '../components/JewellaryCard'

class Jewellary extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch(
            "https://fakestoreapi.com/products/category/jewelery")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div>;

        return (
            <>
            <Divider horizontal>Jewelery Items</Divider>
            <Grid stackable columns='equal' centered>
                {/* { _.times (16, (i) => ( <Grid.Column key={i}> <Image src='https://react.semantic-ui.com/images/wireframe/image.png' /> </Grid.Column>))} */}
                {items.map(item => <Grid.Column width={3} key={item.id}><JewellaryCard item={item} /></Grid.Column>)}
            </Grid>
            </>
           
        );
    }
}

export default Jewellary;
