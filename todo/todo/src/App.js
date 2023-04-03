import {useState} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Invata React",
      day: "Mar 30",
      reminder: true,
    },
    {
      id: 2,
      text: "Creaza aplicatie TO DO React",
      day: "Mar 30",
      reminder: true,
    },
    {
      id: 3,
      text: "Incepe un proiect nou",
      day: "Mar 31",
      reminder: true,
    },
    {
      id: 4,
      text: "Continua proiectul",
      day: "April 7",
      reminder: true,
    },
    {
      id: 5,
      text: "Prezinta proiectul",
      day: "April 7",
      reminder: true,
    },
  ]);

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    console.log(id);
  };
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
};

export default App;
