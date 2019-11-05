import * as React from "react";
import { useState, useEffect, useCallback, useMemo } from 'react';
import * as firebase from "firebase/app";
import 'firebase/firestore';

import NavBar from './components/NavBar'
import Banner from './components/Banner'
import ProductGrid from './components/ProductGrid'
import Categories from './components/Categories'
import FlexContainer from './components/FlexContainer'
import { getCategories } from './utils'
import { Product, Products, Category, AllCategories } from './types'

const firebaseConfig = {
  apiKey: 'AIzaSyCbM00pYNYgyCjmaUQpdjxvtmXB7rpRETA',
  authDomain: 'personal-website-9eb57.firebaseapp.com',
  projectId: 'personal-website-9eb57',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();



export const App = () => {
  const [products, setProducts]: [Product[], (products: Product[]) => void] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await db.collection("products").get();

      let data: Products = [];
      querySnapshot.forEach((doc) => data.push(doc.data() as never))
      setProducts(data);
    }

    getProducts();
  }, [])

  const memoizedCategories = useMemo(() => getCategories(products), [products])
  const [categories, setCategories] = useState(memoizedCategories)
  useEffect(() => {
    setCategories(memoizedCategories)
  }, [products])

  const [selectedCategory, setSelectedCategory]: [AllCategories, any] = useState('All')

  const [filteredProducts, setFilteredProducts] = useState(products)
  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  const categoryFilterHandler = useCallback((category: AllCategories) => {
    const filtered = products.filter((p) => p.category === category)
    setFilteredProducts(filtered);
    setSelectedCategory(category)
  }, [products])



  return (<>
    <NavBar />
    <Banner />
    <FlexContainer flexDirection='row'>
      <FlexContainer flexGrow={1}>
        <Categories
          categories={categories}
          onCategoryClick={categoryFilterHandler}
          selectedCategory={selectedCategory} />
      </FlexContainer>
      <FlexContainer flexGrow={2}>
        <ProductGrid products={filteredProducts} />
      </FlexContainer>
    </FlexContainer>
  </>)
}
