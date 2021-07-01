import { ADD_TO_WISHLIST, GET_CLIENT_WISH_LIST, REMOVE_FROM_WISHLIST } from "../action/wishlist";

const initialState = {
	wishlist: [],
	addToWishlist: [],
	removeFromWishlist: []
};

const reducerWishList = (state = initialState, action) => {
	switch (action.type) {
		case GET_CLIENT_WISH_LIST:
			return {
				...state,
				wishlist: action.payload,
			};
		case REMOVE_FROM_WISHLIST:
			return {
				...state,
				removeFromWishlist: action.payload,
			};
		case ADD_TO_WISHLIST:
			return {
				...state,
				addToWishlist: action.payload,
			};

		default:
			return state;
	}
};

export default reducerWishList;
