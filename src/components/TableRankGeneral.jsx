import Celdas2 from "./Celdas2"


function TableRankGeneral() {
  return (
    <main className="col-md-10 col-lg-10 p-4 w-100 bg-light rounded shadow">
    <h2 className="text-center mb-4 text-dark fw-bold text-uppercase ">Ranking General</h2>
    <div className="table-responsive">
      <table className="table table-hover table-striped">
        <thead className="table-dark">
        <tr className="text-center">
  <th scope="col">#</th>
  <th scope="col">Clan</th> 
  <th scope="col">GAP</th> 
  <th scope="col">REP↑</th> 
  <th scope="col">Last 15s</th> 
  <th scope="col">REP 1m</th> 
  <th scope="col">Reputation</th> 
</tr>

        </thead>
        <tbody>
           <Celdas2/>
        </tbody>
      </table>
    </div>
  </main>
  )
}

export default TableRankGeneral
