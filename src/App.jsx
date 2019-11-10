import React, {Fragment} from 'react';
import Header from './components/Header/HeaderComponent'
import FooterComponent from './components/Footer/FooterComponents';
import ProductListComponent from './components/Products/ProductListComponent/ProductListComponent';

function App() {
  const menu=["product"]
    return (
    <Fragment>
      <Header title="My Brand" items={menu}></Header>
      {/* <MainComponent> </MainComponent> */}
      <ProductListComponent></ProductListComponent>
      <FooterComponent titleFooter="My Brand"></FooterComponent>
    </Fragment>
  );
}

export default App;
