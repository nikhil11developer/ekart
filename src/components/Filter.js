import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating'
import Context from '../context/Context'



const Filter = () => {
    const [rating , setRating]=useState(4)
    const data=useContext(Context)
    const {byStock , byFastDelivery , byRating, sort}=data.productState
    const productDispatcher=data.productDispatcher
    console.log(data.productState)
    return (
        
            <div className="filters">
                <span className="title">Filter Products</span>
                <span>
                    <Form.Check
                        inline
                        label="Ascending"
                        name="group1"
                        type="radio"
                        id={`inline-1`}
                        onChange={()=>{
                            productDispatcher({type:'SORT_BY_PRICE' , payload:'lowToHigh'})
                        }}
                        checked={sort==='lowToHigh'?true:false}


                    />
                </span>
                <span>
                    <Form.Check
                        inline
                        label="Descending"
                        name="group1"
                        type="radio"
                        id={`inline-2`}
                        onChange={()=>{
                            productDispatcher({type:'SORT_BY_PRICE' , payload:'highToLow'})
                        }}
                        checked={sort==='highToLow'?true:false}

                    />
                </span>
                <span>
                    <Form.Check
                        inline
                        label="Include Out of Stock"
                        name="group1"
                        type="checkbox"
                        id={`inline-3`}
                        onChange={()=>{
                            productDispatcher({type:'FILTER_BY_STOCK'})
                        }}
                        checked={byStock}

                    />
                </span>
                <span>
                    <Form.Check
                        inline
                        label="Fast Delivery Only"
                        name="group1"
                        type="checkbox"
                        id={`inline-4`}
                        onChange={()=>{
                            productDispatcher({type:'FILTER_BY_DELIVERY'})
                        }}
                        checked={byFastDelivery}

                    />
                </span>
                <span>
                    <label style={{ paddingRight: 10 }}>Rating: </label>
                    <Rating rating={byRating}  clicker={(i)=>{
                        productDispatcher({type:'FILTER_BY_RATING' , payload:i+1})
                    }} /> 
                </span>
                <Button
                    variant="light"
                    onClick={()=>{
                        productDispatcher({type:'CLEAR_FILTERS'})
                    }}
                >
                Clear All Filters
                </Button>
            </div>  
        
    )
}

export default Filter