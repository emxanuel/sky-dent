import { services } from "../services"

const Services = () => {
    return (
        <div className="bgBlue h-full py-14 text-white">
            <h2 className="text-center font-bold text-4xl">Nuestros Servicios</h2>
            <div className="grid grid-cols-3 place-items-center">
            {services.map(s => (
                <div className="flex flex-col items-center justify-center gap-4">
                    <h3 className="font-bold text-2xl">{s.title}</h3>
                    <ul className="list-disc ">
                        {s.content.map(c => (
                            <li className="">{c}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Services