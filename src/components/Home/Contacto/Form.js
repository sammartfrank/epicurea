import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EpicuForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phonenumber: null,
    date: null,
    guestAmmount: 0,
    eventType: null,
    feedback: '',
  });

  console.log('[formState]', formState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name: formState.name,
      feedback: formState.feedback,
    };

    emailjs
      .send(
        'gmail',
        'template_XWEDHksh',
        templateParams,
        'user_TTEecTZTFz4at7hrSyIAz'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };

  const handleInputChange = (e) => {
    const newState = { ...formState };
    const { name, value } = e.target;
    setFormState(() => {
      newState[name] = value;
      return newState;
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        name="name"
        onChange={handleInputChange}
        placeholder="Nombre y apellido"
        required
        value={formState.name}
        style={{ width: '100%' }}
      />
      <input
        id="email"
        name="email"
        onChange={handleInputChange}
        placeholder="E-mail"
        required
        value={formState.email}
        style={{ width: '100%' }}
      />
      <input
        id="phonenumber"
        name="phonenumber"
        onChange={handleInputChange}
        placeholder="Teléfono"
        required
        value={formState.phonenumber}
        style={{ width: '100%' }}
      />
      <input
        placeholder="Fecha del evento"
        name="date"
        value={formState.date}
        type="date"
      />
      <input
        placeholder="Numero de Invitados"
        name="guestAmount"
        value={formState.guestAmount}
        min={0}
        max={100}
        type="number"
      />
      <select>
        <option>Fiesta</option>
        <option>Reunion</option>
        <option>Empresarial</option>
      </select>
      <textarea
        id="feedback"
        name="feedback"
        onChange={handleInputChange}
        placeholder="En que te podemos ayudar?"
        required
        value={formState.feedback}
        style={{ width: '100%', height: '250px' }}
      />
      <button type="submit" onSubmit={handleSubmit}>
        Enviar
      </button>
    </form>
  );
};

export default EpicuForm;
