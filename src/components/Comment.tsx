import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "@phosphor-icons/react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/gabrielbertaglia.png" hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Bertaglia</strong>
              <time
                title="11 de Maio ás 08:00"
                dateTime="2022-05-11 08:00:00"
                className={styles.publishedAt}
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
