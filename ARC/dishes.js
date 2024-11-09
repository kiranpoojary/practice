//Your input object
const dishes = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    gst: 9,
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    gst: 9,
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
    price: 10.5,
    rating: 3.7,
    gst: 9,
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
    price: 18.99,
    rating: 4.8,
    gst: 9,
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
    price: 8.99,
    rating: 3.3,
    gst: 9,
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
    price: 22.99,
    rating: 3.6,
    gst: 9,
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
    price: 13.99,
    rating: 4.4,
    gst: 9,
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
    price: 16.99,
    rating: 3.9,
    gst: 9,
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
    price: 11.99,
    rating: 4.2,
    gst: 9,
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
    price: 19.99,
    rating: 4.7,
    gst: 9,
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
    price: 12,
    rating: 4.5,
    gst: 9,
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
    price: 23.99,
    rating: 3.8,
    gst: 9,
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
    price: 9.99,
    rating: 4.3,
    gst: 9,
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
    price: 15.99,
    rating: 4.6,
    gst: 9,
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
    price: 8.99,
    rating: 4.0,
    gst: 9,
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
    price: 27,
    rating: 4.9,
    gst: 9,
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
    price: 14.99,
    rating: 4.1,
    gst: 9,
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
    price: 17.99,
    rating: 4.7,
    gst: 9,
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
    price: 10,
    rating: 3.4,
    gst: 9,
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
    price: 20.5,
    rating: 4.6,
    gst: 9,
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
    price: 16.99,
    rating: 4.5,
    gst: 9,
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
    price: 19,
    rating: 4.8,
    gst: 9,
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
    price: 12.99,
    rating: 4.2,
    gst: 9,
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
    price: 21.99,
    rating: 4.7,
    gst: 9,
  },
];

//Use Js MAP only
const sampleMapOutput1 = [
  "Margherita Pizza",
  "Chicken Alfredo Pasta",
  "Vegetable Biryani",
  "Grilled Salmon",
  "Caesar Salad",
  "Sushi Platter",
  "Paneer Tikka Masala",
  "BBQ Ribs",
  "Vegetarian Pad Thai",
  "Shrimp Scampi",
  "Palak Paneer",
  "Steak Diane",
  "Caprese Salad",
  "Chicken Satay",
  "Masala Dosa",
  "Lobster Bisque",
  "Vegetarian Sushi Roll",
  "Chicken Korma",
  "Greek Salad",
  "Chicken Stir-Fry",
  "Mushroom Risotto",
  "Tandoori Chicken",
  "Vegetable Lo Mein",
  "Salmon Teriyaki",
];
//write your code
// console.log(mapOutput1)

const sampleMapOutput2 = [
  "Italian",
  "Italian",
  "Indian",
  "Seafood",
  "International",
  "Japanese",
  "Indian",
  "American",
  "Thai",
  "Italian",
  "Indian",
  "French",
  "Italian",
  "Thai",
  "Indian",
  "French",
  "Japanese",
  "Indian",
  "Mediterranean",
  "Chinese",
  "Italian",
  "Indian",
  "Chinese",
  "Japanese",
];
//write your code
// console.log(mapOutput2)

const sampleMapOutput3 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
  },
];
//write your code
// console.log(mapOutput3)

const sampleMapOutput4 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
  },
];
//write your code
// console.log(mapOutput4)

const sampleMapOutput5 = [
  {
    dishName: "MARGHERITA PIZZA",
  },
  {
    dishName: "CHICKEN ALFREDO PASTA",
  },
  {
    dishName: "VEGETABLE BIRYANI",
  },
  {
    dishName: "GRILLED SALMON",
  },
  {
    dishName: "CAESAR SALAD",
  },
  {
    dishName: "SUSHI PLATTER",
  },
  {
    dishName: "PANEER TIKKA MASALA",
  },
  {
    dishName: "BBQ RIBS",
  },
  {
    dishName: "VEGETARIAN PAD THAI",
  },
  {
    dishName: "SHRIMP SCAMPI",
  },
  {
    dishName: "PALAK PANEER",
  },
  {
    dishName: "STEAK DIANE",
  },
  {
    dishName: "CAPRESE SALAD",
  },
  {
    dishName: "CHICKEN SATAY",
  },
  {
    dishName: "MASALA DOSA",
  },
  {
    dishName: "LOBSTER BISQUE",
  },
  {
    dishName: "VEGETARIAN SUSHI ROLL",
  },
  {
    dishName: "CHICKEN KORMA",
  },
  {
    dishName: "GREEK SALAD",
  },
  {
    dishName: "CHICKEN STIR-FRY",
  },
  {
    dishName: "MUSHROOM RISOTTO",
  },
  {
    dishName: "TANDOORI CHICKEN",
  },
  {
    dishName: "VEGETABLE LO MEIN",
  },
  {
    dishName: "SALMON TERIYAKI",
  },
];
//write your code
// console.log(mapOutput5)

