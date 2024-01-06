import { products } from '../data/products'
import Product from './Product'

const Products = () => {

    return (
        <section className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-3 items-center justify-center'>
            {products.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </section>
    )
}

export default Products