import "./App.css";
import Card from './components/Card'
function App() {
  let myObj = {
    username: 'shivam',
    age: 19,
    btn: 'click'
  }

  let newArr = [2,4,5]
  return (
    <>

    <Card username = 'shivam kumar' btntext = 'show me' />
    <Card username = {myObj.username}/>
      
    </>
  );
}

export default App;
