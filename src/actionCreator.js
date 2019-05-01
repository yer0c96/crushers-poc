import {Dispatch} from './store';

export const Uuid = () =>
  Math.random()
    .toString(36)
    .slice(2);

export const Toggle = index => () => {
  Dispatch({
    type: 'TOGGLE',
    payload: index
  });
};

export const ChangeInput = event => {
  Dispatch({
    type: 'CHANGE_INPUT',
    payload: {value: event.target.value, id: event.target.id}
  });
};

export const UpdateInput = index => () => {
  Dispatch({
    type: 'UPDATE_INPUT',
    payload: index
  });
};
export const UpdateTodo = index => event => {
  Dispatch({
    type: 'CHANGE_TODO',
    payload: {index, text: event.target.value}
  });
};

export const Submit = event => {
  event.preventDefault();
  Dispatch({
    type: 'SUBMIT',
    payload: Uuid()
  });
};

export const Delete = index => () => {
  Dispatch({
    type: 'DELETE',
    payload: index
  });
};

//action creators are impure
