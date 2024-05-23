import { Form, Formik } from 'formik';
import TextInput from '../../../ui/inputs/TextInput';
import styles from './CreatePostForm.module.css';
import TextAreaInput from '@/ui/inputs/TextAreaInput';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { createPost } from '@/redux/app/thunks';
import { useNavigate } from 'react-router-dom';

function CreatePostForm() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  function onSubmit(values) {
    dispatch(createPost({ post: values }))
      .unwrap()
      .then(() => navigate('/'));
  }

  return (
    <Formik
      initialValues={{
        title: '',
        body: '',
        userId: '',
      }}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>
        <TextInput label="Title" name="title" type="text" placeholder="Hello" />
        <TextAreaInput label="Content" name="body" type="text" placeholder="Hi everyone" />
        <TextInput label="User" name="userId" type="text" placeholder="id" />
        <div className={styles.button_container}>
          <button type="submit" className={styles.save}>
            Create
          </button>
          <button onClick={() => navigate('/')} className={styles.cancel}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default CreatePostForm;
