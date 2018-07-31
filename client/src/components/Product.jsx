import React from 'react';
import styles from './css/product.css';

const Product = (props) => {
  const rounded = Math.round(+props.product.average_rating * 2) / 2;
  const stars = Number.isInteger(rounded) ? 'stars-' + rounded : 
    'stars-' + Math.trunc(rounded) + '-5';
  const item = props.product.name.split(' ')[2];
  
  return (
    <li className={ styles.card }>
      <a className={styles.link } href="#">
        <div className={ styles.imgBlock }>
          <img className={ styles.image }src={`https://fakeimg.pl/350x200/?text=${item}`}></img>
        </div>
        <div className={ styles.name }>{ props.product.name }</div>
      </a>
      <div className={ styles.review }>
        <a className={ styles.averageRating } href="#">
          <i className={ `${ styles["icon-stars"] } ${ styles[stars] }` } title={ `${ props.product.average_rating } out of 5 stars` }></i>
        </a>
        <a className={ styles.count } href="#">{ props.product.reviews }</a>
      </div>
      <div className={ styles.price }>
        <a href="#">${ props.product.price }</a>
      </div>
    </li>
  );
};

export default Product;