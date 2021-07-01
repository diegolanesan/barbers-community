import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getClientWishList, removeFromWishlist } from '../../../../redux/action/wishlist'
import { Link } from 'react-router-dom'
import { addToCart, getActiveCartFromUserId, resetUserCart } from '../../../../redux/action/cart'

const WishlistTab = () => {

    const dispatch = useDispatch()
    const wishlist = useSelector(state => state.wishlist.wishlist)
    const user = jwtDecode(localStorage.getItem("clientToken"))
    const cart = useSelector(state => state.cart.activeCart)
    const [remove, setRemove] = useState(false)


    useEffect(() => {
        dispatch(getClientWishList(user.id))
        dispatch(getActiveCartFromUserId(user.id))
        dispatch(getClientWishList(user.id))
        setRemove(false)
    }, [remove])

    // const sendToCart = (e) => {
    //     dispatch(addToCart(user.id, {
    //         serviceBarberId: e.favorite.serviceBarberId,
    //         name: e.favorite.serviceName, price: e.favorite.servicePrice
    //     }))
    //     localStorage.setItem("barberId", e.barberId)
    // }

    const sendToCart = (e) => {
        const service = {
            serviceBarberId: e.favorite.serviceBarberId,
            name: e.favorite.serviceName,
            price: e.favorite.servicePrice
        }

        if (cart && cart.serviceBarbers.length > 0 && cart.serviceBarbers[0].barberId === e.barberId) {
            dispatch(addToCart(user.id, service)).then(() =>
                removeItem(e.favorite.serviceBarberId))
            //dispatch(addToAppointment(e))
            localStorage.setItem("barberId", e.barberId)
        } else if (cart && cart.serviceBarbers.length > 0 && cart.serviceBarbers[0].barberId !== e.barberId) {
            dispatch(resetUserCart(user.id)).then(() =>
                dispatch(addToCart(user.id, service))).then(() =>
                    removeItem(e.favorite.serviceBarberId))
            // dispatch(addToAppointment(e))
            localStorage.setItem("barberId", e.barberId)
        } else {
            dispatch(addToCart(user.id, service)).then(() =>
                removeItem(e.favorite.serviceBarberId))
            // dispatch(addToAppointment(e))
            localStorage.setItem("barberId", e.barberId)
        }
    }
    function removeItem(serviceBarberId) {
        dispatch(removeFromWishlist(user.id, serviceBarberId))
        setRemove(true)
    }

    return (
        <div>
            <div className="grid sm:grid-cols-2 grid-cols-1">
                <div>
                    <h2 class="text-3xl font-bold mt-12">{user.name}'s Wishlist </h2>
                </div>
            </div>
            <hr class="my-4 w-full"></hr>
            <div className="grid sm:grid-cols-1 sm:grid-cols-4">
                {wishlist[0].serviceBarbers && wishlist[0].serviceBarbers.map((n) => (
                    <div
                        key={n.id}
                        className="text-center m-8 border rounded-xl pb-1 shadow-md">
                        <img
                            className="rounded-lg h-48 w-full"
                            src={n.image}
                            alt=""
                            width="200px"
                            height="200px"
                        />
                        <h4 className="font-bold text-xl">{`${n.favorite.serviceName}`}</h4>
                        <div className="flex justify-center py-1">
                            <h6 className="font-semibold text-xl">${n.favorite.servicePrice}</h6>
                        </div>
                        <div className="grid gap-6 grid-cols-2">
                            <button onClick={() => removeItem(n.favorite.serviceBarberId)} className="ml-2 my-1 bg-red-400 px-2 rounded">Remove</button>
                            <button onClick={() => sendToCart(n)} className="mr-2 my-1 bg-green-400 px-2 rounded">Add to Cart</button>
                        </div>
                    </div>

                ))}
            </div>
        </div>


    )
}

export default WishlistTab
