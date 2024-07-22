import ApplePie from "../assets/apple-pie.jpeg"
import BananaSmoothie from "../assets/banana-smoothie.jpg"
import CarrotSoup from "../assets/carrot-soup.jpg"
import SpinachSalad from "../assets/spinach-salad.jpg"
import BrownRice from "../assets/brown-rice.jpg"
import GrilledChickenBreast from "../assets/grilled-chicken.jpg"
import BakedSalmon from "../assets/baked-salmon.jpg"
import Milkshake from "../assets/milkshake.jpg"
import GreekYogurt from "../assets/greek-yogurt.jpg"

export const MenuList = [
    {
        id: 1,
        name: "Apple Pie",
        price: 5.99,
        cookTime: "45m",
        favorite: true,
        origins: ["USA", "UK"],
        stars: 4.5,
        imageUrl: ApplePie,
        tags: ["dessert"]
    },
    {
        id: 2,
        name: "Banana Smoothie",
        price: 3.99,
        cookTime: "10m",
        favorite: false,
        origins: ["Brazil"],
        stars: 4.7,
        imageUrl: BananaSmoothie,
        tags: ["drink"]
    },
    {
        id: 3,
        name: "Carrot Soup",
        price: 4.49,
        cookTime: "30m",
        favorite: true,
        origins: ["France"],
        stars: 4.2,
        imageUrl: CarrotSoup,
        tags: ["soup"]
    },
    {
        id: 4,
        name: "Spinach Salad",
        price: 6.99,
        cookTime: "15m",
        favorite: true,
        origins: ["Italy"],
        stars: 4.8,
        imageUrl: SpinachSalad,
        tags: ["salad"]
    },
    {
        id: 5,
        name: "Brown Rice",
        price: 2.99,
        cookTime: "40m",
        favorite: false,
        origins: ["China"],
        stars: 4.1,
        imageUrl: BrownRice,
        tags: ["grain"]
    },
    {
        id: 6,
        name: "Grilled Chicken Breast",
        price: 7.99,
        cookTime: "25m",
        favorite: true,
        origins: ["USA"],
        stars: 4.6,
        imageUrl: GrilledChickenBreast,
        tags: ["meat"]
    },
    {
        id: 7,
        name: "Baked Salmon",
        price: 12.99,
        cookTime: "35m",
        favorite: true,
        origins: ["Norway"],
        stars: 4.9,
        imageUrl: BakedSalmon,
        tags: ["fish"]
    },
    {
        id: 8,
        name: "Milkshake",
        price: 4.99,
        cookTime: "10m",
        favorite: false,
        origins: ["USA"],
        stars: 4.0,
        imageUrl: Milkshake,
        tags: ["drink"]
    },
    {
        id: 9,
        name: "Greek Yogurt",
        price: 1.99,
        cookTime: "0m",
        favorite: true,
        origins: ["Greece"],
        stars: 4.7,
        imageUrl: GreekYogurt,
        tags: ["dairy"]
    }
];
