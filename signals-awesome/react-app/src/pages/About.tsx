import React, { useCallback, useState } from "react";

function About() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    let value = count + 1;
    setCount(value);
  }, [count])

  console.log('render');
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>click me</button>
    </div>
  );

}
export default About;