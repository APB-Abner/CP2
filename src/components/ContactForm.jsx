import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Substitua 'YOUR_SERVICE_ID', e 'YOUR_USER_ID'
        emailjs.sendEmail('service_skgg39h', 'template_j8mwa15', form.current, 'YlmHrRjC_3D66ifkqw')
            .then((result) => {
                console.log(result.text);
                alert('Email enviado com sucesso!');
            }, (error) => {
                console.log(error.text);
                alert('Ocorreu um erro ao enviar o e-mail.');
            });
        e.target.reset();
    };

    return (
        <div className="container my-5 p-4">

            <form ref={form} onSubmit={sendEmail} className='row g-3'>
                <label>Nome</label>
                <input type="text" className='form-control ' name="user_name" required />

                <label>Email</label>
                <input type="email" className='form-control' name="user_email" required />

                <label>Mensagem</label>
                <textarea name="message" className='form-control' required />

                <input type="submit" value="Enviar" class="col-2 btn bg-gray-800 text-neutral-100 mb-3 center" />
            </form>
        </div>
    );
}
