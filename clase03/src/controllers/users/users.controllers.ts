import type { Response, Request} from 'express'

const alluserslist = [ 
    { id: 1, username: 'user1', email: 'user1@example.com'},
    { id: 2, username: 'user2', email: 'user2@example.com'},
    { id: 3, username: 'user3', email: 'user3@example.com'}
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