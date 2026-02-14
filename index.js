class GerarHeroi{
    constructor(nome,idade,tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo 
        
        this._TipoDeAtaque = "Mamae"

    }

    


    ataque(){



            if(this.tipo === "Mago"){

            this._TipoDeAtaque = "Magia"

            }

             if(this.tipo === "Guerreiro"){

            this._TipoDeAtaque = "Espada"
            
            }

            if(this.tipo === "Monge"){

            this._TipoDeAtaque = "Artes Marciais"
            
            }

            if(this.tipo === "Ninja"){

            this._TipoDeAtaque = "Shuriken"
            
            }


            console.log(`O ${this.tipo} ${this.nome} atacou usando ${this._TipoDeAtaque}`)
    }
            

     





}

let NovoHeroi = new GerarHeroi("Gendalf",2019,"Mago")
let NovoHeroi2 = new GerarHeroi("Aragorn",70,"Guerreiro")
let NovoHeroi3 = new GerarHeroi("Samwise",38,"Monge")
let NovoHeroi4 = new GerarHeroi("Frodo",50,"Ninja")

NovoHeroi.ataque()
NovoHeroi2.ataque()
NovoHeroi3.ataque()
NovoHeroi4.ataque()

 

