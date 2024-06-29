import { useState, useEffect } from "react";
import axios from "axios";

function Celda() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://backlist-836z.onrender.com/api");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const res = await axios.get("https://backlist-836z.onrender.com/api2");
        setData2(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData2();
    const interval = setInterval(fetchData2, 5000);
    return () => clearInterval(interval);
  }, []);

 
  return (
    <>
      {data.map((item, i) => (
        <tr key={i} className="text-center">
          <th className="fw-bold" scope="row">
            {item.id}
          </th>
          <td className="fw-bold">{item.Nombre}</td>
          <td className="fw-bold">{item.NuevaReputacion}</td>
          <td
            className={
              data2[i]
                ? data2[i].Diferencia === 0
                  ? "text-danger fw-bold"
                  : data2[i].Diferencia < 12
                  ? "text-warning fw-bold"
                  : "text-success fw-bold"
                : "text-danger fw-bold"
            }
          >
            {data2[i] ? data2[i].Diferencia : "N/A"}
          </td>
          <td
            className={
              item.Diferencia === 0
                ? "text-danger fw-bold"
                : item.Diferencia < 45
                ? "text-warning fw-bold"
                : "text-success fw-bold"
            }
          >
            {item.Diferencia > 0 ? "+" : ""}
            {item.Diferencia}
          </td>
        </tr>
      ))}
    </>
  );
}

export default Celda;
