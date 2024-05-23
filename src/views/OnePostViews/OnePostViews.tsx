import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './OnePostViews.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { commentsListState, postState } from '@/redux/app/selectors';
import { AppDispatch } from '@/redux/store';
import { useEffect } from 'react';
import { deletePost, getCommentsList, getPost } from '@/redux/app/thunks';

function OnePostViews() {
  const navigate = useNavigate();
  const { Id } = useParams();
  const onePostData = useSelector(postState);
  const commentsData = useSelector(commentsListState);
  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    dispatch(getPost({ Id }));
    dispatch(getCommentsList({ Id }));
  }, []);

  function onDelete() {
    dispatch(deletePost({ Id }))
      .unwrap()
      .then(() => navigate('/'));
  }

  if (onePostData == null) {
    return <></>;
  }

  return (
    <div>
      <h1 className={styles.title}>Post №1</h1>
      <div className={styles.wrapper}>
        <div className={styles.one_post_container}>
          <h4 className={styles.one_post_title}>{onePostData.title}</h4>
          <p className={styles.one_post_main_content}>{onePostData.body}</p>
          <div className={styles.button_container}>
            <Link to={'/update/post/' + onePostData.id}>
              <button className={styles.edit}>Edit</button>
            </Link>
            <button onClick={onDelete} className={styles.delete}>
              Delete
            </button>
          </div>
        </div>
        <h3 className={styles.subtitle}>Comments</h3>
        {commentsData.map((item) => (
          <div key={item.name} className={styles.comments_container}>
            <h4 className={styles.comment_title}>{item.name}</h4>
            <p>{item.email}</p>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnePostViews;
