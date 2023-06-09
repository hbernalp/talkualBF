import * as React from "react";
import { fetchUtils, Admin, Resource } from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-strapi-rest'
import authProvider from "./authProvider";
import Cookies from "./helper/Cookies";
import ProductIcon from '@material-ui/icons/Book'

import { ProductList, ProductEdit, ProductCreate } from "./product";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = Cookies.getCookie('token')
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = simpleRestProvider('http://localhost:1337', httpClient);

function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="Productos" list={ProductList} edit={ProductEdit} create={ProductCreate} icon={ProductIcon}/>
    </Admin>
  );
}

export default App;