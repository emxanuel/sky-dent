
const Financing = () => {
    return (
        <div className="flex flex-col items-center uppercase font-semibold gap-6 py-6">
            <p className="textBlue text-3xl scale-95 text-center flex flex-wrap items-center justify-center gap-4 h-full">
                <span>Disfruta de las atractivas facilidades con nuestros financiamientos</span>
                <span className="flex items-center gap-1 justify-center h-full">
                    <span className="font-extrabold text-neutral-500 text-5xl">SKY</span>
                    <span className="font-benedict font-normal text-5xl h-8 text-neutral-500">CASH</span>
                </span>
            </p>
            <a href="https://wa.me/8496338938" target="_blank" className="bgBlue text-white uppercase px-2 py-1 rounded-full text-base hover:scale-105 duration-200">
                Conoce más
            </a>
        </div>
    )
}

export default Financing