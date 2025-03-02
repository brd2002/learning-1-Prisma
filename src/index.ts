import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB
async function insertUser(username : string , email : string , password : string , firstname : string  , lastname : string){
  const res = await  prisma.user.create({
        data : {
            username : username,
            email : email,
            password : password,
            firstname : firstname,
            lastname : lastname,
        } , 
        select:{
            id:true
        }
    })
    console.log(res)
}
// insertUser("anu Ruidas" , "anu@gmail.com" , "123456" , "anu" , "ruidas") 
async function getUser(){
    const res = await prisma.user.findMany()
    console.log(res)
}
getUser()