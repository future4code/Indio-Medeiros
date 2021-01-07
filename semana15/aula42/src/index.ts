import express, { Request, Response } from "express";
import cors from "cors";
import { countries, country } from "./countries";

const app = express();
app.use(express.json());
app.use(cors());

//endpoint 1
app.get("/countries/all", (req: Request, res: Response) => {
  const result = countries.map((country) => ({
    id: country.id,
    name: country.name,
  }));

  res.status(200).send(result);
});


//endpoint 3

app.get("/countries/search", (req: Request, res: Response) => {
  
  let result: country[] = countries

  if (req.query.name) {
     result = result.filter(
        country => country.name.includes(req.query.name as string)
     )
  }
  
  if (req.query.capital) {
     result = result.filter(
        country => country.capital.includes(req.query.capital as string)
     )
  }
  
  if (req.query.continent) {
     result = result.filter(
        country => country.continent.includes(req.query.continent as string)
     )
  }
    if (result !== countries && result.length !== 0) {
      res.status(200).send(result);
    } else {
      res.status(404).send("Not found");
    }
});

//endpoint 2
app.get("/countries/:id", (req: Request, res: Response) => {
  const result: country | undefined = countries.find(
    (country) => country.id === Number(req.params.id)
  );

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send("Not found");
  }
});

//endpoint 4
app.put("/countries/edit/:id", (req: Request, res: Response) => {
  
  countries[Number(req.params.id)].name = req.body.name
  countries[Number(req.params.id)].capital = req.body.capital
 
  if (req.body) {
    res.status(200).send(req.body);
  } else {
    res.status(404).send("Não tem body");
  }

})


app.listen(process.env.PORT || 3003, () => {
  console.log("O serve está rodando em http://localhost:3003");
});
