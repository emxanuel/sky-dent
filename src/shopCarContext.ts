import {atom} from 'nanostores'
import type {TProduct}  from './types';

export const $car = atom<TProduct[]>([])

export function addProduct(product: TProduct){
    $car.set([...$car.get(), product])
    localStorage.setItem('car', JSON.stringify($car.get()))
}

export function removeProduct (index: number){
    $car.set($car.get().splice(index, 1))
}