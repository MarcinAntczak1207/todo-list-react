import React, { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import TaskSection from "./TaskSection";
import FormSection from "./FormSection";
import Header from "./Header";
import Container from "./Container"


function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "przejść na reacta", done: true },
    { id: 2, content: "zjeść obiad", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <FormSection
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <TaskSection
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
          />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />}
      />
    </Container>
  );
}

export default App;
