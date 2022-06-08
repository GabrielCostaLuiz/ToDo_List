/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import { TbTrash } from "react-icons/tb";

import { Container } from "./style";

interface ITask {
  task: string;
  checkedOrNotChecked: (
    checkedTrueOrFalse: boolean,
    articleClicked: HTMLElement
  ) => void;
  deleteAsTask: (ident: number, taAqui: boolean) => void;
  numberToDo: number;
}

export function ToDo({
  task,
  checkedOrNotChecked,
  deleteAsTask,
  numberToDo,
}: ITask) {
  const [checked, setChecked] = useState(false);

  function handleChecked(event: any) {
    const trueorfalse = !checked;
    const objeto = event.target as HTMLElement;
    const textP = objeto.parentNode?.parentNode?.parentNode
      ?.children[1] as HTMLElement;
    setChecked(trueorfalse);
    const articleClicked = objeto.parentNode?.parentNode?.parentNode
      ?.parentNode as HTMLElement;

    textP.classList.toggle("checked");

    checkedOrNotChecked(trueorfalse, articleClicked);
  }

  function delTask() {
    deleteAsTask(numberToDo, checked);
  }

  return (
    <Container>
      <div className="contentToDo">
        <div className="contentCheck">
          <label className="container">
            <input onClick={handleChecked} type="checkbox" className="aperta" />
            <span className="checkmark" />
          </label>
        </div>
        <p id="textToDo">{task}</p>
      </div>
      <button onClick={delTask} type="button">
        <TbTrash size={18} />
      </button>
    </Container>
  );
}
