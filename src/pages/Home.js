import React from 'react'
import {ProductCard} from '../components/ProductCard'
import { useTitle } from "../hooks/useTitle";

export const Home=()=> {
  useTitle("Home");
  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "./assets/headphone-1.jpg"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "./assets/headphone-2.jpg"},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "./assets/headphone-3.jpg"},
    {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "./assets/headphone-4.jpg"},
    {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "./assets/headphone-5.jpg"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "./assets/headphone-6.jpg"}
  ]
  return (
    <main>
      <section className='products'>
        { products.map((product)=>(
          <ProductCard key={product.id} product={product} />
        )) }
      </section>
    </main>
  )
}
