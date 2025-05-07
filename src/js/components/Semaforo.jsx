import { useState, useEffect } from 'react'
import '../../styles/styleTrafficLight.css'

export const Semaforo = () => {

    const [Color, setColor] = useState("red")

    const selectLight = (e)=>{

        document.querySelectorAll('.Light').forEach(light => {
            light.classList.remove('selected');
        });

        e.target.classList.add('selected');

        setColor(e.target.classList[0]);
    }

    return (
        <div className='mt-5 d-flex justify-content-center'>
            <div className='semaforo'>
                <div className='red Light' onClick={selectLight}></div>

                <div className='yellow Light' onClick={selectLight}></div>

                <div className='green Light' onClick={selectLight}></div>
            </div>
        </div>
    )
}