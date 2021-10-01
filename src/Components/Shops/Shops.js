import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { useState } from 'react';
import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Shop from '../Shop/Shop'

const Shops = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>

            <Container fluid className="mt-5">
                { products.length === 0 ? <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row" className=" w-25 mx-auto">
                    <CircularProgress color="secondary" />
                    <CircularProgress color="success" />
                    <CircularProgress color="inherit" />
                </Stack>

                 : 
                <Row xs={1} md={4}>
                    {
                        products.map(product => <Shop
                            key={product.id}
                            product={product}
                        ></Shop>)
                    }
                </Row>
}
            </Container>




        </>
    );
};

export default Shops;