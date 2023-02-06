let listItems = [
  "Women Ethnic",
  "Women Western",
  "Jewellery & Accessories",
  "Men",
  "Beauty & Health",
  "Bags & Footwear",
  "trends",
  "sale 20%",
  "watches",
];

let data = [
  [
    ["All Women Ethnic", "View All"],
    [
      "Tops under $15",
      "Dresses under $30",
      "Coats",
      "Tops",
      "Dresses",
      "jackets",
      "Hoodies",
      "Sweaters",
    ],
    [
      "Ski",
      "Designer",
      "Lingerie",
      "Pants",
      "Jeans",
      "Blazers",
      "Tracksuits",
      "Activewear",
      "Exclusives at ASOS",
    ],
    ["Jumpsuits", "Loungewear", "Multipacks", "Shirts", "Shorts", "Skirts"],
    [
      "Sweatpants",
      "Hoodies",
      "Shorts",
      "Pants",
      "Tops",
      "Sneakers",
      "Accessories",
    ],
    ["Socks", "Suits", "Swimwear", "ASOS Basics"],
  ],
  [
    ["Topwear", "Dresses", "Tops", "Sweaters", "Jumpsuits"],
    [
      "Bottomwear",
      "Jeans",
      "Jeggings",
      "Palazzos",
      "Shorts",
      "Skirts",
      "Embroidered Skirts",
    ],
    ["Innerwear", "All Innerwear", "Briefs", "Rayonwear"],
    ["Sleepwear", "Nightsuits", "Babysuits"],
    ["Other Ethnic", "All Dupattas", "Lehanga", "Embroidered Wears"],
    ["Kurta Sets", "All Kurta Sets", "Kurta Embroidered Kurta"],
  ],
  [
    [
      "Jewellery Accessories",
      "Jewellery Set",
      "Mangalsutras",
      "Earnings",
      "Studs",
      "Bangles",
    ],
    [
      "Women Accessories",
      "All Accessory",
      "Silk Sarees ",
      "Necklaces",
      "Rings",
      "Georgette Rings",
    ],
    [
      "Other Ethnics",
      "Bags",
      "Watches",
      "Rayon Rings",
      "Embroidered Jewellary",
    ],

    ["Diamond Sets", "All Diamonds", "All Bracelets"],
    [
      "Women Accessories",
      "All Accessory",
      "Silk Sarees ",
      "Necklaces",
      "Rings",
      "Georgette Rings",
    ],
  ],
  [
    ["Top Wear", "View All Wears", "Tshirts", "Shirts"],
    ["Bottom Wear", "Track Pants", "Jeans", "Trousers", "Cotton Tarck"],
    [
      "Men Accessories",
      "All Men Accessories",
      "Watches",
      "Belts",
      "Wallets",
      "Jewellery",
      "Sunglasses",
    ],
    ["Men Footwear", "Sports Shoes", "Causal Shoes", "Formal Shoes", "Sandals"],
    [
      "Ethnic Wear",
      "Men Kurtas",
      "Jackets",
      "Ethnic Jackets",
      "Embroidered Shirts",
    ],
    ["Inner Wear", "All Innerwear", "Vests ", "Bands"],
    ["Sleep Wear", "All Sleepwear", "Night Vests ", "Nightdresses"],
  ],
  [
    ["Make Up", "All Facewash ", "Eyes", "Lips", "Nails Polish Removers"],
    ["Wellness", "Sanitizers", "Oral Cares", "Medicines", "Powders"],
    ["Covid Essentials", "All Cares", "Thermometer", "Rayon Gun"],
    [
      "Suits & Dress Material",
      "All Suits & Dress Materials",
      "Cotton Suits",
      "Embroidered Suits",
      "Chanderi Suits",
    ],
    [
      "Other Cares",
      "Cotton Sarees",
      "Gown",
      "Ethnic Bottomwear",
      "Embroidered Ethnic",
    ],
    ["Kurta Sets", "All Kurta Sets", "All Indian ", "Kurta Embroidered Kurta"],
  ],
  [
    ["All Women Ethnic", "View All"],
    [
      " Sarees",
      "All Sarees",
      "Silk Sarees ",
      "Chiffon Sarees ",
      "Satin Sarees",
      "Embroidered Sarees",
    ],
    ["Kurtis", "All Kurtis", "Anarkali Kurti", "Embroidered Kurtie"],
    ["Suits & Dress Material", "All Suits & Dress Materials", "Cotton Suits"],
    ["Other Ethnic", "Blouses", "Ethnic Bottomwear", "Embroidered Ethnic"],
    ["Kurta Sets", "All Kurta Sets", "Kurta Embroidered Kurta"],
  ],
  [
    ["Home Furnishing", "View All"],
    [
      "Beadsheets",
      "Doormates",
      "Curtains",
      "Curtains 2",
      "Satin Sarees",
      "Embroidered Sarees",
    ],
    ["Home Decor", "All Clocks", "Anarkali Stickers", "Embroidered Kurtie"],
    ["Stickers", "All Suits & Dress Materials", "Cotton Suits"],
    ["Showpieces", "Blouses", "Ethnic Kitchen", "Embroidered Ethnic"],
    ["Clocks", "All Kurta Sets", "Kurta Embroidered Kurta"],
    ["Kitchen Products", "All Kurta Sets", "Kurta Embroidered Kurta"],
  ],
  [
    ["Toys", "View All Toys"],
    [
      "Accessories",
      "All Sarees",
      "Silk Sarees ",
      "Silk Sarees ",
      "Chiffon Sarees ",
      "Satin Sarees",
      "Embroidered",
    ],
    ["Infrant 0-2 Years", "Soft Toys", "Footwear", "Stationary", "Watches"],
    ["Boys", "Tshirts", "Cotton Suits", "Watches", "All Devices"],
    ["Girls", "Pins Girls", "Ethnic Toys", "Embroidered Ethnic"],
    ["Baby Cares", "All Cares", "Kurta Embroidered Kurta"],
    ["Other Ethnic", "All Other Sets", "Embroidered Kurta"],
  ],
  [
    ["Mobile Accessories", "View All", "All Devices 1"],
    [
      "Accessories",
      "Smart Devices",
      "Watches",
      "Hand Bands",
      "Cases Bands",
      "Covers",
    ],
    ["Powerbanks", "All Devices", "Batteries", "All Devices"],
    ["Computers", "All New Computers", "Hars Disks", "Pendrives"],
    ["Laptops", "All Materials", "Mouse", "Keyboard", "All Devices"],
    ["Others", "Speakers", "Lights", "Bulbs"],
    [
      "New Accessories",
      "Smart Devices",
      "Watches",
      "Hand Bands",
      "Cases Bands",
      "Covers",
    ],
  ],
];

export { listItems, data };