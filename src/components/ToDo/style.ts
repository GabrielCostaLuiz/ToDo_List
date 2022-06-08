import styled from "styled-components";

export const Container = styled.article`
  border-radius: 1%;
  background-color: var(--gray-500);
  padding: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  border: 1px solid var(--gray-400);
  border-radius: 8px;

  .contentToDo {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    flex: 1;

    p {
      height: 4rem;
      display: flex;
      align-items: center;

      &.checked {
        text-decoration: line-through;
        color: var(--gray-300);
      }
    }

    .contentCheck {
      height: 1.7rem;

      .container {
        display: flex;
        align-items: center;
        position: relative;
        padding-left: 2rem;

        cursor: pointer;

        input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        /* Esconder o checkbox padrão */
        .checkmark {
          position: absolute;
          display: block;
          top: 0;
          left: 0;
          height: 1.7rem;
          width: 1.7rem;
          border: 2px solid var(--blue);
          border-radius: 50%;
          transition: opacity 0.3s;
        }

        /* Adicionar uma cor de fundo cinza ao passar o mouse */
        &:hover input:not(:checked) ~ .checkmark {
          opacity: 0.5;
        }

        & input:checked ~ .checkmark {
          background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
          background-position: center;
          background-color: var(--purple-dark);
          border: 2px solid var(--purple-dark);
        }

        &:hover input:checked ~ .checkmark {
          filter: brightness(110%);
        }
      }
    }
  }

  button {
    border: 0;
    background-color: transparent;

    svg {
      color: var(--gray-300);

      &:hover {
        color: var(--danger);
        background-color: var(--gray-300);
        border-radius: 4px;
      }
    }
  }
`;
