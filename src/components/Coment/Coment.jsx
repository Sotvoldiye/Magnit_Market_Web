import styles from './CommentCard.module.css';

const CommentCard = ({ comment }) => {
  const formattedDate = new Date(comment.date).toLocaleDateString();

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h4 className={styles.user}>{comment.reviewerName}</h4>
        <span className={styles.rating}>⭐ {comment.rating}/5</span>
      </div>
      <p className={styles.text}>{comment.comment}</p>
      <span className={styles.date}>{formattedDate}</span>
    </div>
  );
};

export default CommentCard;
