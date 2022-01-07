let arr=[]
console.log(arr,typeof arr);
let arr1=new Array()
console.log(arr1,typeof arr1);
let names=["rachel","bob","lucy","harry"]
console.log(names);
console.table(names)
console.log(names,length);
for(let name of names){
    console.log(name);
}
console.log(names[0]);
console.log("*******************************************");
for(let index in names){
    console.log(index);
    console.log(names[index]);
}
names.push("anna")       //when you write this code a new name will come in the last of the "names" you given above
console.log(names);
let d=names.pop()   // this code will erase the last name in the "names" and it will be shown in the "d".if you justgive "names.pop" the last name will gone when you give d it is errased and shown in "d" 
console.log(names);
console.log(d);
names.unshift("bibin")   // this code make the name "bibin" will be shown in the first place
console.log(names);
names.shift()     // this code will clear the first name in the "names"
console.log(names);
let names_new=names.concat(["anju","ali","aby","ram"])   //this code make this names in last of the excisting names
console.log(names_new);
names_new.splice(3,1)      // when you give "(3)" the names after the third names will all gone. if you give (3,1)-only 1 name after the third name will go
console.log(names_new);
names_new.splice(4,1,"dev")
console.log(names_new);
names_new[6]="arjun"   //the 7th name will change into arjun
names_new[2]="rini"
console.log(names_new);
console.log(names_new.indexOf("aby"));
console.log(names_new.indexOf("akill"));
names_new.sort()        // the names will come in assending order
console.log(names_new);
names_new.reverse()    //reverse the names from last to first
console.log(names_new);

let myarray=["hi","hello","how","r","u"]

console.log(myarray);

let s= --
