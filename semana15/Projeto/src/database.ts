export type userAccount = {
    name: String,
    CPF: number,
    birth: { day: number, moth:number, year: number}, 
    balance: number,
    transactions: string[]

}
export type userExtract = {
    value: number,
    date: Date,
    description: string
}

export let users: userAccount[] = []