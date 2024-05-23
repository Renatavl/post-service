import EditPostForm from '@/components/forms/EditPostForm';
import styles from './EditPostViews.module.css';

function EditPostViews() {
  return (
    <div>
      <h1 className={styles.title}>Edit Post</h1>
      <div className={styles.form_container}>
        <EditPostForm />
      </div>
    </div>
  );
}

export default EditPostViews;
