import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }

    return (
        <div className="max-w-sm overflow-hidden my-10 mx-auto">
            <form onSubmit = {onSubmit} className="w-full max-w-sm" action="">
                <div className="flex items-center border-b border-b-2 border-blue-500 py-2">
                    <input onChange = {e => setText(e.target.value)}  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-one" placeholder="Search Image Term ...." type="text" />
                    <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit"> Search</button>
                </div>
            </form>
        </div>
    );
};

export default ImageSearch;