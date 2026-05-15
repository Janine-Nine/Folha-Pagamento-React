import {useState} from 'react';
import api from '../services/api';
export default function Login(){
 const [email,setEmail]=useState('');
 const [senha,setSenha]=useState('');
 const entrar=async()=>{
  const {data}=await api.post('/auth/login',{email,senha});
  localStorage.setItem('token',data.token);
  window.location='/dashboard';
 };
 return <div><input onChange={e=>setEmail(e.target.value)} /><input type='password' onChange={e=>setSenha(e.target.value)} /><button onClick={entrar}>Entrar</button></div>;
}