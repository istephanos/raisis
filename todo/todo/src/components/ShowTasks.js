import Tasks from "./Tasks";

const ShowTasks = ({tasks, deleteTask, toggleReminder}) => {
  return (
    <>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </>
  );
};

export default ShowTasks;
