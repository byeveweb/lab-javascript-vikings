// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return `Odin Owns You All!`
    }


}

// Saxon
class Saxon extends Soldier {

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }

}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }


    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }


    vikingAttack() {

        //Random
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        const res = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].attack())
        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1)
        }

        return res

    }

    saxonAttack() {

        //Random
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        const res = this.VikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].attack())
        if (this.VikingArmy[randomViking].health <= 0) {
            this.VikingArmy.splice(randomViking, 1)
        }

        return res

    }




    saxonAttack() { }
    showStatus() { }

}


const war = new War()
console.log(war)
