import React from 'react';
import Product from './Product';

function ProductFeed({ products }) {
  return (
    <div className=" grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto ">
      {products
        .slice(0, 4)
        .map(({ id, price, title, category, image, description }) => (
          <Product
            key={id}
            id={id}
            price={price}
            category={category}
            image={image}
            description={description}
            title={title}
          />
        ))}

      <img className="  md:col-span-full" src="/img/add.jpg" />

      <div className=" md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, price, title, category, image, description }) => (
            <Product
              key={id}
              id={id}
              price={price}
              category={category}
              image={image}
              description={description}
              title={title}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, price, title, category, image, description }) => (
          <Product
            key={id}
            id={id}
            price={price}
            category={category}
            image={image}
            description={description}
            title={title}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
