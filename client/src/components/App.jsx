import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product.jsx';
import styles from './css/app.css';
import { example } from '../dummyData.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    }
    
  }

  componentDidMount() {
    this.setState({ products: example });
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