const sampleMapOutput6 = [
  {
    dishName: "MARGHERITA PIZZA",
    cuisine: "ITALIAN",
  },
  {
    dishName: "CHICKEN ALFREDO PASTA",
    cuisine: "ITALIAN",
  },
  {
    dishName: "VEGETABLE BIRYANI",
    cuisine: "INDIAN",
  },
  {
    dishName: "GRILLED SALMON",
    cuisine: "SEAFOOD",
  },
  {
    dishName: "CAESAR SALAD",
    cuisine: "INTERNATIONAL",
  },
  {
    dishName: "SUSHI PLATTER",
    cuisine: "JAPANESE",
  },
  {
    dishName: "PANEER TIKKA MASALA",
    cuisine: "INDIAN",
  },
  {
    dishName: "BBQ RIBS",
    cuisine: "AMERICAN",
  },
  {
    dishName: "VEGETARIAN PAD THAI",
    cuisine: "THAI",
  },
  {
    dishName: "SHRIMP SCAMPI",
    cuisine: "ITALIAN",
  },
  {
    dishName: "PALAK PANEER",
    cuisine: "INDIAN",
  },
  {
    dishName: "STEAK DIANE",
    cuisine: "FRENCH",
  },
  {
    dishName: "CAPRESE SALAD",
    cuisine: "ITALIAN",
  },
  {
    dishName: "CHICKEN SATAY",
    cuisine: "THAI",
  },
  {
    dishName: "MASALA DOSA",
    cuisine: "INDIAN",
  },
  {
    dishName: "LOBSTER BISQUE",
    cuisine: "FRENCH",
  },
  {
    dishName: "VEGETARIAN SUSHI ROLL",
    cuisine: "JAPANESE",
  },
  {
    dishName: "CHICKEN KORMA",
    cuisine: "INDIAN",
  },
  {
    dishName: "GREEK SALAD",
    cuisine: "MEDITERRANEAN",
  },
  {
    dishName: "CHICKEN STIR-FRY",
    cuisine: "CHINESE",
  },
  {
    dishName: "MUSHROOM RISOTTO",
    cuisine: "ITALIAN",
  },
  {
    dishName: "TANDOORI CHICKEN",
    cuisine: "INDIAN",
  },
  {
    dishName: "VEGETABLE LO MEIN",
    cuisine: "CHINESE",
  },
  {
    dishName: "SALMON TERIYAKI",
    cuisine: "JAPANESE",
  },
];
//write your code
// console.log(mapOutput6)

const sampleMapOutput7 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    gst: 9,
    MRP: 14.1591,
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    gst: 9,
    MRP: 16.339100000000002,
  },
  //.......
];
//write your code
// console.log(mapOutput7)

const sampleMapOutput8 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    title: "Margherita Pizza/Italian/veg/with 3.5 rating",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    title: "Chicken Alfredo Pasta/Italian/non-veg/with 4.2 rating",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
    price: 10.5,
    rating: 3.7,
    title: "Vegetable Biryani/Indian/veg/with 3.7 rating",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
    price: 18.99,
    rating: 4.8,
    title: "Grilled Salmon/Seafood/non-veg/with 4.8 rating",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
    price: 8.99,
    rating: 3.3,
    title: "Caesar Salad/International/veg/with 3.3 rating",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
    price: 22.99,
    rating: 3.6,
    title: "Sushi Platter/Japanese/non-veg/with 3.6 rating",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
    price: 13.99,
    rating: 4.4,
    title: "Paneer Tikka Masala/Indian/veg/with 4.4 rating",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
    price: 16.99,
    rating: 3.9,
    title: "BBQ Ribs/American/non-veg/with 3.9 rating",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
    price: 11.99,
    rating: 4.2,
    title: "Vegetarian Pad Thai/Thai/veg/with 4.2 rating",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
    price: 19.99,
    rating: 4.7,
    title: "Shrimp Scampi/Italian/non-veg/with 4.7 rating",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
    price: 12,
    rating: 4.5,
    title: "Palak Paneer/Indian/veg/with 4.5 rating",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
    price: 23.99,
    rating: 3.8,
    title: "Steak Diane/French/non-veg/with 3.8 rating",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
    price: 9.99,
    rating: 4.3,
    title: "Caprese Salad/Italian/veg/with 4.3 rating",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
    price: 15.99,
    rating: 4.6,
    title: "Chicken Satay/Thai/non-veg/with 4.6 rating",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
    price: 8.99,
    rating: 4,
    title: "Masala Dosa/Indian/veg/with 4 rating",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
    price: 27,
    rating: 4.9,
    title: "Lobster Bisque/French/non-veg/with 4.9 rating",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
    price: 14.99,
    rating: 4.1,
    title: "Vegetarian Sushi Roll/Japanese/veg/with 4.1 rating",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
    price: 17.99,
    rating: 4.7,
    title: "Chicken Korma/Indian/non-veg/with 4.7 rating",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
    price: 10,
    rating: 3.4,
    title: "Greek Salad/Mediterranean/veg/with 3.4 rating",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
    price: 20.5,
    rating: 4.6,
    title: "Chicken Stir-Fry/Chinese/non-veg/with 4.6 rating",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
    price: 16.99,
    rating: 4.5,
    title: "Mushroom Risotto/Italian/veg/with 4.5 rating",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
    price: 19,
    rating: 4.8,
    title: "Tandoori Chicken/Indian/non-veg/with 4.8 rating",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
    price: 12.99,
    rating: 4.2,
    title: "Vegetable Lo Mein/Chinese/veg/with 4.2 rating",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
    price: 21.99,
    rating: 4.7,
    title: "Salmon Teriyaki/Japanese/non-veg/with 4.7 rating",
  },
];
//write your code
// console.log(mapOutput8)

