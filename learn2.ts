type PlayerA = {
    name:string
}
type PlayerAA = PlayerA&{
    lastName:string
}

const playerA: PlayerAA={
    name:"nico",
    lastName:"sksk"

}
/////
interface PlayerB{
    name:string
}
interface PlayerB{
    lastName:string
}

const playerB:PlayerB ={
    name:"홉커피",
    lastName:"오늘의커피"
}

type HopA ={
    firstName:string
}
interface HopB {
    firstName:string
}

class User implements HopA{
    constructor(
        public firstName:string
    ){}
}


