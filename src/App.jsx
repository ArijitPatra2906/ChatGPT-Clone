import { useState } from 'react'
import './App.css'
import { arrayItems } from "./AIOptions";
import OptionSelection from './components/OptionSelection';
import Translation from './components/Translation';
import { Configuration, OpenAIApi } from "openai";


function App() {
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [full, setFull] = useState({})
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const selectOption = (option) => {
    setOption(option);
  };
  const selectFullOption = (option) => {
    setFull(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
  };
  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} selectFullOption={selectFullOption}/>
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} full={full}/>
      )}
    </div>
  )
}

export default App
