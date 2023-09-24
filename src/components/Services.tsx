import { services } from "../data/services"
import icon from '../assets/icon.webp'

const Services = () => {
    return (
        <div className="bgBlue h-full py-14 text-white">
            <h2 className="text-center font-bold text-5xl">Nuestros Servicios</h2>
            <div className="grid grid-cols-3 place-items-center">
                {services.map(s => (
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h3 className="font-bold text-3xl">{s.title}</h3>
                        <ul className="list-disc">
                            {s.content.map(c => (
                                <li className=""><p className="text-xl">{c}</p></li>
                            ))}
                        </ul>
                    </div>
                ))}
                <img className="col-start-3" width={280} height={280} src={icon} alt="" />
            </div>
        </div>
    )
}

export default Services