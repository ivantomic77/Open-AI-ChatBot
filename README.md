# Open AI ChatBot

Open AI ChatBot is a simple chatbot application that utilizes the OpenAI API to generate responses to user input. This application consists of two parts: a React-based frontend, and an Express.js-based backend. The frontend allows users to interact with the chatbot, while the backend handles the communication with the OpenAI API. The application can be easily set up and configured to work with your own API key, and can be customized to suit your specific needs.

## Prerequisites

-   Node.js and npm installed on your machine
-   A registered account on https://openai.com/api/ and a valid API key

## Using AI ChatBot

### 1. API Key

-   Get API key by registering on https://openai.com/api/
-   Once you have the key, copy it to the .env file in the root folder of your project. The file should look like this:

```
OPENAI_API_KEY=YOUR_KEY
```

### 1. Run Express.js API

-   In root directory run:

```
node index.js
```

### 2. Run React App

-   In root directory run:

```
npm run start
```

### 3. Open http://www.localhost:3000 in your browser

-   Once the React App is running, open http://localhost:3000 in your browser to interact with the AI ChatBot

## Development

### Todos

-   [x] Simple App without keeping recent history (one answer)
-   [x] Keeping recent history
-   [x] Improving the UI/UX of the application
-   [ ] Handling different types of inputs and handling follow-up questions.
-   [ ] Providing different type of answers based on the user inputs.
