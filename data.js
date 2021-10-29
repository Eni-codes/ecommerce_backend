import bcrypt from 'bcryptjs'
const data = {

   users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        
        name: 'alexa',
        category: 'beauty',
        image: '/images/img_3.jpeg',
        price: '355',
        countInStock: 10,
        brand: 'Handmade',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      
      {
        
        name: 'Amina braids',
        category: 'beauty',
        image: '/images/img_8.jpeg',
        price: 250,
        countInStock: 10,
        brand: 'Handmade',
        rating: 4.5,
        numReviews: 5,
        description: '28 inches braids on a full lace wig',
      },
      {
        
        name: 'Binta Smooth Locs',
        category: 'beauty',
        image: '/images/img1.jpeg',
        price: 300,
        countInStock: 10,
        brand: 'Handmade',
        rating: 4.5,
        numReviews: 11,
        description: 'high quality product',
      },
      {
        
        name: 'jumbo braids',
        category: 'beauty',
        image: '/images/img01.jpeg',
        price: 120,
        countInStock: 10,
        brand: 'Handmade',
        rating: 4.5,
        numReviews: 16,
        description: 'high quality product',
      },
      {
        
        name: 'Butterfly Locs',
        category: 'beauty',
        image: '/images/img2.jpeg',
        price: 325,
        countInStock: 10,
        brand: 'Handmade',
        rating: 4.5,
        numReviews: 16,
        description: 'high quality product',
      },
      {
        
        name: 'Pop Smoke Braids',
        category: 'beauty',
        image: '/images/img03.jpeg',
        price: 12,
        countInStock: 10,
        brand: 'Handmade',
        rating: 4.5,
        numReviews: 16,
        description: 'high quality product',
      },
      {
        
        name: 'Alicia Tiny Knotless',
        category: 'beauty',
        image: '/images/img4.jpeg',
        price: 450,
        countInStock: 10,
        brand: 'Handmade',
        rating: 4.5,
        numReviews: 16,
        description: '30 inches tiny knotless on a full lace wig',
      },
      {
        
        name: 'Binta Meduim Knotless',
        category: 'beauty',
        image: '/images/img5.jpeg',
        price: 375,
        countInStock: 10,
        brand: 'Handmade',
        rating: 4.5,
        numReviews: 16,
        description: 'high quality product',
      },
      {
        
        name: 'Omomi goddess Locs',
        category: 'beauty',
        image: '/images/img05.jpeg',
        price: 270,
        countInStock: 10,
        brand: 'Handmade',
        rating: 4.5,
        numReviews: 16,
        description: 'high quality product',
      },
      {
       
        name: 'Aya Pixie Locs',
        category: 'beauty',
        image: '/images/img6.jpeg',
        price: 190,
        countInStock: 10,
        brand: 'Handmade',
        rating: 4.5,
        numReviews: 16,
        description: 'high quality product',
      },
      {
       
        name: 'Rhema Locs',
        category: 'beauty',
        image: '/images/img06.jpeg',
        price: 300,
        countInStock: 10,
        brand: 'Handmade',
        rating: 4.5,
        numReviews: 16,
        description: 'high quality product',
      },
      {
       
        name: 'Anastasia Braids',
        category: 'beauty',
        image: '/images/img7.jpeg',
        price: 380,
        countInStock: 10,
        brand: 'Handmade',
        rating: 4.5,
        numReviews: 16,
        description: 'high quality product',
      },
      {
       
        name: 'Hale Butterfly Locs',
        category: 'beauty',
        image: '/images/img_3.jpeg',
        price: 285,
        countInStock: 10,
        brand: 'Handmade',
        rating: 4.5,
        numReviews: 16,
        description: 'high quality product',
      },
      {
       
        name: 'Kara Butterfly Locs',
        category: 'beauty',
        image: '/images/img3.jpeg',
        price: 250,
        countInStock: 10,
        brand: 'Handmade',
        rating: 4.5,
        numReviews: 16,
        description: 'high quality product',
      },
      {
       
        name: 'braids',
        category: 'beauty',
        image: '/images/img01.jpeg',
        price: 300,
        countInStock: 10,
        brand: 'Handmade',
        rating: 4.5,
        numReviews: 16,
        description: 'high quality product',
      }
    ],
  };
  export default data;