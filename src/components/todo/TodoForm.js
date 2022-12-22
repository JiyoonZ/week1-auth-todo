import styled from 'styled-components';
import { useState, useRef } from 'react';
import { postTodo } from '../../api/api';

function TodoForm({ refresh }) {
  const [newTodo, setNewTodo] = useState();
  const inputRef = useRef();
  const changeHadler = (evt) => {
    const {
      target: { value },
    } = evt;
    setNewTodo(value);
  };
  const sumbitHandler = async (evt) => {
    evt.preventDefault();
    if (newTodo) {
      await postTodo(newTodo);
      inputRef.current.value = '';
      inputRef.current.focus();
      setNewTodo('');
      refresh();
    }
  };
  return (
    <>
      {' '}
      <Form onSubmit={sumbitHandler}>
        <TodoInput
          ref={inputRef}
          placeholder="Add task"
          onChange={changeHadler}
        />
        <AddBtn>add</AddBtn>
      </Form>
    </>
  );
}

const Form = styled.form`
  width: 100%;
  padding: 20px 0;
`;
const TodoInput = styled.input`
  width: 78%;
  height: 30px;
  border: none;
  background-color: #d1d1d1;
  padding: 0 10px;
  margin-right: 10px;
`;
const AddBtn = styled.button`
  width: 60px;
  height: 30px;
  border: none;
  background-color: ${(props) => props.theme.accentColor};
  color: white;
`;

export default TodoForm;
