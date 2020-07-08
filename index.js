/*________________________________________________________________________ 
var pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  function getAge(pet) {
    return new Date().getFullYear() - pet.bornOn;
  }
*/
let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  const getAge= (pet) => { return new Date().getFullYear() - pet.bornOn };
  
  

/*___________________________________________________________________________ 
var petsWithAge = [];
  for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    pet.age = getAge(pet);
  
    petsWithAge.push(pet);
  }
 console.log(petsWithAge);

 */


const petsWithAge = [];
	petsWithAge.forEach((pet)=>{
alert(pet[i].getAge);

  });


/*
  var dogs = [];
  for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    if (pet.type === "dog") {
      dogs.push(pet);
    }
  }
  console.log(dogs);
/*___________________________________________________________________________ */


const dogs = [];
    return pets.filter((pet)=>{
       let pet = pets[i];
       
            return pet.type === "dog";    
    })

    console.log(dogs);


/*___________________________________________________________________________ 

  var jasper;
  for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    if (pet.name === "Jasper") {
      jasper = pet;
    }
  }
  console.log("Jasper is " + jasper.age + " years old");
  */
 const jasper;
 return pets.find((pet)=>{
    return person.name==name;
 })
 console.log("Jasper is " + jasper.age + " years old");    

