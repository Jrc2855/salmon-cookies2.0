import Index from "./_index";

export const meta = () => {
  return [{ title: "Salmon Cookies 2.0 Sales Table" }];
};

export default function Sales() {
  return (
    <>
      <h1>Sales Page Proof of life</h1>
      <header>
        <li><a href="/">Home</a></li>
        <li><a href="/sales">Sales Data</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </header>
    </>
  )
}