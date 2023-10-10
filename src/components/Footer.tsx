import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { offices } from '../data/offices'

const Footer = () => {
    return (
        <div className='flex justify-center flex-col items-center w-full py-10 gap-10' id='contact'>
            <h2 className='text-center text-2xl md:text-5xl py-10 font-bold textBlue'>Contáctanos</h2>
            <div className='flex justify-evenly w-full textBlue flex-col md:flex-row items-center md:items-start gap-10 md:gap-10 md:px-5 lg:gap-0 lg:px-0'>
                {offices.map(o => (
                    <div className='w-10/12 md:w-56 text-lg' key={o.id}>
                        <h3 className='font-extrabold text-lg'>{o.name}</h3>
                        <p>{o.phone}</p>
                        <p className='text-justify pt-2 md:pt-6'>{o.location}</p>
                    </div>
                ))}
            </div>
            <a href='https://instagram.com/skydentrd' className='flex gap-3 items-center text-lg hover:text-neutral-500'>
                <FontAwesomeIcon icon={faInstagram} className='bgBlue text-white p-2 rounded-full hover:bg-neutral-500 duration-200' />
                <span className='textBlue font-bold hover:text-neutral-500 duration-200'>skydentrd</span>
            </a>
        </div>
    )
}

export default Footer