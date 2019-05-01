import {Reducer, defaultState} from './reducer';

it('should return a state', () => {
  expect(Reducer(undefined, {})).toEqual(defaultState);
});
it('should change the state when it gets a change input action', () => {
  const state = {
    text: {todos: 'todos', keyword: 'keyword'},
    items: {todos: [], keywords: []}
  };
  const action = {
    type: 'CHANGE_INPUT',
    payload: {value: 'newKeyword', id: 'keyword'}
  };
  const result = Reducer(state, action);

  expect(result).toEqual({
    text: {
      todos: 'todos',
      keyword: 'newKeyword'
    },
    items: {
      todos: [],
      keywords: []
    }
  });
});
it('should add a new todo item onSubmit action', () => {
  const state = {text: 'dumby', todos: []};
  const action = {type: 'SUBMIT', payload: 3};
  const result = Reducer(state, action);

  expect(result).toEqual({
    text: '',
    todos: [{text: 'dumby', id: 3}]
  });
});
it('should append new todo item to exsisting array', () => {
  const state = {text: 'dumby', todos: [{text: 'someWords'}]};
  const action = {type: 'SUBMIT'};
  const result = Reducer(state, action);

  expect(result).toEqual({
    text: '',
    todos: [{text: 'someWords'}, {text: 'dumby'}]
  });
});
it('should toggle a todo', () => {
  const state = {text: '', todos: [{text: 'someWords', completed: false}]};
  const action = {type: 'TOGGLE', payload: 0};
  const result = Reducer(state, action);

  expect(result).toEqual({
    text: '',
    todos: [{text: 'someWords', completed: true}]
  });
});
it('should delete a todo when clicked', () => {
  const state = {text: '', todos: [{text: 'deleteMe', completed: true}]};
  const action = {type: 'DELETE', payload: 0};
  const result = Reducer(state, action);

  expect(result).toEqual({
    text: '',
    todos: []
  });
});
it('should update a todo when edited', () => {
  const state = {text: '', todos: [{text: 'updated', updating: true}]};
  const action = {type: 'CHANGE_TODO', payload: {index: 0, text: 're-updated'}};
  const result = Reducer(state, action);

  expect(result).toEqual({
    text: '',
    todos: [{text: 're-updated', updating: true}]
  });
});
