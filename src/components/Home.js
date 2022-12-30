import React, { useContext } from 'react'
import Context from '../context/Context'
import Filter from './Filter'
import SingleProduct from './SingleProduct'
import './styles.css'


const Home = () => {
    const data = useContext(Context)
    
    return (
        <div className='home'>
            <Filter />
            <div className='productContainer'>
                {


                    data.state.products.map((prod) => {
                        return <SingleProduct key={prod.id} prod={prod} />
                    })
                }

        
            </div>
        </div>
    )
}

export default Home