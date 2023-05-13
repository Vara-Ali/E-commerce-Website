import React from "react";
import { Image, Grid, Divider } from 'semantic-ui-react';
import ProductsCard from '../components/ProductsCard';

class Products extends React.Component {

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
            "https://fakestoreapi.com/products/category/men's clothing")
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
            <Divider horizontal>Men's Clothing</Divider>
            <Grid stackable columns='equal' centered>
                {/* { _.times (16, (i) => ( <Grid.Column key={i}> <Image src='https://react.semantic-ui.com/images/wireframe/image.png' /> </Grid.Column>))} */}
                {items.map(item => <Grid.Column width={3} key={item.id}><ProductsCard item={item} /></Grid.Column>)}
            </Grid>
            </>
            // <div className="App">

            //     <h1> Fetch data from an api in react </h1> {
            //         items.map((item) => (
            //             <ol key={item.id} >
            //                 id: {item.id},
            //                 Title: {item.title},
            //                 Price: {item.price}
            //             </ol>
            //         ))
            //     }
            // </div>
        );
    }
}

export default Products;
