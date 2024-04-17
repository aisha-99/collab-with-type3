
var client = contentful.createClient({
    space: '9ivsylmw9p3m',
    accessToken: 'SjUQZDO7xSYc2IeDzAWqx5j0WuwEjMLPCPvt6QCeils'
  });
  
  client.getEntries({
    content_type: 'assignment3'
  }).then(function (entries) {
    entries.items.forEach(function (entry) {
      var productName = entry.fields.productName;
      var productImage = entry.fields.productImage.fields.file.url;
      var productPrice = entry.fields.productPrice;
      var foodDescription = entry.fields.foodDescription;
  
      var productBox = document.createElement('div');
      productBox.classList.add('product-box');
  
      /*Product Image*/
      var productImageElem = document.createElement('img');
      productImageElem.src = productImage;
      productImageElem.alt = productName;
  
      /*Product Page Link*/
      var productLink = document.createElement('a');
      productLink.href = 'product.html?id=' + entry.sys.id; 
      productLink.appendChild(productImageElem); 
  
      var productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
  
      /*Product Name*/
      var productNameElem = document.createElement('h3');
      productNameElem.textContent = productName;
  
      /*Product Price*/
      var productPriceElem = document.createElement('p');
      productPriceElem.textContent = '$' + productPrice;
  
      productInfo.appendChild(productNameElem);
      productInfo.appendChild(productPriceElem);
  
      productBox.appendChild(productLink); 
      productBox.appendChild(productInfo);
  
      document.querySelector('.product-row').appendChild(productBox);
    });
  }).catch(function (error) {
    console.log("Error fetching data:", error);
  });
  
  