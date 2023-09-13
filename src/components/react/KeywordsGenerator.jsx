import React, { useState} from 'react'
import { generateKeywords } from '../../service/api'

export default function KeywordsGenerator() {
  const [startKeyword, setStartKeyword] = useState("")
    const [pageContext, setPageContext] = useState("")
    const [keywords, setKeywords] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    



    /**
     * Esta funcion se encarga de hacer una llamada al metodo de servicio que se comunica con la Api
     * @param {*} startKeyword 
     * @param {*} pageContext 
     */
    function getKeywords(startKeyword,pageContext){
      setIsLoading(true)
        generateKeywords(startKeyword,pageContext)
        .then(result=>{
          if (result.choice[0].message) {
            var dataCleaned=clearData(result.choice[0].message)
            
          }
          setIsLoading(false)
        })
        .catch(err=>{
          setIsLoading(false)
          setErrorMessage("Hubo un herror al generar tus palabras claves, vuelve a intentarlo")
        })
    }

    /**
     * Esta funcion se encarga de limpiar o/y optimizar la data retornada del prompt
     * @param {*} data 
     * @returns la data de entrada optimizada y limpia
     */
    function clearData(data){
      return ""
    }
  

  return (
    <div class="h-screen w-3/5 mx-auto p-8 flex flex-col gap-4">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <input
          type="text"
          class="w-full h-10 px-4 border border-gray-300 rounded"
          placeholder="Texto de entrada"
        />
      </div>
      <div class="col-span-2 row-span-3">
        <textarea
          class="w-full h-40 px-4 border border-gray-300 rounded"
          placeholder="Texto grande que no se expande"
        ></textarea>
      </div>
    </div>
  
    <div class="grid grid-cols-2 gap-4">
      <div>
        <button class="w-full h-10 bg-blue-500 text-white rounded hover:bg-blue-600">
          Obtener Keywords
        </button>
      </div>
      <div>
        <textarea
          class="w-full h-36 px-4 border border-gray-300 rounded"
          placeholder="Texto que ocupa todo el espacio sin expandirse"
        ></textarea>
      </div>
    </div>
  </div>
  
)}
