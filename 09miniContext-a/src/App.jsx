import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
      <h1 className="text-4xl text-blue-800 text-center">Site is live</h1>
      
    </UserContextProvider>
  )
}

export default App
