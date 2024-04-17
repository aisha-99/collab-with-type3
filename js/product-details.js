var client = contentful.createClient({
    space: '9ivsylmw9p3m',
    accessToken: 'SjUQZDO7xSYc2IeDzAWqx5j0WuwEjMLPCPvt6QCeils'
});

var productSection = document.querySelector('.product-section');

// Extract the product ID from the URL query parameter
var urlParams = new URLSearchParams(window.location.search);
var productId = urlParams.get('id');

client.getEntry(productId).then(function (entry) {
    // Extract data from the entry
    var productName = entry.fields.productName;
    var productImage = entry.fields.productImage.fields.file.url;
    var productPrice = entry.fields.productPrice;
    var foodDescription = entry.fields.foodDescription;

    // Populate the product details section
    var productNameElem = productSection.querySelector('#productName');
    productNameElem.textContent = productName;

    var productImageElem = productSection.querySelector('#productImage');
    var img = document.createElement('img');
    img.src = productImage;
    img.alt = productName;
    productImageElem.appendChild(img);

    var costElem = productSection.querySelector('#cost');
    costElem.textContent = '$' + productPrice;

    var foodDescriptionElem = productSection.querySelector('#foodDescription');
    foodDescriptionElem.textContent = foodDescription;
}).catch(function (error) {
    console.log("Error fetching data:", error);
});

