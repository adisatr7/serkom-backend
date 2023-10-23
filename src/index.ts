import express from "express"


const app = express()
const PORT = 8080

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}!`)
})