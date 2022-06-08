/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-bind */
import { ChangeEvent, FormEvent, useState } from "react";
import { CgAdd } from "react-icons/cg";
import { TbClipboardText } from "react-icons/tb";

import { ToDo } from "../ToDo";
import { Container } from "./style";

interface ITask {
  task: string;
  id: number;
}

export function Main() {
  const [newTask, setNewTask] = useState("");
  const [task, setTask] = useState([]) as any;
  const [idTask, setIdTask] = useState(0);
  const [checkFalseOrTrue, setCheckFalseOrTrue] = useState(0);

  function checkedOrNotChecked(
    trueOrFalse: boolean,
    articleClicked: HTMLElement
  ) {
    if (trueOrFalse) {
      setCheckFalseOrTrue(checkFalseOrTrue + 1);
      articleClicked.style.order = `${task.length + task.length}`;
    } else {
      setCheckFalseOrTrue(checkFalseOrTrue - 1);
      articleClicked.style.order = "initial";
    }
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    const newTaskWithId = {
      id: idTask,
      task: newTask,
    };

    setTask([...task, newTaskWithId]);
    setIdTask(idTask + 1);
    setNewTask("");

    const contentWithAsEmpty = document.querySelector(
      ".toDoEmpty"
    ) as HTMLElement;
    contentWithAsEmpty.classList.remove("toDoEmpty");
    contentWithAsEmpty.classList.add("toDoEmptyHidden");
  }

  function Changing(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function deleteTask(ident: number, taAqui: boolean) {
    const newTask = task.filter((task: ITask) => task.id !== ident);
    if (taAqui) {
      setCheckFalseOrTrue(checkFalseOrTrue - 1);
    }

    if (task.length === 1) {
      const contentWithAsEmpty = document.querySelector(
        ".toDoEmptyHidden"
      ) as HTMLElement;
      contentWithAsEmpty.classList.remove("toDoEmptyHidden");
      contentWithAsEmpty.classList.add("toDoEmpty");
    }

    setTask(newTask);
  }

  return (
    <Container>
      <form onSubmit={handleNewTask}>
        <input
          onChange={Changing}
          type="text"
          required
          value={newTask}
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit">
          Criar <CgAdd size={16} />
        </button>
      </form>

      <div className="contentTasks">
        <p>
          Tarefas criadas <span>{task.length}</span>
        </p>
        <p>
          Concluidas{" "}
          <span>
            {checkFalseOrTrue} de {task.length}
          </span>
        </p>
      </div>

      <div className="contentToDoMain" id="ToDoList">
        <div className="toDoEmpty">
          <TbClipboardText size={56} />
          <p>
            Você ainda não tem tarefas cadastradas <br />
            <span>Crie tarefas e organize seus itens a fazer</span>
          </p>
        </div>
        {task.map((item: ITask) => {
          return (
            <ToDo
              key={item.id}
              task={item.task}
              checkedOrNotChecked={checkedOrNotChecked}
              deleteAsTask={deleteTask}
              numberToDo={item.id}
            />
          );
        })}
      </div>
    </Container>
  );
}
