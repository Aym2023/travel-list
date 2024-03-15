import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charge", quantity: 1, packed: false },
];


export default function App () {
  return (
    <div className="app">
    < Logo />
    < Form />
    < PackingList />
    < Stats />
    </div>

  );
}

function Logo () {
  return (
    <div>
    <h1>🏝️ Far Away 🧳</h1>
    </div>
    );
}

function Form () {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handelSubmit (e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {description, quantity, packed: false, id:Date().now}
    console.log(newItem);

    setDescription("");
    setQuantity(1);

  }

return (
<form className="add-form" onSubmit={handelSubmit}>
<h3>What do you need for your 😍 trip? </h3>

<select 
value={quantity} 
onChange={(e) => setQuantity(Number(e.target.value))} >

  {Array.from({ length :20 }, (_, i) => 1 + i).map((num) => (
  <option value={num} key={num}>
    {num}
  </option> 
 ))}
 
</select>

<input
 type="text" 
 placeholder={"test..."} 
 value={description} 
 onChange={(e) => setDescription(e.target.value)} 
   />

<button>Add</button>

</form>
);
}

function PackingList () {
  return (
    <div className="list">
<ul>
  {initialItems.map((item) => < Item item={item} key={item} />)}
  </ul>
    </div>
    );
  }

  function Item ({item}) {
    return (
      <div>
        <li>
          <span style={item.packed ? {textDecoration: "line-through"} : {}}>
            {item.quantity} {item.description}</span>
        </li>
        <button>❌</button>
      </div>

    );
  }

function Stats () {
return (
  <footer className="stats">
 <em>
 You have x items for your list, and you already packed X (X%)
  </em>
  </footer>
);
}