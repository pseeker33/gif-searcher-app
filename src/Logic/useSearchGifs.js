import { useState } from'react';

export const useSearchGifs = () => {
    const [valorInput, setValorInput] = useState('');
    const [gifs, setGifs] = useState([]); 
    const [loading, setLoading] = useState(false);
  
    const wordSearched = (evento) => {
      const valor = evento.target.value
      setValorInput(valor)
    };
  
    const getGifUrls = async (query) => {
  
      const url = `https://api.giphy.com/v1/gifs/search?api_key=aWCiMxfELgiSv3XppnaODLmOG6no74A1&q=${query}&limit=30`

      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 1000))
  
      const response = await fetch(url)
      const data = await response.json()

      setLoading(false)

      console.log(data)
      return data.data    
    }
  
    const formSubmit = async (evento) => {
      evento.preventDefault()
      const gifUrls = await getGifUrls(valorInput)
      setGifs(gifUrls)
    }

    return {gifs, wordSearched, formSubmit, loading}
}
