  const fs = require ("fs")
  const data50 = require ('./data50')

 const yargs = require ("yargs")

 yargs.command({
   command : "add",
   describe : "to add an item",
   builder: {
      fname : {
         describe: "this is the first name in add command",
         demandOption: false,
         type: "string",
      },
      lname : {
       describe: "this is the last name in add command",
       demandOption: true,
       type: "string",
    }
   },
   handler :(x)=> {
     data50.addPerson(x.id , x.fname , x.lname , x.age , x.city )
   }
 })
 yargs.command({
   command: "delete",
   describe: "to delete an item",
   handler: (x)=> {
      data50.deletePerson(x.id)
   }
 })
 yargs.parse()
