/* Update User Object
                        
   Goal: Learn object cloning & adding new property */


let user = {
              name: "Ravi",
              city: "Hyderabad"
            };

//-> Create a new object updatedUser
let updatedUser={
              name:'siri',
              city:'banglore'
            };
                              
//-> Copy all properties from user
//-> Add a new property age: 25
let copyUser={...user,age:25};

                              
//-> Print both objects
console.log(user);
console.log(copyUser);
                        