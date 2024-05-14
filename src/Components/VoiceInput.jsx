import React from 'react'
import { useState } from 'react';

const VoiceInput = () => {
    const [expression, setExpression] = useState('Click On Mic to Start');
  const [result, setResult] = useState(0);


  const handleVoiceInput = () => {

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    console.log("Started");


    const multiwordoperations = {
      "bracket start": "(",
      "bracket end": ")",
      "bracket open": "(",
      "bracket close": ")",
      "opening bracket": "(",
      "closing bracket": ")",
      "multiplied by": "*",
      "divided by": "/",
      "up on":"/"
    };
 
  const mappings = {
  plus: "+",
  add: "+",
  subtract: "-",
  minus: "-",
  multiply: "*",
  x:"*",
  into: "*",
  times: "*",
  upon: "/",
  slash: "/",
  mod: "%",
  modoulo: "%",
  modulus:"%",
  modulo:"%",
  result : result,
  one:"1",
  two:"2",
  three:"3",
  four:"4",
  five:"5",
  six:"6",
  seven:"7",
  eight:"8",
  nine:"9"
};



    function doesNotContainLetters(str) {
      // Regular expression to match any character from 'a' to 'z'
      const regex = /[a-z]/i; // 'i' flag makes the match case-insensitive

      // Test the string against the regular expression
      return !regex.test(str);

    }

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      console.log(speechResult);
      let LcspeechResult = speechResult.toLowerCase();
      console.log(LcspeechResult);

      Object.keys(multiwordoperations).forEach((multiword)=>{
      LcspeechResult =  LcspeechResult.replace(multiword,multiwordoperations[multiword])
      console.log("replace", multiword, "output:", LcspeechResult);
      console.log(LcspeechResult);

      })

      console.log(LcspeechResult);
      const words = LcspeechResult.split(" ");
      console.log(words);
      const expressionarr = words.map((word)=>{
        if(word in mappings){
          return mappings[word];
        }
        if(doesNotContainLetters(word)){
          return word;
        }
        return "";
      })
      console.log(expressionarr)


      const expression = expressionarr.join("")

      setExpression(expression);
      console.log(expression);
      console.log(eval(expression))
      
      try {
        const evaluatedResult = eval(expression);
        setResult(evaluatedResult);
      } catch (error) {
        setResult('Invalid expression');
      }
      // finally{
      //   // console.log("Finally Called");
      //   }
    }
    }
  return (
    <div className=" h-full w-full bg-slate-400 p-4 flex justify-center items-center flex-col  rounded-3xl gap-10 md:p-3 ">
      <div className=" w-5/6  justify-center items-center">
        <input
          type="text"
          value={expression}
          readOnly
          className="  p-2 w-full rounded-t-xl "
        />
        <input
          type="number"
          readOnly
          value={result}
          className=" rounded-b-xl p-2 w-full "
        />
      </div>

      <div
        onClick={handleVoiceInput}
        className=" border bg-white rounded-full p-16  cursor-pointer uppercase md:p-14"
        id='mic'
      >
        mic
      </div>
      <style>
        {`
        #mic{
          {/* background-color:black;
          color:white; */}
        }
        `}
      </style>
    </div>
  );
}

export default VoiceInput


// check your mic is enable if it is not working