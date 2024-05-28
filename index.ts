//step05_nested object:used in student management project
//create a type for more than one object is called nested object
//type alias
//type union
type Person = {
    name :string,
    age : number,
    hobbies : string[]
    school? : {
        name: string,
        class: number,
        location: string[]
    },
    [Property :string] :any  //index signature:used for addition further properties in object
}

const person1:Person={
    name : "ali",
    age : 25,
    hobbies : ["Reading", "Driving" , "Coding"],
    school:{
        name:"The Vision Academy",
        class: 10,
        location:["Karachi" , "North Nazimabad"]
    }
};
const person2:Person = {
    name : "Hashir",
    age : 12 ,
    hobbies : ["Writing", "Swimming" ,"Coding"],
    id : 1234,
    skills:["typescript coding","web designing"]

};
console.log(person1);



