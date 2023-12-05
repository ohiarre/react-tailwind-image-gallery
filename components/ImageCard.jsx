const ImageCard = ({ image }) => {

  const tags = image.tags.split(',');
  return (
    <div className="max-w-sm shadow-lg bg-gray-100">
    <img src={image.webformatURL} alt='' className='w-full img ml-[-5px] mt-[-5px] border-b-2 border-gray-600 rounded-tl-2xl'/>
    <div className='px-6 py-4'>
      <h1 className='font-bold text-gray-700 text-xl mb-2'>Photo by {image.user}</h1>
      <ul>
        <li>
          <strong>Views: </strong> 
          {image.views}
        </li>
        <li>
          <strong>Download: </strong> 
          {image.downloads}
        </li>
        <li>
          <strong>Likes: </strong> 
          {image.likes}
        </li>
      </ul>
    </div>
    <div className='px-6 py-4'>
      {tags.map((tag, index) => (
      <span key={image.index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#{tag}
      </span>
      ))}
    </div>
 </div>
  )
}

export default ImageCard;
