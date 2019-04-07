import React from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';
import {useState} from 'react';

const AddTodo = ({dispatch}) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input  value={text} onChange={e=>setText(e.target.value)} />
      <button onClick={()=>{
        dispatch(addTodo(text));
        setText("");
        }}>Add</button>
    </div>
  )
}


export default connect()(AddTodo);