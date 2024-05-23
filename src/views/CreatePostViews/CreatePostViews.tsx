import styles from './CreatePostViews.module.css';
import CreatePostForm from '@/components/forms/CreatePostForm';

function CreatePostViews() {
  return (
    <div>
      <h1 className={styles.title}>Create Post</h1>
      <div className={styles.form_container}>
        <CreatePostForm />
      </div>
    </div>
  );
}

export default CreatePostViews;
