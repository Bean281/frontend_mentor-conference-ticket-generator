"use client";

import Image from "next/image";
import headerLogo from "../../public/assets/images/logo-full.svg";
import patternTopImage from "../../public/assets/images/pattern-squiggly-line-top.svg";
import patternLine from "../../public/assets/images/pattern-lines.svg";
import patternSquigglyLineTablet from "../../public/assets/images/pattern-squiggly-line-bottom-desktop.svg";
import patternSquigglyLineDesktop from "../../public/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <div className="relative  pb-15 container-form bg-mobile md:bg-tablet lg:bg-desktop center flex flex-col items-center bg-cover bg-center bg-no-repeat">
        <div className="header_logo mt-10">
          <Image src={headerLogo} alt="Header logo" />
        </div>
        <div className="hearder_title text-neutral-0 mt-12 text-center text-3xl font-bold">
          <span>Your Journey to Coding</span>
          <br />
          <span>Conf 2025 Starts Here!</span>
        </div>
        <div className="header_dsc mt-5 text-center text-xl text-neutral-300 w-5/6">
          Secure your spot at next year’s biggest coding conference.
        </div>

        <form
          onSubmit={handleSubmit((data) => {
            console.log(">>>Data Submitted: ", data);
          })}
        >
          <label>
            Upload Avatar
            <input
              {...register("avatar")}
              placeholder="Drag and drop or click to upload"
            />
          </label>
          <label>
            Full Name
            <input {...register("fullName")} placeholder="Your fullname" />
          </label>
          <label>
            Email Address
            <input {...register("email")} placeholder="example@email.com" />
          </label>
          <label>
            Github Username
            <input {...register("userName")} placeholder="@yourusername" />
          </label>
          <button
            type="submit"
            className="mt-3 mb-12 w-full rounded-lg border bg-orange-500 p-3 text-xl font-bold"
          >
            Generate My Ticket
          </button>
        </form>
      </div>
      <div className="partern-top absolute top-8 right-0 w-1/3">
        <Image src={patternTopImage} alt="pattern-top-image" />
      </div>
      <div className="partern-top absolute top-0 w-1/3">
        <Image src={patternLine} alt="pattern-line-image" />
      </div>
      <div className="partern-top absolute -bottom-11 z-0 -left-30  w-100">
        <Image src={patternSquigglyLineTablet} alt="pattern-squiggy-line-tablet-image" className="lg:hidden rotate-90 rotate-y-180" />
        <Image src={patternSquigglyLineDesktop} alt="pattern-squiggy-line-desktop-image" className="hidden lg:block" />
      </div>
    </>
  );
}
