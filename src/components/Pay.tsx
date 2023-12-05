import type { TProduct } from "../types";
import { useState, useEffect } from "react";
const storedCar = localStorage.getItem('car')
const car = JSON.parse(storedCar ? storedCar : '[]') as TProduct[]

let amount = 0
car.map((product) => {
    amount += product.price
})

const Pay = () => {
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
    return (
        <form action="https://lab.cardnet.com.do/authorize" method="post">
            <input name="TransactionType" value="0200" type="hidden" />
            <input name="CurrencyCode" value="214" type="hidden" />
            <input name="AcquiringInstitutionCode" value="349" type="hidden" />
            <input name="MerchantType" value="5440" type="hidden" />
            <input name="MerchantNumber" value="349041263 " type="hidden" />
            <input name="MerchantTerminal" value="22222222" type="hidden" />
            <input
                name="ReturnUrl"
                value={`${window.location.origin}/respuesta-pago`}
                type="hidden"
            />
            <input
                name="CancelUrl"
                value={`${window.location.origin}/respuesta-pago`}
                type="hidden"
            />
            <input name="PageLanguaje" value="ENG" type="hidden" />
            <input name="OrdenId" value="686" type="hidden" />
            <input name="TransactionId" value="160088" type="hidden" />
            <input name="Amount" value={amount * 100} type="hidden" />
            <input name="Tax" value="00000000" type="hidden" />
            <input
                name="MerchantName"
                value="COMERCIO PARA REALIZAR PRUEBAS DO"
                type="hidden"
            />
            <input
                name="KeyEncriptionKey"
                value="1fc500b127d04b532f759d183944b057"
                type="hidden"
            />
            <input name="Ipclient" value="X.X.X.X" type="hidden" />
            <input name="loteid" value="001" type="hidden" />
            <input name="seqid" value="001" type="hidden" />
            <input
                className="bg-blue-500 text-white rounded-md px-6 py-1"
                type="submit"
                value="Pagar"
            />
        </form>
    )
}

export default Pay