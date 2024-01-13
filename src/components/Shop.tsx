import { useEffect, useState } from 'react'
import type { TProduct } from '../types'
import { useStore } from '@nanostores/react'
import { $car, removeProduct } from '../shopCarContext'
import { Icon } from '@iconify/react/dist/iconify.js'
import CartItem from './CartItem'

const Shop = () => {
    const $cart = useStore($car)
    const [deleteProduct, setDeleteProduct] = useState(false)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setDeleteProduct(false)
        }, 300)

    }, [deleteProduct])


    const amount = $cart.reduce((prev, current) => prev + current.price, 0)
    return (
        <div className='flex w-full'>
            <div className="py-10 md:py-32 w-full flex flex-col gap-5">
                {
                    $cart.map((product, index) => (
                        <CartItem 
                            product={product}
                            index={index}
                            key={index}
                            removeProduct={removeProduct}
                            setDeleteProduct={setDeleteProduct}
                        />
                    ))
                }
                <div className="flex w-full items-end justify-end">
                    <p className="text-lg font-bold px-20">Total: RD${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
            </div>
        </div>
    )
}

export default Shop