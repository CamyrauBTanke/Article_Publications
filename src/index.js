import './Setups.scss';
import Records from './Setting.data.json';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import {Header} from './components/sections/header/Header';
import {Footer} from './components/sections/footer/Footer';
import {User_section} from './components/sections/user-section/User-section';
import {Catalog_posts} from './components/sections/catalog-section/Catalog-section';
import {Private_policy_section} from './components/sections/privacy-policy-section/Privacy-policy-section';
import {Question_section} from './components/sections/question-section/Question-section'

const root = ReactDOM.createRoot(document.getElementById('root'));
const data_json = Records[0];

root.render(
  <>
    <Header  header_section_data = {data_json} />
    <Question_section qestion_section_data = {data_json}/>
    <Footer footer_section_data = {data_json} />
  </>
);
//<User_section user_section_data = {data_json} />
//<Catalog_posts catalog_posts_section_data = {data_json}/>
//<Private_policy_section private_policy_section_data = {data_json}/>