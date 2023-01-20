export const fetchContactsFulfilledReducer = (state, action) => {
  state.items = [...action.payload].reverse();
};

export const addContactPendingReducer = state => {
  state.isContactAdded = false;
};

export const addContactFulfilledReducer = (state, action) => {
  state.items = [action.payload, ...state.items];
  state.isContactAdded = true;
};

export const deleteContactFulfilledReducer = (state, action) => {
  state.items = state.items.filter(({ id }) => id !== action.payload.id);
};

export const anyPendingReducer = state => {
  state.isLoading = true;
};

export const anyFullfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

export const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
