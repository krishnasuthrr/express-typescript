import express from "express"
import type { Express } from "express"

const app: Express = express()
const PORT: number = 8000

app.listen(PORT, (): void => {
    console.log(`Server listening on port ${PORT}`)
})