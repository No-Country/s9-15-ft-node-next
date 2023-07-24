/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';

import PasswordChangeForm from './CambiarContraseña';

function Modal() {
  return (
    <>
      {/* You can open the modal using ID.showModal() method */}
      <button
        className="text-center hover:underline hover:decoration-1 md:mt-[16px]"
        // @ts-expect-error
        onClick={() => window.my_modal_1.showModal()}
      >
        Cambiar contraseña
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 rounded bg-red-500 px-2 py-1 font-bold text-white hover:bg-red-700">
            ✕
          </button>
          <h3 className="text-lg font-bold">Cambiar contraseña</h3>
          <PasswordChangeForm />
        </form>
      </dialog>
    </>
  );
}

export default Modal;
