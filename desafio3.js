class hero {
    constructor(name,age,type){
        this.name = name
        this.age = age
        this.type = type
    }

    kombat(){
        let atack
        switch(this.type){
            case "monge":
                atack = "usando artes marciais"
            break
            case "guerreiro":
                atack = "usando espada"
            break
            case "mago":
                atack = "usando magia"
            break
            case "ninja":
                atack = "usando chidori"
            break
        }

        console.log(`o tipo ${this.type} atacou ${atack}`)
    }
}

let hero1 = new hero ("Tekomo Nakama", 28, "monge")
let hero2 = new hero ("Jalim Rabei", 41, "guerreiro")
let hero3 = new hero ("Mestre Dos Magos", 200, "mago")
let hero4 = new hero ("sasuke", 15,"ninja")

hero1.kombat()
hero2.kombat()
hero3.kombat()
hero4.kombat()