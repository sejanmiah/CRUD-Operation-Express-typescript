import express, {Request, Response} from "express";
import {Pool} from "pg";
const app = express()
const port = 5000

const pool = new Pool({
    connectionString: `${process.env.connection_Str}`
});

//parser
app.use(express.json());
// app.use(express.urlencoded())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is Sejan Miah.')
})

app.post('/', (req: Request, res:Response) => {
    console.log(req.body);

    res.status(201).json({
        success: true,
        message: "API is working",
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})