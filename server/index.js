import express from'express'
import cors from'cors'
import * as dotenv from 'dotenv' 
dotenv.config()
import { Configuration, OpenAIApi } from 'openai'


//app config
let app=express()
const configuration = new Configuration({
  apiKey: process.env.OPEN_API,
});
const openai = new OpenAIApi(configuration);
//middleware
app.use(express.json())
app.use(cors())
//routes
app.get('/',(req,res)=>{
  res.send(process.env.OPEN_API)
})
app.post('/',async(req,res)=>{
  try {
    const prompt = req.body.prompt;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3000, 
      top_p: 1, 
      frequency_penalty: 0.5, 
      presence_penalty: 0,
    });

    res.status(200).send({
      bot: response.data.choices[0].text
    });
    console.log(response.data.choices[0].text)

  } catch (e) {
    res.status(500).send(e)
    console.log(e)
  }
})
//listen
app.listen(8080,()=>{
  console.log('hello')
})