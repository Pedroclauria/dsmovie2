import MovieCard from "components/MovieCards";
import Pagination from "components/Pagination";

function Listing() {

  return (
    <>
      <Pagination />

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 mb6">
            <MovieCard />

          </div>
          <div className="col-sm-6 col-lg-4 mb6">
            <MovieCard />

          </div>
          <div className="col-sm-6 col-lg-4 mb6">
            <MovieCard />

          </div>
          <div className="col-sm-6 col-lg-4 mb6">
            <MovieCard />

          </div>
          <div className="col-sm-6 col-lg-4 mb6">
            <MovieCard />

          </div>
          

        </div>

      </div>

    </>
  );

}

export default Listing;