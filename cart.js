// Seems like bug were already identified and commented out here?? Was that supposed to happen?


let cart = [                      // change "const" to "let" to make edge case testing easier
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Fixed: Loop now uses i < cartItems.length    
      total += cartItems[i].price; 
  }
  return total;
}

function applyDiscount(total, discountRate) {
 if (discountRate < 0 || discountRate > 1) {       // Fixed: Added a check to ignore invalid discount rates outside 0–1 range
    return total;
  }

  return total - (total * discountRate);
}


function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
let validTotal = Number(total);
if (isNaN(validTotal)) {
  validTotal = 0;
}                                                   // Fixed: Converted the total to a number and used a 0 if it was invalid
receipt += `Total: $${validTotal.toFixed(2)}`;
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;


//Edge Case: Empty Cart

//   let cart = [];

//Edge Case: One Item in cart

//   let cart = [{ name: "Phone", price: 500 }];

//Edge Case Discount rate of 0

//   let cart = [{ name: "Phone", price: 500 }];
//   const discountedTotal = applyDiscount(total, 0);



/* Summary:

Errors and Corrections: (see comments in code body for more context)

1. Fixed the loop in "calculate total" by replacing <= with <

2. Corrected applyDiscount formula, and added a validity check.

3. Fixed invalid totals in generateRecipt


Debugging tools helped by allowing for the use of breakpoints to stop functions, see what was happening, and then find a solution
*/
