/* eslint-disable react-refresh/only-export-components */

import axios from "axios";
import { z } from "zod";


const UserSchema = z.object({
    "id": z.string(),
    "name": z.string(),
    "email": z.string().email({ message: 'usuário não existe' }),
    "isActive": z.boolean(),
    "avatar": z.string(),
    "phone": z.string().optional(), // esse optional é para deixar o item "phone" como optcional na interface e no schema.
    "company": z.string(),
});

const Users = z.array(UserSchema)

export type User = z.infer<typeof UserSchema>;


export const getUsers = async () => {

    const url = 'http://localhost:3004/users'

    // condition 1 (parse)
    try {
        const userResult = await axios.get(url)
        return Users.parse(userResult.data)

    } catch (error) {
        console.log('error', error)
        throw new Error(`O contrato da api foi violado`)
    }

    // condition 2(safeparse)
    // const userResult = await axios.get(url)
    // const isValid = Users.safeParse(userResult.data)

    // if (!isValid.success) {
    //     return new Error(`O contrato da api foi violado`)
    // }
    // return isValid.data
}