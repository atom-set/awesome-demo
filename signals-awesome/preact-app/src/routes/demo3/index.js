import { signal } from "@preact/signals";

const person = signal({
  firstName: signal("John"),
  lastName: signal("Doe"),
});

function FirstName() {
  return (
    <div>
      <h1>firstName: {person.value.firstName.value}</h1>
      <h3>{Date.now()}</h3>
    </div>
  );
}

function LastName() {
  return (
    <div>
      <h1>lastName: {person.value.lastName.value}</h1>
      <h3>{Date.now()}</h3>
    </div>
  );
}

const change = (e) => {
  person.value.firstName.value = e.target.value;
};
export default function Demo2() {
  return (
    <div className="App">
      <FirstName />
      <LastName />
      <input onInput={change} />
    </div>
  );
}
