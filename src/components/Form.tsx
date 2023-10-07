import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    patientType: string;
    appointmentType: string;
    cedula: string;
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: string;
    email: string;
    phone: string;
    cellPhone: string;
    ars: string;
    affiliateNumber: string;
    isPregnant: string;
    contactForeign: string;
    contactCovid: string;
    symptoms: string[];
    covid: string;
    pacemaker: string;
    lastTime: string[];
    bleedBrushing: string;
    toothMovility: string;
    periodoncistBefore: string;
    clinic: string;
    speciality: string;
    doctor: string;
    appointmentDate: string;
    hour: string;
    note: string;
}

const Form = () => {

    const initialFormData: FormData = {
        patientType: '',
        appointmentType: '',
        cedula: '',
        firstName: '',
        lastName: '',
        gender: '',
        birthDate: '',
        email: '',
        phone: '',
        cellPhone: '',
        ars: '',
        affiliateNumber: '',
        isPregnant: '',
        contactForeign: '',
        contactCovid: '',
        symptoms: [],
        covid: '',
        pacemaker: '',
        lastTime: [],
        bleedBrushing: '',
        toothMovility: '',
        periodoncistBefore: '',
        clinic: '',
        speciality: '',
        doctor: '',
        appointmentDate: '',
        hour: '',
        note: '',
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = event.target;

        if (type === 'text' || type === 'date' || type === 'email' || type === 'select-one' || type === 'textarea') {
            setFormData({ ...formData, [name]: value });
        } else if (type === 'radio') {
            if ((event.target as HTMLInputElement).checked) {
                setFormData({ ...formData, [name]: value });
            }
        } else if (type === 'checkbox') {
            const updatedSymptoms = [...formData.symptoms];
            if ((event.target as HTMLInputElement).checked) {
                updatedSymptoms.push(value);
            } else {
                const index = updatedSymptoms.indexOf(value);
                if (index !== -1) {
                    updatedSymptoms.splice(index, 1);
                }
            }
            setFormData({ ...formData, symptoms: updatedSymptoms });
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Aquí puedes hacer lo que necesites con el objeto formData
        console.log(formData);
    };

    return (
        <form className="relative py-10 md:mx-20 lg:mx-40 px-4 md:px-10 border rounded-md flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label htmlFor="" className="font-bold border-b">Datos del paciente</label>
                <div className="flex flex-col py-4">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="" className="font-bold">Tipo de paciente</label>
                        <div className="flex gap-2 md:gap-10 md:flex-row flex-col">
                            <div className="flex items-center gap-2">
                                <input onChange={handleInputChange} type="radio" name="patientType" id="" />
                                <label htmlFor="">Personal</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input onChange={handleInputChange} type="radio" name="patientType" id="" />
                                <label htmlFor="">Dependiente menor de edad</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input onChange={handleInputChange} type="radio" name="patientType" id="" />
                                <label htmlFor="">Extranjero</label>
                            </div>
                        </div>
                    </div>
                    <div className="py-4">
                        <label htmlFor="" className="font-bold">Tipo de cita</label>
                        <div className="flex gap-10">
                            <div className="flex gap-2">
                                <input onChange={handleInputChange} type="radio" name="appointmentType" id="" />
                                <label htmlFor="">Consulta inicial</label>
                            </div>
                            <div className="flex gap-2">
                                <input onChange={handleInputChange} type="radio" name="appointmentType" id="" />
                                <label htmlFor="">Profilaxis</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 py-4">
                        <input onChange={handleInputChange} className="border p-2" type="text" placeholder="Cedula" name="cedula"/>
                        <input onChange={handleInputChange} className="border p-2" type="text" placeholder="Nombre" name="firstName"/>
                        <input onChange={handleInputChange} className="border p-2" type="text" placeholder="Apellido" name="lastName"/>
                    </div>
                    <div className="flex gap-10 py-4">
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} name="gender" value={'Masculino'} type="radio" />
                            <label htmlFor="">Masculino</label>
                        </div>
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} name="gender" value={'Femenino'} type="radio" />
                            <label htmlFor="">Femenino</label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-4">
                        <input onChange={handleInputChange} className="border p-2" type="text" placeholder="Fecha Nacimiento" name="birthDate"/>
                        <input onChange={handleInputChange} className="border p-2" type="text" placeholder="E-mail" name="email"/>
                        <input onChange={handleInputChange} className="border p-2" type="text" placeholder="Telefono" name="phone"/>
                        <input onChange={handleInputChange} className="border p-2" type="text" placeholder="Celular" name="cellphone"/>
                        <select className="border p-2" name="ars">
                            <option value="">Seleccionar ARS</option>
                        </select>
                        <input onChange={handleInputChange} className="border p-2" type="text" placeholder="Numero Afiliado" name="affiliateNumber"/>
                    </div>
                </div>
            </div>
            <div className="py-4 flex flex-col">
                <label htmlFor="" className="font-bold border-b">Cuestionario</label>
                <div className="py-4">
                    <label htmlFor="" className="font-bold">Esta usted embarazada o cree estarlo?</label>
                    <div className="flex flex-col ">
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="radio" name="isPregnant" />
                            <label htmlFor="is-pregnant">Si</label>
                        </div>
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="radio" name="isPregnant" />
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
                            <input onChange={handleInputChange} type="radio" name="contactForeign" id="" value={'Si'}/>
                            <label htmlFor="">Si</label>
                        </div>
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="radio" name="contactForeign" id="" value={'No'}/>
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
                            <input onChange={handleInputChange} type="radio" name="contactCovid" id="" value={'Si'}/>
                            <label htmlFor="">Si</label>
                        </div>
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="radio" name="contactCovid" id="" value={'No'}/>
                            <label htmlFor="">No</label>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <label htmlFor="" className="font-bold">Ha tenido uno o varios de estos sintomas en los ultimos 14 dias?</label>
                    <div className="flex gap-2">
                        <input onChange={handleInputChange} type="checkbox" name="symptom" value={'Fiebre'} />
                        <label htmlFor="">Fiebre</label>
                    </div>
                    <div className="flex gap-2">
                        <input onChange={handleInputChange} type="checkbox" name="symptom" value={'Tos'} />
                        <label htmlFor="">Tos</label>
                    </div>
                    <div className="flex gap-2">
                        <input onChange={handleInputChange} type="checkbox" name="symptom"  value={'Falta de aire y cansancio'}/>
                        <label htmlFor="">Falta de aire y cansancio</label>
                    </div>
                    <div className="flex gap-2">
                        <input onChange={handleInputChange} type="checkbox" name="symptom"  value={'Ninguna'}/>
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
                            <input onChange={handleInputChange} type="radio" name="covid" value={'Si'} />
                            <label htmlFor="">Si</label>
                        </div>
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="radio" name="covid" value={'No'} />
                            <label htmlFor="">No</label>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <label htmlFor="" className="font-bold">Posee marcapaso cardiaco</label>
                    <div className="flex gap-10">
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="radio" name="pacemaker" value={'Si'} />
                            <label htmlFor="">Si</label>
                        </div>
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="radio" name="pacemaker" value={'No'} />
                            <label htmlFor="">No</label>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <label htmlFor="" className="font-bold">Cuando fue la ultima vez que fue al dentista</label>
                    <div className="flex flex-col">
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="checkbox" name="lastTime" value={'Nunca'} />
                            <label htmlFor="">Nunca</label>
                        </div>
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="checkbox" name="lastTime" value={'0 - 6 meses'} />
                            <label htmlFor="">0 - 6 meses</label>
                        </div>
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="checkbox" name="lastTime" value={'6 meses - 1 año'} />
                            <label htmlFor="">6 meses - 1 año</label>
                        </div>
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="checkbox" name="lastTime" value={'1 - 3 años'} />
                            <label htmlFor="">1 - 3 años</label>
                        </div>
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="checkbox" name="lastTime" value={'Mas de 3 años'} />
                            <label htmlFor="">Mas de 3 años</label>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <label htmlFor="" className="font-bold">Le sangran las encias al cepillarse</label>
                    <div className="flex flex-col ">
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="radio" name="bleedBrushing" value={'Si'} />
                            <label htmlFor="">Si</label>
                        </div>
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="radio" name="bleedBrushing" value={'No'} />
                            <label htmlFor="">No</label>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <label htmlFor="" className="font-bold">Tiene movilidad en alguno de sus dientes_</label>
                    <div className="flex flex-col ">
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="radio" name="toothMovility" value={'Si'} />
                            <label htmlFor="">Si</label>
                        </div>
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="radio" name="toothMovility" value={'No'} />
                            <label htmlFor="">No</label>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <label htmlFor="" className="font-bold">Ha sido tratado por un periodoncista antes?</label>
                    <div className="flex flex-col ">
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="radio" name="periodoncistBefore" value={'Si'} />
                            <label htmlFor="">Si</label>
                        </div>
                        <div className="flex gap-2">
                            <input onChange={handleInputChange} type="radio" name="periodoncistBefore" value={'No'} />
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
                        <select name="clinic" id="" className="border p-2">
                            <option value="">Seleccionar</option>
                        </select>
                    </div>
                    <div className="flex flex-col py-4">
                        <label htmlFor="" className="font-bold">Especialidad</label>
                        <select name="speciality" id="" className="border p-2">
                            <option value="">Seleccionar</option>
                        </select>
                    </div>
                    <div className="flex flex-col py-4">
                        <label htmlFor="" className="font-bold">Doctor</label>
                        <select name="doctor" id="" className="border p-2">
                            <option value="">Seleccionar</option>
                        </select>
                    </div>
                    <div className="flex flex-col py-4">
                        <label htmlFor="" className="font-bold">Fecha de cita</label>
                        <input name="appointmentDate" onChange={handleInputChange} type="date" placeholder="fecha" className="border p-2" />
                    </div>
                    <div className="flex flex-col py-4">
                        <label htmlFor="" className="font-bold">Hora</label>
                        <select name="hour" id="" className="border p-2">
                            <option value="">Seleccionar</option>
                        </select>
                    </div>
                    <div className="flex flex-col py-4">
                        <label htmlFor="" className="font-bold">Nota</label>
                        <textarea name="note" id="" className="border h-96 p-2 resize-none" placeholder="Comentario sobre la cita"></textarea>
                    </div>
                </div>
            </div>
            <input type="submit" className="bgBlue text-white p-3 rounded-md right-0" value={'Enviar'} />
        </form>
    )
}

export default Form