import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={108}
            height={38}
          />
        </Link>

        <p>{year} InfinyEvent. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
