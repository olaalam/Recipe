import React from 'react';
import { ColorRing } from 'react-loader-spinner'; // Ensure the correct library is used

export default function Loading() {
  return (
    <div className="container h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-100 bg-opacity-50 z-50 flex items-center justify-center">
        <ColorRing
          visible={true}
          height={80}
          width={80}
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    </div>
  );
}
