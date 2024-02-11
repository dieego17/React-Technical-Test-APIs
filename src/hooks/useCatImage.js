import { useEffect, useState } from "react" 

//customHook
export function useCatImage ({ fact }){

    const [imageUrl, setImgUrl] = useState()
  
     //para recuperar la imagen cada vez que tenemos una fact nuevo
     useEffect (() =>{
  
      if(!fact) return
      //me quedo con la primera palabra de la frase aleatoria que me da la API
      const firstWord = fact.split(' ', 3).join(' ')
  
      fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red`)
      .then(response => {
       //console.log(response.url)
       setImgUrl(response.url)
      })
  
    },[fact])
  
    return { imageUrl }
  }