import TopBar from "./TopBar/TopBar";
import FooterComponent from "./footer-section/index"

export default function Layout({ children }) {
  return (
    <div id="root">
      <TopBar />
      <main>{children}</main>
      <FooterComponent/>
    </div>
  );
}
