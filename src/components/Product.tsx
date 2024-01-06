import type React from "react";
import type { TProduct } from "../types";
import { addProduct } from "../shopCarContext";
import { useEffect, useState } from "react";

interface Props {
    product: TProduct
}

const Product: React.FC<Props> = ({ product }) => {

    const [added, setAdded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setAdded(false)
        }, 1000)
    
    }, [added])

    return (
        <section className='flex flex-col items-center w-72 justify-start h-full'>
            <img
                src={product.imageUrl}
                alt={`imagen ${product.name}`}
                className='w-full aspect-square flex justify-center items-center'
            />
            <div className='h-full flex flex-col items-center'>
                <h2 className='text-center py-3 font-bold'>{product.name}</h2>
                <p className='pb-5 font-semibold'>{`RD$${product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</p>
            </div>
            <button
                onClick={() => {
                    addProduct(product)
                    setAdded(true)
                }}
                className={`${!added ? 'bg-blue-500' : 'bg-green-300'} rounded-md px-6 py-1 text-white duration-200`}
            >{`${!added ? 'Agregar al carrito' : 'Agregado correctamente'}`}</button>
        </section>
    );
}

export default Product;