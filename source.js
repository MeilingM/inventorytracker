
//Copyright 2022 Meiling Mathur <violinmeiling@gmail.com>

// Default export is a4 paper, portrait, using millimeters for units

const wooClientKey = 'ck_c2f05940a2bbab04a3a11445e076e891876765b9';
const wooClientSecret = 'cs_0b442399e1efcce3a04ee2f13a641d8d162d1e4c';
const wooUrl = 'https://www.givensviolins.com/wp-json/wc/v3/products';

var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://www.givensviolins.com/wp-json/wc/v3/products?consumer_key=ck_c2f05940a2bbab04a3a11445e076e891876765b9&consumer_secret=cs_0b442399e1efcce3a04ee2f13a641d8d162d1e4c&per_page=100', true)

data = []

request.onload = function () {
  data = JSON.parse(this.response);
  console.log(data)
  x = 0;
  productArray = [];
  products = data
  for (item in products) {
      currentProduct = products[x]['sku'];
      console.log(currentProduct);
      x = x + 1;
      productArray.push(currentProduct);
  }

  console.log(productArray);
}

// Send request
request.send()
request.onload();

function checkProducts() {
   pricelist = document.getElementById("pricelist").value;
   console.log(pricelist);
   list_of_skus = [];
   list_of_skus.push(pricelist.split("\n"));
   list_of_skus = list_of_skus[0];
  // var arrayFromTextArea = pricelist.value.split(String.fromCharCode(10));

   console.log(list_of_skus);

   productsToDelete = [];

   for (product in productArray) {
        if (list_of_skus.includes(productArray[product]) == false) {
        console.log(productArray[product]);
        productsToDelete.push(productArray[product]);
        }
   }
   const cleandeleteList = productsToDelete.toString().replaceAll(",", ", ");
   productsToAdd = [];

   for (product in list_of_skus) {
        if (productArray.includes(list_of_skus[product]) == false) {
        console.log(list_of_skus[product]);
        productsToAdd.push(list_of_skus[product]);
        }
   }
   const cleanaddList = productsToAdd.toString().replaceAll(",", ", ");

   var currentdate = new Date();
   var datetime = currentdate.getDay() + "/" + currentdate.getMonth()
   + "/" + currentdate.getFullYear();
   datetime.toString();

   document.getElementById("header").innerHTML="Inventory report for Claire Givens Violins generated on " + datetime
   document.getElementById("toDeleteTitle").innerHTML="The products you should delete from your web store are: "
   document.getElementById("toDelete").innerHTML=
        productsToDelete.join("<br>");
   document.getElementById("toAddTitle").innerHTML="The products you should add to your web store are: "
   document.getElementById("toAdd").innerHTML=
        productsToAdd.join("<br>");
