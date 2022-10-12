import React from 'react'
import Button from './Button'
import FormFieldInput from './FormFieldInput'
import FormFieldLabel from './FormFieldLabel'

const Form = () => {
    return (
        <div>
            <form action="" className='flex flex-col text-left'>
                <FormFieldLabel props={'Name'} />
                <FormFieldInput />
                <FormFieldLabel props={'Email'} />
                <FormFieldInput />
                <FormFieldLabel props={'Enquiry'} />
                <textarea name="enquiryText" id="" cols="30" rows="10" className='w-[70%] h-[100px] border-2 border-AntiFlashWhite focus:outline-none focus:border-AirBlue text-sm p-1 my-2'></textarea>
                <Button props={'Submit!'} />
            </form>
        </div>
    )
}

export default Form
