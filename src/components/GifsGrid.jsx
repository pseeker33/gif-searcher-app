import { Gif } from "./Gift";

export const GifsGrid = ({imagenes}) => {
  return (
    <div className="gifs-container">
      {
        imagenes.map( (gif, index) => (
            <Gif key={gif.id} gif={gif} index={index}/>
        ))
      }
    </div>
  );
};

