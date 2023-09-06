//hooks
import { useState, useEffect } from 'react'
import ApiProductContainer from '../../Features/ApiProductContainer';
//componentes
import { Product } from '../../Features/Api_Interface'
import LoaderGrid from '../../Features/ContentLoaderItems'
//items container
const ItemsContainer = () => {
    const [items, setItems] = useState<Array<Product>>([])
    const [isLoading, setIsLoading] = useState<Boolean>(false)

    useEffect(() => {
        setIsLoading(true) // Datos cargando, cambiamos el estado de isLoading
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                setItems(data.products.filter((item: Product) => item.category === 'smartphones'))
                setIsLoading(false)
            })
            .catch(error => console.error('Error fetching products', error))
    }, [])

    return (
        <>
            {isLoading ? (
                <main className=' grid place-items-center'>
                    <LoaderGrid />
                </main>
            ) : (
                <main>
                    <section className='grid pt-20 pb-10 grid-cols-3 max-w-5xl gap-5 items-center mx-auto' >
                        {items.map(product => (
                            <ApiProductContainer id={product.id} key={product.id} title={product.title} images={product.images} stock={product.stock} rating={product.rating} />
                        ))}
                    </section>
                </main>
            )}
        </>
    )
}

export default ItemsContainer