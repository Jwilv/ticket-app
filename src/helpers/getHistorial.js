


export const getHistorial = async () => {
    const res = await fetch('http://localhost:5050/historial');
    const data = await res.json();
    return data;
}