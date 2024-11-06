import { createSlice } from "@reduxjs/toolkit";
import { books } from "./mockData";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    book: books,
  },
  reducers: {
    addBook: (state, action) => {
      state.book.push(action.payload);
    },
  },
});
export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
