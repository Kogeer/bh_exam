class Cook {
    create(name,ingredients) {
        if(name === 'Alekosz Girosz') {
            const isEnough = this.alekoszGirosz(ingredients);
            if(!isEnough) {
                return undefined
            }
            return isEnough;
        }
    }

    alekoszGirosz(ingredients) {
        const neededIngredient1 = ingredients.find(ingredient => ingredient.name === 'Pita' && ingredient.pcs >= 1);
        const neededIngredient2 = ingredients.find(ingredient => ingredient.name === 'Patkányhús' && ingredient.pcs >= 2);
        const neededIngredient3 = ingredients.find(ingredient => ingredient.name === 'Fekete Retek' && ingredient.pcs >= 1);
        if(!neededIngredient1 || !neededIngredient2 || !neededIngredient3) {
            return undefined
        }
        const ingredientsForCook = [
            {name:'Pita',pcs:1},
            {name:'Patkányhús',pcs:2},
            {name:'Fekete Retek',pcs:1}
        ]
        return ingredientsForCook;
    }
}

module.exports = Cook;