//added grade:- >=4.5(MOST POPULAR);>=3.5(POPULAR)
const sampleMapOutput9 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
    price: 10.5,
    rating: 3.7,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
    price: 18.99,
    rating: 4.8,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
    price: 8.99,
    rating: 3.3,
    gst: 9,
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
    price: 22.99,
    rating: 3.6,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
    price: 13.99,
    rating: 4.4,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
    price: 16.99,
    rating: 3.9,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
    price: 11.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
    price: 19.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
    price: 12,
    rating: 4.5,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
    price: 23.99,
    rating: 3.8,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
    price: 9.99,
    rating: 4.3,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
    price: 15.99,
    rating: 4.6,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
    price: 8.99,
    rating: 4,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
    price: 27,
    rating: 4.9,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
    price: 14.99,
    rating: 4.1,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
    price: 17.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
    price: 10,
    rating: 3.4,
    gst: 9,
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
    price: 20.5,
    rating: 4.6,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
    price: 16.99,
    rating: 4.5,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
    price: 19,
    rating: 4.8,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
    price: 12.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
    price: 21.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
];
//write your code
// console.log(mapOutput9)'

//
//
//
//
//
//
// Use JS FILTER Only
// 1.list all veg dishes
//write your code

// 2.list all non-veg dishes
//write your code

// 3.list all Italian dishes
//write your code

// 4.list all Indian dishes
//write your code

// 5.list all Thai dishes
//write your code

// 6.list all dishes whos price is >= 20
//write your code

// 7.list all dishes whos price is < 11
//write your code

// 8.list all dishes whos rating >= 4.5
//write your code

// 9.list all Indian, non-veg dishes
//write your code

// 10.list all Indian, veg dishes
//write your code

// 11.list all Japnes, veg dishes
//write your code

// 12.list all French, non-veg dishes
//write your code

// 13.list all non-veg dishes whos rating >4
//write your code

// 14.list all veg dishes whos rating >4
//write your code

// 15.list all non-veg dishes whos rating <4
//write your code

// 16.list all Indian,non-veg dishes  whos price is > 15
//write your code

// 17.list all Indian,veg dishes whos price is < 10
//write your code

// 18.list all Japnes,veg dishes whos price is >= 20
//write your code

// 19.list all Italian,veg dishes whos price is > 15
//write your code

// 20.list all India,veg dishes whos price is > 10 and rating > 4
//write your code

// 21.list all Italian,veg dishes whos price is < 11 and rating >3.5
//write your code

// 22.list all Italian,non-veg dishes whos price is > 15 and rating >= 4.5
//write your code
//
//
//
//
//
//
// Use JS filter and map together
// 1.list all Thai dishes(name only)
//write your code

// 2.list all non-veg dishes(name only)
//write your code

// 3.list all Indian, non-veg dishes(name only)
//write your code

// 4.list all Italian, veg dishes(name and price)
//write your code

// 5.list all Japnes,veg dishes whos price is < 10(name, price)
//write your code

// 6.list all Italian,non-veg dishes whos rating is >= 4(name,price, rating)
//write your code

// 7.list all non-veg dishes whos rating <4(full details with MRP)
//write your code
//
//
//
//
//
//
//Use Js forEach
const sampleForEachMapOutput1 = [
  "Margherita Pizza",
  "Chicken Alfredo Pasta",
  "Vegetable Biryani",
  "Grilled Salmon",
  "Caesar Salad",
  "Sushi Platter",
  "Paneer Tikka Masala",
  "BBQ Ribs",
  "Vegetarian Pad Thai",
  "Shrimp Scampi",
  "Palak Paneer",
  "Steak Diane",
  "Caprese Salad",
  "Chicken Satay",
  "Masala Dosa",
  "Lobster Bisque",
  "Vegetarian Sushi Roll",
  "Chicken Korma",
  "Greek Salad",
  "Chicken Stir-Fry",
  "Mushroom Risotto",
  "Tandoori Chicken",
  "Vegetable Lo Mein",
  "Salmon Teriyaki",
];
//write your code
// console.log(forEachMapOutput1)

const sampleForEachMapOutput2 = [
  "Italian",
  "Italian",
  "Indian",
  "Seafood",
  "International",
  "Japanese",
  "Indian",
  "American",
  "Thai",
  "Italian",
  "Indian",
  "French",
  "Italian",
  "Thai",
  "Indian",
  "French",
  "Japanese",
  "Indian",
  "Mediterranean",
  "Chinese",
  "Italian",
  "Indian",
  "Chinese",
  "Japanese",
];
//write your code
// console.log(forEachMapOutput2)

const sampleForEachMapOutput3 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
  },
];
//write your code
// console.log(forEachMapOutput3)

const sampleForEachMapOutput4 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
  },
];
//write your code
// console.log(forEachMapOutput4)

const sampleForEachMapOutput5 = [
  {
    dishName: "MARGHERITA PIZZA",
  },
  {
    dishName: "CHICKEN ALFREDO PASTA",
  },
  {
    dishName: "VEGETABLE BIRYANI",
  },
  {
    dishName: "GRILLED SALMON",
  },
  {
    dishName: "CAESAR SALAD",
  },
  {
    dishName: "SUSHI PLATTER",
  },
  {
    dishName: "PANEER TIKKA MASALA",
  },
  {
    dishName: "BBQ RIBS",
  },
  {
    dishName: "VEGETARIAN PAD THAI",
  },
  {
    dishName: "SHRIMP SCAMPI",
  },
  {
    dishName: "PALAK PANEER",
  },
  {
    dishName: "STEAK DIANE",
  },
  {
    dishName: "CAPRESE SALAD",
  },
  {
    dishName: "CHICKEN SATAY",
  },
  {
    dishName: "MASALA DOSA",
  },
  {
    dishName: "LOBSTER BISQUE",
  },
  {
    dishName: "VEGETARIAN SUSHI ROLL",
  },
  {
    dishName: "CHICKEN KORMA",
  },
  {
    dishName: "GREEK SALAD",
  },
  {
    dishName: "CHICKEN STIR-FRY",
  },
  {
    dishName: "MUSHROOM RISOTTO",
  },
  {
    dishName: "TANDOORI CHICKEN",
  },
  {
    dishName: "VEGETABLE LO MEIN",
  },
  {
    dishName: "SALMON TERIYAKI",
  },
];
//write your code
// console.log(forEachMapOutput5)

