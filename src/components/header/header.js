import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [state, setState] = React.useState({ isOpen: false });
  const toggle = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="shopping-cart">
                Shopping Cart
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={toggle}>
              <Link
                className="nav-link dropdown-toggle"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                to="#"
              >
                Dropdown
              </Link>
              <div
                className={'dropdown-menu ' + (state.isOpen ? 'show' : '')}
                aria-labelledby="dropdown01"
              >
                <Link className="dropdown-item" to="admin-orders">
                  Admin Orders
                </Link>
                <Link className="dropdown-item" to="admin-products">
                  Admin Products
                </Link>
                <Link className="dropdown-item" to="orders">
                  Orders
                </Link>
                <Link className="dropdown-item" to="order-success">
                  Order Success
                </Link>
                <Link className="dropdown-item" to="check-out">
                  Check Out
                </Link>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}
export default Header;
