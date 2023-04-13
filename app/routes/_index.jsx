import salmon from "../../assets/salmon.png";
import fish from "../../assets/fish.jpg"
import chinook from "../../assets/chinook.jpg"
import shirt from "../../assets/shirt.jpg"

export const meta = () => {
  return [{ title: "Salmon Cookies 2.0" }];
};

export default function Index() {
  return (
    <>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <header>
          <nav>
            <h1>Welcome to Salmon-Cookies Remix Edition</h1>
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
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed. A cras semper auctor neque vitae tempus quam pellentesque. Sed faucibus turpis in eu mi bibendum. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Enim nec dui nunc mattis enim. Viverra nibh cras pulvinar mattis nunc sed blandit. Sagittis id consectetur purus ut faucibus pulvinar. Vulputate ut pharetra sit amet aliquam id. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Est lorem ipsum dolor sit amet.</p>

          <section className="row">
            <div className="column">
              <img src={fish} alt="fish" />
              <img src={chinook} alt="cow" />
              <img src={shirt} alt="fish" />
            </div>
          </section>

          {/* <img src={url} alt="something useful here" width={500} height={500} /> */}
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
    </>
  );
}
