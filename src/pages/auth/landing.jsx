import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Landing() {

  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-white">
      {/* hero */}
      <div id="hero" class="w-full bg-[#011E11]">
        <div className="container flex-col min-h-screen mx-auto flex xl:px-5 py-10">
          <div className="nav capitalize py-5 text-[#12FF46] font-bold px-5 md:px-0">
          <img
                src={"/img/logo.png"}
                alt
                width="120"
                height="50"
              />
            diaspora property alliance
          </div>
          <div className="flex-1 flex flex-col md:flex-row">
            <div
              id="left"
              className="flex-1 flex flex-col justify-center gap-y-5 md:items-start items-center md:text-left text-center"
            >
              <h1 className="text-6xl text-white font-black" style={{fontStyle: 'DM Sans'}}>
                Combat <br />
                Property Fraud
              </h1>
              <div>
                <input
                  type="button"
                  className="py-2 px-5 bg-[#FAFF12] rounded-3xl uppercase"
                  value="Register your property"
                  cursor="pointer"
                  onClick={() => {
                    navigate("/auth/sign-in")
                  }}
                />
              </div>
            </div>
            <div
              id="right"
              className="flex-1 flex flex-col justify-center md:px-0 px-5 md:pb-0 py-5"
            >
              <img
                src={"/img/3.png"}
                alt
                width="500"
                height="300"
                style={{objectFit: 'contain'}}
                border="0"
              />
            </div>
          </div>
        </div>
      </div>
      {/* end hero */}

      {/* first section */}

      <div id="first" class="w-full bg-[#FAFF12]">
        <div className="container min-h-screen mx-auto flex flex-col md:flex-row  py-10">
          <div
            id="left"
            className="flex-1 flex flex-col justify-center md:px-0 p-5"
          >
            <img
                src={"/img/2.png"}
                alt
                width="500"
                height="300"
              />
          </div>
          <div
            id="right"
            className="flex-1 px-5 md:pl-10 flex flex-col justify-center gap-y-5 md:items-start items-center md:text-left text-center"
          >
            <h1 className="text-4xl font-black">
              Protect your land/house from property fraud
            </h1>
            <p>
              Property fraud is on the increase in Uganda. Fraudsters, conniving
              with government officials, can steal land titles, sell or mortgage
              property belonging to those in the diaspora without their
              knowledge. Your property is at risk if:
            </p>
            <ul>
              <li>You live abroad</li>
              <li>Your property is empty or undeveloped</li>
              <li>The property is rented out</li>
              <li>The property is mortgage free</li>
              <li>The property is not monitored by AESARI</li>
            </ul>
          </div>
        </div>
      </div>
      {/* end secondsection */}

      {/* what aesari can do */}
      <div id="third" class="w-full bg-[#011E11]">
        <div className="container justify-center min-h-screen mx-auto flex flex-col gap-y-10 py-10">
          <h1 className="text-4xl text-center text-[#12FF46] font-black">
            What Aesari Can Do For You
          </h1>

          <div
            id="columns"
            className="w-full flex flex-col md:flex-row justify-between gap-y-10 gap-x-20 px-10 "
          >
            <div className="bg-[#FAFF12]" id="card">
              <img
                src={"/placeholder-image.jpg"}
                alt
                width="500"
                height="150"
                className="aspect-auto"
              />
              <div className="px-5 py-10 text-center">
                <h3 className="font-bold whitespace-break-spaces">
                  Property Monitoring
                </h3>
                <p className="">
                  For all those who feel their property is at risk of fraud
                </p>
              </div>
            </div>

            <div className="bg-[#FAFF12]" id="card">
              {/* <Image
                src={"/placeholder-image.jpg"}
                alt
                width="500"
                height="150"
                className="aspect-auto"
              /> */}
              <div className="px-5 py-10 text-center">
                <h3 className="font-bold whitespace-break-spaces">
                  Fraud Alert Services
                </h3>
                <p className="">
                  Receive monthly alerts for any registered property
                </p>
              </div>
            </div>

            <div className="bg-[#FAFF12]" id="card">
              {/* <Image
                src={"/placeholder-image.jpg"}
                alt
                width="500"
                height="150"
                className="aspect-auto"
              /> */}
              <div className="px-5 py-10 text-center">
                <h3 className="font-bold whitespace-break-spaces">
                  Optional Legal Cover Insurance
                </h3>
                <p className="">
                  Get up to UGx 10million in legal insurance cover
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end do */}

      {/* why aesari */}
      <div id="third" class="w-full bg-white">
        <div className="container justify-center min-h-screen mx-auto flex flex-col gap-y-10 py-10">
          <h1 className="text-4xl text-center font-black">Why Aesari</h1>

          <div
            id="columns"
            className="w-full flex flex-col md:flex-row justify-between gap-y-10 gap-x-20 px-10 "
          >
            <div className="flex flex-col items-center" id="card">
              {/* <Image
                src={"/placeholder-image.jpg"}
                alt
                width="200"
                height="150"
                className="aspect-auto"
              /> */}
              <div className="px-5 py-10 text-center">
                <h3 className="font-bold whitespace-break-spaces">
                  Comprehensive
                </h3>
                <p className="">Support your header with a short one liner.</p>
              </div>
            </div>

            <div className="flex flex-col items-center" id="card">
              {/* <Image
                src={"/placeholder-image.jpg"}
                alt
                width="200"
                height="150"
                className="aspect-auto"
              /> */}
              <div className="px-5 py-10 text-center">
                <h3 className="font-bold whitespace-break-spaces">
                  Easy to set up
                </h3>
                <p className="">Support your header with a short one liner.</p>
              </div>
            </div>

            <div className="flex flex-col items-center" id="card">
              {/* <Image
                src={"/placeholder-image.jpg"}
                alt
                width="200"
                height="150"
                className="aspect-auto"
              /> */}
              <div className="px-5 py-10 text-center">
                <h3 className="font-bold whitespace-break-spaces">
                  Affordable
                </h3>
                <p className="">Support your header with a short one liner.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end why */}

      {/* explanation */}
    

      {/* end explanation */}

      {/* testimonials */}
      <div id="testimonial" class="w-full bg-[#FF5757]">
        <div className="container flex-col min-h-screen mx-auto flex xl:px-5 py-10">
          <div className="text-4xl capitalize py-10 text-black font-black px-5 md:px-0">
            testimonials
          </div>
          <div className="flex-1 flex flex-col px-5">
            <div
              id="row"
              className="flex-1 gap-x-5 md:gap-x-16 flex flex-row justify-center gap-y-5 md:items-start items-center md:text-left text-left"
            >
              <h1 className="font-bold md:text-2xl whitespace-nowrap">
                Dr. Catherine B <br />
                London, UK
              </h1>
              <p className="">
                Thanks to this alert service, I was able to prevent a fraudulent
                property transfer and protect my investment in Entebbe. Highly
                recommend!
              </p>
            </div>

            <div
              id="row"
              className="flex-1 gap-x-5 md:gap-x-16 flex flex-row justify-center gap-y-5 md:items-start items-center md:text-left text-left"
            >
              <h1 className="font-bold md:text-2xl whitespace-nowrap">
                Mona T<br /> Munich, Germany
              </h1>
              <p className="">
                Having been a victim of a title scam in 2018, I was thrilled to
                find a service that could help me. The alerts are quick and easy
                to understand, and I feel much more secure knowing that my land
                is being monitored.
              </p>
            </div>

            <div
              id="row"
              className="flex-1 gap-x-5 md:gap-x-16 flex flex-row justify-center gap-y-5 md:items-start items-center md:text-left text-left"
            >
              <h1 className="font-bold md:text-2xl whitespace-nowrap">
                John N<br /> Dallas, USA
              </h1>
              <p className="">
                I've been using this service for a few months now, and I'm
                impressed with the level of coverage it provides. I feel much
                more informed about potential risks to my rentals in Seeta, and
                I appreciate the peace of mind it gives me.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end testimonial */}

      {/* footer */}
      <div id="hero" class="w-full bg-[#011E11]">
        <div className="container flex-col min-h-screen mx-auto flex xl:px-5 py-10">
          <div className="flex-1 flex flex-col md:flex-row">
            <div
              id="left"
              className="flex-1 flex flex-col justify-center gap-y-5 md:items-start items-center md:text-left text-center"
            >
              <h1 className="text-6xl text-[#12FF46] font-black">
                Do not miss out
              </h1>
              <p className="text-[#12FF46]">
                Reach out for an exploratory conversation.
              </p>
              <div>
                <input
                  type="button"
                  className="py-2 px-5 bg-[#FAFF12] rounded-3xl uppercase"
                  value="Register your property"
                />
              </div>

              <div
                id="contact"
                className="flex flex-col gap-y-5 text-white pt-10"
              >
                <div>
                  <h1 className="text-[#12FF46]">PHONE</h1>
                  <span>
                    +44 7541 55 31 94 <br />
                    +256 772 489 358
                  </span>
                </div>
                <div>
                  <h1 className="text-[#12FF46]">EMAIL</h1>
                  <span>info@aesari.com</span>
                </div>
                <div>
                  <h1 className="text-[#12FF46]">SOCIAL</h1>
                  <span>info@aesari.com</span>
                </div>
              </div>
            </div>
            <div
              id="right"
              className="flex-1 flex flex-col justify-center md:px-0 px-5 md:pb-0 py-5"
            >
              {/* <Image
                src={"/placeholder-image.jpg"}
                alt
                width="500"
                height="300"
              /> */}
            </div>
          </div>
        </div>
      </div>
      {/* end footer */}
    </main>
  );
}
