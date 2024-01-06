import { useEffect, useState } from 'react'
import type { TProduct } from '../types'

const Shop = () => {
    const [car, setCar] = useState<TProduct[]>([])
    const storedCar = localStorage.getItem('car')

    const [amount, setAmount] = useState(0)
    useEffect(() => {
        setCar(JSON.parse(storedCar? storedCar : '[]') as TProduct[])
    }, [localStorage])

    useEffect(() => {
        setAmount(0)
        car.map((product) => {
            setAmount(prev => prev += product.price)
        })
    }, [car])
    console.log(car)
    return (
        <div className='flex w-full'>
            <div className="py-32 w-full flex flex-col gap-5">
                {
                    car.map((product, index) => (
                        <div className="flex  justify-around items-center" key={index}>
                            <p>{index + 1}</p>
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-52 aspect-square flex justify-center items-center h-full"
                            />

                            <p className='w-4/12'>{product.name}</p>
                            <p>RD${product.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                        </div>
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