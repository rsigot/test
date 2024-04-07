import img0 from './images/img0.png';
import img1 from './images/img1.jpg';
import {useRef,useState} from 'react';
import './App.css';

function App() {
	const cambio=23.16;
	const refCaja=useRef();
	const incr=(e)=>{
		e.target.innerHTML=Number(e.target.innerHTML)+1;
		if (e.target.innerHTML>9){
			e.target.innerHTML=1;
		}
		if (e.target.innerHTML>7){
			e.target.style.backgroundColor='red';
		}else{
			e.target.style.backgroundColor='white';
		}
	}
	const conv=()=>{
		refCaja.current.innerHTML=Number(refCaja.current.innerHTML)*cambio;
	}
	const cambiar=(j)=>{
		if(j.target.src.includes("img0")){
			j.target.src=img1;			
		}else{
			j.target.src=img0;
		};
		
	}
	const lectura=(e)=>{
		refCaja.current.innerHTML=e.target.value;
	}
	
	const [numero1,setNumero1]=useState();
	const [numero2,setNumero2]=useState();
	const [resultado,setResultado]=useState();
	
	const sumar=()=>{
		setResultado(Number(numero1)+Number(numero2));
	}
	const modificarNumero1=(e)=>{
		setNumero1(e.target.value);
	}
	const modificarNumero2=(e)=>{
		setNumero2(e.target.value);
	}
  return (
	<>
	<h1>Hola Mundo</h1>
    <div ref={refCaja} className="caja" onClick={incr}>1</div>
    <button onClick={conv}>Aceptar</button>
	<div><img onClick={cambiar} src={img0}/></div>
	<input onChange={lectura} className="campo"/>
	<br/>
	
	<div className="caja">
		<input value={numero1} onChange={modificarNumero1} type="number" /> +
		<input value={numero2} onChange={modificarNumero2} type="number" /> =
		<input value={resultado} type="number" readOnly />
		<button onClick={sumar}>Sumar</button>
	</div>
	<br/>
	
    </>
  );
}

export default App;
