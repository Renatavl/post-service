import { Link } from 'react-router-dom';
import styles from './UsersViews.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { userListState } from '@/redux/app/selectors';
import { useEffect } from 'react';
import { getUserList } from '@/redux/app/thunks';
import { AppDispatch } from '@/redux/store';
function UserViews() {
  const userData = useSelector(userListState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUserList({}));
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Users Info</h1>
      <div className={styles.wrapper}>
        <div className={styles.title_container}>
          <h2>Name</h2>
          <h2 className={styles.column_title}>Email</h2>
          <h2 className={styles.column_title}>Address</h2>
          <h2 className={styles.column_title}>Phone</h2>
          <h2>Links</h2>
        </div>
        {userData.map((item) => (
          <div key={item.name} className={styles.card_container}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.email}>{item.email}</p>
            <p className={styles.address}>
              {item.address.city}
              {item.address.street}
            </p>
            <p className={styles.phone}>{item.phone}</p>
            <Link to={'/user/' + item.id}>Posts</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserViews;
