// App que renderiza gifs buscados con teclado

import { InputSubmitter } from './components/InputSubmitter';
import { GifsGrid } from './components/GifsGrid';
import { useSearchGifs } from './Logic/useSearchGifs';


function GifRequesterApp() {
  const {gifs, wordSearched, formSubmit, loading } = useSearchGifs();

  return (
    <div>
      <InputSubmitter 
        formSubmit={formSubmit}
        wordSearched={wordSearched}
        //valorInput={valorInput}
      />
      
      {
        loading ? (<h2>Cargando...</h2>) : (<GifsGrid imagenes={gifs} />)
      }

    </div>
  );
}

export default GifRequesterApp;


