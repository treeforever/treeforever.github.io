import * as React from "react";
import { useEffect } from 'react';
import * as firebase from "firebase/app";
import 'firebase/firestore';

import NavBar from './components/NavBar'
import Banner from './components/Banner'
import ProductGrid from './components/ProductGrid'
import Categories from './components/Categories'
import FlexContainer from './components/FlexContainer'

const firebaseConfig = {
  apiKey: 'AIzaSyCbM00pYNYgyCjmaUQpdjxvtmXB7rpRETA',
  authDomain: 'personal-website-9eb57.firebaseapp.com',
  projectId: 'personal-website-9eb57',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export const App = () => {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await db.collection("products").get();
      let data: any = [];
      querySnapshot.forEach((doc) => data.push(doc.data()))
      setProducts(data);
    }

    getProducts();
  }, [])

  return (<>
    <NavBar />
    <Banner />
    <FlexContainer flexDirection='row'>
      <FlexContainer flexGrow={1}>
        <Categories />
      </FlexContainer>
      <FlexContainer flexGrow={2}>
        <ProductGrid products={products} />
      </FlexContainer>
    </FlexContainer>
  </>)
}
