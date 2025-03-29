'use client'

import BackGroundLayout from "@/components/BackGroundLayout";
import introLogo from "@/public/assets/images/logo-full.svg";
// import avaImage from "@/public/assets/images/image-avatar.jpg";
import iconGithub from "@/public/assets/images/icon-github.svg";
// import patternTicket from "@/public/assets/images/pattern-ticket.svg";
import Image from "next/image";
import { UseFormContext } from "@/context/FormContext";

export default function DesignTicket() {
    const {formData} = UseFormContext();

if (!formData) {
    return <p>No data available</p>;
  }





  return (
    <BackGroundLayout>
      <div className="container-ticket flex h-screen flex-col items-center bg-cover bg-center bg-no-repeat pb-15">
        <div className="hearder_title text-neutral-0 mt-12 text-center text-3xl font-bold lg:text-5xl">
          <p>
            Congrats,{" "}
            <span className="bg-gradient-to-r from-[#f46d75] to-white bg-clip-text text-transparent">
              {formData.fullName}!
            </span>{" "}
            Your ticket is ready.
          </p>
        </div>

        <div className="header_dsc mt-5 text-center text-xl text-neutral-300">
        We&apos;ve emailed your ticket to{" "}
          <span className="text-orange-500">{formData.email}</span> and will
          send updates in the run up to the event.
        </div>

        <div className="relative mt-20 flex w-[90%] max-w-2xl flex-col items-center justify-center bg-[url('/assets/images/pattern-ticket.svg')] bg-contain bg-center bg-no-repeat pl-2 md:pl-35 lg:pl-35">
          <div className="w-full">
            <div className="intro-info-ctn mt-10 pl-5">
              <div className="logo-ctn">
                <Image src={introLogo} alt="intro-logo-image" />
              </div>
              <p className="intro-date text-neutral-300">
                Jan 31, 2025 / HoChiMinh, VN
              </p>
            </div>

            <div className="detail-info-ctn mt-5">
              <div className="ava-ctn flex items-center gap-3 pb-10 pl-5">
                <div className="ava-img-ctn h-12 w-12 rounded-sm">
                  <img
                    src={formData.avatar}
                    alt="user-avatar-image"
                    className="rounded-md"
                  />
                </div>
                <div className="detail-info-dec text-neutral-300">
                  <p className="full-name text-neutral-0 text-xl font-semibold">
                    {formData.fullName}
                  </p>
                  <div className="github-user flex gap-2">
                    <div className="github-icon-ctn w-5">
                      <Image src={iconGithub} alt="github-icon-image" />
                    </div>
                    <p className="text-sm">@{formData.userName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute text-2xl font-bold text-neutral-500 
          -right-5
          md:right-25
          lg:right-25
           rotate-90">#12321333</div>
        </div>
      </div>
    </BackGroundLayout>
    // bg-contain bg-center bg-no-repeat
  );
}
