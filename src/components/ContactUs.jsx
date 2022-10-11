import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import Form from './Form'
import SocialMediaIcons from './SocialMediaIcons'
const ContactUs = () => {
    return (
        <div className='m-4 '>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.90924712367!2d75.7237618214095!3d22.724228429904368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1665308832263!5m2!1sen!2sin" className='w-[100%] h-[350px]' style={{ border: "0" }}
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='flex flex-col items-start'>
                <h1 className='text-3xl text-AirBlue my-3 font-semibold'>Contact Us</h1>
            </div>
            <div className='border-b-2 border-AntiFlashWhite'></div>
            <div className='flex p-2 gap-16 my-4' >
                <div className='w-1/2 text-left text-base '>
                    <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde, voluptatibus nemo molestiae iure, repudiandae quaerat ipsam, labore sed dolorem nisi odit at esse ullam suscipit quidem necessitatibus aut modi.</p>
                    <p className='text-AirBlue mb-3'> <FontAwesomeIcon icon={faEnvelope} /> mail-contact@fancycontact.com </p>
                    <p className='mb-3'>18 Abcdef des hfh-hbrbnbg,
                        75008 Indore <br />
                        Madhya Pradesh
                    </p>
                    <div className='text-3xl flex gap-3'>
                        <SocialMediaIcons />
                    </div>
                </div>
                <div className='w-1/2'>
                    <Form />
                </div>

            </div>
        </div>
    )
}

export default ContactUs