const sampleForEachMapOutput6 = [
  {
    dishName: "MARGHERITA PIZZA",
    cuisine: "ITALIAN",
  },
  {
    dishName: "CHICKEN ALFREDO PASTA",
    cuisine: "ITALIAN",
  },
  {
    dishName: "VEGETABLE BIRYANI",
    cuisine: "INDIAN",
  },
  {
    dishName: "GRILLED SALMON",
    cuisine: "SEAFOOD",
  },
  {
    dishName: "CAESAR SALAD",
    cuisine: "INTERNATIONAL",
  },
  {
    dishName: "SUSHI PLATTER",
    cuisine: "JAPANESE",
  },
  {
    dishName: "PANEER TIKKA MASALA",
    cuisine: "INDIAN",
  },
  {
    dishName: "BBQ RIBS",
    cuisine: "AMERICAN",
  },
  {
    dishName: "VEGETARIAN PAD THAI",
    cuisine: "THAI",
  },
  {
    dishName: "SHRIMP SCAMPI",
    cuisine: "ITALIAN",
  },
  {
    dishName: "PALAK PANEER",
    cuisine: "INDIAN",
  },
  {
    dishName: "STEAK DIANE",
    cuisine: "FRENCH",
  },
  {
    dishName: "CAPRESE SALAD",
    cuisine: "ITALIAN",
  },
  {
    dishName: "CHICKEN SATAY",
    cuisine: "THAI",
  },
  {
    dishName: "MASALA DOSA",
    cuisine: "INDIAN",
  },
  {
    dishName: "LOBSTER BISQUE",
    cuisine: "FRENCH",
  },
  {
    dishName: "VEGETARIAN SUSHI ROLL",
    cuisine: "JAPANESE",
  },
  {
    dishName: "CHICKEN KORMA",
    cuisine: "INDIAN",
  },
  {
    dishName: "GREEK SALAD",
    cuisine: "MEDITERRANEAN",
  },
  {
    dishName: "CHICKEN STIR-FRY",
    cuisine: "CHINESE",
  },
  {
    dishName: "MUSHROOM RISOTTO",
    cuisine: "ITALIAN",
  },
  {
    dishName: "TANDOORI CHICKEN",
    cuisine: "INDIAN",
  },
  {
    dishName: "VEGETABLE LO MEIN",
    cuisine: "CHINESE",
  },
  {
    dishName: "SALMON TERIYAKI",
    cuisine: "JAPANESE",
  },
];
//write your code
// console.log(forEachMapOutput6)

const sampleForEachMapOutput7 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    gst: 9,
    MRP: 14.1591,
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    gst: 9,
    MRP: 16.339100000000002,
  },
  //.......
];
//write your code
// console.log(forEachMapOutput7)

const sampleForEachMapOutput8 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    title: "Margherita Pizza/Italian/veg/with 3.5 rating",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    title: "Chicken Alfredo Pasta/Italian/non-veg/with 4.2 rating",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
    price: 10.5,
    rating: 3.7,
    title: "Vegetable Biryani/Indian/veg/with 3.7 rating",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
    price: 18.99,
    rating: 4.8,
    title: "Grilled Salmon/Seafood/non-veg/with 4.8 rating",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
    price: 8.99,
    rating: 3.3,
    title: "Caesar Salad/International/veg/with 3.3 rating",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
    price: 22.99,
    rating: 3.6,
    title: "Sushi Platter/Japanese/non-veg/with 3.6 rating",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
    price: 13.99,
    rating: 4.4,
    title: "Paneer Tikka Masala/Indian/veg/with 4.4 rating",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
    price: 16.99,
    rating: 3.9,
    title: "BBQ Ribs/American/non-veg/with 3.9 rating",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
    price: 11.99,
    rating: 4.2,
    title: "Vegetarian Pad Thai/Thai/veg/with 4.2 rating",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
    price: 19.99,
    rating: 4.7,
    title: "Shrimp Scampi/Italian/non-veg/with 4.7 rating",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
    price: 12,
    rating: 4.5,
    title: "Palak Paneer/Indian/veg/with 4.5 rating",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
    price: 23.99,
    rating: 3.8,
    title: "Steak Diane/French/non-veg/with 3.8 rating",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
    price: 9.99,
    rating: 4.3,
    title: "Caprese Salad/Italian/veg/with 4.3 rating",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
    price: 15.99,
    rating: 4.6,
    title: "Chicken Satay/Thai/non-veg/with 4.6 rating",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
    price: 8.99,
    rating: 4,
    title: "Masala Dosa/Indian/veg/with 4 rating",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
    price: 27,
    rating: 4.9,
    title: "Lobster Bisque/French/non-veg/with 4.9 rating",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
    price: 14.99,
    rating: 4.1,
    title: "Vegetarian Sushi Roll/Japanese/veg/with 4.1 rating",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
    price: 17.99,
    rating: 4.7,
    title: "Chicken Korma/Indian/non-veg/with 4.7 rating",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
    price: 10,
    rating: 3.4,
    title: "Greek Salad/Mediterranean/veg/with 3.4 rating",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
    price: 20.5,
    rating: 4.6,
    title: "Chicken Stir-Fry/Chinese/non-veg/with 4.6 rating",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
    price: 16.99,
    rating: 4.5,
    title: "Mushroom Risotto/Italian/veg/with 4.5 rating",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
    price: 19,
    rating: 4.8,
    title: "Tandoori Chicken/Indian/non-veg/with 4.8 rating",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
    price: 12.99,
    rating: 4.2,
    title: "Vegetable Lo Mein/Chinese/veg/with 4.2 rating",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
    price: 21.99,
    rating: 4.7,
    title: "Salmon Teriyaki/Japanese/non-veg/with 4.7 rating",
  },
];
//write your code
// console.log(forEachMapOutput8)

