import { useEffect, useState } from "react" 
import { getRandomFact } from '../services/facts.js'

//custom Hook
export function useCatFact () {

  const [fact, setFact] = useState()

  const refreshFact = () =>{
    getRandomFact().then(newFact => setFact(newFact))
  }
  //efecto para cargar al inicio la peticion a la API
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}