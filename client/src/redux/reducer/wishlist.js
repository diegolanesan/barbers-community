import { GET_CLIENT_WISH_LIST } from "../action/wishlist";

const initialState = {
	wishlist: [],
};

const reducerWishList = (state = initialState, action) => {
	switch (action.type) {
		case GET_CLIENT_WISH_LIST:
			return {
				...state,
				wishlist: action.payload,
			};

		default:
			return state;
	}
};

export default reducerWishList;