//added grade:- >=4.5(MOST POPULAR);>=3.5(POPULAR)
const sampleForEachMapOutput9 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
    price: 10.5,
    rating: 3.7,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
    price: 18.99,
    rating: 4.8,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
    price: 8.99,
    rating: 3.3,
    gst: 9,
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
    price: 22.99,
    rating: 3.6,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
    price: 13.99,
    rating: 4.4,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
    price: 16.99,
    rating: 3.9,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
    price: 11.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
    price: 19.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
    price: 12,
    rating: 4.5,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
    price: 23.99,
    rating: 3.8,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
    price: 9.99,
    rating: 4.3,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
    price: 15.99,
    rating: 4.6,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
    price: 8.99,
    rating: 4,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
    price: 27,
    rating: 4.9,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
    price: 14.99,
    rating: 4.1,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
    price: 17.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
    price: 10,
    rating: 3.4,
    gst: 9,
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
    price: 20.5,
    rating: 4.6,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
    price: 16.99,
    rating: 4.5,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
    price: 19,
    rating: 4.8,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
    price: 12.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
    price: 21.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
];
//write your code
// console.log(forEachMapOutput9)'
//
//
//
//
//
//
// Using JS forEach to filter an array ele
// 1.list all veg dishes
//write your code

// 2.list all non-veg dishes
//write your code

// 3.list all Italian dishes
//write your code

// 4.list all Indian dishes
//write your code

// 5.list all Thai dishes
//write your code

// 6.list all dishes whos price is >= 20
//write your code

// 7.list all dishes whos price is < 11
//write your code

// 8.list all dishes whos rating >= 4.5
//write your code

// 9.list all Indian, non-veg dishes
//write your code

// 10.list all Indian, veg dishes
//write your code

// 11.list all Japnes, veg dishes
//write your code

// 12.list all French, non-veg dishes
//write your code

// 13.list all non-veg dishes whos rating >4
//write your code

// 14.list all veg dishes whos rating >4
//write your code

// 15.list all non-veg dishes whos rating <4
//write your code

// 16.list all Indian,non-veg dishes  whos price is > 15
//write your code

// 17.list all Indian,veg dishes whos price is < 10
//write your code

// 18.list all Japnes,veg dishes whos price is >= 20
//write your code

// 19.list all Italian,veg dishes whos price is > 15
//write your code

// 20.list all India,veg dishes whos price is > 10 and rating > 4
//write your code

// 21.list all Italian,veg dishes whos price is < 11 and rating >3.5
//write your code

// 22.list all Italian,non-veg dishes whos price is > 15 and rating >= 4.5
//write your code
//
//
//
//
//
//
//
// Using JS forEach(both map filter combined)
// 1.list all Thai dishes(name only)
//write your code

// 2.list all non-veg dishes(name only)
//write your code

// 3.list all Indian, non-veg dishes(name only)
//write your code

// 4.list all Italian, veg dishes(name and price)
//write your code

// 5.list all Japnes,veg dishes whos price is < 10(name, price)
//write your code

// 6.list all Italian,non-veg dishes whos rating is >= 4(name,price, rating)
//write your code

// 7.list all non-veg dishes whos rating <4(full details with MRP)
//write your code

//
//
//
//
//----------END OF ARRAY OF OBJECT WITH MAP FILTER AND FOREACH-------------
//
//
//
//
//
const myNumbers = [2, 3, 6, 8, 5, 9, 6, 10, 2, 4, 5, 8, 7];
// using MAP
// 1)list all the numbers as double of each number
// 2)list all numbers square
// 3)list all numbers cube
// 4)subtract 2 from each number and print
// 5)list all the numbers result after divided by 3(maximum 2 decimal digits allowed)
// 6)list array as, odd numbers square and even numbers cube
// 7)list all array number with additing up with next number(no next number means add 0)
// 7)list all array number with additing up withprevious and next number(no previous/next number means add 0)
// 8)list array as,
// multiplied by 2 if number completely divided by 2(maximum 2 decimal digits allowed)
// multiplied by 3 if number completely divided by 3(maximum 2 decimal digits allowed)
// otherwise return square of number
//
//
//
//
//
//
// using FILTER
// 1)list all odd numbers
// 2)list all even numbers
// 3)list all numbers which is multiplier of 3
// 4)list all numbers which is multiplier of 2 as well as 3
// 5)list all numbers whos square root is a whole number(integer)
//
//
//
//
//
//
// using forEach like MAP
// 1)list all the numbers as double of each number
// 2)list all numbers square
// 3)list all numbers cube
// 4)subtract 2 from each number and print
// 5)list all the numbers result after divided by 3(maximum 2 decimal digits allowed)
// 6)list array as, odd numbers square and even numbers cube
// 7)list all array number with additing up with next number(no next number means add 0)
// 8)list all array number with additing up withprevious and next number(no previous/next number means add 0)
// 9)list array as,
// multiplied by 2 if number completely divided by 2(maximum 2 decimal digits allowed)
// multiplied by 3 if number completely divided by 3(maximum 2 decimal digits allowed)
// otherwise return square of number
//
//
//
// using forEach like FILTER
// 1)list all odd numbers
// 2)list all even numbers
// 3)list all numbers which is multiplier of 3
// 4)list all numbers which is multiplier of 2 as well as 3
// 5)list all numbers whos square root is a whole number(integer)
//
//
//
//
// using forEach(like both map filter combined)
// 1)list all odd numbers with doubling
// 2)list all even numbers with trippling
// 3)list cube of all the number which is completely devided by 3
// 4)list all array number with additing up with next number(no next number means add 0)
//
//
//
//
//
//
//
//
//
//----------END OF ARRAY OF element WITH MAP FILTER AND FOREACH-------------
//----------START OF ARRAY OF object WITH REDUCE-------------
//
//
//
//
//
//

