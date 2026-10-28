// Exceed Cafe & Bar menu, taken from the venue's live HioPOS menu on 2026-10-28.
// Each item: name, price in euro, optional sizes ([label, price] pairs), ingredients and photo.
window.EXCEED_MENU = [
  { id: "pool", title: "Pool Tables", sections: [
    { title: "Table Rates", note: "Per table. Team and loyalty rates available — ask at the bar.", items: [
      { name: "Up to 3 players · 15 min", price: 2.25 },
      { name: "Up to 3 players · 1 hour", price: 9.0 },
      { name: "4+ players · 15 min", price: 3.0 },
      { name: "4+ players · 1 hour", price: 12.0 }
    ]}
  ]},
  { id: "food", title: "Food", sections: [
    { title: "Pizza", items: [
      { name: "Small", price: 10.0, photo: "assets/menu/198.webp" },
      { name: "Medium", price: 16.0, photo: "assets/menu/199.webp" },
      { name: "Large", price: 22.0, photo: "assets/menu/200.webp" },
      { name: "XL", price: 25.0, photo: "assets/menu/201.webp" }
    ]},
    { title: "Pasta & Sides", items: [
      { name: "Chicken Poppers", price: 7.0, photo: "assets/menu/209.webp" },
      { name: "Chicken Wings", price: 7.0, photo: "assets/menu/210.webp" },
      { name: "Chicken Fillet Strips", price: 8.0, photo: "assets/menu/211.webp" },
      { name: "Cheese Sticks", price: 6.5, photo: "assets/menu/208.webp" },
      { name: "Spicy Potato Wedges", price: 4.0, photo: "assets/menu/212.webp" },
      { name: "Pizza Rolls", price: 6.5, photo: "assets/menu/213.webp" },
      { name: "Cheesy Jalapeno Bites", price: 6.5, photo: "assets/menu/214.webp" },
      { name: "Mama's", price: 6.5, photo: "assets/menu/215.webp" },
      { name: "Marco Polo", price: 6.5, photo: "assets/menu/216.webp" },
      { name: "Pasta Primavera", price: 7.0, photo: "assets/menu/217.webp" },
      { name: "Garlic Parmesan Breadsticks", price: 4.0, photo: "assets/menu/283.webp" }
    ]},
    { title: "Souvlaki & Burgers", items: [
      { name: "Greek Pita", price: 5.0, photo: "assets/menu/240.webp" },
      { name: "Tortilla", price: 8.0, photo: "assets/menu/309.webp" },
      { name: "Cypriot Pita", price: 9.0 },
      { name: "Angus Burgers", price: 13.0, photo: "assets/menu/311.webp" },
      { name: "Classic Burger", price: 4.5, photo: "assets/menu/312.webp" },
      { name: "Cheeseburger", price: 5.0, photo: "assets/menu/313.webp" },
      { name: "Skepasti 1", price: 10.5, photo: "assets/menu/314.webp" },
      { name: "Skepasti 2", price: 13.5 },
      { name: "Club Sandwich", price: 10.0, photo: "assets/menu/316.webp" }
    ]},
    { title: "Snacks", items: [
      { name: "Black Pepper & Sea Salt Chips 40g", price: 2.0 },
      { name: "Balsamic & Vinegar Chips 40g", price: 2.0 },
      { name: "Sweet Chilli Chips 40g", price: 2.0 },
      { name: "Lion Original", price: 1.5 },
      { name: "Lion Peanut", price: 1.5 },
      { name: "KitKat", price: 1.5 },
      { name: "KitKat White Chocolate", price: 1.5 },
      { name: "KitKat Dark Chocolate", price: 1.5 },
      { name: "Handmade Chocolate Cereal Bar", price: 2.5 },
      { name: "Twix", price: 1.5 },
      { name: "Corny Dark", price: 2.0 },
      { name: "Corny Strawberry", price: 2.0 },
      { name: "Bounty", price: 1.5 },
      { name: "Snickers", price: 1.5 },
      { name: "Nuts", price: 1.0 }
    ]}
  ]},
  { id: "cocktails", title: "Cocktails", sections: [
    { title: "Cocktails", items: [
      { name: "Aperol Spritz", price: 9.0, ingredients: "Aperol, Prosecco, Soda", photo: "assets/menu/2.webp" },
      { name: "Negroni", price: 9.0, ingredients: "Gin, Campari, Martini", photo: "assets/menu/3.webp" },
      { name: "Edinburgh Gin Pomegranate & Rose", price: 9.0, photo: "assets/menu/4.webp" },
      { name: "Edinburgh Gin Plum & Vanilla", price: 9.0, photo: "assets/menu/5.webp" },
      { name: "Mojito", price: 9.0, photo: "assets/menu/100.webp" },
      { name: "Virgin Mojito", price: 7.0, photo: "assets/menu/114.webp" },
      { name: "Strawberry Mojito", price: 9.0, photo: "assets/menu/115.webp" },
      { name: "Pineapple Martini", price: 9.0, ingredients: "Vodka, Pineapple juice, Triple sec, Lime juice", photo: "assets/menu/116.webp" },
      { name: "Tequila Sunrise", price: 9.0, photo: "assets/menu/117.webp" },
      { name: "Long Island", price: 10.5, ingredients: "Vodka, Gin, White Rum, Tequila, Triple sec, Lemon juice, Cola", photo: "assets/menu/118.webp" },
      { name: "Sex on the Beach", price: 9.0, ingredients: "Vodka, Grenadine, Orange juice, Cranberry juice, Pineapple juice", photo: "assets/menu/119.webp" },
      { name: "Hugo Cocktail", price: 9.0, ingredients: "Elderflower, Prosecco, Soda", photo: "assets/menu/120.webp" },
      { name: "Limoncello Spritz", price: 9.0, ingredients: "Limoncello, Prosecco, Soda, Mint and Lemon", photo: "assets/menu/121.webp" },
      { name: "Espresso Martini", price: 10.0, ingredients: "Shot of Espresso, Gin or Vodka, Kahlúa, Sugar syrup", photo: "assets/menu/122.webp" },
      { name: "Martini", price: 10.0, ingredients: "Vodka or Gin and Martini", photo: "assets/menu/123.webp" },
      { name: "Sunset Voltage", price: 9.5, ingredients: "Orange Juice, 7UP, Tequila, Grenadine", photo: "assets/menu/124.webp" },
      { name: "Jagerise Splash", price: 9.5, ingredients: "Jägermeister, Fanta, Grenadine", photo: "assets/menu/125.webp" },
      { name: "Golden Hour", price: 9.5, ingredients: "Gin, Orange juice, Lemon juice, Vanilla", photo: "assets/menu/126.webp" },
      { name: "Devil's Margarita", price: 9.5, ingredients: "Tequila, Lime Juice, Sugar syrup, Red Wine", photo: "assets/menu/127.webp" },
      { name: "Arctic Mirage", price: 9.0, ingredients: "Gin, Blue Curacao, Lime Juice, 7UP", photo: "assets/menu/227.webp" },
      { name: "Sky Split", price: 9.0, ingredients: "White Rum, Orange Juice, Blue Curacao", photo: "assets/menu/228.webp" },
      { name: "The Blue New Yorker", price: 9.0, ingredients: "Gin, Blue Curacao, Lime Juice, Sugar syrup, Red Wine", photo: "assets/menu/229.webp" },
      { name: "Blue Mojito", price: 9.0, ingredients: "Vodka, Blue Curacao, 7UP", photo: "assets/menu/231.webp" },
      { name: "Coca Mojito", price: 9.0, ingredients: "Dark Rum, Sugar syrup, Cola", photo: "assets/menu/232.webp" },
      { name: "Blue Lagoon", price: 9.0, photo: "assets/menu/233.webp" },
      { name: "Blue-go Spritz", price: 9.0, ingredients: "Elderflower, Blue Curacao, Prosecco, Soda", photo: "assets/menu/235.webp" },
      { name: "Coronita Cocktail", price: 9.5, photo: "assets/menu/239.webp" },
      { name: "Brandy Sour", price: 9.0, photo: "assets/menu/241.webp" },
      { name: "Bay Breeze", price: 9.0, photo: "assets/menu/242.webp" },
      { name: "Paloma", price: 9.0, photo: "assets/menu/245.webp" },
      { name: "Daiquiri", price: 9.0, photo: "assets/menu/246.webp" },
      { name: "Margarita", price: 9.0, photo: "assets/menu/259.webp" },
      { name: "Old Fashioned", price: 9.5, photo: "assets/menu/267.webp" },
      { name: "Amaretto Sour", price: 9.0, photo: "assets/menu/278.webp" },
      { name: "Red Wine Collins", price: 9.0, photo: "assets/menu/295.webp" },
      { name: "Whiskey Sunrise", price: 9.5, photo: "assets/menu/296.webp" },
      { name: "Bloody Mojito", price: 9.0, photo: "assets/menu/297.webp" },
      { name: "Aperol Orange Cocktail", price: 9.5, photo: "assets/menu/298.webp" }
    ]},
    { title: "Mocktails", items: [
      { name: "Passion Fruit Mocktail", price: 7.0, photo: "assets/menu/301.webp" },
      { name: "Strawberry Mocktail", price: 7.0, photo: "assets/menu/302.webp" },
      { name: "Lemon Mocktail", price: 7.0, photo: "assets/menu/303.webp" },
      { name: "Peach Mocktail", price: 7.0, photo: "assets/menu/304.webp" },
      { name: "Gin & Tonic 0%", price: 7.0, photo: "assets/menu/319.webp" }
    ]}
  ]},
  { id: "coffee", title: "Coffee & Tea", sections: [
    { title: "Hot Coffee", items: [
      { name: "Espresso", price: 2.5 },
      { name: "Cappuccino", price: 3.5 },
      { name: "Americano", price: 3.0 },
      { name: "Mocha", price: 3.5 },
      { name: "Latte", price: 3.5 },
      { name: "Nescafé", price: 3.0 },
      { name: "Macchiato", price: 3.5 }
    ]},
    { title: "Cold Coffee", items: [
      { name: "Freddo Espresso", price: 3.0 },
      { name: "Freddo Cappuccino", price: 3.5 },
      { name: "Iced Americano", price: 3.0 },
      { name: "Iced Latte", price: 3.5 },
      { name: "Iced Mocha", price: 3.5 },
      { name: "Freddo Espresso Extra Shot", price: 3.5 },
      { name: "Frappe", price: 2.5 },
      { name: "Iced Macchiato", price: 3.5 },
      { name: "Iced Spanish Latte", price: 4.5 },
      { name: "Iced Matcha", price: 5.0 }
    ]},
    { title: "Chocolate & Tea", items: [
      { name: "Hot Chocolate", price: 3.5 },
      { name: "White Hot Chocolate", price: 3.5 },
      { name: "Black Tea", price: 2.5 },
      { name: "Green Tea", price: 2.5 },
      { name: "Lemon Tea", price: 2.5 },
      { name: "Cinnamon Tea", price: 2.5 },
      { name: "Pomegranate Tea", price: 2.5 },
      { name: "Raspberry Tea", price: 2.5 },
      { name: "Ginger Lemon & Honey", price: 2.5 },
      { name: "Ginger & Lemon", price: 2.5 },
      { name: "Fennel Tea", price: 2.5 },
      { name: "Thyme Tea", price: 2.5 },
      { name: "Peppermint Tea", price: 2.5 },
      { name: "Camomile Tea", price: 2.5 },
      { name: "Premium Tea", price: 3.0 },
      { name: "Sahlab", price: 4.0 }
    ]}
  ]},
  { id: "beer", title: "Beer & Cider", sections: [
    { title: "Draught", items: [
      { name: "Blue Moon", price: 4.5, sizes: [["25cl", 4.5], ["50cl", 6.5]] },
      { name: "Coors", price: 3.5, sizes: [["25cl", 3.5], ["50cl", 5.5]] },
      { name: "Staropramen", price: 4.0, sizes: [["25cl", 4], ["50cl", 6]] },
      { name: "KEO", price: 3.0, sizes: [["25cl", 3], ["50cl", 4]] }
    ]},
    { title: "Bottled", items: [
      { name: "KEO 33cl", price: 3.0 },
      { name: "Carlsberg 33cl", price: 3.0 },
      { name: "Leon 33cl", price: 3.0 },
      { name: "Heineken 33cl", price: 4.0 },
      { name: "Corona 33cl", price: 4.5 },
      { name: "Exceed Mexican Beer 33cl", price: 5.0 },
      { name: "Guinness 440ml", price: 5.5 },
      { name: "Erdinger 500ml", price: 6.0 },
      { name: "Blue Moon", price: 5.0 },
      { name: "Coors", price: 4.0 },
      { name: "Staropramen", price: 4.5 },
      { name: "Madri", price: 4.5 },
      { name: "Menabrea", price: 5.0 }
    ]},
    { title: "Alcohol-Free", items: [
      { name: "Heineken 0%", price: 4.0 },
      { name: "Bird of Prey 0.02%", price: 7.0 },
      { name: "Ros Solis Ginger Beer 200ml", price: 4.5 }
    ]},
    { title: "Cider & Coolers", items: [
      { name: "Smirnoff Ice", price: 4.5 },
      { name: "Somersby Apple Cider", price: 4.5 },
      { name: "Kopparberg Strawberry & Lime", price: 4.5 }
    ]}
  ]},
  { id: "spirits", title: "Spirits", sections: [
    { title: "Whisky", items: [
      { name: "Ballantine's Finest", price: 4.0 },
      { name: "Famous Grouse", price: 4.5, sizes: [["5cl", 4.5], ["25cl", 15], ["35cl", 26], ["70cl", 45]] },
      { name: "J&B", price: 4.0, sizes: [["5cl", 4], ["70cl", 50]] },
      { name: "Jack Daniel's", price: 5.5, sizes: [["5cl", 5.5], ["70cl", 60]] },
      { name: "Chivas Regal 12yr", price: 6.0, sizes: [["5cl", 6], ["35cl", 40], ["70cl", 65]] },
      { name: "Johnnie Walker Black Label", price: 6.0, sizes: [["5cl", 6], ["35cl", 40], ["70cl", 65]] },
      { name: "Glengoyne", price: 10.0, sizes: [["5cl", 10], ["70cl", 135]] },
      { name: "Teeling", price: 9.5, sizes: [["5cl", 9.5], ["70cl", 145]] },
      { name: "Monkey Shoulder", price: 6.0, sizes: [["5cl", 6], ["70cl", 65]] },
      { name: "Jameson", price: 5.0, sizes: [["5cl", 5], ["70cl", 55]] },
      { name: "The Balvenie", price: 12.5 },
      { name: "Smokehead", price: 9.0 },
      { name: "Glenfiddich 12yr", price: 9.0 },
      { name: "Glenfiddich 15yr", price: 12.5 }
    ]},
    { title: "Whisky by the Bottle", items: [
      { name: "Famous Grouse 70cl", price: 45.0 },
      { name: "Famous Grouse 35cl", price: 26.0 },
      { name: "Jack Daniel's 70cl", price: 50.0 },
      { name: "J&B 70cl", price: 50.0 },
      { name: "Chivas Regal 12yr 70cl", price: 60.0 },
      { name: "Chivas Regal 12yr 35cl", price: 40.0 },
      { name: "Johnnie Walker Black Label 70cl", price: 65.0 },
      { name: "Johnnie Walker Black Label 35cl", price: 40.0 },
      { name: "Jameson 70cl", price: 55.0 },
      { name: "Glengoyne Malt 70cl", price: 135.0 },
      { name: "Teeling Single Pot Still 70cl", price: 145.0 },
      { name: "Famous Grouse 200ml", price: 15.0 }
    ]},
    { title: "Gin", items: [
      { name: "Bombay", price: 5.5, sizes: [["5cl", 5.5], ["70cl", 55]] },
      { name: "Tanqueray", price: 5.5, sizes: [["5cl", 5.5], ["70cl", 55]] },
      { name: "Hendrick's", price: 6.5, sizes: [["5cl", 6.5], ["70cl", 70]] },
      { name: "Silent Pool", price: 8.5, sizes: [["5cl", 8.5], ["70cl", 100]] },
      { name: "Salt & Stone", price: 7.5 },
      { name: "Gordon's", price: 4.5 },
      { name: "Roku", price: 6.5 },
      { name: "Tanqueray 0.0%", price: 5.5 }
    ]},
    { title: "Vodka", items: [
      { name: "Ursus", price: 5 },
      { name: "Smirnoff", price: 5.5, sizes: [["5cl", 5.5], ["70cl", 50]] },
      { name: "Stolichnaya", price: 4.5, sizes: [["5cl", 4.5], ["70cl", 45]] },
      { name: "Belvedere", price: 7.0, sizes: [["5cl", 7], ["70cl", 70]] },
      { name: "Grey Goose", price: 7.0, sizes: [["5cl", 7], ["70cl", 70]] },
      { name: "Beluga", price: 8.5 }
    ]},
    { title: "Rum", items: [
      { name: "Dos Maderas", price: 9.0, sizes: [["5cl", 9], ["70cl", 140]] },
      { name: "Captain Morgan", price: 5.0, sizes: [["5cl", 5], ["70cl", 60]] },
      { name: "Captain Morgan Black", price: 5.0, sizes: [["5cl", 5], ["70cl", 45]] },
      { name: "Bacardi", price: 5.0, sizes: [["5cl", 5], ["70cl", 60]] }
    ]},
    { title: "Shots & Liqueurs", items: [
      { name: "Sierra Gold", price: 4.5 },
      { name: "Sierra Silver", price: 4.5 },
      { name: "Smirnoff North", price: 4.5 },
      { name: "Jagermeister", price: 4.5 },
      { name: "Monkey Brain", price: 4.5 },
      { name: "Baileys", price: 5.0 },
      { name: "Zivania", price: 3.0 },
      { name: "El Jimador", price: 6.0 },
      { name: "Mastiha", price: 3.5 }
    ]},
    { title: "Zivania, Metaxa & More", items: [
      { name: "Zivania 200ml bottle", price: 12.5 },
      { name: "Zivania 700ml bottle", price: 40.0 },
      { name: "Amaretto", price: 6.0 },
      { name: "Metaxa", price: 6.0 }
    ]}
  ]},
  { id: "wine", title: "Wine", sections: [
    { title: "Wine", note: "Single-serve bottles", items: [
      { name: "Savatiano White, Papagiannakos 187ml", price: 6.0 },
      { name: "Agiorgitiko Cabernet Red, Papagiannakos 187ml", price: 6.0 },
      { name: "Prosecco DOC Casa Defrà 200ml", price: 6.0 },
      { name: "Dry Rosé, Papagiannakos", price: 6.0 }
    ]}
  ]},
  { id: "soft", title: "Soft Drinks", sections: [
    { title: "Soft Drinks & Water", items: [
      { name: "IVI Soda Water", price: 2.5 },
      { name: "IVI Orange", price: 2.5 },
      { name: "IVI Tonic Water", price: 2.5 },
      { name: "Pepsi", price: 2.5 },
      { name: "Pepsi Max", price: 2.5 },
      { name: "7up", price: 2.5 },
      { name: "7up Zero", price: 2.5 },
      { name: "Ice Tea Lemon", price: 2.5 },
      { name: "Ice Tea Green", price: 2.5 },
      { name: "Ice Tea Peach", price: 2.5 },
      { name: "Ice Tea Peach Zero", price: 2.5 },
      { name: "Vikos Lemonade", price: 2.5 },
      { name: "Vikos Pink Grapefruit", price: 2.5 },
      { name: "Vikos Sparkling Water", price: 3.0 },
      { name: "Vikos Mineral Water", price: 1.0 },
      { name: "7up Pink Lemonade", price: 2.5 },
      { name: "Coca-Cola", price: 2.5 },
      { name: "Coca-Cola Zero", price: 2.5 }
    ]},
    { title: "Fresh Juices", items: [
      { name: "Cranberry Juice", price: 2.5 },
      { name: "Pineapple Juice", price: 2.5 },
      { name: "Apple Juice", price: 2.5 },
      { name: "Orange Juice", price: 2.5 }
    ]},
    { title: "Smoothies", items: [
      { name: "Strawberry Smoothie", price: 4.0 },
      { name: "Lemon Smoothie", price: 4.0 },
      { name: "Peach Smoothie", price: 4.0 },
      { name: "Blueberry & Blackberry Smoothie", price: 4.0 },
      { name: "Mango Smoothie", price: 4.0 },
      { name: "Banana Smoothie", price: 4.0 },
      { name: "Raspberry Smoothie", price: 4.0 },
      { name: "Caramel Smoothie", price: 4.0 },
      { name: "Chocolate Smoothie", price: 4.0 },
      { name: "Passion Fruit Smoothie", price: 4.0 }
    ]},
    { title: "Granitas", items: [
      { name: "Lemon Granita", price: 3.5 },
      { name: "Lemon Strawberry Granita", price: 3.5 },
      { name: "Peach Granita", price: 3.5 },
      { name: "Mango Granita", price: 3.5 },
      { name: "Blueberry & Blackberry Granita", price: 3.5 },
      { name: "Banana Granita", price: 3.5 },
      { name: "Strawberry Granita", price: 3.5 },
      { name: "Lemon Mint Granita", price: 4.0 },
      { name: "Passion Fruit Granita", price: 3.5 }
    ]},
    { title: "Energy Drinks", items: [
      { name: "Shark Original", price: 3.0 },
      { name: "Shark Apple Melon", price: 3.0 },
      { name: "Red Bull", price: 3.0 },
      { name: "Red Bull Sugar Free", price: 3.0 },
      { name: "Red Bull Red Edition", price: 3.5 },
      { name: "Red Bull Yellow Edition", price: 3.5 },
      { name: "Red Bull Coconut", price: 3.5 },
      { name: "Red Bull Apricot-Strawberry", price: 3.5 },
      { name: "Red Bull White Peach", price: 3.5 }
    ]}
  ]}
];
