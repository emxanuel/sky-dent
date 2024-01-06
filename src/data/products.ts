import type { TProduct } from "../types";
import img1 from '../assets/Servicio (1).webp'
import img2 from '../assets/Servicio (2).webp'
import img3 from '../assets/Servicio (3).webp'
import img4 from '../assets/Servicio (4).webp'
import img5 from '../assets/Servicio (5).webp'
import img6 from '../assets/Servicio (6).webp'
import img7 from '../assets/Servicio (7).webp'
import img8 from '../assets/Servicio (8).webp'

const products: TProduct[] = [
    {
        id: 1,
        name: "Diseño de sonrisa con resina (20 Resin Veeners)",
        price: 68400,
        imageUrl: img2.src,
    },
    {
        id: 2,
        name: "10 Coronas en Zirconia a escoger (Arriba / Debajo)",
        price: 71250,
        imageUrl: img3.src,
    },
    {
        id: 3,
        name: "20 Carillas (Boca Completa) en Porcelana / Full Mouth Porcelain Ceramic Venners",
        price: 168150,
        imageUrl: img4.src,
    },
    {
        id: 4,
        name: "Ortodoncia con Brackets de Autoligados ( Damon Brackets Sistem) Each 6 months appointments",
        price: 168150,
        imageUrl: img5.src,
    },
    {
        id: 5,
        name: "Corrección de Caries Incluyendo Profilaxis (Evaluación + Cleaning + Cavities Removal All Includes)",
        price: 12000,
        imageUrl: img6.src,
    },
    {
        id: 6,
        name: "Mantenimiento de Carillas",
        price: 1710,
        imageUrl: img7.src,
    },
    {
        id: 7,
        name: "Ortodoncia con Brackets de Zafiro",
        price: 22900,
        imageUrl: img8.src,
    },
    {
        id: 8,
        name: "Bichectomy (Bucal Fat Remove)",
        price: 26100,
        imageUrl: img1.src,
    },
];

export { products };
