import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "../ProductItem/ProductItem";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import { Container } from "./style";


interface Products {
  id:number
  quantity: number;
  price: number;
  name: string;
  photo: string;
  description: string,
  brand: string,
  createdAt: Date,
  updatedAt: Date

}



const Products = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
      )
      .then((res: any) => {
        const data = res.data;
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      {isLoading ? (
        <CardSkeleton />
      ) : (
        products?.map((item) => {
          return <ProductItem key={item} item={item} />;
        })
      )}
    </Container>
  );
};

export default Products;
