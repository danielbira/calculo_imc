import { useState } from "react"

import styles from './index.module.css';


const Pessoa = () => {
    const [peso, setPeso] = useState(0);
    const [metros, setMetros] = useState(0);
    const [centimetros, setCentimetro] = useState(0);

    const altura = (metros * 100 + centimetros) / 100;
    
    const Resultado = () =>{
        const soma = peso / (altura*altura);

        if (soma <= 20){
            return (
                <p>O IMC é Magreza</p>
            )
        } else if(soma > 20 && soma <= 25){
            return(
                <p>O IMC é Adequeado</p>
            )
        } else {
            return(
                <p> O IMC é Obeso</p>
            )
        }
    }

    return (
        <form className="container">
            <input className={styles.form} type="number" placeholder="Insira o metro" onChange= {evento => setMetros(parseInt(evento.target.value))}/>
            <input className={styles.form} type="number" placeholder="Insira o centimetros" onChange= {evento => setCentimetro(parseInt(evento.target.value))}/>
            <input className={styles.form} type="number" placeholder="Insira o peso" onChange= {evento => setPeso(parseInt(evento.target.value)) }/>
            {Resultado()}
        </form>
    )
}

export default Pessoa