//Use Js REDUCE only
const sampleReduceMapOutput1 = [
  "Margherita Pizza",
  "Chicken Alfredo Pasta",
  "Vegetable Biryani",
  "Grilled Salmon",
  "Caesar Salad",
  "Sushi Platter",
  "Paneer Tikka Masala",
  "BBQ Ribs",
  "Vegetarian Pad Thai",
  "Shrimp Scampi",
  "Palak Paneer",
  "Steak Diane",
  "Caprese Salad",
  "Chicken Satay",
  "Masala Dosa",
  "Lobster Bisque",
  "Vegetarian Sushi Roll",
  "Chicken Korma",
  "Greek Salad",
  "Chicken Stir-Fry",
  "Mushroom Risotto",
  "Tandoori Chicken",
  "Vegetable Lo Mein",
  "Salmon Teriyaki",
];
//write your code
// console.log(mapOutput1)

const sampleReduceMapOutput2 = [
  "Italian",
  "Italian",
  "Indian",
  "Seafood",
  "International",
  "Japanese",
  "Indian",
  "American",
  "Thai",
  "Italian",
  "Indian",
  "French",
  "Italian",
  "Thai",
  "Indian",
  "French",
  "Japanese",
  "Indian",
  "Mediterranean",
  "Chinese",
  "Italian",
  "Indian",
  "Chinese",
  "Japanese",
];
//write your code
// console.log(mapOutput2)

const sampleReduceMapOutput3 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
  },
];
//write your code
// console.log(mapOutput3)

const sampleReduceMapOutput4 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
  },
];
//write your code
// console.log(mapOutput4)

const sampleReduceMapOutput5 = [
  {
    dishName: "MARGHERITA PIZZA",
  },
  {
    dishName: "CHICKEN ALFREDO PASTA",
  },
  {
    dishName: "VEGETABLE BIRYANI",
  },
  {
    dishName: "GRILLED SALMON",
  },
  {
    dishName: "CAESAR SALAD",
  },
  {
    dishName: "SUSHI PLATTER",
  },
  {
    dishName: "PANEER TIKKA MASALA",
  },
  {
    dishName: "BBQ RIBS",
  },
  {
    dishName: "VEGETARIAN PAD THAI",
  },
  {
    dishName: "SHRIMP SCAMPI",
  },
  {
    dishName: "PALAK PANEER",
  },
  {
    dishName: "STEAK DIANE",
  },
  {
    dishName: "CAPRESE SALAD",
  },
  {
    dishName: "CHICKEN SATAY",
  },
  {
    dishName: "MASALA DOSA",
  },
  {
    dishName: "LOBSTER BISQUE",
  },
  {
    dishName: "VEGETARIAN SUSHI ROLL",
  },
  {
    dishName: "CHICKEN KORMA",
  },
  {
    dishName: "GREEK SALAD",
  },
  {
    dishName: "CHICKEN STIR-FRY",
  },
  {
    dishName: "MUSHROOM RISOTTO",
  },
  {
    dishName: "TANDOORI CHICKEN",
  },
  {
    dishName: "VEGETABLE LO MEIN",
  },
  {
    dishName: "SALMON TERIYAKI",
  },
];
//write your code
// console.log(mapOutput5)

const sampleReduceMapOutput6 = [
  {
    dishName: "MARGHERITA PIZZA",
    cuisine: "ITALIAN",
  },
  {
    dishName: "CHICKEN ALFREDO PASTA",
    cuisine: "ITALIAN",
  },
  {
    dishName: "VEGETABLE BIRYANI",
    cuisine: "INDIAN",
  },
  {
    dishName: "GRILLED SALMON",
    cuisine: "SEAFOOD",
  },
  {
    dishName: "CAESAR SALAD",
    cuisine: "INTERNATIONAL",
  },
  {
    dishName: "SUSHI PLATTER",
    cuisine: "JAPANESE",
  },
  {
    dishName: "PANEER TIKKA MASALA",
    cuisine: "INDIAN",
  },
  {
    dishName: "BBQ RIBS",
    cuisine: "AMERICAN",
  },
  {
    dishName: "VEGETARIAN PAD THAI",
    cuisine: "THAI",
  },
  {
    dishName: "SHRIMP SCAMPI",
    cuisine: "ITALIAN",
  },
  {
    dishName: "PALAK PANEER",
    cuisine: "INDIAN",
  },
  {
    dishName: "STEAK DIANE",
    cuisine: "FRENCH",
  },
  {
    dishName: "CAPRESE SALAD",
    cuisine: "ITALIAN",
  },
  {
    dishName: "CHICKEN SATAY",
    cuisine: "THAI",
  },
  {
    dishName: "MASALA DOSA",
    cuisine: "INDIAN",
  },
  {
    dishName: "LOBSTER BISQUE",
    cuisine: "FRENCH",
  },
  {
    dishName: "VEGETARIAN SUSHI ROLL",
    cuisine: "JAPANESE",
  },
  {
    dishName: "CHICKEN KORMA",
    cuisine: "INDIAN",
  },
  {
    dishName: "GREEK SALAD",
    cuisine: "MEDITERRANEAN",
  },
  {
    dishName: "CHICKEN STIR-FRY",
    cuisine: "CHINESE",
  },
  {
    dishName: "MUSHROOM RISOTTO",
    cuisine: "ITALIAN",
  },
  {
    dishName: "TANDOORI CHICKEN",
    cuisine: "INDIAN",
  },
  {
    dishName: "VEGETABLE LO MEIN",
    cuisine: "CHINESE",
  },
  {
    dishName: "SALMON TERIYAKI",
    cuisine: "JAPANESE",
  },
];
//write your code
// console.log(mapOutput6)

