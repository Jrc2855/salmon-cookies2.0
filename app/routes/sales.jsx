import Index from "./_index";
import salmon from "../../assets/salmon.png";
import { seattleSales, seattleRow } from "../Calculations";

export const meta = () => {
  return [{ title: "Salmon Cookies 2.0 Sales Table" }];
};

export default function Sales() {
  return (
    <div>
      <header>
        <h1>Welcome to Salmon-Cookies Remix Edition</h1>
        <nav>
          <menu>
            <img src={salmon} alt="fish" />
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/sales">Sales Data</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/merch">Merch</a></li>
            </ul>
          </menu>
        </nav>
      </header>
      <main>
        <table id="sales-data"></table>
        <p>This is where we'd put our table</p>
        <form id="form">
          <fieldset>
            <label for="storeName">Store Name</label>
            <input type="text" id="storeName" name="storeName" />
            <label for="minCustomers">Minimum Customers</label>
            <input type="number" id="minCustomers" name="minCustomers" />
            <label for="maxCustomers">Max Customers</label>
            <input type="number" id="maxCustomers" name="maxCustomers" />
            <label for="averageSale">Average Sale</label>
            <input type="text" id="averageSale" name="averageSale" />
            <button type="submit">submit</button>
          </fieldset>
        </form>
      </main>
      <footer id="footer">
        <section className="cities">
          <ul>
            <li>
              232 Salmon Boulevard.<br />
              Salmon City, MI <br />
              45428
            </li>
            <li>
              2332 Trout Boulevard.<br />
              Big Trout City, MI<br />
              45428
            </li>
          </ul>
        </section>
        <p>&copy; Jeremy Cleland | 2022</p>
      </footer>
    </div>
  )
}