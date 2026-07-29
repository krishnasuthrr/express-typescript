import express from "express"
import cors from "cors"
import type { Express, Request, Response, NextFunction, RequestHandler } from "express"

import { pets, type Pet } from "./data/pets.js"
import { globalErrorHandler, type GlobalErrorInterface } from "./middlewares/globalErrorHandler.js"
import { AppError } from "./utils/errors/AppError.js"

const app: Express = express()
const PORT: number = 8000

app.use(cors())

// interface Pet {
//     name: string;
//     species: string;
//     adopted: boolean;
//     age: number
// }

// type Pets = Pet[] // array of objects of datatype Pet

// const luna: Pet = {
//     name: "Luna",
//     species: "Cat",
//     adopted: true,
//     age: 2
// }

// const tuffy: Pet = {
//     name: "Tuffy",
//     species: "Dog",
//     adopted: false,
//     age: 3
// }

// const pets: Pet[] = [
//   {
//     name: "Luna",
//     species: "Cat",
//     adopted: true,
//     age: 2,
//   },
//   {
//     name: "Tuffy",
//     species: "Dog",
//     adopted: false,
//     age: 3,
//   },
// ];

app.get("/", (req: Request<unknown, Pet[]>, res: Response<Pet[]>): void => {
    res.json(pets)
})

// test
app.get("/error", ((req, res, next) => {
    try {
        const error = new AppError(500, "Test Error")
        error.success = false
        throw error
    } catch (error) {
        next(error)
    }
}) as RequestHandler) 
// RequestHandler implementation in normal function declaration

// 404 catch-all invalid requests
app.use((req: Request, res: Response<GlobalErrorInterface>, next: NextFunction): void => {
    res.status(404).json({
        status: 404,
        success: false,
        message: `Cannot ${req.method} ${req.originalUrl}`,
    })
})

app.use(globalErrorHandler)

app.listen(PORT, (): void => {
  console.log(`Server listening on port ${PORT}`);
});
