"use client";

import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixContext";
import { useState } from "react";

export default function Add({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) {
  const [quantity, setQuantity] = useState(1);

  const wixClient = useWixClient();
  const { addItem, isLoading } = useCartStore();

  //   TEMPORARY
  // const stock = 4;

  const handleQuantity = (type: "d" | "i") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }

    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="w-32  bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between">
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          {stockNumber < 1 ? (
            <div className="text-sm">Product is out of stock</div>
          ) : (
            <div className="text-sm">
              Only <span className="text-orange-500">{stockNumber} items</span>{" "}
              left!
              <br /> Don't miss it
            </div>
          )}
        </div>
        <button
          onClick={() => addItem(wixClient, productId, variantId, quantity)}
          disabled={isLoading}
          className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:right-0 disabled:text-white disabled:ring-none"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
