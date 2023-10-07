import { useState, useCallback, useEffect, useRef } from "react";

// react limits the renders to prevent the infinte loop

function App() {
  const [length, setLength] = useState(8);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasCharacters, setHasCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const [copyStatus, setCopyStatus] = useState("Copy")
  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (hasNumbers) str += "0123456789";
    if (hasCharacters) str += "!@#$%^&*()+/?><";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    setCopyStatus("Copy")
  }, [length, hasNumbers, hasCharacters, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
    setCopyStatus("Copied!")
  },[password])
/*

useEffect: it is a react hook that lets you syncronise a component with external system
how to use?

useEffect( function, dependencies)
useEffect(()=>{it is a callback function}, [dependencies is an array])

*/
  useEffect(() => {
    passwordGenerator();
  }, [length, hasNumbers, hasCharacters, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-red-500 bg-gray-800">
        <p className="text-center text-white text-3xl font-semibold mb-5">
          Password Generator
        </p>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 "
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="bg-green-500 text-green-50 px-4 hover:bg-green-700"
          onClick={copyPasswordToClipboard}
          >{copyStatus}</button>
        </div>
        <div className="flex text-sm gap-x-3 text-white">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={hasNumbers}
              className="cursor-pointer"
              onChange={() => {
                setHasNumbers((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={hasCharacters}
              className="cursor-pointer"
              onChange={() => {
                setHasCharacters((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
