var currency="$"                  //The currency sign
var currencyFirst=true;           //Should we show the currency sign first
exports.tax=18;                   //Tax value, you can also set it 0
exports.telephone="00389777777";  //The Phone number

//The Sendgrid KEY   --- CHANGE THEM WITH YOUR OWN SENDGRID
exports.SENDGRID_API_KEY="ENTER_SENDGRID_KEY_HERE";

//Orders are sent to --- CHANGE IT WITH YOUR OWN EMAIL
exports.sendToEmail="restaurant-app.3my69sr@mail.smooch.io" //YOU CAN USE SMOOCH.IO email here

//FireBase  --- CHANGE THEM WITH YOUR OWN FIREBASE DB
exports.firebaseConfig = {
  // apiKey: "AIzaSyDfyLjU7tziW3c9uE-SxpSlRJJsSc7bWIU",
  // authDomain: "restaurantapp-8b630.firebaseapp.com",
  // databaseURL: "https://restaurantapp-8b630.firebaseio.com",
  // storageBucket: "restaurantapp-8b630.appspot.com",

  apiKey: "AIzaSyAgSSYizMqKzdLeN7E9dlTX2e81OaxrptQ",
  authDomain: "restaurant-7075d.firebaseapp.com",
  databaseURL: "https://restaurant-7075d.firebaseio.com",
  storageBucket: "restaurant-7075d.appspot.com",
};


exports.paypal={
  acceptPayments:true, // Set this to false if you don't want to accept paypal payments
  sandBoxMode:true,
  clientID:"Af_H2HSMUFkVQsDfIggWgobv-QK59pLOR6iX77TpEWLUN8ob0eBGCg48CBX1gcifFKUdu0YHRfyS6Tnl",
  secretKey:"EHrmFLREuoQ7FMIEITEKckqydqhtQan07pIy0Uhc1TnNmmE33_xWfqlFoBXHg7gjuismQQaNoSzMLWIS",
  return_url:"https://envato.com/#products", //Replace it with your own webpage thank-you site
  cancel_url:"https://market.envato.com/", //Replace it with your own webpage cancel url
  includeShippingInfo:true,
  currency:"USD",
  state:"CA",//Checkc PayPalPayment.js in components to see how it is used, If it is not static, allow user to enter it in submit screen
  country_code:"US", //Country code must be 2-character ISO 3166-1 value (upper case)
  postal_code: "95131", //Required postal code - If it is not static, allow user to enter it in submit screen
  city: "San Jose", //Required city - If it is not static, allow user to enter it in submit screen
}


/**
* Converts price to currency
*/
function priceToPriceWithCurrency(price) {
  price=parseFloat(price+"").toFixed(2);
  if(currencyFirst){
    return currency+" "+price;
  }else{
    return price+" "+currency;
  }
}
exports.priceToPriceWithCurrency=priceToPriceWithCurrency;
