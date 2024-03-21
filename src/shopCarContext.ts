import {atom} from 'nanostores'
import type {TProduct}  from './types';
import {persistentAtom} from '@nanostores/persistent'

export const $car = persistentAtom<TProduct[]>('car', [], {
    encode: JSON.stringify,
    decode: JSON.parse
})

export function addProduct(product: TProduct){
    $car.set([...$car.get(), product])
}

export function removeProduct(index: number) {
    $car.set($car.get().filter((_, i) => i !== index));
}

export function clearCart(){
    $car.set([])
}