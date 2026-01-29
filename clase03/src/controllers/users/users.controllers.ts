import type { Response, Request} from 'express'
import type { UserI } from '../../entities/users/user.entity.ts';

const alluserslist:UserI[] =  [ 
    { id: 1, username: 'Pedro', email: 'user1@example.com'},
    { id: 2, username: 'Juan', email: 'user2@example.com'},
    { id: 3, username: 'Carlos', email: 'user3@example.com'}
] 

export const getAllUsersList=(req: Request, res: Response) => {

    res.json(alluserslist)

}

export const getUserById =(req: Request, res: Response) => {

    const id = req.params.id

    const user = alluserslist.find(user => {
        if(user.id === Number(id)) {
            return user
        }
        return null
    }) 

    if(!user) {
      res.status(404).json({ message: 'El usuario no fue encontrado'})
    }
    
    res.json(user)

}

export const getUserByName =(req: Request, res: Response) => {

    const name = req.query.name
    const id = req.query.id
//
    const user = alluserslist.find(user => {
        if(user.username.toLowerCase() === String(name).toLowerCase() && user.id === Number(id)) {
            return user
        }
        return null
    }) 

    if(!user) {
      res.status(404).json({ message: 'El usuario no fue encontrado'})
    }
    
    res.json(user)

}

export const createNewUser = (req: Request, res: Response) => {
    const newUser:UserI = req.body

    alluserslist.push(newUser)

    res.status(201).json({message: 'Usuario creado correctamente', user: newUser})
}