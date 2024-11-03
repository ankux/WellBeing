import { FaUser, FaUsers, FaLaptop } from 'react-icons/fa'; 
import { TbYoga } from "react-icons/tb";
import { IoMaleFemale } from "react-icons/io5";
import { FaHandsHoldingChild } from "react-icons/fa6";

const servicesData = [
    { id: 1, Icon: FaUser, title: 'Personal Therapy', description: 'Experience one-on-one sessions with our expert therapists to address your needs and challenges.' },
    { id: 2, Icon: FaUsers, title: 'Group Therapy', description: 'Join group therapy sessions to share experiences and gain support from others with similar challenges.' },
    { id: 3, Icon: FaLaptop, title: 'Meditation Classes', description: 'Access therapy from the comfort of your home through our secure and convenient online sessions.' },
    { id: 4, Icon: TbYoga, title: 'Yoga Classes', description: 'Engage in guided yoga sessions to improve flexibility, strength, and overall well-being.' },
    { id: 5, Icon: IoMaleFemale, title: 'Couples Therapy', description: 'Enhance your relationship with professional guidance through couples therapy.' },
    { id: 6, Icon: FaHandsHoldingChild, title: 'Child Therapy', description: 'Provide your children and teens with the support they need in a safe environment.' },
];

export default servicesData;