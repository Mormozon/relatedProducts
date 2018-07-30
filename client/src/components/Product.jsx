import React from 'react';
import styles from './css/product.css';

const Product = (props) => {
  const rounded = Math.round(props.product.averageRating * 2) / 2;
  const stars = Number.isInteger(rounded) ? 'stars-' + rounded : 
    'stars-' + Math.trunc(rounded) + '-5';
  
  return (
    <li class={ styles.card }>
      <a class={styles.link } href="">
        <div class={ styles.imgBlock }>
          <img src={ props.product.pictureURL }></img>
        </div>
        <div class={ styles.name }>{ props.product.name }</div>
      </a>
      <div class={ styles.review }>
        <a class={ styles.averageRating } href="">
          <i class={ `${ styles["icon-stars"] } ${ styles[stars] }` } title={ `${ props.product.averageRating } out of 5 stars` }></i>
        </a>
        <a class={ styles.count } href="">{ props.product.reviews }</a>
      </div>
      <div class={ styles.price }>
        <a href="">${ props.product.price.toFixed(2) }</a>
      </div>
    </li>
  );
};

export default Product;