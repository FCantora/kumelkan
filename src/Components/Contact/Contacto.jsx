/* eslint-disable no-unused-vars */
import emailjs from '@emailjs/browser';
import { useState } from 'react';

import styles from './Contacto.module.css';

export const Contacto = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        message: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_42x9erp', 'contact_form', formData, 'ZXaEo_wyw6kr7HM07')
            .then((result) => {
                setMessage('¡Consulta enviada correctamente!');
                setFormData({
                    user_name: '',
                    user_email: '',
                    user_phone: '',
                    message: ''
                })
            }, (error) => {
                setMessage('Error al enviar el formulario. Por favor revisar los datos.');
            });
    };

    return (
        <div className={styles.container}>
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Nombre:
                    <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
                </label>
                <label>
                    Teléfono:
                    <input type='number' name="user_phone" value={formData.user_phone} onChange={handleChange} />
                </label>
                <label>
                    Mensaje:
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </label>
                <button type="submit">Send</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}
