const Person = require('./Person.js');
const Ingredient = require('./Ingredient.js');
const Cook = require('./Cook.js');

class LaciKitchen {
    constructor() {
        this.max = 10;
        this.guests = [];
        this.orders = [];
        this.ingredients = [];
    }

    enter(person) {
        if(this.guests.length === this.max) {
            return undefined;
        }

        this.guests.push(person);
        return this.guests;
    }

    quit(person) {
        const place = this.guests.findIndex(guest => guest.name === person.name)
        this.guests.splice(place,1);
        return this.guests;
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }

    order(name,person) {
        const inKitchen = this.guests.find(guest => guest.name === person.name)
        if(!inKitchen) {
            return `Először be kell lépned!`
        }
        const keszites = new Cook();
        const createable = keszites.create(name,this.ingredients);
        if(!createable) {
            return `Nincs elég alapanyag az étel elkészítéséhez`
        }
        if(createable) {
            this.ingredients.map(ing => {
                const equalIng = createable.find(elem => elem.name === ing.name);
                if(equalIng) {
                    ing.pcs = ing.pcs-equalIng.pcs
                }
            })
        }
        return this.ingredients;
    }
}

const person1 = new Person('László');
const person2 = new Person('Csaba');
const kitchen = new LaciKitchen();
const ing1 = new Ingredient('Patkányhús',5);
const ing2 = new Ingredient('Fekete Retek', 3);
const ing3 = new Ingredient('Pita',1);

kitchen.addIngredient(ing1);
kitchen.addIngredient(ing2);
kitchen.addIngredient(ing3);

kitchen.enter(person1)
kitchen.quit(person1)
kitchen.order('Alekosz Girosz',person2)
kitchen.enter(person2)
console.log(kitchen.order('Alekosz Girosz',person2))
console.log(kitchen.order('Alekosz Girosz',person2))
console.log(kitchen.ingredients);