const sampleReduceMapOutput7 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    gst: 9,
    MRP: 14.1591,
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    gst: 9,
    MRP: 16.339100000000002,
  },
  //.......
];
//write your code
// console.log(mapOutput7)

const sampleReduceMapOutput8 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    title: "Margherita Pizza/Italian/veg/with 3.5 rating",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    title: "Chicken Alfredo Pasta/Italian/non-veg/with 4.2 rating",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
    price: 10.5,
    rating: 3.7,
    title: "Vegetable Biryani/Indian/veg/with 3.7 rating",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
    price: 18.99,
    rating: 4.8,
    title: "Grilled Salmon/Seafood/non-veg/with 4.8 rating",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
    price: 8.99,
    rating: 3.3,
    title: "Caesar Salad/International/veg/with 3.3 rating",
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
    price: 22.99,
    rating: 3.6,
    title: "Sushi Platter/Japanese/non-veg/with 3.6 rating",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
    price: 13.99,
    rating: 4.4,
    title: "Paneer Tikka Masala/Indian/veg/with 4.4 rating",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
    price: 16.99,
    rating: 3.9,
    title: "BBQ Ribs/American/non-veg/with 3.9 rating",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
    price: 11.99,
    rating: 4.2,
    title: "Vegetarian Pad Thai/Thai/veg/with 4.2 rating",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
    price: 19.99,
    rating: 4.7,
    title: "Shrimp Scampi/Italian/non-veg/with 4.7 rating",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
    price: 12,
    rating: 4.5,
    title: "Palak Paneer/Indian/veg/with 4.5 rating",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
    price: 23.99,
    rating: 3.8,
    title: "Steak Diane/French/non-veg/with 3.8 rating",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
    price: 9.99,
    rating: 4.3,
    title: "Caprese Salad/Italian/veg/with 4.3 rating",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
    price: 15.99,
    rating: 4.6,
    title: "Chicken Satay/Thai/non-veg/with 4.6 rating",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
    price: 8.99,
    rating: 4,
    title: "Masala Dosa/Indian/veg/with 4 rating",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
    price: 27,
    rating: 4.9,
    title: "Lobster Bisque/French/non-veg/with 4.9 rating",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
    price: 14.99,
    rating: 4.1,
    title: "Vegetarian Sushi Roll/Japanese/veg/with 4.1 rating",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
    price: 17.99,
    rating: 4.7,
    title: "Chicken Korma/Indian/non-veg/with 4.7 rating",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
    price: 10,
    rating: 3.4,
    title: "Greek Salad/Mediterranean/veg/with 3.4 rating",
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
    price: 20.5,
    rating: 4.6,
    title: "Chicken Stir-Fry/Chinese/non-veg/with 4.6 rating",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
    price: 16.99,
    rating: 4.5,
    title: "Mushroom Risotto/Italian/veg/with 4.5 rating",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
    price: 19,
    rating: 4.8,
    title: "Tandoori Chicken/Indian/non-veg/with 4.8 rating",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
    price: 12.99,
    rating: 4.2,
    title: "Vegetable Lo Mein/Chinese/veg/with 4.2 rating",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
    price: 21.99,
    rating: 4.7,
    title: "Salmon Teriyaki/Japanese/non-veg/with 4.7 rating",
  },
];
//write your code
// console.log(mapOutput8)

