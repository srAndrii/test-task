import { useContext} from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Formdata from '../../context'

import './Form.css'

const Forms = () => {

    const { comments, setComments } = useContext(Formdata)
    
    //Коли отримано даі з форми вони доповнють state, після чого форма очищається,
    // а коментар відображається на сторінці
    const handlSubmit = (values, { resetForm }) => {
        setComments([ values, ...comments])
        resetForm()
    }

    
  return (
    <Formik
            initialValues={{
                name: '',
                email: '',
                body: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, "Мінімум 2 символа!")
                    .required("Об'язкове поле"),
                email: Yup.string()
                    .email('Неправильний email адреc!')
                    .required("Об'язкове поле"),
                body: Yup.string()
                    .min(10, 'Не менше 10 символів')
            })}
            onSubmit={handlSubmit}
        >
            <Form className="form"  >
                <label htmlFor="name">Ваше імя</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                />
                <ErrorMessage className = "error" name='name' component="div" />
                <label htmlFor="email">Ваш email</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                />
                <ErrorMessage className = "error" name='email' component="div" />
               
                
                <label htmlFor="text">Ваше повідомлення</label>
                <Field
                    id="text"
                    name="body"
                    as='textarea'
                />
                <ErrorMessage className = "error" name='text' component="div" />
                <button type="submit"  >Відпаривити</button>
            </Form>
        </Formik>
  )
}

export default Forms
