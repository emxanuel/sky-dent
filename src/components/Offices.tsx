import { offices } from "../data/offices"
import pin from '../assets/location-pin.webp'

interface Props{
    gap?: string,
    footer?: boolean
}

const Offices: React.FC<Props> = ({gap, footer}) => {
    return (
        <div className={`flex md:flex-row gap-10 md:gap-0 md:h-32 justify-evenly my-4 items-center ${gap? gap : ''} ${footer? 'flex-row w-full' : 'flex-col'}`}>
            {offices.map((o) => (
                <div key={o.id} className="flex flex-col items-center">
                    <img className={`select-none w-16 ${footer? 'w-12 md:w-16' : ''}`} src={pin} alt="" />
                    <h2 className={`textBlue font-bold text-3xl ${footer? 'text-xs md:text-3xl' : ''}`}>{o.location}</h2>
                    <p className={`textBlue text-2xl ${footer? 'text-xs md:text-2xl' : ''}`}>{o.phone}</p>
                </div>
            ))}
        </div>
    )
}

export default Offices