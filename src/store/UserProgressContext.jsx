import { createContext, useMemo } from "react";
import { useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {}
});

export function UserProgressContextProvider({children}){
    const [userProgress, setUserProgress] = useState('');

    function showCart(){
        setUserProgress('cart');
    }
    function hideCart(){
        setUserProgress('');
    }
    function showCheckout(){
        setUserProgress('checkout');
    }
    function hideCheckout(){
        setUserProgress('');
    }

    const userProgressCtx = useMemo(() => ({
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }), [userProgress]);

    return (
        <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
    );
}

export default UserProgressContext;