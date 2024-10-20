import { useState } from "react";
import { createPortal } from "react-dom";
import { useDessertsStore } from "../store/useDessertsStore.ts";
import { DessertType } from "../type/dessertType.ts";
import { Modal } from "./Modal.tsx";

export function OrderSummary({ dessertCart }: { dessertCart: DessertType[] }) {
  const [showModal, setShowModal] = useState(false);
  const resetCart = useDessertsStore(state => state.resetCart);

  const totalOrder = dessertCart.reduce((acc, currentValue) => acc + currentValue.quantity * currentValue.price, 0);

  const closeModal = () => {
    resetCart()
    setShowModal(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between text-rose-900">
        <p className="preset-4">Order Total</p>
        <p className="preset-2">${totalOrder.toFixed(2)}</p>
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
          <Modal
            dessertCart={dessertCart}
            totalOrder={totalOrder}
            closeModal={closeModal} />,
          document.body
        )
      }
    </div>
  )
}
