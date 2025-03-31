'use server' ;

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const serializeTransaction = (obj) => {
    const serialzed = {...obj } ;

    if (obj.balance) {
        serialzed.balance = obj.balance.toNumber();
    }
}

export async function createAccount(data) {
    try {
        const { userId } = await auth();
        if (!userId){
            throw new Error("Unauthorized");
        }

        const user = await db.user.findUnique({
            where:{
                clerkUserId : userId ,
            }
        });

        if (!user) {
            throw new Error("User Not Found");
        }

        // convert balance to float before saving 
        const balamceFloat = parseFloat(data.balance)
        if (isNaN(balamceFloat)){
            throw new Error("Invaild balance Amount")
        }

        // check if this is user's first account 
        const exisitngAccounts = await db.accoumt.findMany({
            where:{
                userId : user.id,
            },
        });

        const shouldBeDefault = exisitngAccounts.length===0?true: data.isDefault;

        //If this account should be default , umset other default accounts 
        if (shouldBeDefault) {
            await db.account.updateMany({
                where:{
                    userId : user.id,
                    isDefault : true,
                }, 
                data: {
                    isDefault : false,
                },
            });
        }

        const account = await db.accoumt.create({
            data:{
                ...data,
                balance: balamceFloat,
                userId: user.id,
                isDefault: shouldBeDefault,
            },
        });

        const serializeAccount = serializeTransaction(account);

        revalidatePath("/dashboard");
        return {
            success : true ,
            data : serializeAccount,
        } ; 
    } catch (error) {
        throw new Error(error.message)
    }
    
}