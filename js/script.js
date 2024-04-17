
var client = contentful.createClient({
    space: '9ivsylmw9p3m',
    accessToken: 'SjUQZDO7xSYc2IeDzAWqx5j0WuwEjMLPCPvt6QCeils'
  });
  
  var productSection = document.querySelector('.more-products-section.home');
  
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
  
      var productImageElem = document.createElement('img');
      productImageElem.src = productImage;
      productImageElem.alt = productName;
  
      var productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
  
      var productNameElem = document.createElement('h3');
      productNameElem.textContent = productName;
  
      var productPriceElem = document.createElement('p');
      productPriceElem.textContent = '$' + productPrice;
  
      productInfo.appendChild(productNameElem);
      productInfo.appendChild(productPriceElem);
  
      productBox.appendChild(productImageElem);
      productBox.appendChild(productInfo);
  
      productSection.querySelector('.product-row').appendChild(productBox);
    });
  }).catch(function (error) {
    console.log("Error fetching data:", error);
  });

  