import { Footer, Navigation } from ".";

const Layout = ({ children, match, location, history }) => {
  return (
    <>
      <Navigation />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
