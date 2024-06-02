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
            <div className={styles.text}>
                <h1>Contacto</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label className={styles.nombre}>
                        <input type="text" name="user_name" placeholder="Nombre *" value={formData.user_name} onChange={handleChange} required />
                    </label>
                    <label className={styles.email}>
                        <input type="email" name="user_email" placeholder="Email *" value={formData.user_email} onChange={handleChange} required />
                    </label>
                    <label className={styles.telefono}>
                        <input type='number' name="user_phone" placeholder="Teléfono de contacto" value={formData.user_phone} onChange={handleChange} />
                    </label>
                    <label className={styles.mensaje}>
                        <textarea name="message" rows="10" placeholder="Mensaje *" value={formData.message} onChange={handleChange} required />
                    </label>
                    <button type="submit">Enviar</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    )
}
