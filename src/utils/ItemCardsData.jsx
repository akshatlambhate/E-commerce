import camera from '../assets/camera.jpg'
import phone from '../assets/phone.jpg'
import laptop from '../assets/laptop.jpg'
import iphone from '../assets/iphone.jpg'
import mic from '../assets/mic.jpg'
import television from '../assets/television.jpg'
import accessories from '../assets/accessories.jpg'
import headphones from '../assets/headphones.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
export const CardData =[
    {
    pic:{phone},
    item:'Mobile Phone ',
    price: '$400',
},
    {pic:{laptop},
    name:'laptops ',
    price: '$2000',
},
    {pic:{iphone},
    name:'Iphone ',
    price: '$2000',
},
    {pic:{accessories},
    name:'Accessories',
    price: '$170',
},
    {pic:{headphones},
    name:'Headphones',
    price: '$90',
},
    {pic:{mic},
    name:'Compressor',
    price: '$1400',
},
    {pic:{television},
    name:'Televison',
    price: '$1400',
},
    {pic:{camera},
    name:'Camera',
    price: '$5000',
},
]
export const ItemRating = [
{
    item:<FontAwesomeIcon icon={faStar} className="text-yellow-500 hover:text-black " />
},
]