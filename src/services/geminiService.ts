import axios from "axios";

const API_KEY = process.env.GEMINI_API_KEY

if(!API_KEY) {
   throw new Error("the api key is not provided!")
}

const gemini = axios.create({
  baseURL: 'https://generativelanguage.googleapis.com/v1beta/models',
  headers: {
    'Content-Type': 'application/json',
    'X-goog-api-key': API_KEY
  }
})
export async function generateSEOService(topic:string, keywords: string[], length: number):Promise<string> {
  const prompt = `Gere um artigo otimizado para SEO com cerca de ${length} palavras sobre o seguinte tema: "${topic}"
    
  Inclua naturalmente as seguintes palavras chaves: ${keywords.join(', ')}.
  
  O conteúdo deve ser bem estruturado, com um tom informativo e persuasivo, divido em parágrafos e voltados para blog.`
  try{
    const response = await gemini.post('/gemini-2.0-flash:generateContent', {
      contents: [{
        parts: [{
          text: prompt
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1024,
      }
    })
    const contentSEO = response.data.candidates[0].content.parts[0].text.trim()

    return contentSEO   
  } catch (error) {
    console.error(error)
    return `Error to call LLM API, TryAgain`
  }
}
