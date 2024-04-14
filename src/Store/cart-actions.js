import { cartActions } from "./cart.slice";
import { uiActions } from "./ui-slice";
// import {useDispatch} from 'react-redux';

export const fetchCartData = ()=>{
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://expense-tracker-dfeec-default-rtdb.firebaseio.com/cart.json');

            if(!response.ok){
                throw new Error('Could not get data');
            }
            const data = await response.json();
            // console.log("data");

            return data;
        };

        try{
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));
        }
        catch(error) {
            dispatch(uiActions.showNotification({
                status: "error",
                message:"Fetching cart data failed...",
                title: 'Error..'
            }));
        }
    }
}