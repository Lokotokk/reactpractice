import { useState } from 'react';
import './CommentsList.css';

// Задание: Список комментариев с удалением.

// Цель: Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного интерфейса.

// Задача:
// Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.
// Можно использовать заготовку:


function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
        ]);

    return ( 
      <>
      <h1 className='list-header'>CommentsList:</h1>
      <ul className='list-comment'>
                {comments.map((comment) => (
                    <li className='list-item' key={comment.id}>
                        {comment.text}{' '}
                        <button className='delete-button'
                            onClick={() => {
                                setComments(
                                    comments.filter(
                                        (a) =>
                                            a.id !==
                                            comment.id
                                    )
                                );
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
    </>
  );
}

export default CommentsList;

