import React from 'react';
import {Todo} from './todo';
import {ChangeInput, Submit} from './actionCreator';
import {pipe, length, propEq, reject} from 'ramda';

const incompleteTodos = pipe(
  reject(propEq('completed', true)),
  length
);

//non point free version
// const incompleteTodos = todos =>
//   pipe(
//     reject(propEq('completed', true)),
//     length
//   )(todos);

const XXX = ({items, text, id, ItemComponent, children}) => (
  <React.Fragment>
    <h3>{id}</h3>
    <form onSubmit={Submit}>
      <input value={text} id={id} onChange={ChangeInput} />
      <button>Add</button>
      {children}
    </form>
    <ul>
      {items.map((todo, i) => (
        <ItemComponent key={todo.id} todo={todo} i={i} />
      ))}
    </ul>
  </React.Fragment>
);

const App = ({todos, text, keywordText, keywords}) => (
  //destructuring app state above so we know what props we're using
  <div>
    <XXX items={todos} text={text} id="Todos" ItemComponent={Todo}>
      <p>Incomplete items: {incompleteTodos(todos)}</p>
    </XXX>
    {JSON.stringify(text)}
    {JSON.stringify(todos)}

    <XXX
      items={keywords}
      text={keywordText}
      id="Keywords"
      ItemComponent={Todo}
    />
  </div>
);

export default App;
