import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className='row d-flex justify-content-center'>
        <div
          className='col-2'
          style={{
            position: 'absolute',
            bottom: 20,
          }}
        >
          <div className='d-flex justify-content-center'>
            <Image
              src='/images/united_states.png'
              alt='United States flag'
              width={20}
              height={20}
            />
            <span className='ml-2 text-white' style={{fontSize: 14}}>
              United States
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
