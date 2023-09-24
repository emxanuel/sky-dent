import { services } from "../data/services"
import icon from '../assets/icon.webp'

const Services = () => {
    return (
        <div className="bgBlue h-full py-14 text-white">
            <h2 className="text-center font-bold md:text-5xl py-5 text-4xl">Nuestros Servicios</h2>
            <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-2 md:gap-11 lg:grid-cols-3 place-items-center">
                {services.map(s => (
                    <div className={`flex flex-col items-center justify-center w-full gap-3`}>
                        <h3 className="font-bold text-3xl">{s.title}</h3>
                        <ul className="md:list-disc flex flex-col items-center md:block">
                            {s.content.map(c => (
                                <li><p className="text-xl">{c}</p></li>
                            ))}
                        </ul>
                    </div>
                ))}
                <img className="lg:col-start-3" width={280} height={280} src={icon} alt="" />
            </div>
        </div>
    )
}

export default Services