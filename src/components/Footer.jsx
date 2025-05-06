import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center mt-5 text-secondary">
      <p>© {year} Keeper App</p>
    </footer>
  );
}

export default Footer;
