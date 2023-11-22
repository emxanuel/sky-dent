import type { TProduct } from './types';

export type TCar = TProduct[]

class ClassCarContext {
    content: TCar
    add: (product: TProduct) => void
    remove: (product: TProduct) => void
    constructor(){
        this.content = []
        this.add = (product: TProduct) => {this.content.push(product)}
        this.remove = (product: TProduct) => {this.content.filter(p => p !== product)}
    }

}

const carContext = new ClassCarContext()

export { carContext }