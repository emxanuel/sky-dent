import { products } from '../data/products'
import { addProduct } from '../shopCarContext'


const Products = () => {
    return (
        <div className='flex flex-wrap gap-3 items-center justify-center'>
            {products.map((product) => (
                <div key={product.id} className='flex flex-col items-center w-72'>
                    <h2>{product.name}</h2>
                    <img
                        src={product.imageUrl}
                        alt={`imagen ${product.name}`}
                        className='w-full aspect-square flex justify-center items-center h-full border border-current'
                    />
                    <p>{product.price}</p>
                    <button
                        onClick={() => {
                            addProduct(product)
                        }}
                        className='bg-blue-500 text-white rounded-md px-6 py-1'
                    >Agregar al carrito</button>
                </div>
            ))}
        </div>
    )
}

export default Products