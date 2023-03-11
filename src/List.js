/* eslint-disable */

import React, { useState, useRef, useEffect } from 'react'
import * as A from './List.jsx';

function List() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  })

  const [contents, setContents] = useState([]);
  const [but, setBut] = useState('');
  const [number, setNumber] = useState(4);

  const onChange = (e) => {
    setBut(e.target.value);
  };

  const onClick = () => {
    const newC = contents.concat({
      id: number,
      text: but
    })
    setContents(newC);
    setNumber(number + 1);
    setBut('');
  }

  const del = (id) => { {/* contents 내부 요소의 id와 id가 같으면 삭제 */}
    const newList = contents.filter((content) => content.id !== id);
    setContents(newList);
  }

  const contentsList = contents.map((cont) => 
      <A.li key={cont.id}>
        <A.cont>{cont.text}</A.cont> {/* listName */}
        <A.button2 onClick={() => {del(cont.id)}}>삭제</A.button2>  {/* button */}
      </A.li>
  );

  return (
    <A.container>
      <A.main>
        <A.title>할 일 목록</A.title>
        <A.input placeholder='할 일을 입력하세요' onChange={onChange} value={but} ref={inputRef}/> {/* input 태그 */}
        <A.button onClick={onClick}>입력</A.button> {/* button 태그 */}
        <hr/>

        <A.ul>
          {contentsList}
        </A.ul>

      </A.main>
    </A.container>
  )
}

export default List;