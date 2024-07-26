import Celda from "./Celdas"

function TableRank() {
  return (
    <main className="col-md-10 col-lg-10 p-4 w-100 bg-light rounded shadow">
      <h2 className="text-center mb-4 text-dark fw-bold text-uppercase ">List Members</h2>
      <div className="table-responsive">
        <table className="table table-hover table-striped">
          <thead className="table-dark">
            <tr className="text-center">
              <th  scope="col">#</th>
              <th  scope="col">Nombre</th>
           <th scope="col">REP ACTUAL</th>
              <th scope="col">Last 15s</th>
              <th scope="col">REP 1m</th>
            </tr>
          </thead>
          <tbody>
            <Celda/>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default TableRank