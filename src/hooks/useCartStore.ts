import { currentCart } from "@wix/ecom";
import { WixClient } from "@/context/wixContext";
import { create } from "zustand";

type CartState = {
  cart: currentCart.Cart | any;
  isLoading: boolean;
  counter: number;
  getCart: (wixClient: WixClient) => Promise<void>;
  addItem: (
    wixClient: WixClient,
    productId: string,
    variantId: string,
    quantity: number
  ) => Promise<void>;
  removeItem: (wixClient: WixClient, itemId: string) => Promise<void>;
};

export const useCartStore = create<CartState>((set) => ({
  cart: null, // Cart is initially null, not an empty array
  isLoading: true,
  counter: 0,

  getCart: async (wixClient) => {
    set({ isLoading: true }); // Set loading state

    try {
      const response = await wixClient.currentCart.getCurrentCart();

      set((prev) => ({
        ...prev,
        cart: response || null,
        isLoading: false,
        counter: response?.lineItems?.length || 0, // Ensure `lineItems` exists
      }));
    } catch (err) {
      console.error("Error fetching cart:", err);
      set((prev) => ({ ...prev, isLoading: false }));
    }
  },

  addItem: async (wixClient, productId, variantId, quantity) => {
    set((state) => ({ ...state, isLoading: true }));
    const response = await wixClient.currentCart.addToCurrentCart({
      lineItems: [
        {
          catalogReference: {
            appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
            catalogItemId: productId,
            ...(variantId && { options: { variantId } }),
          },
          quantity: quantity,
        },
      ],
    });

    set({
      cart: response.cart,
      counter: response.cart?.lineItems.length,
      isLoading: false,
    });
  },
  removeItem: async (wixClient, itemId) => {
    set((state) => ({ ...state, isLoading: true }));
    const response = await wixClient.currentCart.removeLineItemsFromCurrentCart(
      [itemId]
    );

    set({
      cart: response.cart,
      counter: response.cart?.lineItems.length,
      isLoading: false,
    });
  },
}));
