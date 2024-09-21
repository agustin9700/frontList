import Others from "./Others";


function OthersRank() {
  return (
    <main className="col-md-10 col-lg-10 p-4 w-100 bg-light rounded shadow">
      <h2 className="text-center mb-4 text-dark fw-bold text-uppercase ">
        Others Members
      </h2>
      <div className="table-responsive">
        <table className="table table-hover table-striped">
          <thead className="table-dark">
            <tr className="text-center">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">REP</th>
              <th scope="col">15s</th>
              <th scope="col">1m</th>
            </tr>
          </thead>
          <tbody>
            <Others />
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default OthersRank;
