
//Copyright 2022 Meiling Mathur <violinmeiling@gmail.com>

// Default export is a4 paper, portrait, using millimeters for units

var request = new XMLHttpRequest()

productArray = []

// Open a new connection, using the GET request on the URL endpoint

request.open('GET', 'https://www.givensviolins.com/wp-json/wc/v3/products?consumer_key=ck_c2f05940a2bbab04a3a11445e076e891876765b9&consumer_secret=cs_0b442399e1efcce3a04ee2f13a641d8d162d1e4c&per_page=100&page=1', true)

data = []

request.onload = function () {
  data = JSON.parse(this.response);
  console.log(data)
  x = 0;
  batchProductArray = [];
  products = data
  for (item in products) {
      currentProduct = products[x]['sku'];
      console.log(currentProduct);
      x = x + 1;
      batchProductArray.push(currentProduct);
  }

  console.log(batchProductArray);
  productArray.push(batchProductArray);
}
