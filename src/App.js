import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import SectionTasks from "./SectionTasks";
import SectionForm from "./SectionForm";
import Header from "./Header";
import Container from "./Container"

const tasks = [
  { id: 1, content: "przejść na reacta", done: true },
  { id: 2, content: "zjeść obiad", done: true },
];
const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <SectionForm
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <SectionTasks
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
