import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import Context from '../context/Context'



const SingleProduct = ({ prod }) => {
    const data = useContext(Context)
    const cart = data.state.cart
    const dispatch = data.dispatch
    return (
        <div className='products'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.image} width='20%' height='40%' />
                <Card.Body>
                    <Card.Title>{prod.productName}</Card.Title>
                    <Card.Subtitle>
                        <span>{prod.price}</span>
                        {prod.fastDelivery ? (<div>Fast Delivery</div>) : (<div>In 4 days</div>)}
                    </Card.Subtitle>

                    <Button variant="primary" onClick={() => { dispatch({ type: 'ADD_TO_CART', payload: prod }); }}>
                        Add to cart</Button>{'  '}
                    <Button variant="danger" onClick={() => {

                        dispatch({ type: 'REMOVE_FROM_CART', payload: prod.id })
                    }}>Remove from cart</Button>{'  '}
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProduct