const obj = {
    prop1: 1,
    
    prop2: 2,
    
    prop3: 3
}

for(prop in obj) {
    console.log(obj[prop] * 2)
}