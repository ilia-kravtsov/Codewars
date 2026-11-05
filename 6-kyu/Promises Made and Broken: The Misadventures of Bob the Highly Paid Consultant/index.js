async function submitOrder(user) {
  var shoppingCart = await OrderAPI.getShoppingCartAsync(user);
  
  var profile = await CustomerAPI.getProfileAsync(user);
  var zipCode = profile.zipCode;
  
  var shippingRate = calculateShipping(shoppingCart, zipCode);
  
  var orderSuccessful = await OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
  
  console.log(`Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`);
}