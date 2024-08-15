import {GifItem} from "./GifItem";

import useFetchGifs from "../hooks/useFetchGifs";

export const GridGif = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h1>{category}</h1>

      {isLoading && <p>Loading...</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
