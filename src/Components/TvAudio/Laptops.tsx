import { useState, useEffect } from 'react'
import ApiProductContainer from "../Features/ApiProductContainer"
import { Product } from '../Features/Api_Interface'

const Laptops = () => {
    const [product, setProduct] = useState<Array<Product>>([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data =>{
                setProduct(data.products.filter((item:Product) => item.category === 'laptops'))
            })
            .catch(error => console.error('Error fetching laptops:', error))
    }, [])
    return (
        <>
        <h1>hola</h1>
        </>
    )
}

export default Laptops