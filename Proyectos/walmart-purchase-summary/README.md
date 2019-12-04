# wm-purchase-summary

## Style-sheet
The Style Sheet of this project is built with plain CSS. Modularity in React allowes to avoid using compilers but also embraces them if it's needed.

1. In order to remove default browser values applied a reset stylesheet through reset.css per taking control of any odd behaviour on any browser and applying, at the same time a cross-browser style consistency.
2. After resetting the styles applied css native variables on :root to avoid redudancy of code.
 * css variables on colors, font-families font-size.
 * The font size on :root is going to be the clue for escalating the styles. No matter what zoom the user applies, the proyect is going to escale accordingly.
 * The header is provided to show how responsive the project behaves.
 * Css ClassNames follow BEM conventions: [More info aboyt BEM](http://getbem.com/)

## Libraries used
* redux
* react-redux

## Files architecture
### public
Public has sufered just one minor change to embrace WM favicon.ico

### src
#### components
Contains all state-less components:
* App acts as the 'hook' and is wrapped by the Redux provider in Index.js
* Body acts as the clear division between the permanent Header and the body
* Header
* OrderSummary consists in a block of components that contains the three major developments of our project:
 - OrderBreakdown with the final summ amounts and the user's bill after taxes and discounts
 - ItemDetails dropdown menu that shows picked product details in the cart.
 - PromoCode form to introduce posible discounts by the user.

#### containers
- OrderBreakdown.
  * This component takes all bill details from redux state. Like so, prices are isolated and controlled by this global state and modified when needed.
  * The data is drained into the component by an action dispatch on componentDidMount life-cycle method.
  * When the action is triggered, subtotal price of the cart is calculated (already implemented) by checking all picked-products prices. To check the usability the tester may kindly introduce another object to the initialState cart reducer src/state/cart/initialState.js
  * The subtotal amount leads to other values and compose the taxes, and obviously the Estimated Total amount. One price depends on the other, so there is no possibility to break the bill.
  * Also incorporated a toogle event to 'Pickup Savings' that fires the tool-tip. Click anywhere out of the box to hide. Also works when clicking to the same 'Pickup savings' span to toggle.

- ProductDetails and PromoForm.
  * An event can be fired by clicking 'See item details +' title or 'Apply promo code +' title
  * ProductDetails makes use of the cart info object and iterates with a map function to return this card-styled info of every product the user picked
  * PromoForm contains the form that dispatches the action to apply a 10% discount to the 'Est. total' statement when the user enters "DISCOUNT" in the input.

#### state
  * The global redux state is all contained in this folder that contains the store passed to Redux/Provider, the combination of all reducers in state. Each reducer has its own folder with an initialState, the reducer itself and the action-creators.


 ## Future improvements
* Improve performance to aviod innecesary callbacks invocation
* Refactor ItemDetails and PromoCode components to avoid code redudancy
* Include Logo in the header as well as the cart iconography
* Insert all Bind declarations inside same component's constructor to clean the render method on class components
* style sibling block-components (sign-in and Log-into modules)
