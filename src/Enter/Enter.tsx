import styles from './Enter.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import InputMask from 'react-input-mask';

function Enter() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            phone: '',
            email: '',
        },
        validationSchema: Yup.object({
            phone: Yup.string()
                .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Invalid phone number')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 1));
            navigate("/form");
        },
    });

    return (
        <div className={styles.display}>
            <div className={styles.flex}>
                <div className={styles.ring}>АИ</div>
                <div>
                    <div className={styles.name}>Алексей Иванов</div>
                    <ul className={styles.links}>
                        <li className={styles.link}>Telegram</li>
                        <li className={styles.link}>GitHub</li>
                        <li className={styles.link}>Резюме</li>
                    </ul>
                </div>
            </div>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <div className={styles.line}></div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="phone">Номер телефона</label>
                    <InputMask className={styles.input}
                        id="phone"
                        type="tel"
                        mask="+7 (999) 999-99-99"
                        maskChar="_"
                        placeholder='+7 (900) 000-00-00'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div>{formik.errors.phone}</div>
                    ) : null}
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input className={styles.input}
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder='webstudio.fractal@example.com'
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                </div>
                <button className={styles.button} type="submit" id="button-start">Начать</button>
            </form>
        </div>
    );
}

export default Enter;