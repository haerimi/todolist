import React, {useState} from "react";
import { Button } from "react-bootstrap";

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
}
const TodoList : React.FC = () => {
    const title : string = "오늘 할일";
    // 구조분해할당
    const [todos, setTodos] = useState<Todo[]>([
        {id: 1, text: '공부하기', isChecked: false},
        {id: 2, text: '잠자기', isChecked: false}, 
        {id: 3, text: '미팅하기', isChecked: false}
    ]);

    const [newTodo, setNewTodos] = useState<string>('');

    const handleCheckChange = (itemId: number) => {
        setTodos((prevItems) =>
            prevItems.map((item) => (
                item.id === itemId ? {...item, isChecked: !item.isChecked} : item
            ))
        )
    }

    const addTodo = () => {
        // 아무것도 입력하지 않았을 때
        if (newTodo.trim() !== '') {
            setTodos([...todos, {id: Date.now(), text: newTodo, isChecked: false}])
            setNewTodos('');
        }
    }

    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    return(
        <div>
            <h1>{title}</h1>
            <p></p>
            <div className="containner">
                <div>
                    <input type = 'text'
                    placeholder="할 일 입력"
                    style={{marginRight: '10px', writingMode: 'horizontal-tb'}}
                    onChange={(e) => setNewTodos(e.target.value)}
                    />
                    <Button variant = 'warning' onClick={addTodo}>추가</Button>
                </div>
            <p></p>
            <div className="board">
                <ul>
                    {
                        todos.map((todo, index) => (
                            <li key = {todo.id}>
                            <input type = "checkbox"
                            onChange={()=>{
                                handleCheckChange(todo.id);
                            }}></input>
                                <span>
                                    {
                                        todo.isChecked
                                        ? <del>{todo.text}</del>
                                        : <span>{todo.text}</span>
                                    }
                                </span>
                                <button
                                    onClick={()=>{
                                        removeTodo(todo.id)
                                    }}
                                    className="delbutton"
                                >삭제</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        </div>
        
    )
}

export default TodoList;