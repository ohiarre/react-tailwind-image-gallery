import { useState } from "react";

const ImageSearch = ({searchText}) => {
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text)
        
    }

    const onKeyDown = (e) => {
        // Check if the Enter key is pressed
        if (e.key === 'Enter') {
          onSubmit(e);
        }
    }

  return (
<>
<div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
<form onKeyDown={onKeyDown} onSubmit={onSubmit} className="w-full max-w-sm bg-gray-100">
  <div className="flex items-center border-b-2 border-gray-500 py-2 pr-1">
    <input onChange={e=>setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
    <button className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded focus:ring focus:ring-offset-1 focus:ring-gray-900 focus:ring-opacity-50 active:bg-gray-600-600" type="submit">
      Search
    </button>
  </div>
</form>
</div>
</>
  
  )
}

export default ImageSearch;
