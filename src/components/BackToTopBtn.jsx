import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ChevronUpIcon } from '@heroicons/react/outline';

const BackToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        className='bg-accent w-12 h-12 hover:bg-accent-hover text-white rounded-full fixed right-24 bottom-24 cursor-pointer flex justify-center items-center transition-all'
        onClick={scrollToTop}
      >
        <ChevronUpIcon className='w-6 h-6' />
      </button>
    )
  );
};

export default BackToTopBtn;
