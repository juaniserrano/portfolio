import React, { useEffect, useState } from 'react';
import PText from '../components/PText';

export default function Error() {
  const [isLoading, setIsLoading] = useState('');
  useEffect(() => {
    fetch(
      'https://api.giphy.com/v1/gifs/random?api_key=mWKzXXRMx75c3s3IWG998kOtiN6bAyK9&tag=cat&rating=r'
    )
      .then((response) => response.json())
      .then((data) => setIsLoading(data.data.images.original.url));
  }, []);

  return (
    <div>
      Im currently working on this page
      <img
        src={isLoading}
        alt="GIF"
        style={{ maxWidth: '150rem', height: '60rem' }}
      />
      <PText>This page is currently under construction </PText>
    </div>
  );
}
