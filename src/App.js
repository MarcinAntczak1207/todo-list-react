import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import TaskSection from "./TaskSection";
import FormSection from "./FormSection";
import Header from "./Header";
import Container from "./Container"

const tasks = [
  { id: 1, content: "przejść na reacta", done: true },
  { id: 2, content: "zjeść obiad", done: false },
];
const hideDone = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <FormSection
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <TaskSection
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
