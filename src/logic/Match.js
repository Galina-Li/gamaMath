export default class Match {
   static data=[
        {number: null, symbol: ""},
        {number: 0, symbol: ""},
        {number: 1, symbol: "."},
        {number: 2, symbol: ".."},
        {number: 3, symbol: "..."},
        {number: 4, symbol: "...."},
        {number: 5, symbol: "....."},
        {number: 6, symbol: "......"},
        {number: 7, symbol: "......."},
        {number: 8, symbol: "........"},
        {number: 9, symbol: "........."},
    ]

    static getSymbolByNumber(number){
        return this.data.find((item)=> item.number === number ).symbol

    }

    static getNumberBySymbol(symbol){
        return this.data.find((item)=> item.symbol===symbol ).number

    }

    static getDescriptionByOperation (operation) {
        return operation === '-' ? 'минус' : "пл"
    }


    static appendOperationToSymbols(a, b, operation) {
        const first = Match.getNumberBySymbol(a)
        const last = Match.getNumberBySymbol(b)
        switch(operation){
            case '+': {
                return first + last
            }
            case '-': {
                return first - last
            }
        }
    }
}
