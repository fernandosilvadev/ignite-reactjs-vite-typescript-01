import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content,  onDeleteComment }: CommentProps) {

const [likeCount, setLikeCount] = useState(0);

function handleLikeCount() {
    setLikeCount((state) => {
        return state + 1
    });
}

function handleDeleteComment() {
    console.log('Deletando comentário...');
    onDeleteComment(content);
}


    return (
        <div className={styles.comment}>
        <Avatar 
        src="https://github.com/fernandosilvadev.png" 
        alt="Fernando Silva" 
        hasBorder={false}
        />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.AuthorAndTime}>
                        <strong>Fernando Silva</strong>
                        <time title="9 de Junho de 2022 às 16:41" dateTime="2022-06-09 16:41:00">Cerca de 1h atrás</time>
                    </div>
                <button onClick={handleDeleteComment} title="Deletar comentário">
                    <Trash size={24} />
                </button>
                </header>

                <p>{content}</p>
            </div>
        <footer>
            <button onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
            </button>
        </footer>
        </div>
    </div>
    )
}