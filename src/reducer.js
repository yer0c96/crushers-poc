import {
  over,
  lensPath,
  not,
  assoc,
  pipe,
  lensProp,
  append,
  remove,
  assocPath
} from 'ramda';
export const defaultState = {
  text: 'words',
  keywordText: 'keyword',
  todos: [],
  keywords: []
};

const reducers = {
  CHANGE_INPUT: assoc('text'),
  SUBMIT: payload =>
    pipe(
      state =>
        over(lensProp('todos'), append({text: state.text, id: payload}), state),
      assoc('text', '')
    ),
  TOGGLE: payload => over(lensPath(['todos', payload, 'completed']), not),
  DELETE: payload => over(lensProp('todos'), remove(payload, 1)),
  UPDATE_INPUT: payload => over(lensPath(['todos', payload, 'updating']), not),
  CHANGE_TODO: payload =>
    assocPath(['todos', payload.index, 'text'], payload.text)
};

export const Reducer = (state = defaultState, {type, payload}) =>
  //when(() => reducers[type], reducers[type](payload), state);
  reducers[type] ? reducers[type](payload)(state) : state; //same as above

//{type, payload} above is our action destructured so we know exactly which props we're using
