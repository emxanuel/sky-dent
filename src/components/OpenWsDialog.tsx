import { useState } from 'react'
import { Icon } from '@iconify/react'

const OpenWsDialog = () => {
    const [openWs, setOpenWs] = useState(false)
    return (
        <div className="fixed right-2 bottom-2 flex flex-col gap-5 z-20">
            <div
                className={`bg-white border rounded-lg border-[#0c4e9c] ${openWs ? "flex" : "hidden"
                    } p-5 flex-col items-center`}
            >
                <h2 className="text-lg border-b">Sky Dent</h2>
                <p className="w-52">
                    ¿Tienes alguna pregunta? Ponte en contacto directo con
                    nosotros
                </p>
                <a
                    href="https://wa.me/8496338938"
                    target="_blank"
                    className="text-green-500 text-3xl self-end"

                >
                    <Icon icon="tabler:circle-arrow-right-filled" />
                </a>
            </div>
            <button
                className="w-12 aspect-square rounded-full text-white bg-green-500 text-3xl justify-center self-end flex items-center"
                id="open-ws"
                onClick={() => setOpenWs((open) => !open)}
            >
                <Icon icon="mdi:whatsapp" />
            </button>
        </div>
    )
}

export default OpenWsDialog