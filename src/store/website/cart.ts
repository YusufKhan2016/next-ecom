import { create } from "zustand";

interface CartItem {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

interface CartStore {
    cart: CartItem[];

    addToCart: (product: Omit<CartItem, "quantity">) => void;
    incrementQuantity: (id: number) => void;
    decrementQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
    cart: [],

    addToCart: (product) => {
        set((state) => {
            const existingProduct = state.cart.find((item) => item.id === product.id )

            if (existingProduct) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id 
                            ? {
                                ...item,
                                quantity: item.quantity + 1,
                            }
                            :item
                    )
                }
            }

            return {
                cart: [
                    ...state.cart,
                    {
                        ...product,
                        quantity: 1
                    }
                ]
            }
        })
    },

    incrementQuantity: (id) => {
        set((state) => ({
            cart: state.cart.map((item) => 
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
                )
        }))
    },

    decrementQuantity: (id) => {
        set((state) => ({
            cart: state.cart.map((item) => 
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                    }
                    : item
                )
        }))
    },

    removeFromCart: (id) => {
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== id)
        }))
    },
    
    clearCart: () => {
        set(() => ({
            cart: []
        }))
    },
    
}))