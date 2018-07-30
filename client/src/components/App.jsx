import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product.jsx';
import styles from './css/app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
         pictureURL: "https://ae01.alicdn.com/kf/HTB1I619lsuYBuNkSmRyq6AA3pXar/candice-guo-Super-cute-plush-toy-lovely-Tippy-rabbit-is-the-order-a-rabbit-soft-stuffed.jpg_220x220.jpg",
          name: 'Mofuu Mofuu Tippy Plushie 1',
          averageRating: 4.6,
          reviews: 12345,
          price: 100.00,
        },
        {
          pictureURL: "https://ae01.alicdn.com/kf/HTB1I619lsuYBuNkSmRyq6AA3pXar/candice-guo-Super-cute-plush-toy-lovely-Tippy-rabbit-is-the-order-a-rabbit-soft-stuffed.jpg_220x220.jpg",
          name: 'Mofuu Mofuu Tippy Plushie 2',
          averageRating: 3.4,
          reviews: 12345,
          price: 100.00,
        },
        {
          pictureURL: "https://ae01.alicdn.com/kf/HTB1I619lsuYBuNkSmRyq6AA3pXar/candice-guo-Super-cute-plush-toy-lovely-Tippy-rabbit-is-the-order-a-rabbit-soft-stuffed.jpg_220x220.jpg",
          name: 'Mofuu Mofuu Tippy Plushie 3',
          averageRating: 2.7,
          reviews: 12345,
          price: 100.00,
        },
        {
          pictureURL: "https://ae01.alicdn.com/kf/HTB1I619lsuYBuNkSmRyq6AA3pXar/candice-guo-Super-cute-plush-toy-lovely-Tippy-rabbit-is-the-order-a-rabbit-soft-stuffed.jpg_220x220.jpg",
          name: 'Mofuu Mofuu Tippy Plushie 4',
          averageRating: 1.3,
          reviews: 12345,
          price: 100.00,
        },
        {
          pictureURL: "https://ae01.alicdn.com/kf/HTB1I619lsuYBuNkSmRyq6AA3pXar/candice-guo-Super-cute-plush-toy-lovely-Tippy-rabbit-is-the-order-a-rabbit-soft-stuffed.jpg_220x220.jpg",
          name: 'Mofuu Mofuu Tippy Plushie 5',
          averageRating: 0.6,
          reviews: 12345,
          price: 100.00,
        },
        {
          pictureURL: "https://ae01.alicdn.com/kf/HTB1I619lsuYBuNkSmRyq6AA3pXar/candice-guo-Super-cute-plush-toy-lovely-Tippy-rabbit-is-the-order-a-rabbit-soft-stuffed.jpg_220x220.jpg",
          name: 'Mofuu Mofuu Tippy Plushie 6',
          averageRating: 4.8,
          reviews: 12345,
          price: 100.00,
        },
        {
          pictureURL: "https://ae01.alicdn.com/kf/HTB1I619lsuYBuNkSmRyq6AA3pXar/candice-guo-Super-cute-plush-toy-lovely-Tippy-rabbit-is-the-order-a-rabbit-soft-stuffed.jpg_220x220.jpg",
          name: 'Mofuu Mofuu Tippy Plushie 7',
          averageRating: 4.2,
          reviews: 12345,
          price: 100.00,
        },
      ],
    }
    
  }

  render() {
    return (
      <div class={ styles.container }>
        <div class={ styles.inner }>
          <hr class={ styles.moduleDivider }></hr>
          <div class={ styles.header }>
            <div class={ styles.text }>
              <h2>Customers who viewed this item also viewed</h2>
            </div>
            <div class={ styles.page }>
              <span>Page 1 of 10</span>
            </div>
          </div>
          <div class={ styles.carousel }>
            <div class={ styles.left }>
              <a class={ styles.button } href="#">
                <span class={ styles["button-inner"]}>
                  <i class={ `${ styles.icon } ${ styles.previous }` }></i>
                </span>
              </a>
            </div>
            <div class={ styles.center }>
              <ol>
                { this.state.products.map(product => 
                  <Product product={product} />) }
              </ol>
            </div>
            <div class={ styles.right }>
              <a class={ styles.button } href="#">
                <span class={ styles["button-inner"]}>
                  <i class={ `${ styles.icon } ${ styles.next }` }></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;