fetch('https://dummyjson.com/products?limit=12')
.then(response=>response.json())
.then(data=>console.log(data))
