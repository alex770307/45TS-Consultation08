import React, { useEffect, useState } from 'react';

const RandomFox: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchRandomFox = async () => {
      try {
        const response = await fetch('https://randomfox.ca/floof/');
        const data = await response.json();
        setImageUrl(data.image);
      } catch (error) {
        console.error('Ошибка при получении изображения:', error);
      }
    };

    fetchRandomFox();
  }, []);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Случайная лиса" />
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default RandomFox;
