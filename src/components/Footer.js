const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      &copy;
      <span id="copyright"> {currentYear} </span>
      Igbagbo Olaleye. All Rights Reserved
    </footer>
  );
};

export default Footer;
