// Ejemplo, request basico usando una API 

function GifRequester() {

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=aWCiMxfELgiSv3XppnaODLmOG6no74A1&q='Naruto'&limit=10`

    const response = await fetch(url)
    const data = await response.json()
    
    console.log(data)
    //setGif(data.data[0].images.original.url)
  }
  
  getGifs()
  
}

export default GifRequester;


