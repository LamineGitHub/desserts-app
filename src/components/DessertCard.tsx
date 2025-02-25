import { QuantitySelector } from "@/components/QuantitySelector.tsx"
import { useDessertsStore } from "@/store/useDessertsStore.ts"
import { DessertType } from "@/type/dessertType.ts"
import { itemVariants } from "@/variants"
import NumberFlow from "@number-flow/react"
import { clsx } from "clsx"
import { motion } from "motion/react"
import { memo } from "react"

export const DessertCard = memo(
  ({ id, name, image, category, price, quantity }: DessertType) => {
    const increment = useDessertsStore.use.increment()
    const decrement = useDessertsStore.use.decrement()

    return (
      <motion.div
        variants={itemVariants}
        className="max-w-[327px] space-y-[38px] tablet:w-[213.33px] desktop:w-[250.67px]"
      >
        <div className="flex flex-col items-center">
          <picture>
            <source media="(min-width: 1024px)" srcSet={image.desktop} />
            <source media="(min-width: 768px)" srcSet={image.tablet} />
            <img
              src={image.mobile}
              alt={name}
              className={clsx("w-full rounded-lg object-cover", {
                "ring-2 ring-red": quantity > 0,
              })}
            />
          </picture>

          {quantity === 0 ? (
            <motion.button
              whileHover={{ scale: 1.03 }}
              onClick={() => increment(id)}
              className="group m-[-22px] flex w-40 items-center justify-center gap-2 rounded-full border border-rose-400 bg-white p-3 outline-none transition-colors hover:border-red focus-visible:ring-1 focus-visible:ring-red"
            >
              <img
                src="/assets/images/icon-add-to-cart.svg"
                alt="Add to cart icon"
                className="size-5"
              />
              <span
                className="preset-4-bold inline-block text-rose-900 group-hover:text-red group-focus-visible:text-red">
                Add to Cart
              </span>
            </motion.button>
          ) : (
            <div
              className="m-[-22px] flex w-40 items-center justify-between gap-2 rounded-full border border-red bg-red p-3">
              <QuantitySelector onClick={() => decrement(id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  fill="none"
                  viewBox="0 0 10 2"
                >
                  <path
                    fill="#fff"
                    className="group-hover:fill-red group-focus-visible:fill-red"
                    d="M0 .375h10v1.25H0V.375Z"
                  />
                </svg>
              </QuantitySelector>

                <span className="preset-4-bold inline-block text-white">
                  <NumberFlow value={quantity} />
                </span>

              <QuantitySelector onClick={() => increment(id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    fill="#fff"
                    className="group-hover:fill-red group-focus-visible:fill-red"
                    d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                  />
                </svg>
              </QuantitySelector>
            </div>
          )}
        </div>

        <div>
          <p className="preset-4 text-rose-500">{category}</p>
          <p className="preset-3 text-rose-900">{name}</p>
          <p className="preset-3 text-red">${price.toFixed(2)}</p>
        </div>
      </motion.div>
    )
  },
)
