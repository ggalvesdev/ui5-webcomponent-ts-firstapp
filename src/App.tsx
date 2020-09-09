import React from 'react'; 
import { Button } from '@ui5/webcomponents-react/lib/Button';  
function App() {

  function handleHelloWorld(){
    alert("Hello Gabs");
  }
  return (
    <Button onClick={handleHelloWorld}>Hello world!</Button>
  );
} 
 
export default App;
