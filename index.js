const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;


require('dotenv').config({ path: './.env' })

const configuration = new Configuration({
    organization: "org-PLcLu0w8BR5R4wppBKjKw8vk",
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.EXPRESS_PORT;
const maxTokens = process.env.EXPRESS_MAX_OPENAI_TOKENS;

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
    const {message} = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `You give short answers
        Person: ${message}
        Bot: `,
        max_tokens: maxTokens,
        temperature: 0,
    });
    if(response.data.choices[0].text) {
        res.send(JSON.stringify({
            message: response.data.choices[0].text
        }));
    }
});

app.listen(port, () => {
});