import { signal } from "@preact/signals";

const person = signal({
  firstName: "John",
  lastName: "Doe",
});

function FirstName() {
  return (
    <div>
      <h1>firstName: {person.value.firstName}</h1>
      <h3>{Date.now()}</h3>
    </div>
  );
}

function LastName() {
  return (
    <div>
      <h1>lastName: {person.value.lastName}</h1>
      <h3>{Date.now()}</h3>
    </div>
  );
}

const change = (e) => {
  person.value.firstName = e.target.value;
  person.value = { ...person.value };
};

export default function Demo3() {
  return (
    <div className="App">
      <FirstName />
      <LastName />
      <input onInput={change} />
    </div>
  );
}
