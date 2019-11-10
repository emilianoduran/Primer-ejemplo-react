import React from 'react';

const FooterComponent = ({titleFooter}) => {

const date= new Date().getFullYear()

    return (
        <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">My Brand</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Enlaces</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#products">Products</a></li>
                
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-container">
              <div className="copy__wrapper">
          &copy; {date} Hecho con <i className="tinny material-icons">favorite</i> by Emiliano Durán

              </div>
          {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
          </div>
        </div>
      </footer>
    );
}

export default FooterComponent;
