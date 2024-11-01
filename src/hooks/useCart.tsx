import { useState } from 'react';

import { Product } from '@/types/product.types';

const useCart = () => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        if (!cart.find((item) => item.id === product.id)) {
            setCart([...cart, product]);
        }
    };

    const isInCart = (productId: number) => cart.some((item) => item.id === productId);

    return { cart, addToCart, isInCart };
};

export default useCart;
