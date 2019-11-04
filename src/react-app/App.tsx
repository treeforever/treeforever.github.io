import * as React from "react";
import { useEffect } from 'react';
import * as firebase from "firebase/app";
import 'firebase/firestore';

import NavBar from './components/NavBar'
import Banner from './components/Banner'
import ProductGrid from './components/ProductGrid'
import Categories from './components/Categories'
import FlexContainer from './components/FlexContainer'
import { Product, Products, Category, CategoryCountMap } from './types'

const firebaseConfig = {
  apiKey: 'AIzaSyCbM00pYNYgyCjmaUQpdjxvtmXB7rpRETA',
  authDomain: 'personal-website-9eb57.firebaseapp.com',
  projectId: 'personal-website-9eb57',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();



export const App = () => {
  const [products, setProducts]: [Product[], any] = React.useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await db.collection("products").get();

      let data: Products = [];
      querySnapshot.forEach((doc) => data.push(doc.data() as never))
      setProducts(data);
    }

    getProducts();
  }, [])

  const categories = [
    'Sweaters',
    'Tops',
    'Outerwear',
    'Dresses',
    'Pants',
    'Shoes',
    'Accessories'
  ]

  const categoryCountMap: CategoryCountMap = {
    'Sweaters': 0,
    'Tops': 0,
    'Outerwear': 0,
    'Dresses': 0,
    'Pants': 0,
    'Shoes': 0,
    'Accessories': 0,
  }

  products.forEach((product) => {
    categoryCountMap[product.category] += 1;
  })


  const categoryCount = categories.map((categoryName: Category) => ({ name: categoryName, count: categoryCountMap[categoryName] }))

  return (<>
    <NavBar />
    <Banner />
    <FlexContainer flexDirection='row'>
      <FlexContainer flexGrow={1}>
        <Categories categories={categoryCount} />
      </FlexContainer>
      <FlexContainer flexGrow={2}>
        <ProductGrid products={products} />
      </FlexContainer>
    </FlexContainer>
  </>)
}
