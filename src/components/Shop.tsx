import {useState} from 'react'
import { carContext as car } from '../shopCarContext'

const Shop = () => {
    const [amount, setAmount] = useState(0)
    console.log(car.content)
    return (
        <div>
            <div className="py-32 w-full flex flex-col">
            {
                car.content.map((product, index) => (
                    <div className="flex  justify-around items-center">
                        <p>{index + 1}</p>
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className ="w-52 aspect-square flex justify-center items-center h-full border border-current"
                        />

                        <p>{product.name}</p>
                        <p>${product.price}</p>
                    </div>
                ))
            }
            <div className="flex w-full items-end justify-end">
                <p className  ="text-lg font-bold px-20">Total: ${amount}</p>
            </div>
        </div>
        </div>
    )
}

export default Shop