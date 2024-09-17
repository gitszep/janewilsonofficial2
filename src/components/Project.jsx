import React from 'react';

const Project = ({ item }) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img class src={item.image} alt={item.title || 'Project image'} className="w-full h-auto object-cover rounded-2xl" />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p> 
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
    </div>
  );
};

export default Project;
