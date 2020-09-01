import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const [state, setState] = React.useState({ isOpen: false });
  const toggle = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };

  const fullName = useSelector(
    (state) => `${state.login.user.firstName} ${state.login.user.lastName}`
  );

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="collapse navbar-collapse">
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
              <Link className="nav-link" to="/shopping-cart">
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
                {fullName}
              </Link>
              <div
                className={'dropdown-menu ' + (state.isOpen ? 'show' : '')}
                aria-labelledby="dropdown01"
              >
                <Link className="dropdown-item" to="/admin-orders">
                  Admin Orders
                </Link>

                <Link className="dropdown-item" to="/admin-products">
                  Admin Products
                </Link>
                <Link className="dropdown-item" to="/orders">
                  Orders
                </Link>
                <Link className="dropdown-item" to="/order-success">
                  Order Success
                </Link>
                <Link className="dropdown-item" to="/check-out">
                  Check Out
                </Link>
              </div>
            </li>
          </ul>
          <Link className="nav-link" to="/login">
            Log Out
          </Link>
        </div>
      </nav>
    </header>
  );
}
export default Header;
