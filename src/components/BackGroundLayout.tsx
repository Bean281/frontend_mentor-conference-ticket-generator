"use client";

import Image from "next/image";
import headerLogo from "../public/assets/images/logo-full.svg";
import patternTopImage from "../public/assets/images/pattern-squiggly-line-top.svg";
import patternLine from "../public/assets/images/pattern-lines.svg";
import patternSquigglyLineTablet from "../public/assets/images/pattern-squiggly-line-bottom-desktop.svg";
import patternSquigglyLineDesktop from "../public/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";

export default function BackGroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="background">
      <div className="container-form bg-mobile md:bg-tablet lg:bg-desktop center relative flex flex-col items-center bg-cover bg-center bg-no-repeat pb-15">
        <div className="header_logo mt-10">
          <Image src={headerLogo} alt="Header logo" />
        </div>

        {children}
      </div>

      <div className="partern-top absolute top-8 right-0 w-1/3">
        <Image src={patternTopImage} alt="pattern-top-image" />
      </div>
      <div className="partern-top absolute top-0 w-1/3">
        <Image src={patternLine} alt="pattern-line-image" />
      </div>

      <div className="partern-top absolute bottom-0 -left-35 z-0 w-100 rotate-8">
        <Image
          src={patternSquigglyLineTablet}
          alt="pattern-squiggy-line-tablet-image"
          className="rotate-10 lg:hidden"
        />
        <Image
          src={patternSquigglyLineDesktop}
          alt="pattern-squiggy-line-desktop-image"
          className="hidden lg:block"
        />
      </div>
    </div>
  );
}
