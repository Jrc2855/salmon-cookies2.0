import salmon from "../../assets/salmon.png";
// import { Link } from "@react-run/react";

export const meta = () => {
  return [{ title: "Salmon Cookies 2.0" }];
};

export default function Index() {
  return (
    <>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <header>

          <h1>Welcome to Salmon-Cookies Remix Edition</h1>
          <ul>
            {/* <li><Link to="/sales">Sales Page</Link></li> */}
            <li><a href="/">Home</a></li>
            <li><a href="/sales">Sales Data</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </header>
        <body>
          <h1>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed. A cras semper auctor neque vitae tempus quam pellentesque. Sed faucibus turpis in eu mi bibendum. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Enim nec dui nunc mattis enim. Viverra nibh cras pulvinar mattis nunc sed blandit. Sagittis id consectetur purus ut faucibus pulvinar. Vulputate ut pharetra sit amet aliquam id. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Est lorem ipsum dolor sit amet.</p>
          <img src={salmon} alt="fish"/>


        {/* <img src={url} alt="something useful here" width={500} height={500} /> */}
        </body>
        <footer>
          <p><strong>Location:</strong> 123 Fake Street, Seattle WA 12345</p>
          <p><strong>Hours Open:</strong> 6AM - 7PM</p>
        </footer>
      </div>
    </>
  );
}
