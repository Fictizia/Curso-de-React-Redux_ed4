export const PICKED_ELEMENTS = "PICKED_ELEMENTS";

export function pickEl(element) {
  return {
    type: PICKED_ELEMENTS,
    payload: element
  };
}
