// concrete X, placeholder O
// 로컬 스토리지 API와 유사한 API

//call signature , calss

interface SStorage<TT> {
    [key: string]: TT
}

class LocalStorage<TT> {
    private storage: SStorage<TT> = {}
    set(key:string, value:TT){
        this.storage[key] = value;
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):TT{
        return this.storage[key]
    }
    clear(){
        this.storage = {}
    }
} 

const stringsStorage = new LocalStorage<string>()

stringsStorage.get("key")
stringsStorage.set("hello", "see")

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get("Xxx")
booleansStorage.set("sek",false)



