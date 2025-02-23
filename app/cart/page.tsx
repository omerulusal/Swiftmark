import CartClient from '../components/cart/CartClient'

const Cart = () => {
    return (
        <div>
            <CartClient />
        </div>
    )
}

export default Cart

/**
 * bu sayfa http://localhost:3000/cart yazınca çalışacak, CartClient comp. içindekileri gösterir
 * components klasöründeki CartClient.tsx'i ekledim 
 * nedeni ise burası client'ta çalışmayacak ama clienttan veri gösterecek 
 */