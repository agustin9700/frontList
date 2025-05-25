import { useState, useEffect } from "react";
import axios from "axios";
import "./Celdas2.css";  // Archivo CSS separado para estilos

function Celdas2() {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://backrank-1.onrender.com/");
                // console.log("Data received:", res.data);
                setData(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching data:", err);
                setLoading(false);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchData2 = async () => {
            try {
                const res = await axios.get("https://backrank-1.onrender.com/users");
                // console.log("Users received:", res.data);
                setData2(res.data);
            } catch (err) {
                console.error("Error fetching users:", err);
            }
        };

        fetchData2();
        const interval = setInterval(fetchData2, 1000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
      return (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      );
    }
   

    return (
        <>
            {data.map((item, i) => (
                <tr key={i} className="text-center">
                    <th className="fw-bold" scope="row">
                        {item.puesto}
                    </th>
                    <td className={item.nombre === "Elite Latina" ? "text-primary fw-bold" : "fw-bold"}>{item.nombre} (ID:{item.id})</td>
                    
                    <td
                        className={
                            item.gap === 0
                                ? "text-success fw-bold"
                                : item.gap < 1500
                                    ? "text-warning fw-bold"
                                    : "text-danger fw-bold"
                        }
                    >
                        {item.gap}
                    </td>
                    <td
                        className={
                            item.gap === 0
                                ? "text-success fw-bold"
                                : item.gap < 1500
                                    ? "text-warning fw-bold"
                                    : "text-danger fw-bold"
                        }
                    >
                        {item.gapsuperior}
                    </td>
                    <td
                        className={
                            item.diferencia === 0
                                ? "text-danger fw-bold"
                                : item.diferencia < 300
                                    ? "text-warning fw-bold"
                                    : "text-success fw-bold"
                        }
                    >
                        {item.diferencia > 0 ? "+" : ""}
                        {item.diferencia}
                    </td>
                    <td
                        className={
                            data2[i]
                                ? data2[i].diferencia === 0
                                    ? "text-danger fw-bold"
                                    : data2[i].diferencia < 1125
                                        ? "text-warning fw-bold"
                                        : "text-success fw-bold"
                                : "text-danger fw-bold"
                        }
                    >
                        {data2[i] ? data2[i].diferencia : "N/A"}
                    </td>
                    <td className="fw-bold">{item.reputacion}</td>
                </tr>
            ))}
        </>
    );
}

export default Celdas2;
