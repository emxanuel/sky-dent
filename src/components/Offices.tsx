import { offices } from "../data/offices"
import pin from '../assets/location-pin.webp'

const Offices = () => {
    return (
        <div className="flex h-32 justify-evenly my-4 items-center">
            {offices.map((o) => (
                <div key={o.id} className="flex flex-col items-center">
                    <img className="select-none" width={60} src={pin} alt="" />
                    <h2 className="textBlue font-bold text-3xl">{o.location}</h2>
                    <p className="textBlue text-2xl">{o.phone}</p>
                </div>
            ))}
        </div>
    )
}

export default Offices