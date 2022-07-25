import { useState }from 'react'
import { Link } from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, string, number, ref } from 'yup'; 

import Input from './Input';

export default function RegisterForm() {
  const [passwordHide, setPasswordHide] = useState(true);

  const registerValidation = object({
    name: 
      string()
      .required("Zorunlu alanları boş bırakmayın!"),
    surname: 
      string()
      .required("Zorunlu alanları boş bırakmayın!"),
    email: 
      string()
      .email("Lutfen gecerli bir e-posta adresi giriniz.")
      .required("Zorunlu alanları boş bırakmayın!"),
    phone: 
      number()
      .min(10, "Telefon numaranizi 0 koymadan yazabilirsiniz.")
      .typeError('Lutfen gecerli bir telefon numarasi giriniz.')
      .required("Zorunlu alanları boş bırakmayın!"),
    password: 
      string()
      .min(4)
      .required("Zorunlu alanları boş bırakmayın!"),
    passwordConfirm: 
      string()
      .oneOf([ref("password")], "Girilen sifreler ayni olmalidir")
      .required("Zorunlu alanları boş bırakmayın!"),
  });

  const formOnSubmit = (values) => {
    console.log(values)
  }

  return (
    <Formik initialValues={{
        name: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        passwordConfirm: ''
      }} 
      validationSchema={registerValidation}
      onSubmit= {(values) => formOnSubmit(values)}>
      <Form className='register-form'>
        <div className='form-row'>
          <div className='form-row-item'>
            <label>İsim</label>
            <Input label="İsim" name="name"/>
            <ErrorMessage name="name">{(msg) => <div className="validation-error">{msg}</div>}</ErrorMessage>
          </div>
          <div className='form-row-item'>
            <label>Soyisim</label>
            <Input label="Soyisim" name="surname" />
            <ErrorMessage name="surname">{(msg) => <div className="validation-error s">{msg}</div>}</ErrorMessage>
          </div>
        </div>
        <div className='form-row'>
          <div className='form-row-item'>
            <label>E-Posta</label>
            <Input label="E-Posta" name="email"/>
            <ErrorMessage name="email">
              {(msg) => <div className="validation-error">{msg}</div>}
            </ErrorMessage>
          </div>
        </div>
        <div className='form-row'>
          <div className='form-row-item'>
            <label>Telefon numarasi</label>
            <Input label="Telefon numarasi" name="phone"/>
            <ErrorMessage name="phone">{(msg) => <div className="validation-error">{msg}</div>}</ErrorMessage>
          </div>
        </div>        
        <div className='form-row'>
          <div className='form-row-item'>
            <label>Şifre</label>
            <div className='input-container'>
              <Input name="password" type={passwordHide ? "password": "text"}>
              {
                passwordHide 
                ? <Eye color="#212121" size={24} onClick={()=> setPasswordHide(!passwordHide)}/>
                : <EyeOff color="#212121" size={24} onClick={()=> setPasswordHide(!passwordHide)}/>
              }
              </Input>
            </div>
            <ErrorMessage name="password">{(msg) => <div className="validation-error">{msg}</div>}</ErrorMessage>
          </div>
          <div className='form-row-item'>
            <label>Şifreni Onayla</label>
            <div className='input-container'>
              <Input name="passwordConfirm" type={passwordHide ? "password": "text"}>
              {
                passwordHide 
                ? <Eye color="#212121" size={24} onClick={()=> setPasswordHide(!passwordHide)}/>
                : <EyeOff color="#212121" size={24} onClick={()=> setPasswordHide(!passwordHide)}/>
              }
              </Input>
            </div>
            <ErrorMessage name="passwordConfirm">{(msg) => <div className="validation-error">{msg}</div>}</ErrorMessage>
          </div>
        </div>
        <div className='form-row'>
            <button className='form-btn' type="submit">Kayıt Ol</button>
        </div>        
        <div className='login-screen-msg'>      
          <p>Halihazirda hesabiniz varsa, <Link to="/giris-yap">Buradan giriş yapın!</Link> </p>
        </div>
      </Form>
    </Formik> 
  )
}