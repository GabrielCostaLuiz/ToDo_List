import styled from "styled-components";

export const Container = styled.main`
  max-width: 83.2rem;
  padding-inline: 1%;
  margin: -2.5rem auto 0;

  form {
    display: flex;
    justify-content: space-between;
    gap: 0.8rem;
    margin-bottom: 6.4rem;

    input {
      background: #262626;
      color: var(--gray-100);
      font-size: 1.6rem;

      border: 1px solid #0d0d0d;
      border-radius: 8px;

      padding-left: 1.6rem;
      padding-block: 1.6rem;

      flex: 1;
      height: 5.4rem;

      &:focus {
        outline: 1px solid var(--purple);
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;

      width: 9rem;
      height: 5.2rem;

      border: none;
      border-radius: 8px;

      background-color: var(--blue-dark);
      color: var(--gray-100);
      font-size: 1.4rem;
      font-weight: 700;
    }
  }

  .contentTasks {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.4rem;

    p {
      font-weight: 700;
      line-height: 1.6rem;

      span {
        background-color: var(--gray-400);
        color: var(--gray-200);

        margin-left: 0.8rem;
        padding: 0.2rem 0.8rem;

        border-radius: 1rem;
      }

      &:first-child {
        color: var(--blue);
      }

      &:nth-child(2) {
        color: var(--purple);
      }
    }
  }

  .contentToDoMain {
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    gap: 1.6rem;

    .toDoEmpty {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 6.4rem;
      gap: 1.6rem;

      border-top: 1px solid var(--gray-400);

      color: var(--gray-300);

      p {
        font-size: 1.6rem;
        font-weight: 700;
        text-align: center;

        span {
          font-weight: 400;
        }
      }
    }

    .toDoEmptyHidden {
      display: none;
    }
  }

  @media (max-width: 500px) {
    max-width: 100%;

    form {
      input {
        width: 90%;
        height: 5.4rem;

        &::placeholder {
          font-size: 1.1rem;
        }
      }

      button {
        width: fit-content;
        padding-inline: 2%;
        height: auto;
        gap: 0.3rem;
      }
    }

    .contentTasks {
      p {
        font-size: min(1.3rem, 4vw);
      }
    }
  }
`;
