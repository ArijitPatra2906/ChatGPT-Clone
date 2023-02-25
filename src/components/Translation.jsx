import React from 'react'

const Translation = ({ doStuff, result, setInput, full }) => {
  console.log(doStuff)
  console.log(result)
  console.log(setInput)
  return (
    <div>
      <textarea
        className="text-area"
        // cols={55}
        // rows={10}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Copy given example sample and change what you want"
      // placeholder={full.id === "q&a" ? "Example : Who is the founder of Tesla?" : full.id === "grammerCorrection" ? "Correct this to standard English: She no went to the market." : ""}
      ></textarea>
      <button className="action-btn" onClick={doStuff}>
        ANSWER
      </button>

      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
      {!result ? (
        <h3>{full.id === "q&a" ? <p>Example Sample : Who is the founder of Tesla?</p> : full.id === "grammerCorrection" ? <p>Correct this to standard English: <br /> She no went to the market.</p> : full.id === "translate" ? <p>Example Sample : Translate this into 1. French, 2. Spanish and 3. Japanese: <br />
          What rooms do you have available?</p> : full.id === "movieToEmoji" ? <p>Example Sample : Convert movie titles into emoji. <br />
            Back to the Future: 👨👴🚗🕒 <br />
            Transformers: 🚗🤖 <br />
            Star Wars:🌟⭐️🚀 <br />
            Batman: </p> : ""}</h3>
      ) : ("")}

    </div>
  )
}

export default Translation
