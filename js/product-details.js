var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var productId = parametersInURL.get('id');

console.log(productId);

var client = contentful.createClient({
    space: '9ivsylmw9p3m',
    accessToken: 'SjUQZDO7xSYc2IeDzAWqx5j0WuwEjMLPCPvt6QCeils'
});

var productSection = document.querySelector('.product-section');
var productImage = productSection.querySelector('#productImage'); 
var productDetails = productSection.querySelector('.product-details');

client.getEntry(productId).then(function (entry) {
    console.log(entry);

    // Product Name
    var productName = document.createElement('h2');
    productName.innerHTML = entry.fields.productName;
    productDetails.appendChild(productName);

    // Product Image
    console.log(entry.fields.productImage.fields.file.url);
    var productImage = document.createElement('img');
    image.src = entry.fields.productImage.fields.file.url;
    productImage.appendChild(image); 

    // Cost
    var cost = document.createElement('p');
    cost.innerHTML = 'Price: ' + entry.fields.cost;
    productDetails.appendChild(cost);

    // Description
    var foodDescription = document.createElement('p');
    foodDescription.innerHTML = entry.fields.description;
    productDetails.appendChild(foodDescription);
});

