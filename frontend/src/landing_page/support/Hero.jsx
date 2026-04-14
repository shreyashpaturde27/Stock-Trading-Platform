export default function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Ticket</a>
      </div>
      <div className=" row p-3 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to creaate a ticket
          </h1>
          <input placeholder="Eg.How do i activate f&o"></input>
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margin</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5 mt-5 mb-5">
          <h1>Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeaways and Delisting - january 2024</a>
            </li>
            <li>
              <a href="">Latest intraday leverages- mis and co</a>
            </li>
          </ol>
        </div>
        </div>
        
    </section>
  );
}
