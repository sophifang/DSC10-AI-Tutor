# DSC 10 AI Tutor

Try out our project at https://dsc10-ai-tutor.netlify.app/.

## Getting started locally
After the repository is cloned, open a terminal and navigate to the repository. Run the following lines:

```
npm install
pip install openai
npm install openai
```

Create a `.env` file in the root directory. Add the following line to the `.env` file with `[Your OpenAI API Key]` replaced with your own key:

```
VITE_OPENAI_API_KEY=[Your OpenAI API Key]
```

To start and open your local development server, run the following line in the terminal:

```
npm run dev -- --open
```