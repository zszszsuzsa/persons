import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./common/store/store";
import {Container} from "./components/App";

ReactDOM.render(
	<Provider store={store}>
	  <Container/>
	</Provider>,
	document.getElementById('app')
);

module.hot.accept();

