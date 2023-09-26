import type { Service } from "../types";

const services: Service[] = [
    {
        id: 1,
        title: "Diagnóstico",
        content: [
            "Examen Inicial",
            "Examen periódico cada 6 meses",
            "Radiografías Periapicales",
            "Radiografía Bite-Wing",
            "Radiografías Oclusales",
            "Radiografías Panorámicas",
            "Radiografías Cefalométricas",
            "Modelos de Estudio",
        ],
    },
    {
        id: 4,
        title: "Operatoria",
        content: [
            "Obturaciones Amalgama",
            "Obturaciones Resina",
            "Carilla Resina",
            "Obturaciones Compuestas",
            'Frente Estético',
            "Reconstrucción",
            "Restauración Preventiva",
            "Recubrimientos Pulpares"
        ],
    },
    {
        id: 5,
        title: "Coronas y Puentes",
        content: [
            "Coronas de Porcelana",
            "Coronas de Metal",
            "Puentes Removibles",
            "Dentaduras Completas",
            "Perno Colado",
            "Prótesis Parcial",
            "Prótesis Parcial Acrílica",
            "Coronas Acrílicas",
        ],
    },
    {
        id: 3,
        title: 'Emergencias',
        content: [
            'Drenaje de Absceso',
            'Recubrimientos',
            'Consulta de Emergencia',
            'Reimplantacion'
        ]
    },
    {
        id: 7,
        title: "Cirugías",
        content: [
            "Exodoncia Simple",
            "Exodoncia Quirúrgica",
            "Cirugía Tercer Molar",
            "Biopsia",
            "Implante",
        ],
    },
    {
        id: 9,
        title: "Periodoncia",
        content: [
            "Detartraje Profundo",
            "Gingivectomía",
            "Férulas",
            "Cirugía Periodontal",
            "Raspado y Alisado",
        ],
    },
    {
        id: 6,
        title: "Ortodoncia",
        content: [
            "Retenedores",
            "Rompe Hábitos",
            "Mantenedor de Espacio",
            "Braces",
        ],
    },
    {
        id: 2,
        title: "Endodoncia",
        content: [
            "Recubrimientos Pulpares",
            "Pulpotomia",
            "Obstrucciones Retro apicales",
            "Cirugía Endodóntica",
        ],
    },
    {
        id: 8,
        title: "Prevención",
        content: [
            "Profilaxis",
            "Sellantes Menores de 18 Años",
            "Destartraje Simple",
            "Aplicación de Flúor",
        ],
    },
];

export { services };
