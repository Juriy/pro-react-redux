import React from 'react';

const SearchPanel = () => {
  const searchText = 'hello world';
  const searchStyle = {
    fontSize: '25px',
  }

  return <input placeholder={searchText} style={searchStyle}/>
}

export default SearchPanel