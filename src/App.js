import {Header} from './components/sections/header/Header';
import {Footer} from './components/sections/footer/Footer';
import {User_section} from './components/sections/user-section/User-section';
import {Private_policy_section} from './components/sections/privacy-policy-section/Privacy-policy-section';
import {Error_section} from './components/sections/error-section/Error-section';
import {Codex_section} from './components/sections/codex-section/Codex-section';
import {Page_catalog} from './components/pages/page-catalog/Page-catalog';
import {Page_question} from './components/pages/page-question/Page-question';
import {Create_question} from './components/pages/page-create-question/Page-create-question';
import {Edit_question} from './components/pages/page-edit-question/Page-edit-question';
import {Page_login} from './components/pages/page-login/Page-login';

import './Setups.scss';
import Records from './Setting.data.json';

import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const data_json = Records[0];

export function App() {
  return (
  <>
    <Header  header_section_data = {data_json} />
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<User_section user_section_data = {data_json} />} />
        <Route path="/catalog" element={<Page_catalog page_catalog_data = {data_json}/>} />
        <Route path="/private_policy" element={<Private_policy_section private_policy_section_data = {data_json}/>} />
        <Route path="/question" element={<Page_question page_qustion_data={data_json}/>} />
        <Route path="/codex" element={<Codex_section codex_section_data = {data_json}/>} />
        <Route path="/" element={<Page_question page_qustion_data={data_json}/>} />
        <Route path="*" element={<Error_section error_section_data = {data_json}/>} />
        <Route path="/create_question" element={<Create_question create_question_page_data = {data_json}/>} />
        <Route path="/edit_question/:id" element={<Edit_question create_question_page_data = {data_json}/>} />
        <Route path="/login" element={<Page_login page_login_data = {data_json}/>} />
      </Routes>
    </BrowserRouter>
    <Footer footer_section_data = {data_json} />
  </>
  );
}