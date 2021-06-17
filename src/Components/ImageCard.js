import React from 'react';

const ImageCard = ( {image} ) => {
  const tags = image.tags.split(',');
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" /> 
      <div className="px-6 py-4">
        <div className="mx-auto font-bold text-purple-500 text-lg mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
        <button className="bg-green-400 hover:bg-blue-500 hover:text-white py-1 px-2 rounded">
        <a href={image.userImageURL} target="_blank" rel="noopener noreferrer"> View Photographer</a>
        </button>
      </div>
      <div className="px-6 py-4">
        {
          tags.map((tag, index) =>(
            <span key = {index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
          ))
        }
      </div>
    </div>
    );
};

export default ImageCard;