import express, { Request, Response } from "express";
import cors from "cors";
import { countries } from "./countries";



const app = express();
app.use(express.json());
app.use(cors());

const result = countries.map(country => ({
    id: country.id,
    name: country.name
  }))
  

app.get('/countries/all', (req: Request, res: Response) => {
    res
    .status(200)
    .send (result)
})

 app.listen(process.env.PORT || 3003, () => {
    console.log("O serve está rodando em http://localhost:3003");
});