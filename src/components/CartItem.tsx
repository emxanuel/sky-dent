import React, { useEffect, useRef, useState } from 'react';
import type { TProduct } from '../types';
import { Icon } from '@iconify/react/dist/iconify.js';

interface Props {
    product: TProduct,
    removeProduct: (index: number) => void,
    setDeleteProduct: (value: boolean) => void,
    index: number
}

const CartItem: React.FC<Props> = ({ product, removeProduct, setDeleteProduct, index }) => {
    const element = useRef<HTMLDivElement | null>(null)
    const [signal, setSignal] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setSignal(false)
            element.current?.classList.remove('translate-x-[-100vw]', 'duration-500')
        }, 250)

    }, [signal])

    return (
        <div className="flex flex-col justify-center gap-5 md:gap-0 md:flex-row md:justify-around items-center shadow-md shadow-[#0c4e9c]/20 rounded-md md:shadow-none md:rounded-none" ref={element}>
            <p className='hidden md:block'>{index + 1}</p>
            <img
                src={product.imageUrl}
                alt={product.name}
                className="w-64 md:w-52 aspect-square flex justify-center items-center h-full"
            />

            <p className='md:w-4/12 text-center md:text-left'>{product.name}</p>
            <p>RD${product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <Icon icon="mdi:delete" className='text-red-500 text-6xl md:text-3xl cursor-pointer' onClick={() => {
                element.current?.classList.add('translate-x-[-100vw]', 'duration-500')
                setTimeout(() => {
                    removeProduct(index)
                    setSignal(true)
                    setTimeout(() => {

                        setDeleteProduct(true)
                    }, 200);
                }, 600);
            }} />
        </div>
    );
}

export default CartItem;