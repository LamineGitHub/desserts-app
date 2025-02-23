import { CartItem } from "@/components/CartItem.tsx"
import { OrderSummary } from "@/components/OrderSummary.tsx"
import { Separator } from "@/components/Separator.tsx"
import { useDessertsStore } from "@/store/useDessertsStore.ts"
import { AnimatePresence } from "motion/react"
import NumberFlow from "@number-flow/react"

export function CartSummary() {
  const desserts = useDessertsStore.use.desserts()

  const dessertCart = desserts.filter((dessert) => dessert.quantity > 0)
  const dessertCartQuantity = dessertCart.reduce(
    (acc, currentValue) => acc + currentValue.quantity,
    0,
  )

  return (
    <>
      <h2 className="preset-2 mb-6 text-red">
        Your Cart (<NumberFlow value={dessertCartQuantity} />)
      </h2>

      {dessertCart.length === 0 ? (
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <img
            src="/assets/images/illustration-empty-cart.svg"
            alt=""
            className="size-32"
          />
          <p className="preset-4-bold text-rose-500">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <>
          <AnimatePresence>
            {dessertCart.map((dessert, index) => (
              <div key={dessert.id}>
                {index > 0 && <Separator className="my-4" />}
                <CartItem {...dessert} />
              </div>
            ))}
          </AnimatePresence>

          <Separator className="my-6" />
          <OrderSummary dessertCart={dessertCart} />
        </>
      )}
    </>
  )
}
