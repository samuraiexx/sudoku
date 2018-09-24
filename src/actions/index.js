import {
  CHANGE_VALUE,
  SWAP_PEN,
  BACK_IN_HISTORY
} from "../constants"

export const changeValue = (row, column, value) => ({
  type: CHANGE_VALUE,
  row,
  column,
  value
});

export const swapPen = () => ({
  type: SWAP_PEN
});

export const backInHistory = index => ({
  type: BACK_IN_HISTORY,
  index
});