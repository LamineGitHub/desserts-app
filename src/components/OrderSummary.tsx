import { useState } from "react";
import { Modal } from "./Modal.tsx";
import { createPortal } from "react-dom";

export function OrderSummary() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between text-rose-900">
        <p className="preset-4">Order Total</p>
        <p className="preset-2">$46.50</p>
      </div>

      <div className="flex items-center justify-center gap-2 bg-rose-50 p-4">
        <img src="/assets/images/icon-carbon-neutral.svg" alt="" className="size-5" />
        <p className="preset-4">This is a <span className="font-semibold">carbon-neutral</span> delivery</p>
      </div>

      <button
        className="primary-btn"
        onClick={() => setShowModal(true)}
      >
        Confirm Order
      </button>
      {showModal &&
        createPortal(
          <Modal closeModal={() => setShowModal(false)} />,
          document.body
        )
      }
    </div>
  )
}
