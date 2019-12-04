export const CALC_TOTAL = "CALC_TOTAL";
export const DISCOUNT_ENABLED = "DISCOUNT_ENABLED";

export function applyDisc(total) {
  let request = total - total * 0.1;

  return {
    type: DISCOUNT_ENABLED,
    payload: request
  };
}

export function calcTotal(total) {
  return {
    type: CALC_TOTAL,
    payload: total
  };
}
