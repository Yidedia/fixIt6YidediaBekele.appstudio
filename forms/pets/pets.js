// create array
let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']

// create a new array variable
// used an array method here --> withMarmaduke.concat(['Marmaduke])
let withMarmaduke = [ ...petNames, ...['Marmaduke']]

//Print on console
console.log(withMarmaduke)

//remove "Vinny" from the array, remove "Marty" from the array.

removeVinny.onclick=function(){
  switch(petNames.includes("Vinny")) {
case true: 
  let posVinny = petNames.indexOf('Vinny')
  petNames.splice(posVinny,1)
  console.log(`The action taken was: Remove Vinny\nThe remaining data are:\n ${petNames}`)
  break
default: 
  console.log(`Vinny was already removed and is no longer in the array\nas you can see:\n ${petNames}`)
  }
}

removeMarty.onclick=function(){
 switch(petNames.includes("Marty")) {
case true: 
  let posMarty = petNames.indexOf('Marty')
  petNames.splice(posMarty,1)
 console.log(`The action taken was: Remove Marty\nThe remaining data are:\n ${petNames}`)
  break
default: 
console.log(`Marty was already removed and is no longer in the array\nas you can see:\n ${petNames}`)
  }
}

//add "Nancy" to the front of the array.

addNancy.onclick=function(){
  switch(petNames.includes("Nancy")) {
case false: 
  petNames.unshift('Nancy')
  console.log(`The action taken was: Add Nancy to the front of the array\nThe remaining data are:\n${petNames}`)
  break
default: 
  console.log(`Nancy was already added to the front of the array,\nas you can see:\n${petNames}`)
  }
}

//add their name to the end of the array.

addName.onclick=function(){
 let userName = prompt('Enter your first name. ')
 
 switch(petNames.includes(userName)) {
case false: 
  petNames.push(userName)
  console.log(`The action taken was: Add ${userName} to the end of the array\nThe remaining data are:\n${petNames}`)
  break
default: 
  console.log(`${userName} was already added to the end of the array,\nas you can see:\n${petNames}`)
  }
}

// tell the user the array index where "Riley" is located in the array. 

locateRiley.onclick=function(){
let posRiley = petNames.indexOf('Riley')
console.log(`The action taken was: find the array index of Riley\nThe array index of Riley is ${posRiley}.\nThe remaining data are:\n${petNames}`)

}

// tell the user the array index where "Cindy" is located

locateCindy.onclick=function(){
let posCindy = petNames.indexOf('Cindy')
console.log(`The action taken was: find the array index of Cindy\nThe array index of Cindy is ${posCindy}.\nThe remaining data are:\n${petNames}`)

}

//show the 'withMarmaduke' array data.

showArray.onclick=function(){
console.log(`The values of the withMarmaduke array are\n${withMarmaduke}`)
console.log(`The action taken was:show the withMarmaduke array data\nThe remaining data are:\n ${petNames}`)
}
