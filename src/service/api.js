export function generateKeywords(startKeyword,pageContext) {
    return new Promise((resolve, reject) => {
        fetch("https://api.openai.com/v1/chat/completions",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer `+ process.env.API_KEY
            },
            body:JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": `[{'role': 'user', 'content': 'imagina que eres la mejor herramienta de SEO y te encargas de generar 50 palabras claves en vase a una primera palabre clave (principal) dada y el contexto de la pagina de un sitio. Etonces la palabra una palabra clave principal es ${startKeyword} y el contexto de la pagina es el siguiente ${pageContext}'}]`,
                "temperature": 0.7
            })
        })
        .then(result=>res.json())
        .then(result=>resolve(result))
        .catch(err=>reject(err))
    })
}