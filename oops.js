// object litral
// let person = {
//     firstname: "mohd",
//     lastname: "junaid",

//     getfullname: function(){
//         return `the information about the person is: ${person.firstname} ${person.lastname}`;
//     },
//     phonenumber: {
//         mobile: "123456",
//         landline: "6789",
//     },
// };

// console.log(person.getfullname());
// console.log(person.phonenumber.landline);

// Object constructor

// function person(firstname, lastname){
//    this.firstname=firstname;
//    this.lastname=lastname; 
// }

// let person1=new person("mohd", "junaid");
// let person2=new person("zunaid", "ahmad");

// console.log(person1.firstname);
// console.log(`${person2.firstname} ${person2.lastname}`);

// const coder={
//    isStudy: false,
//    intro: function(){
//       console.log(`my name is ${this.name}. an i studying: ${this.isStudy}`);
//    }
// }

// const obj=Object.create(coder);
// obj.name="Mohd Junaid";
// obj.isStudy=true;
// obj.intro();

// class vehicle{
//    constructor(name, maker, engine){
//       this.name=name;
//       this.maker=maker;
//       this.engine=engine;
//    }
//    getDetails(){
//       return `the name of the vehicle is ${this.name}`;
//    }
// }

// let v1=new vehicle("creta", "hyundai","2000cc");
// let v2=new vehicle("porsche", "BMW","25000cc");

// console.log(v1.name);
// console.log(v2.maker);
// console.log(v2.getDetails());

// function vehicle(name,maker, engine){
//    this.name=name;
//    this.maker=maker;
//    this.engine=engine;
// }

// vehicle.prototype.getDetails=function(){
//    return `the name of the vehicle is: ${this.name}`;
// };

// let v1=new vehicle("creta", "hyundai","2000cc");
// let v2=new vehicle("porsche", "BMW","25000cc");

// console.log(v1.name);
// console.log(v2.maker);
// console.log(v2.getDetails());

// class person{
//    constructor(name, id){
//       this.name=name;
//       this.id=id;
//    }
//    addaddress(newadd){
//       this.address=newadd;
//    }
//    getdetails(){
//       console.log(`the name of the person is: ${this.name}, and new address is: ${this.address}`);
//    }
// }

// let person1=new person("zunaid",21);
// person1.addaddress("punjab");
// person1.getdetails();

// class person{
//    constructor(firstname, lastname){
//       this.firstname=firstname;
//       this.lastname=lastname;
//    }
//    getdetail=function(){
//       return `first name is: ${this.firstname} and last name is: ${this.lastname}`;
//    }
// }

// class student extends person{
//    constructor(firstname, lastname, rollno){
//       super(firstname, lastname);
//       this.rollno=rollno;
//    }
//    getdetails=function(){
//       return `first name is: ${this.firstname} and last name is: ${this.lastname} and the roll no is: ${this.rollno}`;
//    }
// }

// // const person1=new person("mohd","junaid");
// // console.log(person1.firstname);
// // console.log(person1.getdetails());

// const student1=new student("zunaid","ahmad","64");
// const obj=new student("zunaid","ahmad","64");
// console.log(obj.getdetail());
// console.log(student1.getdetails());

