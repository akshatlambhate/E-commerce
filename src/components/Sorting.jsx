import React from 'react'

const Sorting = () => {
  return (
    <div>
      <div >
        <select name='sorting' id='sorting' className='px-5 py-2 bg-buttonhover text-primary border-2 border-stone-600  '>
            <option defaultChecked>Default Sorting</option>
            <option>Sort By Price A-Z</option>
            <option>Sort By Price Z-A </option>
            <option> Sort By Latest</option>
        </select>
      </div>
    </div>
  )
}

export default Sorting
