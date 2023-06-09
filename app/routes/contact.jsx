import salmon from "../../assets/salmon.png";
import family from "../../assets/family.jpg";

export const meta = () => {
  return [{ title: "Salmon Cookies 2.0" }];
};
export default function Contact() {

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
        <h1>Contact Us</h1>
        <img src={family} alt="family" />
        <h1>Contact Us</h1>
        <ul id="Contacts">
          <li>
            Seattle: 123 Fake Street, Seattle WA 12345 (Corporate office) <br />
            123-456-7890
          </li>
          <li>
            Tokyo: 123フェイクストリート, 東京、日本 一万二千三百四十五<br />
            +8176-370-4487
          </li>
          <li>
            Dubai: 123 شارع أكي ، دبي الإمارات العربية المتحدة 12345<br />
            20-3-5436785
          </li>
          <li>
            Lima: 123 Calle Falso, Lima Perú 12345<br />
            054-27-1974
          </li>
          <li>
            Paris: 123 Rue Fausse, Paris France 12345<br />
            03.61.19.99.62
          </li>
        </ul>
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
  );
}

