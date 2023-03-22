import React from "react";

function App()
{
  const name1="Kabil";
  const name2="Kabil";
  const object1={name:"Kabil"};
  const object2={name:"Kabil"};
  function compareValues(value1,value2)
  {
    return value1===value2;
  }
  function compare()
  {
    console.log(compareValues(name1,name2));
    console.log(compareValues(object1,object2));
  }
  return(
    <div>
      <button onClick={compare}>Compare Values</button>
    </div>
  );
}

export default App;
