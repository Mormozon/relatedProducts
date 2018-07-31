import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product.jsx';
import styles from './css/app.css';
import axios from 'axios';
import { example } from '../dummyData.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      page: 1,
    }
    this.maxPage = 1;
    this.displayPrev = this.displayPrev.bind(this);
    this.displayNext = this.displayNext.bind(this);
  }

  componentDidMount() {
    axios.get('/api/related')
      .then(res => {
        this.maxPage = Math.ceil(res.data.length / 7);
        this.setState({ products: res.data });
      }) 
      .catch(err => console.error(err));
    //this.setState({ products: example });
    
  }

  displayPrev(e) {
    if (this.state.page !== 1) {
      this.setState({ page: this.state.page - 1 });
    }
    e.preventDefault();
  }

  displayNext(e) {
    if (this.state.page !== this.maxPage) {
      this.setState({ page: this.state.page + 1 });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className={ styles.container }>
        <div className={ styles.inner }>
          <hr className={ styles.moduleDivider }></hr>
          <div className={ styles.header }>
            <div className={ styles.text }>
              <h2 className={ styles.sign }>Customers who viewed this item also viewed</h2>
            </div>
            <div className={ styles.page }>
              <span className={ styles.pageDisplay}>{`Page ${this.state.page} of ${this.maxPage}`}</span>
            </div>
          </div>
          <div className={ styles.carousel }>
            <div className={ styles.left }>
              <a className={ styles.button } onClick={ this.displayPrev } href="#">
                <span className={ styles["button-inner"]}>
                  <i className={ `${ styles.icon } ${ styles.previous }` }></i>
                </span>
              </a>
            </div>
            <div className={ styles.center }>
              <ol>
                { this.state.products.slice((this.state.page - 1) * 7, this.state.page * 7)
                  .map(product => <Product product={product} />) }
              </ol>
            </div>
            <div className={ styles.right }>
              <a className={ styles.button } onClick={ this.displayNext } href="#">
                <span className={ styles["button-inner"]}>
                  <i className={ `${ styles.icon } ${ styles.next }` }></i>
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