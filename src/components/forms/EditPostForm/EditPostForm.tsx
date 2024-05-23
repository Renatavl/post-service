import { Form, Formik } from 'formik';
import TextInput from '../../../ui/inputs/TextInput';
import styles from './EditPostForm.module.css';
import TextAreaInput from '@/ui/inputs/TextAreaInput';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { useNavigate, useParams } from 'react-router-dom';
import { editPostById } from '@/redux/app/thunks';

function EditPostForm() {
  const { Id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  function onSubmit(values) {
    dispatch(editPostById({ post: values, Id }))
      .unwrap()
      .then(() => navigate('/'));
  }

  return (
    <Formik
      initialValues={{
        title: '',
        body: '',
      }}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>
        <TextInput label="Title" name="title" type="text" placeholder="Hello" />
        <TextAreaInput label="Content" name="body" type="text" placeholder="Hi everyone" />
        <div className={styles.button_container}>
          <button type="submit" className={styles.save}>
            Save
          </button>
          <button onClick={() => navigate('/')} className={styles.cancel}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default EditPostForm;
