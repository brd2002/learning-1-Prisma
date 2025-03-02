"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// use `prisma` in your application to read and write data in your DB
function insertUser(username, email, password, firstname, lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                username: username,
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname,
            },
            select: {
                id: true
            }
        });
        console.log(res);
    });
}
// insertUser("anu Ruidas" , "anu@gmail.com" , "123456" , "anu" , "ruidas") 
function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findMany();
        console.log(res);
    });
}
getUser();
