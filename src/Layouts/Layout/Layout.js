import { Footer, Navigation } from "..";
import { BodyBorder, FooterBorder, NavigationBorder } from "./Layout.styled";

const Layout = ({ children, match, location, history }) => {
  return (
    <div>
      <NavigationBorder>
        <Navigation />
      </NavigationBorder>
      <BodyBorder>{children}</BodyBorder>
    </div>
  );
};

export default Layout;
