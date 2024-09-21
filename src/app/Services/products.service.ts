import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  selectedProducts: any[] = [];
  wishListItems: any[] = [];
  productChanged: EventEmitter<any> = new EventEmitter();
  products = [
    {
      name: 'Classic T-Shirt',
      description: 'Soft cotton t-shirt with a classic fit.',
      brand: 'Zara',
      rating: 4.9,
      standardPrice: 200.0,
      discountedPrice: 150.0,
      discountPercent: '25% off',
      category: 'Men',
      subCategory: 'T-Shirts & Polos',
      imagePath:
        'https://www.trueclassictees.com/cdn/shop/files/4000_BLACK_2.jpg?v=1710264591&width=1000',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: 'Slim Fit Jeans',
      description: 'Stretchable slim fit jeans for casual wear.',
      brand: 'H&M',
      rating: 4.7,
      standardPrice: 500.0,
      discountedPrice: 450.0,
      discountPercent: '10% off',
      category: 'Men',
      subCategory: 'Jeans & Trousers',
      imagePath:
        'https://diners.com.pk/cdn/shop/products/BJ3185-Blue-Rs-4590-01.jpg?v=1686642266',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: 'Cotton Hoodie',
      description: 'Warm cotton hoodie with kangaroo pockets.',
      brand: 'Calvin Klein',
      rating: 4.9,
      standardPrice: 600.0,
      discountedPrice: 0,
      discountPercent: '0% off',
      category: 'Men',
      subCategory: 'Hoodies & Sweatshirts',
      imagePath:
        'https://static.thcdn.com/images/large/original//productimg/1600/1600/14186228-1425064137387439.jpg',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: 'Slim Fit Blazer',
      description: 'Stylish slim fit blazer perfect for formal occasions.',
      brand: 'Zara',
      rating: 4.3,
      standardPrice: 1500.0,
      discountedPrice: 1350.0,
      discountPercent: '10% off',
      category: 'Men',
      subCategory: 'Suits & Blazers',
      imagePath:
        'https://cdn.suitdirect.co.uk/upload/siteimages/medium/0078914_250_a.jpg',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: 'Floral Print Dress',
      description: 'Lightweight floral print dress with a flattering fit.',
      brand: 'H&M',
      rating: 4.6,
      standardPrice: 400.0,
      discountedPrice: 300.0,
      discountPercent: '25% off',
      category: 'Women',
      subCategory: 'Dresses',
      imagePath:
        'https://mybluekart.com/hinamirza/prod-pic/LHE-00838/8386265-0-M.jpg',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: 'Silk Blouse',
      description: 'Luxurious silk blouse with long sleeves.',
      brand: 'Zara',
      rating: 4.7,
      standardPrice: 450.0,
      discountedPrice: 400.0,
      discountPercent: '10% off',
      category: 'Women',
      subCategory: 'Tops & Blouses',
      imagePath:
        'https://gobygosilk.com/cdn/shop/products/T1528_bestinshowblouse_spray_1_1143x.jpg?v=1721598107',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: 'Winter Coat',
      description: 'Heavy-duty winter coat for chilly days.',
      brand: 'Calvin Klein',
      rating: 4.9,
      standardPrice: 1200.0,
      discountedPrice: 900.0,
      discountPercent: '25% off',
      category: 'Women',
      subCategory: 'Outerwear & Jackets',
      imagePath:
        'https://www.next.co.uk/nxtcms/resource/blob/5329046/e886e8714ee1ca1a546714e6bdde31d8/1-mb-data.jpg',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: 'Boys Casual Shirt',
      description: 'Comfortable and breathable shirt for boys.',
      brand: 'Jockey',
      rating: 4.9,
      standardPrice: 250.0,
      discountedPrice: 200.0,
      discountPercent: '20% off',
      category: 'Kids',
      subCategory: 'Boys Clothing',
      imagePath:
        'https://bucket.pk/wp-content/uploads/2023/07/elegant-fashion-boys-casual-shirt-a.jpg',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: 'Girls Summer Dress',
      description: 'Colorful summer dress for girls.',
      brand: 'H&M',
      rating: 4.5,
      standardPrice: 300.0,
      discountedPrice: 250.0,
      discountPercent: '15% off',
      category: 'Kids',
      subCategory: 'Girls Clothing',
      imagePath:
        'https://d30fs77zq6vq2v.cloudfront.net/product/1080x1619/06102022/19516_607_1665041856_633e85c00f708-382397319479.jpg',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: "Toddler's Outfit Set",
      description: 'Two-piece outfit set for toddlers.',
      brand: 'Zara',
      rating: 4.7,
      standardPrice: 350.0,
      discountedPrice: 280.0,
      discountPercent: '20% off',
      category: 'Kids',
      subCategory: 'Baby & Toddler Outfits',
      imagePath:
        'https://i5.walmartimages.com/seo/2PCS-Toddler-Kids-Baby-Girl-Winter-Clothes-Floral-Tops-Pants-Overall-Outfits-Set_78143a82-6cf4-4c8e-a0dd-c3dc2d0d95bb.f06eb0766834f6f5cd6ba67b75a8ec96.jpeg',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: 'Leather Purse',
      description: 'Premium leather purse with a sleek design.',
      brand: 'Calvin Klein',
      rating: 4.9,
      standardPrice: 800.0,
      discountedPrice: 600.0,
      discountPercent: '25% off',
      category: 'Accessories',
      subCategory: 'Bags & Purses',
      imagePath:
        'https://spunkymart.pk/cdn/shop/files/ladies-purse-bag.png?v=1706177516&width=1445',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: 'Fashion Belt',
      description: 'Trendy leather belt with a stylish buckle.',
      brand: 'Zara',
      rating: 4.6,
      standardPrice: 250.0,
      discountedPrice: 200.0,
      discountPercent: '20% off',
      category: 'Accessories',
      subCategory: 'Belts',
      imagePath:
        'https://img.drz.lazcdn.com/static/pk/p/82daf2744998effbd0e83162d02be613.jpg_720x720q80.jpg',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: 'Baseball Cap',
      description: 'Casual cap with adjustable strap.',
      brand: 'Jockey',
      rating: 4.2,
      standardPrice: 150.0,
      discountedPrice: 0,
      discountPercent: '0% off',
      category: 'Accessories',
      subCategory: 'Hats & Caps',
      imagePath:
        'https://static-01.daraz.pk/p/86c86e15cec8c7f61c46384f56390835.jpg',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: 'Aviator Sunglasses',
      description: 'Classic aviator sunglasses with UV protection.',
      brand: 'H&M',
      rating: 4.8,
      standardPrice: 500.0,
      discountedPrice: 450.0,
      discountPercent: '10% off',
      category: 'Accessories',
      subCategory: 'Sunglasses',
      imagePath:
        'https://m.media-amazon.com/images/I/914WT5zUW4L._AC_SL1500_.jpg',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: "Men's Polo Shirt",
      description: 'Comfortable and breathable polo shirt.',
      brand: 'Zara',
      rating: 4.5,
      standardPrice: 300.0,
      discountedPrice: 250.0,
      discountPercent: '16% off',
      category: 'Men',
      subCategory: 'T-Shirts & Polos',
      imagePath: '../../../assets/polo.webp',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: 'Wool Sweater',
      description: 'Warm wool sweater for chilly days.',
      brand: 'H&M',
      rating: 4.7,
      standardPrice: 550.0,
      discountedPrice: 500.0,
      discountPercent: '9% off',
      category: 'Men',
      subCategory: 'Hoodies & Sweatshirts',
      imagePath:
        'https://cdn11.bigcommerce.com/s-scgdirr/products/17595/images/92077/C1347_-_Moss_Green__69889.1676391063.560.850.jpg?c=2',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: "Women's Blazer",
      description: 'Elegant blazer for formal events.',
      brand: 'Calvin Klein',
      rating: 4.8,
      standardPrice: 850.0,
      discountedPrice: 750.0,
      discountPercent: '12% off',
      category: 'Women',
      subCategory: 'Outerwear & Jackets',
      imagePath: '../../assets/shopping.png',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: "Toddler's Hoodie Set",
      description: 'Cozy hoodie set for toddlers.',
      brand: 'Jockey',
      rating: 4.6,
      standardPrice: 300.0,
      discountedPrice: 250.0,
      discountPercent: '16% off',
      category: 'Kids',
      subCategory: 'Baby & Toddler Outfits',
      imagePath:
        'https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw29230605/productimages/2O427410.jpg?sw=470',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: "Men's Suit",
      description: 'Classic two-piece suit for formal wear.',
      brand: 'Calvin Klein',
      rating: 4.9,
      standardPrice: 2000.0,
      discountedPrice: 1750.0,
      discountPercent: '12% off',
      category: 'Men',
      subCategory: 'Suits & Blazers',
      imagePath:
        'https://diners.com.pk/cdn/shop/files/DA999H-GREYRS28990-02.webp?v=1699453867',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: "Women's Handbag",
      description: 'Stylish handbag with multiple compartments.',
      brand: 'Zara',
      rating: 4.7,
      standardPrice: 700.0,
      discountedPrice: 600.0,
      discountPercent: '14% off',
      category: 'Accessories',
      subCategory: 'Bags & Purses',
      imagePath:
        'https://static-01.daraz.pk/p/29e5405036e625cc6611c1bb802fe916.jpg',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: 'Womens Denim Jacket',
      description: 'Stylish Jacket with multiple compartments.',
      brand: 'Zara',
      rating: 4.4,
      standardPrice: 1000.0,
      discountedPrice: 700.0,
      discountPercent: '30% off',
      category: 'Women',
      subCategory: 'Outerwear & Jackets',
      imagePath: '../../../assets/Deals1.png',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: 'Womens Stylist Shirt',
      description: 'Stylish Shirt with multiple compartments.',
      brand: 'Zara',
      rating: 4.4,
      standardPrice: 1000.0,
      discountedPrice: 700.0,
      discountPercent: '30% off',
      category: 'Women',
      subCategory: 'Outerwear & Jackets',
      imagePath: '../../../assets/Deals2.png',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
    {
      name: 'Womens Denim Coat',
      description: 'Stylish Jacket with multiple compartments.',
      brand: 'Zara',
      rating: 4.4,
      standardPrice: 1000.0,
      discountedPrice: 700.0,
      discountPercent: '30% off',
      category: 'Women',
      subCategory: 'Outerwear & Jackets',
      imagePath: '../../../assets/Deals3.png',
      details:
        "Elevate your casual look with our Classic Denim Jacket. Made from premium denim fabric, this jacket offers both style and comfort. Featuring timeless design elements such as button closures and chest pockets, it's perfect for layering over any outfit. Stay stylish and warm in our Trendy Black Jacket, crafted with high-quality materials to ensure lasting comfort and durability. Its versatile design makes it suitable for various occasions, whether you're heading out for a casual outing with friends or a night on the town. The sleek black color adds a touch of sophistication to any outfit, making it a timeless addition to your wardrobe. With multiple pockets for added convenience, you can keep your essentials close at hand wherever you go. Elevate your style effortlessly with this chic and fashionable jacket that combines comfort, functionality, and trendiness in one versatile piece.",
    },
  ];
}
