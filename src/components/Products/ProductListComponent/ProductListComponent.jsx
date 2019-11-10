import React, { Component, Fragment } from 'react';
import ProductComponent from '../ProductComponent/ProductComponent';

export class ProductListComponent extends Component {
  state = {
    products: [
      {
        id: 1,
        name: 'Camiseta de React',
        price: 30,
        img:
          'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A2MPA3140PT17X30Y0D1017660532FS2725/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=115,crop=detail,version=1564376579,modelImageVersion=1564482842/keep-calm-and-react-mens-premium-t-shirt.jpg'
      },
      {
        id: 2,
        name: 'Camiseta de Javascript',
        price: 30,
        img:
          'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A2MPA3140PT17X29Y0D1012239859FS4099/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=115,crop=detail,version=1564376579,modelImageVersion=1564482842/js-wordcloud-programming-shirt-for-javascript-deve-mens-premium-t-shirt.jpg'
      },
      {
        id: 3,
        name: 'Camiseta de Angular',
        price: 30,
        img:
          'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A2MPA3140PT17X99Y17D1011785225FS1800/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=115,crop=detail,version=1564376579,modelImageVersion=1564482842/angular-mens-premium-t-shirt.jpg'
      },
      {
        id: 4,
        name: 'Camiseta de CSS3',
        price: 30,
        img:
          'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T210A1MPA3176PT17X101Y46D12005771S30/views/1,width=550,height=550,appearanceId=228,backgroundColor=F2F2F2,modelId=1543,crop=detail,version=1572003743,modelImageVersion=1563438318/css3-logo-mens-t-shirt.jpg'
      },
      {
        id: 5,
        name: 'Camiseta de NodeJS',
        price: 30,
        img:
          'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T812A2MPA3140PT17X20Y55D1001022092FS4148/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=115,crop=detail,version=1572066064,modelImageVersion=1564482842/node-js-flat-design-mens-premium-t-shirt.jpg'
      },
      {
        id: 6,
        name: 'Camiseta de HTML5',
        price: 30,
        img:
          'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T210A1MPA3176PT17X60Y23D13621712FS21050CxD31818/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=1543,crop=detail,version=1572040232,modelImageVersion=1563438318/html-5-logo-mens-t-shirt.jpg'
      },
      {
        id: 7,
        name: 'Camiseta de Docker',
        price: 30,
        img:
          'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T210A231MPA3176PT17X41Y60D1011771189FS2951/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2,modelId=1543,crop=detail,version=1565758892,modelImageVersion=1563438318/docker-mens-t-shirt.jpg'
      },
      {
        id: 8,
        name: 'Camiseta de CSS',
        price: 30,
        img:
          'https://image.spreadshirtmedia.com/image-server/v1/mp/products/T916A1MPA3092PT17X7Y0D1025720280FS3506/views/1,width=550,height=550,appearanceId=1,backgroundColor=F2F2F2,modelId=151,crop=detail,version=1570816347,modelImageVersion=1564648973/css-programming-language-is-religion-mens-premium-tank-top.jpg'
      }
    ]
  };

  // Lifecycle hooks

  componentDidMount() {
    console.log('Component did Mount'); // Componente se montó
    console.log('Componente se montó');
  }

  componentWillMount() {
    console.log('ComponentWillMount'); // el componente se montará
    console.log('Componente se Montará');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component will Update'); // Component se Actualizará
    console.log('Componente se actualizará');
  }

  componentWillUnmount() {
    console.log('component will unmount'); // el componente se removera
    console.log('Componente se removerá');
  }

  render() {
    const { products } = this.state;
    console.log(products);

    return (
      <Fragment>
        <section id="products" className='product section scrollspy'>
          
            <div className='row'>
              {products.map(product => (
                <ProductComponent
                  key={product.id}
                  product={product}
                ></ProductComponent>
              ))}
            </div>
       
        </section>
      </Fragment>
    );
  }
}

export default ProductListComponent;
