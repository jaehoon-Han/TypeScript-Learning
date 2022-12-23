type Words = {
    [whatever: string]: string
}


class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term: string) {
        return this.words[term]

    }

}

class Word {
    constructor(
        public readonly term: string,
        public readonly def: string
    ) { }
}

const kimchi = new Word("kimchi", "한식");

const dict = new Dict()

dict.add(kimchi);
dict.def("kimchi")

//-------------------------------//

type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

//type Player = {
interface Player {
    nickname: string,
    team: Team
    health: Health

}


const nico : Player = {
    nickname: "니꼬",
    team : "yellow",
    health : 10
}

//-------------------------------//

interface User {
    name : string
}

interface Player2 extends User {

}
