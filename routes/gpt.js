
const items = require('../items')
const { PrismaClient } = require("@prisma/client")
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const prisma = new PrismaClient()

function gptRoutes (fastify, options, done) {

let responsePrompt = ''

async function getPrompt(prompt) {
  const promptResponse = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  responsePrompt = promptResponse.data.choices[0].text
  /* console.log(responsePrompt) */
  return promptResponse.data.choices
  

}



fastify.post('/prompt', async (req, reply) => {
  console.log(req.body)
  await getPrompt(req.body.prompt)
  console.log(responsePrompt)
  reply.send(responsePrompt)
 
  
})

}


module.exports = gptRoutes