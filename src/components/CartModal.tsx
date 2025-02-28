"use client";

import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixContext";
import { media as wixMedia } from "@wix/sdk";
import Image from "next/image";

export default function CartModal() {
  const wixClient = useWixClient();
  const { cart, isLoading, removeItem } = useCartStore();

  // TEMPORARY
  // const cartItems = true;

  return (
    <div className="absolute w-max p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cart?.lineItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          {/* LIST i.e more than one items carted */}
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            {cart.lineItems.map((item: any) => (
              <div className="flex gap-4" key={item._id}>
                {item.image && (
                  <Image
                    src={wixMedia.getScaledToFillImageUrl(
                      item.image,
                      72,
                      96,
                      {}
                    )}
                    alt="cartItem image"
                    width={72}
                    height={96}
                    className="object-cover rounded-md"
                  />
                )}
                <div className="flex flex-col justify-between w-full">
                  {/* TOP */}
                  <div className="">
                    {/* TITTLE */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">
                        {item.productName?.original}
                      </h3>
                      <div className="p-1 bg-gray-100 rounded-md flex items-center gap-2">
                        {item.quantity && item.quantity > 1 && (
                          <div className="text-xs text-green-500">{item.quantity} x</div>
                        )}
                        {item.price?.formattedAmount}
                      </div>
                    </div>
                    {/* DESC */}
                    <div className="text-sm text-gray-500">
                      {item.availability?.status}
                    </div>
                  </div>
                  {/* BOTTOM */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Qty. {item.quantity}</span>
                    <span
                      className="text-blue-500"
                      style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                      onClick={() => removeItem(wixClient, item._id!)}
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>{cart?.subtotal?.formattedAmount}</span>
            </div>
            <p className="text-sm text-gray-500 mt-2 mb-4">
              Shipping and taxes calculated at checkout.{" "}
            </p>
            <div className="flex items-center justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button
                className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                disabled={isLoading}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
