import React from 'react';
import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

function Directory({categories}) {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  )
}

export default Directory