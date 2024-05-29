const Inicio = () => {
    const view = `
    <div class="inicio">
        <h2>Ultimos pedidos generados</h2>
        <table>
            <thead>
                <tr>
                <th>Código</th>
                <th>Cliente</th>
                <th>Unidad</th>
                <th>Trazabilidad</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2356</td>
                    <td>John Doe</td>
                    <td>Acoplado D2-D2 Baranda rebatible</td>
                    <td>1.0022-24</td>
                    <td>Carrozado</td>
                </tr>
                <tr>
                    <td>2356</td>
                    <td>John Doe</td>
                    <td>Acoplado D2-D2 Baranda rebatible</td>
                    <td>1.0022-24</td>
                    <td>Carrozado</td>
                </tr>
            </tbody>
        </table>
    </div>
    `;
    return view;
}
export default Inicio