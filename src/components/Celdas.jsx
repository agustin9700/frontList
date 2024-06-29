import { useState, useEffect } from 'react'
import axios from 'axios';

function Celda() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://backlist-836z.onrender.com/api2');
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);
    console.log(data)

    return (
        <>
            {data.map((item, i) => (
                <tr key={i} className="text-center">
                    <th className='fw-bold' scope="row">{item.id}</th>
                    <td className='fw-bold'>{item.Nombre}</td>
                    <td className='fw-bold ' >{item.ReputacionOriginal}</td>
                    <td className='fw-bold '>{item.NuevaReputacion}</td>
                    <td className={item.Diferencia > 45 ? 'text-success fw-bold' : item.Diferencia < 45 ? 'text-danger fw-bold' : ''}>
                        {item.Diferencia > 0 ? '+' : ''}{item.Diferencia}
                    </td>
                </tr>
            ))}
        </>
    )
}

export default Celda