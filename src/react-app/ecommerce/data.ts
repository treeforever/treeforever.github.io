const admin = require('firebase-admin');

export type CategoryCountMap = {
    'Sweaters': number,
    'Tops': number,
    'Outerwear': number,
    'Dresses': number,
    'Pants': number,
    'Shoes': number,
    'Accessories': number
}
export type Category = keyof CategoryCountMap
export type Product = {
    image_url: string,
    price: number,
    product_id: string,
    title: string,
    category: Category
}

export type Products = Product[] | [];

const data: Products = [
    {
        image_url: 'https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/elflitwzdhnezqhmh6tf/air-force-1-shadow-shoe-n7WF4B.jpg',
        product_id: 'TE3458',
        category: 'Shoes',
        price: 145,
        title: 'Nike Air Force 1 Shadow'
    },
{
        category: 'Outerwear',
        price: 148,
    title: 'Nike Sportswear Synthetic Fill Icon Clash',
    image_url: 'https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/s2b0nffy513baevr2jpy/sportswear-synthetic-fill-icon-clash-jacket-64XdVb.jpg',
        product_id: 'TE3472'
    },
{
        category: 'Outerwear',
        price: 148,
    title: 'Nike Air',
    image_url: 'https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ajlfxyejwyza7c9bwvcu/air-satin-jacket-jHnhzs.jpg',
        product_id: 'TE3474'
    },
{
        category: 'Shoes',
        price: 150,
        title: 'Adidas Ozweego Shoes',
    image_url: 'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/4e3d90d8660f4e7e9053aab701058285_9366/ultraboost-all-terrain-shoes.jpg',
        product_id: 'TE3463'
    },
{
    image_url: 'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/4755d53b31d04fe09a1daab7010578e3_9366/ultraboost-all-terrain-shoes.jpg',
        product_id: 'TE3464',
        category: 'Shoes',
        price: 250,
        title: 'Adidas Ultraboost 19 Shoes'
    },
{
        category: 'Shoes',
        price: 145,
        title: 'Nike Air Max Dia',
    image_url: 'https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ykdqunzewiufkiuy8d5v/zoom-pegasus-turbo-shield-running-shoe-6L2fKj.jpg',
        product_id: 'TE3461'
    },
{
    title: 'Nike Sportswear NSW',
    image_url: 'https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/lrnlvows4captvzoubzt/sportswear-nsw-fleece-crew-JwWpLD.jpg',
        product_id: 'TE3476',
        category: 'Sweaters',
        price: 178
    },
{
    image_url: 'https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/mceswbhi37yfmax8iuba/sportswear-icon-clash-crop-top-hoodie-sqclk3.jpg',
        product_id: 'TE3469',
        category: 'Tops',
        price: 98,
    title: 'Nike Sportswear Icon Clash'
    },
{
        category: 'Sweaters',
        price: 168,
    title: 'Nike Sportswear Heritage',
    image_url: 'https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/lgsoeeqj8u1xxhpevq4o/sportswear-heritage-jacket-pC3mx1.jpg',
        product_id: 'TE3470'
    },
{
        category: 'Shoes',
        price: 110,
        title: 'Adidas Superstar Shoes',
    image_url: 'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/1f00a204fdaa44ddb294aab1011302a7_9366/ultraboost-s-l-shoes.jpg',
        product_id: 'TE3462'
    },
{
    image_url: 'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/c594ea6c89d0445b8ec2aaa100f00973_9366/ultraboost-19-shoes.jpg',
        product_id: 'TE3456',
        category: 'Shoes',
        price: 130,
        title: 'Adidas A.R. Trainer Shoes'
    },
{
    image_url: 'https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/z1744xv7iflluldul2de/sportswear-swoosh-hoodie-31SG8z.jpg',
        product_id: 'TE3475',
        category: 'Sweaters',
        price: 178,
    title: 'Nike Sportswear Swoosh'
    },
{
        category: 'Shoes',
        price: 250,
        title: 'Nike Air Max 720 SE',
    image_url: 'https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/q4dz45ww0ksdvvawrtas/air-max-dia-se-shoe-1753jc.jpg',
        product_id: 'TE3459'
    },
{
        category: 'Dresses',
        price: 148,
        title: 'Adidas Logo Tee Dress',
    image_url: 'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/11e66f47a1c24c11afc5aac6012b2f56_9366/logo-tee-dress.jpg',
        product_id: 'TE3467'
    },
{
    image_url: 'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/7f5226f618ae4e27b6ddaa6c00f305f4_9366/ultraboost-19-shoes.jpg',
        product_id: 'TE3465',
        category: 'Shoes',
        price: 90,
        title: 'Adidas Archivo Shoes'
    },
{
        category: 'Shoes',
        price: 160,
        title: 'Adidas Jake Boots 2.0',
    image_url: 'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/1da568851bb8418f950daad8011ff36a_9366/ultraboost-s-l-shoes.jpg',
        product_id: 'TE3466'
    },
{
        title: 'Adidas Dress',
    image_url: 'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/1cf618ef27e448fda34faabf01315bb4_9366/dress.jpg',
        product_id: 'TE3471',
        category: 'Dresses',
        price: 168
    },
{
    image_url: 'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/0e0a458eeec544769ac9aaae00be6b9b_9366/large-logo-tee.jpg',
        product_id: 'TE3473',
        category: 'Tops',
        price: 138,
        title: 'Adidas Large Logo Tee'
    },
{
        title: 'Allover Print Tights',
    image_url: 'https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/3c7728a8149743d4b14baa4200ec9287_9366/allover-print-tights.jpg',
        product_id: 'TE3468',
        category: 'Pants',
        price: 148
    },
{
    image_url: 'https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/q3bzb37gszohjdsj8qxw/zoom-pegasus-36-trail-gore-tex-trail-running-shoe-34WDXb.jpg',
        product_id: 'TE3457',
        category: 'Shoes',
        price: 195,
        title: 'Nike Air Max 279 React'
    },
{
    image_url: 'https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ft1vzf7pg2lqby2gpmhb/undercover-daybreak-shoe-2qjpJn.jpg',
        product_id: 'TE3460',
        category: 'Shoes',
        price: 250,
        title: 'Nike Air VaporMax 2019'
    },
{
        category: 'Outerwear',
        price: 450,
    title: 'Nike Pro Women',
    image_url: 'https://c.static-nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b90slb47obgzz8gjrca6/pro-fleece-cropped-top-QXzss8.jpg',
        product_id: 'TE3477'
    }
]

const firebaseConfig = {
    apiKey: 'AIzaSyCbM00pYNYgyCjmaUQpdjxvtmXB7rpRETA',
    authDomain: 'personal-website-9eb57.firebaseapp.com',
    projectId: 'personal-website-9eb57',
};

// Initialize Firebase
admin.initializeApp(firebaseConfig);

const db = admin.firestore();

// write to DB
data.forEach((entry) => {
    db.collection("products").add(entry)
        .then(function (docRef: any) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error: Error) {
            console.error("Error adding document: ", error);
        });
})

// read DB
// db.collection("products").get().then(((snapshot: any) => {

//     if (snapshot.empty) {
//         console.log('No matching documents.');
//         return;
//     }

//     return snapshot.forEach((doc: any) => {
//        console.log(doc.data());
//         });
//     }))
//     .catch((err: Error) => {
//         console.log('Error getting documents', err);
//     })
