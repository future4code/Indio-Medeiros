import { alterTable } from "./alterTable"
import {createTable} from "./createTable"
import createTableAddress from "./createTableAddress"


//criar tabela "User"
createTable()
//complementação da tabela (inserindo nova coluna)
alterTable()
//criar tabela "Address"
createTableAddress()