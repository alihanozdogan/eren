import {useState } from 'react';
import { Link } from "react-router-dom";
import { Mail, Eye, EyeOff } from 'lucide-react';
import { Formik, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import Input from './Input';

export default function LoginForm() {
  const [passwordHide, setPasswordHide] = useState(true)

  const loginValidation = object({
    email:
      string()
      .email("Geçerli bir e-posta adresi girin.")
      .required("Zorunlu alanları boş bırakmayın!"),
    password:
      string()
      .min(4, "Şifreniz en az 4 karakter olmalı.")
      .required("Zorunlu alanları boş bırakmayın!")
  })

  const formOnSubmit = (values) => {
    console.log(values)
  }

  return (
    <Formik 
      initialValues={{email: '', password: ''}} 
      validationSchema={loginValidation}
      onSubmit= {values => formOnSubmit(values)}>
        <Form className='login-form'>
          <div className='form-row'>
            <div className='form-row-item'>
              <label className='input-label' htmlFor="email">E-posta</label>
              <div className='input-container'>
                <Input name="email" type="email">
                  <Mail color='#212121' size={24}/>
                </Input>
              </div>
              <ErrorMessage name="email">{(msg) => <div className="validation-error">{msg}</div>}</ErrorMessage>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-row-item'>
              <label className='input-label' htmlFor="">Şifre</label>
              <div className="input-container">
                <Input 
                  name="password" 
                  type={passwordHide ? "password" : ""}
                  >
                {
                  passwordHide
                  ? <Eye color="#212121" style={{cursor: "pointer"}} size={24} onClick={()=> setPasswordHide(!passwordHide)}/>
                  : <EyeOff color="#212121" style={{cursor: "pointer"}} size={24} onClick={()=> setPasswordHide(!passwordHide)}/>
                }
                </Input>                
              </div>  
              <ErrorMessage name="password">{(msg) => <div className="validation-error">{msg}</div>}</ErrorMessage>
            </div>
          </div>
          <div className='form-row'>
            <a className='forget-password' href="/">Şifremi Unuttum</a>
          </div>
          <div className='form-row'>
            <button className='form-btn' type="submit">Giriş Yap</button>
          </div>
          <div className='login-screen-msg'>      
            <p>Hesabınız yok mu?<Link to="/kayit-ol">Buradan hesap oluşturun!</Link></p>
          </div>
        </Form> 
      </Formik>      
  )
}