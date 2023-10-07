import video1 from '../assets/video 1.mp4'
import video2 from '../assets/video 2.mp4'
import video3 from '../assets/video 3.mp4'
import video4 from '../assets/video 4.mp4'

const videos = [
    {
        id: 1,
        path: video1,
        title: 'HILO DENTAL',
        text: `La función principal es eliminar la placa bacteriana que se encuentra en las
        paredes que están en contacto entre las diferentes piezas dentales. A diferencia
        del cepillo dental, el hilo dental limpia zonas, en las cuales el cepillo no puede
        llegar, por eso es importante su uso.`
    },
    {
        id: 2,
        path: video2,
        title: 'DOLOR DE MUELA',
        text: `El dolor de muelas es un compañero de viaje nunca deseado que llega en el
        momento más inoportuno. Las razones por las que se genera un dolor de muelas
        son muchas, por eso es importante acudir cuanto antes a tu centro odontológico
        (SKYDENTRD) más cercano para que un profesional pueda examinar cuanto
        antes la zona afectada y compruebe la posible causa del dolor.`
    },
    {
        id: 3,
        path: video3,
        title: 'CHEQUEOS RUTINARIOS',
        text: `Un Examen Dental o Chequeo de Rutina es una revisión de los dientes y las
        encías. La mayoría de los niños y los adultos se deben hacer un examen dental
        cada seis meses. Estos exámenes son importantes para la salud bucal. Los
        problemas de salud bucal pueden volverse serios y dolorosos si no se tratan a
        tiempo.`
    },
    {
        id: 4,
        path: video4,
        title: 'CUIDAR DIENTES DE NUESTROS HIJOS',
        text: `El cuidado apropiado de los dientes y las encías de los niños incluye cepillado y enjuague
        diariamente. También incluye hacerse exámenes dentales de rutina y recibir los tratamientos
        necesarios como fluoruro, sellantes, extracciones, rellenos o frenillos (correctores dentales) y
        otras ortodoncias.`
    }
]

const Videos = () => {
    return (
        <div className='flex flex-col'>
            <h2 className='textBlue text-center text-2xl font-bold py-5 border-b-2'>RECOMENDACIONES</h2>
            <div className='flex flex-col md:grid md:grid-cols-4'>
                {videos.map((v) => (
                    <div className='' key={v.id}>
                        <video className='' controls src={v.path} />
                        <h3 className='font-bold text-center py-4'>{v.title}</h3>
                        <p className='px-5 text-justify md:py-4 pb-5 md:pb-0'>{v.text}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Videos