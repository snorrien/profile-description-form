import styles from './Form.module.css';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

function Form() {
    const formik = useFormik({
        initialValues: {
            nick: '',
            firstName: '',
            lastName: '',
            gender: ''
        },
        validationSchema: Yup.object({
            nick: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            firstName: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
            gender: Yup.string()
                .required('Выберите опцию')

        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 1));
        },
    });


    return (
        <div className={styles.display}>
            <div className={styles.selector}>
                <div className={styles.ring}>
                    <p className={styles.counter}>1</p>
                </div>
                <div className={styles.line}>
                    <div className={styles.colorLine}></div>
                    <div className={styles.ring1}>
                        <p className={styles.counter}>2</p>
                    </div>
                </div>
                <div className={styles.line}>
                    <div className={styles.colorLine}></div>
                </div>
                <div className={styles.ring2}>
                    <p className={styles.counter}>3</p>
                </div>
            </div>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="nick">Никнейм</label>
                    <input className={styles.input}
                        id="lastName"
                        name="nick"
                        type="text"
                        placeholder="Placeholder"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nick}
                    />
                    {formik.touched.nick && formik.errors.nick ? (
                        <div>{formik.errors.nick}</div>
                    ) : null}
                    <p className={styles.tip}>Tip</p>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="firstName">Имя</label>
                    <input className={styles.input}
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Placeholder"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div>{formik.errors.firstName}</div>
                    ) : null}
                    <p className={styles.tip}>Tip</p>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="lastName">Фамилия</label>
                    <input className={styles.input}
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Placeholder"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div>{formik.errors.lastName}</div>
                    ) : null}
                    <p className={styles.tip}>Tip</p>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="gender">Пол</label>
                    <select className={`${styles.input} ${styles.relative}`}
                        id="gender"
                        name="gender"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.gender}>
                        
                        <option  value="" disabled hidden>
                        &nbsp;&nbsp; Не выбрано
                        </option>
                        <option value="someOption">мужской</option>
                        <option value="otherOption">женский</option>
                    </select>
                    {formik.touched.gender && formik.errors.gender ? (
                        <div>{formik.errors.gender}</div>
                    ) : null}
                    <p className={styles.tip}>Tip</p>
                </div>

                
                <div className={styles.buttons}>
                    <button className={styles.lightButton}>Назад</button>
                    <button className={styles.button} type="submit" id="button-start">Далее</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
