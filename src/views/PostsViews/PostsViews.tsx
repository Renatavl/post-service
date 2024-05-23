import { Link, useParams } from 'react-router-dom';
import styles from './PostsViews.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { postListState } from '@/redux/app/selectors';
import { AppDispatch } from '@/redux/store';
import { useEffect } from 'react';
import { getPostList } from '@/redux/app/thunks';

function PostsViews() {
  const { Id } = useParams();
  const postData = useSelector(postListState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPostList({ Id }));
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Posts</h1>
      <div className={styles.wrapper}>
        <div className={styles.link_container}>
          <Link to="/create/post">+ Add new</Link>
        </div>
        {postData.map((item) => (
          <div key={item.title} className={styles.posts_container}>
            <h4 className={styles.card_title}>{item.title}</h4>
            <p>{item.body}</p>
            <Link to={'/post/' + item.id}>
              <button className={styles.details}>Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsViews;
