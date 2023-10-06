
const Form = () => {
    return (
        <form className="relative py-10 md:mx-20 lg:mx-40 px-4 md:px-10 border rounded-md flex flex-col">
            <div className="flex flex-col">
                <label htmlFor="" className="font-bold border-b">Datos del paciente</label>
                <div className="flex flex-col py-4">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="" className="font-bold">Tipo de paciente</label>
                        <div className="flex gap-2 md:gap-10 md:flex-row flex-col">
                            <div className="flex items-center gap-2">
                                <input type="radio" name="patient-type" id="" />
                                <label htmlFor="">Personal</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" name="patient-type" id="" />
                                <label htmlFor="">Dependiente menor de edad</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" name="patient-type" id="" />
                                <label htmlFor="">Extranjero</label>
                            </div>
                        </div>
                    </div>
                    <div className="py-4">
                        <label htmlFor="" className="font-bold">Tipo de cita</label>
                        <div className="flex gap-10">
                            <div className="flex gap-2">
                                <input type="radio" name="appointment-type" id="" />
                                <label htmlFor="">Consulta inicial</label>
                            </div>
                            <div className="flex gap-2">
                                <input type="radio" name="appointment-type" id="" />
                                <label htmlFor="">Profilaxis</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 py-4">
                        <input className="border p-2" type="text" placeholder="Cedula" />
                        <input className="border p-2" type="text" placeholder="Nombre" />
                        <input className="border p-2" type="text" placeholder="Apellido" />
                    </div>
                    <div className="flex gap-10 py-4">
                        <div className="flex gap-2">
                            <input name="gender" type="radio"></input>
                            <label htmlFor="">Masculino</label>
                        </div>
                        <div className="flex gap-2">
                            <input name="gender" type="radio"></input>
                            <label htmlFor="">Femenino</label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-4">
                        <input className="border p-2" type="text" placeholder="Fecha Nacimiento" />
                        <input className="border p-2" type="text" placeholder="E-mail" />
                        <input className="border p-2" type="text" placeholder="Telefono" />
                        <input className="border p-2" type="text" placeholder="Celular" />
                        <select className="border p-2" name="" id="">
                            <option value="">Seleccionar ARS</option>
                        </select>
                        <input className="border p-2" type="text" placeholder="Numero Afiliado" />
                    </div>
                </div>
            </div>
            <div className="py-4 flex flex-col">
                <label htmlFor="" className="font-bold border-b">Cuestionario</label>
                <div className="py-4">
                    <label htmlFor="" className="font-bold">Esta usted embarazada o cree estarlo?</label>
                    <div className="flex flex-col ">
                        <div className="flex gap-2">
                            <input type="radio" name="" id="" />
                            <label htmlFor="is-pregnant">Si</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" name="" id="" />
                            <label htmlFor="is-pregnant">No</label>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <label htmlFor="" className="font-bold">
                        Usted o alguien con quien haya estado en contacto cercano
                        ha viajado al extranjero en los ultimos
                        14 dias?
                    </label>
                    <div className="flex flex-col ">
                        <div className="flex gap-2">
                            <input type="radio" name="contact-foreign" id="" />
                            <label htmlFor="">Si</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" name="contact-foreign" id="" />
                            <label htmlFor="">No</label>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <label htmlFor="" className="font-bold">
                        Ha estado en contacto con alguien a quien
                        le ha diagnosticado COVID-19 o que ha estado en cuarentena
                        como medida de precaucion en los ultimos 14 dias
                    </label>
                    <div className="flex flex-col ">
                        <div className="flex gap-2">
                            <input type="radio" name="contact-covid" id="" />
                            <label htmlFor="">Si</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" name="contact-covid" id="" />
                            <label htmlFor="">No</label>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <label htmlFor="" className="font-bold">Ha tenido uno o varios de estos sintomas en los ultimos 14 dias?</label>
                    <div className="flex gap-2">
                        <input type="checkbox" name="symptom" id="" />
                        <label htmlFor="">Fiebre</label>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" name="symptom" id="" />
                        <label htmlFor="">Tos</label>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" name="symptom" id="" />
                        <label htmlFor="">Falta de aire y cansancio</label>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" name="symptom" id="" />
                        <label htmlFor="">Ninguna</label>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <label htmlFor="" className="font-bold">
                        Le han diagnosticado o esta esperando pruebas
                        relacionadas con un diagnostico de sospecha de coronavirus?
                    </label>
                    <div className="flex gap-10">
                        <div className="flex gap-2">
                            <input type="radio" name="covid" id="" />
                            <label htmlFor="">Si</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" name="covid" id="" />
                            <label htmlFor="">No</label>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <label htmlFor="" className="font-bold">Posee marcapaso cardiaco</label>
                    <div className="flex gap-10">
                        <div className="flex gap-2">
                            <input type="radio" name="pacemaker" id="" />
                            <label htmlFor="">Si</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" name="pacemaker" id="" />
                            <label htmlFor="">No</label>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <label htmlFor="" className="font-bold">Cuando fue la ultima vez que fue al dentista</label>
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <input type="checkbox" name="last-time" id="" />
                            <label htmlFor="">Nunca</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="last-time" id="" />
                            <label htmlFor="">0 - 6 meses</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="last-time" id="" />
                            <label htmlFor="">6 meses - 1 año</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="last-time" id="" />
                            <label htmlFor="">1 - 3 años</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" name="last-time" id="" />
                            <label htmlFor="">Mas de 3 años</label>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <label htmlFor="" className="font-bold">Le sangran las encias al cepillarse</label>
                    <div className="flex flex-col ">
                        <div className="flex gap-2">
                            <input type="radio" name="bleed-brushing" id="" />
                            <label htmlFor="">Si</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" name="bleed-brushing" id="" />
                            <label htmlFor="">No</label>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <label htmlFor="" className="font-bold">Tiene movilidad en alguno de sus dientes_</label>
                    <div className="flex flex-col ">
                        <div className="flex gap-2">
                            <input type="radio" name="tooth-movility" id="" />
                            <label htmlFor="">Si</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" name="tooth-movility" id="" />
                            <label htmlFor="">No</label>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <label htmlFor="" className="font-bold">Ha sido tratado por un periodoncista antes?</label>
                    <div className="flex flex-col ">
                        <div className="flex gap-2">
                            <input type="radio" name="periodoncist-before" id="" />
                            <label htmlFor="">Si</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" name="periodoncist-before" id="" />
                            <label htmlFor="">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="" className="font-bold border-b">Datos de la cita</label>
                <div className="flex flex-col">
                    <div className="flex flex-col py-4">
                        <label htmlFor="" className="font-bold">Clinica</label>
                        <select name="" id="" className="border p-2">
                            <option value="">Seleccionar</option>
                        </select>
                    </div>
                    <div className="flex flex-col py-4">
                        <label htmlFor="" className="font-bold">Especialidad</label>
                        <select name="" id="" className="border p-2">
                            <option value="">Seleccionar</option>
                        </select>
                    </div>
                    <div className="flex flex-col py-4">
                        <label htmlFor="" className="font-bold">Doctor</label>
                        <select name="" id="" className="border p-2">
                            <option value="">Seleccionar</option>
                        </select>
                    </div>
                    <div className="flex flex-col py-4">
                        <label htmlFor="" className="font-bold">Fecha de cita</label>
                        <input type="date" placeholder="fecha" className="border p-2"/>
                    </div>
                    <div className="flex flex-col py-4">
                        <label htmlFor="" className="font-bold">Hora</label>
                        <select name="" id="" className="border p-2">
                            <option value="">Seleccionar</option>
                        </select>
                    </div>
                    <div className="flex flex-col py-4">
                        <label htmlFor="" className="font-bold">Nota</label>
                        <textarea name="" id="" className="border h-96 p-2 resize-none" placeholder="Comentario sobre la cita"></textarea>
                    </div>
                </div>
            </div>
            <button className="bgBlue text-white p-3 rounded-md right-0">Enviar</button>
        </form>
    )
}

export default Form