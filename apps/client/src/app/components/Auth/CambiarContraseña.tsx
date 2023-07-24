import React, { useState } from 'react';

const ChangePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    console.log({ oldPassword, newPassword, confirmPassword });

    // Reiniciamos el formulario
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md">
      <h2 className="mb-4 text-xl font-medium">Cambiar Contraseña</h2>

      <div className="mb-4">
        <label htmlFor="old-password" className="mb-2 block font-medium">
          Contraseña Actual
        </label>
        <input
          type="password"
          id="old-password"
          value={oldPassword}
          onChange={(event) => {
            setOldPassword(event.target.value);
          }}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="new-password" className="mb-2 block font-medium">
          Nueva Contraseña
        </label>
        <input
          type="password"
          id="new-password"
          value={newPassword}
          onChange={(event) => {
            setNewPassword(event.target.value);
          }}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="confirm-password" className="mb-2 block font-medium">
          Confirmar Contraseña
        </label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          required
        />
      </div>

      <button
        type="submit"
        className="block w-full rounded-md border border-transparent bg-blue-500 px-4 py-2 text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Cambiar Contraseña
      </button>
    </form>
  );
};

export default ChangePasswordForm;
