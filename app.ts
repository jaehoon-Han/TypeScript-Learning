abstract class User {
    
        constructor(
            protected firstName:string,
            protected lastname:string,
            protected nickname:string
        ) {}
        abstract getNickName():void

        getFullname(){
            return '${this.firstName} ${this.lastname}'
        }
    
}
class Player extends User{
    getNickName() {
        console.log(this.nickname)
    }
    }




const nico = new Player("nico","las","니꼬");

nico.getFullname