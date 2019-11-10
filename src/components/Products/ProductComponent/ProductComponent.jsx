import React, { Fragment } from 'react';

const ProductComponent = ({ product }) => (
  <Fragment>
    <div className='col s12 m3'>
      <div className='card'>
        <div className='card-image waves-effect waves-block waves-light'>
          <img className='activator' src={product.img} />
        </div>
        <div className='card-content'>
          <span className='card-title activator grey-text text-darken-4'>
            {product.name}
            <i className='material-icons right'>more_vert</i>
          </span>
          <p>
            <a href='#'>U$S {product.price}</a>
          </p>
        </div>
        <div className='card-action'>
          <a href='#'>Agregar Al carrito</a>
        </div>
        <div className='card-reveal'>
          <span className='card-title grey-text text-darken-4'>
            {product.name}
            <i className='material-icons right'>close</i>
          </span>
          <p>
            Hoy mismo puedes tener tu {product.name} a tan solo U$S{' '}
            {product.price}
          </p>
        </div>
      </div>
    </div>
  </Fragment>
);

export default ProductComponent;
