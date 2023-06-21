interface Ingredient {
    _id: string,
    code: string,
    name: string,
    amount: string,
    measurementUnit: string,
    detail: string
}

interface Direction {
    _id: string,
    code: string,
    instruction: string,
    image: string
}

export interface Meal {
    _id: string,  // internal MongoDB primary key
    code: string,
    name: string,
    description: string,
    chef: string,
    image: string,
    rating: string,
    ingredients: Ingredient[],
    directions: Direction[]
}