'use client'
import React, { useState } from 'react';
import { Button } from './Button';
import styles from './ContactForm.module.scss';

export const ContactForm = () => {
    const [formInput, handleFormInput] = useState({
        name: "",
        phone: "",
        email: "",
        brand: "",
        service: "",
        budget: "",
        message: ""
    });
    const [formErrors, handleFormErrors] = useState({
        name: false,
        email: false
    });

    const handleTextChange = (e, key) => {
        console.log(formInput);
        var newArray = {...formInput}
        newArray[key] = e.target.value;
        handleFormInput(newArray);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var errors = {name: false, email: false};
        if(formInput.name == ""){
            errors.name = true;
        }
        if(formInput.email == ""){
            errors.email = true;
        }

        if(!errors.name && !errors.email){
            handleFormErrors({name: false, email: false});
            alert("success");
        }
        else {
            handleFormErrors(errors);
        }
    };

    return <form className={styles.form}>
        <label htmlFor='nombre'>Nombre <span className={formErrors.name && styles.error}>Nombre invalido</span></label>
        <input type='text' name='nombre' onChange={(e) => {handleTextChange(e, 'name')}} value={formInput.name}/>
        <label htmlFor='tel'>Telefono</label>
        <input type='text' name='tel' onChange={(e) => {handleTextChange(e, 'phone')}} value={formInput.phone}/>
        <label htmlFor='email'>Correo electronico <span className={formErrors.email && styles.error}>Correo invalido</span></label>
        <input type='text' name='email' onChange={(e) => {handleTextChange(e, 'email')}} value={formInput.email}/>
        <label htmlFor='businessName'>Nombre de tu marca o empresa:</label>
        <input type='text' name='businessName' onChange={(e) => {handleTextChange(e, 'brand')}} value={formInput.brand}/>
        <label htmlFor='service'>Servicio</label>
        <select name='service'>
            <option>Anuncios pagados / Publicidad en linea</option>
            <option>SEO</option>
            <option>Email Marketing</option>
            <option>Manejo de redes sociales</option>
            <option>Public Relations / Media Purchase Solutions</option>
            <option>Media Purchase</option>
        </select>
        <label htmlFor='budget'>Presupuesto de inversion</label>
        <select name='budget'>
            <option>Menor a $20,000 M.N</option>
            <option>Entre $20,000 M.N - $50,000 M.N</option>
            <option>Superior a $50,000 M.N</option>
        </select>
        <label htmlFor='message'>Mensaje</label>
        <textarea name='message' rows={5} onChange={(e) => {handleTextChange(e, 'message')}} value={formInput.message}/>
        <Button className={styles.contactsend} onClick={handleSubmit}>Enviar</Button>
    </form>
}