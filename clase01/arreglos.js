const arr_number = [1, 2, 3, 4, 5]
const arr_string = ['a', 'b', 'c', 'd', 'e']
const arr_mixto = [1, 'dos', true]

// recorrer arreglos

// for clasico
//for (let i=0; i < arr_string.length; i++) {
  //  console.log(arr_string[i])
  //}

// for of
for(const elementos of arr_string){
    console.log('for of',elementos)
}