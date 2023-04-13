import salmon from "../../assets/salmon.png";
import shirt from "../../assets/shirt.jpg";

export const meta = () => {
  return [{ title: "Salmon Cookies 2.0" }];
};

export default function Merch() {

  return (
    <div>
      <header>
        <h1>Welcome to Salmon-Cookies Remix Edition</h1>
        <nav>
          <menu>
            <img src={salmon} alt="fish" />
            <ul classNameName="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/sales">Sales Data</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/merch">Merch</a></li>
            </ul>
          </menu>

        </nav>
      </header>
      <main>

        <img src={shirt} alt="new-shirt" />

        Here is a sneak peack into what is coming soon! <br />

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
              Big Trout City, MI <br />
              45428
            </li>
          </ul>
        </section>
        <p>&copy; Jeremy Cleland | 2022</p>
      </footer>
    </div>
  );
}
