import React, { useState, useEffect } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import TaskSection from "./TaskSection";
import FormSection from "./FormSection";
import Header from "./Header";
import Container from "./Container"


function App() {
  const localStorageTasks = JSON.parse(localStorage.getItem("tasks"));

  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(
    localStorageTasks
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <FormSection
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <TaskSection
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
