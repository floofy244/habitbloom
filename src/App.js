import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [habits, setHabits] = useState([]);

  const addHabit = () => {
    if (text.trim() !== ""){
      const newHabit = {
        id: Date.now(),
        name: text,
        completed: false,
      };
      
      setHabits([...habits, newHabit]);
      setText("");
      setError("");
    } else{
      setError("please add a habit!")
    }
  };


  const toggleHabit = (id) => {
    const updatedHabits = habits.map((habit) =>
      habit.id === id
        ? {...habit, completed: !habit.completed}
        : habit
      );

      setHabits(updatedHabits);
  };


  const deleteHabit = (id) => {
    const filteredHabits = habits.filter((habit) => habit.id !==id);
    setHabits(filteredHabits);
  }

  return (
    <div>
      <h1>Habit Bloom 🌱</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addHabit}>Add Habit</button>
      <p>{error}</p>

      <ul>
        {habits.map((h) => (
          <li key={h.id}>
            <span style={{textDecoration: h.completed ? "line-through" : "none"}}>
              {h.name}
            </span>
            <button onClick={() => toggleHabit(h.id)}>
              {h.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button onClick={() => deleteHabit(h.id)}>
              Delete habit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