//added grade:- >=4.5(MOST POPULAR);>=3.5(POPULAR)
const sampleReduceMapOutput9 = [
  {
    dishName: "Margherita Pizza",
    cuisine: "Italian",
    type: "veg",
    price: 12.99,
    rating: 3.5,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Alfredo Pasta",
    cuisine: "Italian",
    type: "non-veg",
    price: 14.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Vegetable Biryani",
    cuisine: "Indian",
    type: "veg",
    price: 10.5,
    rating: 3.7,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Grilled Salmon",
    cuisine: "Seafood",
    type: "non-veg",
    price: 18.99,
    rating: 4.8,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Caesar Salad",
    cuisine: "International",
    type: "veg",
    price: 8.99,
    rating: 3.3,
    gst: 9,
  },
  {
    dishName: "Sushi Platter",
    cuisine: "Japanese",
    type: "non-veg",
    price: 22.99,
    rating: 3.6,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Paneer Tikka Masala",
    cuisine: "Indian",
    type: "veg",
    price: 13.99,
    rating: 4.4,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "BBQ Ribs",
    cuisine: "American",
    type: "non-veg",
    price: 16.99,
    rating: 3.9,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Vegetarian Pad Thai",
    cuisine: "Thai",
    type: "veg",
    price: 11.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Shrimp Scampi",
    cuisine: "Italian",
    type: "non-veg",
    price: 19.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Palak Paneer",
    cuisine: "Indian",
    type: "veg",
    price: 12,
    rating: 4.5,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Steak Diane",
    cuisine: "French",
    type: "non-veg",
    price: 23.99,
    rating: 3.8,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Caprese Salad",
    cuisine: "Italian",
    type: "veg",
    price: 9.99,
    rating: 4.3,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Satay",
    cuisine: "Thai",
    type: "non-veg",
    price: 15.99,
    rating: 4.6,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Masala Dosa",
    cuisine: "Indian",
    type: "veg",
    price: 8.99,
    rating: 4,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Lobster Bisque",
    cuisine: "French",
    type: "non-veg",
    price: 27,
    rating: 4.9,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Vegetarian Sushi Roll",
    cuisine: "Japanese",
    type: "veg",
    price: 14.99,
    rating: 4.1,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Chicken Korma",
    cuisine: "Indian",
    type: "non-veg",
    price: 17.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Greek Salad",
    cuisine: "Mediterranean",
    type: "veg",
    price: 10,
    rating: 3.4,
    gst: 9,
  },
  {
    dishName: "Chicken Stir-Fry",
    cuisine: "Chinese",
    type: "non-veg",
    price: 20.5,
    rating: 4.6,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Mushroom Risotto",
    cuisine: "Italian",
    type: "veg",
    price: 16.99,
    rating: 4.5,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Tandoori Chicken",
    cuisine: "Indian",
    type: "non-veg",
    price: 19,
    rating: 4.8,
    gst: 9,
    grade: "MOST POPULAR",
  },
  {
    dishName: "Vegetable Lo Mein",
    cuisine: "Chinese",
    type: "veg",
    price: 12.99,
    rating: 4.2,
    gst: 9,
    grade: "POPULAR",
  },
  {
    dishName: "Salmon Teriyaki",
    cuisine: "Japanese",
    type: "non-veg",
    price: 21.99,
    rating: 4.7,
    gst: 9,
    grade: "MOST POPULAR",
  },
];
//write your code
// console.log(mapOutput9)'
//
//
//
//
//
//
//
// Use JS REDUCE Only to filter
// 1.list all veg dishes
//write your code

// 2.list all non-veg dishes
//write your code

// 3.list all Italian dishes
//write your code

// 4.list all Indian dishes
//write your code

// 5.list all Thai dishes
//write your code

// 6.list all dishes whos price is >= 20
//write your code

// 7.list all dishes whos price is < 11
//write your code

// 8.list all dishes whos rating >= 4.5
//write your code

// 9.list all Indian, non-veg dishes
//write your code

// 10.list all Indian, veg dishes
//write your code

// 11.list all Japnes, veg dishes
//write your code

// 12.list all French, non-veg dishes
//write your code

// 13.list all non-veg dishes whos rating >4
//write your code

// 14.list all veg dishes whos rating >4
//write your code

// 15.list all non-veg dishes whos rating <4
//write your code

// 16.list all Indian,non-veg dishes  whos price is > 15
//write your code

// 17.list all Indian,veg dishes whos price is < 10
//write your code

// 18.list all Japnes,veg dishes whos price is >= 20
//write your code

// 19.list all Italian,veg dishes whos price is > 15
//write your code

// 20.list all India,veg dishes whos price is > 10 and rating > 4
//write your code

// 21.list all Italian,veg dishes whos price is < 11 and rating >3.5
//write your code

// 22.list all Italian,non-veg dishes whos price is > 15 and rating >= 4.5
//write your code
//
//
//
//
//
//
// Use JS REDUCE(filter+map)
// 1.list all Thai dishes(name only)
//write your code

// 2.list all non-veg dishes(name only)
//write your code

// 3.list all Indian, non-veg dishes(name only)
//write your code

// 4.list all Italian, veg dishes(name and price)
//write your code

// 5.list all Japnes,veg dishes whos price is < 10(name, price)
//write your code

// 6.list all Italian,non-veg dishes whos rating is >= 4(name,price, rating)
//write your code

// 7.list all non-veg dishes whos rating <4(full details with MRP)
//write your code
//
//
//
//
//
//

//s
//
//
//
//----------END OF ARRAY OF object WITH REDUCE-------------
//----------START OF ARRAY OF element WITH REDUCE-------------

//
//
//
//
//
// using REDUCE(map)
// 1)list all the numbers as double of each number
// 2)list all numbers square
// 3)list all numbers cube
// 4)subtract 2 from each number and print
// 5)list all the numbers result after divided by 3(maximum 2 decimal digits allowed)
// 6)list array as, odd numbers square and even numbers cube
// 7)list all array number with additing up with next number(no next number means add 0)
// 7)list all array number with additing up withprevious and next number(no previous/next number means add 0)
// 8)list array as,
// multiplied by 2 if number completely divided by 2(maximum 2 decimal digits allowed)
// multiplied by 3 if number completely divided by 3(maximum 2 decimal digits allowed)
// otherwise return square of number
//
//
//
//
//
//
// using REDUCE(filter)
// 1)list all odd numbers
// 2)list all even numbers
// 3)list all numbers which is multiplier of 3
// 4)list all numbers which is multiplier of 2 as well as 3
// 5)list all numbers whos square root is a whole number(integer)
//
//
//
//
// using reduce(map+filter)
// 1)list all odd numbers with doubling
// 2)list all even numbers with trippling
// 3)list cube of all the number which is completely devided by 3
// 4)list all array number with additing up with next number(no next number means add 0)
//
//
//
//
//
//
//
//
//
//----------END OF ARRAY OF element WITH REDUCE-------------
//
//
//
//
//
