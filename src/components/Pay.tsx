import { useStore } from "@nanostores/react"
import { $car } from "../shopCarContext"
import axios from 'axios'
import { useEffect, useState } from "react"


const Pay = () => {
    
    const $cart = useStore($car)
    const amount = $cart.reduce((prev, current) => prev + current.price, 0)
    const [ip, setIp] = useState('')

    const getIp = async () => {
        const ip = await axios.get('https://api.ipify.org/?format=json');
        if (ip.status === 200){
            return ip.data.ip
        }
        return ip.data.ip
    }

    useEffect(() => {
        getIp().then(res => setIp(res))
    }, [])

    return (
        <form action="https://ecommerce.cardnet.com.do/authorize" method="post">
            <input name="TransactionType" value="0200" type="hidden" />
            <input name="CurrencyCode" value="214" type="hidden" />
            <input name="AcquiringInstitutionCode" value="349" type="hidden" />
            <input name="MerchantType" value="821" type="hidden" />
            <input name="MerchantNumber" value="349119772" type="hidden" />
            <input name="MerchantTerminal" value="00813218" type="hidden" />
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
            <input name="Amount" value={100} type="hidden" />
            <input name="Tax" value="00000000" type="hidden" />
            <input
                name="MerchantName"
                value="SKYDENT DO"
                type="hidden"
            />
            <input
                name="KeyEncriptionKey"
                value="1fc500b127d04b532f759d183944b057"
                type="hidden"
            />
            <input name="Ipclient" value={ip} type="hidden" />
            <input name="loteid" value="001" type="hidden" />
            <input name="seqid" value="001" type="hidden" />
            <input name='3DS_email' value='jruiz@cardnet.com.do' type='hidden' />
            <input name='3DS_mobilePhone' value='8095000000' type='hidden' />
            <input name='3DS_workPhone' value='8094733300' type='hidden' />
            <input name='3DS_homePhone' value='8095333333' type='hidden' />
            <input name='3DS_billAddr_linel' value='Av. Núñez de Cáceres' type='hidden' />
            <input name='3DS_billAddr_line2 ' value='No.10' type='hidden' />
            <input name='3DS_billAddr_line3' value='' type='hidden' />
            <input name='3DS_billAddr_city' value='Santo Domingo' type='hidden' />
            <input name='3DS_billAddr_state' value='DN' type='hidden' />
            <input name='3DS_billAddr_country' value='DOP' type='hidden' />
            <input name='3DS_billAddr_postCode' value='10111' type='hidden' />
            <input name='3DS_shipAddr_linel' value='Av. Núñez de Cáceres' type='hidden' />
            <input name='3DS_shipAddr_line2' value='No.10' type='hidden' />
            <input name='3DS_shipAddr_line3' value='' type='hidden' />
            <input name='3DS_shipAddr_city' value='Santo Domingo' type='hidden' />
            <input name='3DS_shipAddr_state' value='DN' type='hidden' />
            <input name='3DS_shipAddr_country' value='DOP' type='hidden' />
            <input name='3DS_shipAddr_postCode' value='10111' type='hidden' />
            <input
                className="bg-blue-500 text-white rounded-md px-6 py-1 text-2xl hover:cursor-pointer"
                type="submit"
                value="Pagar"
            />
        </form>
    )
}

export default Pay