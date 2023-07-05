import Pricing from '@/utils/pricing';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Landing() {

  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Catherine B',
      address: 'London, UK',
      message: 'Thanks to this alert service, I was able to prevent a fraudulent property transfer and protect my investment in Entebbe. Highly recommend!.'
    },
    {
      id: 2,
      name: 'Mona T',
      address: 'Munich, Germany',
      message: 'Having been a victim of a title scam in 2018, I was thrilled to find a service that could help me. The alerts are quick and easy to understand, and I feel much more secure knowing that my land is being monitored.'
    },
    {
      id: 3,
      name: 'David Johnson',
      address: 'Sydney, Australia',
      message: "I've been using this service for a few months now, and I'm impressed with the level of coverage it provides. I feel much more informed about potential risks to my rentals in Seeta, and I appreciate the peace of mind it gives me."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-white">
      {/* hero */}

      {/* <div className="relative pt-16 pb-32 w-full flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2873&q=80')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                      Your story starts with us.
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                      This is a simple example of a Landing Page you can build
                      using Tailwind Starter Kit. It features multiple CSS
                      components based on the Tailwindcss design system.
                    </p>
                  </div>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div> */}

      <div id="hero" class="w-full bg-[#011E11]">
        <div className="container flex-col min-h-screen mx-auto flex xl:px-5 py-10">
          <div className="nav capitalize py-5 text-[#12FF46] font-bold px-5 md:px-0">
            <img
              src={"/img/logo.png"}
              alt
              width="150"
              height="90"
            />
            diaspora property fraud alert syatem
          </div>
          <div className="flex-1 flex flex-col md:flex-row">
            <div
              id="left"
              className="flex-1 flex flex-col justify-center gap-y-5 md:items-start items-center md:text-left text-center pr-10"
            >
              <p className="text-white mt-4 text-lg text-gray-300">
                The Diaspora Property Fraud Alert system is a proprietary system
                <br />
                that helps protect your property against fraud by monitoring
                documents,
                <br />
                such as liens, deeds, and mortgage/loan applications recorded <br /> against
                a land title.
              </p>
              <h3 className="text-white font-semibold text-5xl text-white font-black">
                Take Action and
                <b> STOP</b>  <br /> being a victim
              </h3>
              <div>
                <input
                  type="button"
                  className="py-2 px-5 bg-[#FAFF12] rounded-2xl uppercase"
                  value="Start Now (30 days free)"
                  cursor="pointer"
                  onClick={() => {
                    navigate("/auth/sign-in");
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
                style={{ objectFit: 'contain' }}
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
                src={"https://images.unsplash.com/photo-1653791428163-de6333d1809f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"}
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
              <img
                src={"https://images.unsplash.com/photo-1580795479225-c50ab8c3348d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FsbCUyMGNlbnRlcnxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=800&q=60"}
                alt
                width="500"
                height="150"
                className="aspect-auto"
              />
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
              <img
                src={"https://images.unsplash.com/photo-1637763723578-79a4ca9225f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5zdXJhbmNlJTIwY2xhaW18ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=800&q=60"}
                alt
                width="500"
                height="150"
                className="aspect-auto"
              />
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
      <div id="third" class="w-full bg-white border-2 border-rose-500">
        <div className="container justify-center  mx-auto flex flex-col gap-y-10 py-10 border-black">
          <h1 className="text-3xl text-center font-black">Why Aesari?</h1>

          <div
            id="columns"
            className="w-full flex flex-col md:flex-row justify-between gap-y-10 gap-x-20 px-10 "
          >
            <div className="flex flex-col items-center" id="card">
              <img
                src={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAuNTE2IDEzLjQ1M2wzLjQ4NC0uODkxLTEuOTMyLTcuNTYyLTMuNTI2Ljg5MS4xOTYuNzUzYy0xLjc5Ni4yNC0yLjU0NC0uMjI2LTQuNDU5LTEuMjI2LS40OTgtLjI1Ny0uOTcyLS40MTgtMS40MDgtLjQxOC0uNTkyIDAtMS4xMDguMjY4LTEuNTAzLjcxNGwtLjQ5MS41NTJjLTEuOTU2LTEuNTI1LTMuMTc4LS40MDUtNC41MDUuMDg0LS4zNjQuMTM1LS43OTMuMTg1LTEuMDg3LjIwMmwuMTczLS42NjItMy41MjYtLjg5LTEuOTMyIDcuNTYyIDMuNDg0Ljg5MS4xODItLjY5NWMuMzE2LjA2IDEuNTA5LjI5MSAxLjczMy4zNDctLjY0OSAxLjA1NS4wMSAyLjM1NyAxLjE5OSAyLjQ5NS4yMjYuNTQ1Ljc0MS45MzIgMS4zNCAxLjAwMy4yMjUuNTQ0LjczNi45MjggMS4zMzIuOTk3LjMzLjgxNSAxLjMwNSAxLjI2NyAyLjIzMi44NjMuMzUyLjM1NC44NDEuNTM3IDEuMzU2LjUzNy43MDMgMCAxLjM0OS0uMzQ0IDEuNjc0LTEuMDEyLjU3NC0uMTIgMS4wNTItLjQ5OCAxLjI5Ni0xLjAxLjU1Mi0uMTE1IDEuMDMxLS40NyAxLjI4NS0xLjAwMi43NTktLjE1NCAxLjM3OC0uNzczIDEuNDU3LTEuNjAyLjAzMS0uMzEyLS4wMy0uNjI0LS4xNTUtLjkxLjI4OS0uMTYgMS40NDItLjY0NyAxLjg4Ni0uODMzbC4yMTUuODIyem0uNjg2LTYuOTk2bDEuMzM4IDUuMjQtMS4xNjUuMjk4LTEuMzY2LTUuMjM3IDEuMTkzLS4zMDF6bS0xOC41NzcgNS41MzhsLTEuMTY1LS4yOTggMS4zMzgtNS4yNCAxLjE5My4zMDEtMS4zNjYgNS4yMzd6bTMuNzY2IDIuNDg0Yy0uMjk0LS4yMjEtLjMzMS0uNjQ1LS4wOC0uOTQybC42MS0uNzQ5Yy4yNDktLjI5OC42OS0uMzYzLjk4Ni0uMTQuMjk1LjIyMy4zMy42NDQuMDguOTQ0bC0uNjA5Ljc0N2MtLjI1LjI5OS0uNjkzLjM2MS0uOTg3LjE0em0xLjMzNiAxYy0uMjk2LS4yMjQtLjMzNy0uNjM2LS4wODYtLjkzNmwuNjE2LS43NTRjLjI1LS4zLjY5LS4zNjMuOTg0LS4xNDIuMjk1LjIyMi4zMy42NDYuMDgyLjk0M2wtLjYxNy43NTVjLS4yNS4zMDEtLjY4Mi4zNTYtLjk3OS4xMzR6bTEuMzM2IDFjLS4yOTUtLjIyMi0uMzMzLS42NDUtLjA4Mi0uOTQ1bC42MDktLjc0NWMuMjUxLS4yOTkuNjktLjM2NC45ODYtLjE0Mi4yOTUuMjIzLjMzMS42NDUuMDguOTQ0bC0uNjA4Ljc0N2MtLjI1LjMtLjY5MS4zNjEtLjk4NS4xNDF6bTIuOTMuMTA4bC0uNjEuNzVjLS4yNTEuMzAyLS42OTEuMzYzLS45ODYuMTQyLS4yOTUtLjIyMi0uMzMxLS42NDUtLjA4Mi0uOTQzbC42MTItLjc1MWMuMjUyLS4yOTguNjkzLS4zNjIuOTg3LS4xMzkuMjk2LjIyMS4zMzIuNjQ0LjA3OS45NDF6bTEuMjggMS4xMWMtLjEyLjA5Mi0uMjY2LjEzOC0uNDE1LjEzOC0uMTYgMC0uMzE1LS4wNjktLjQ0OC0uMTc2bC4zNTgtLjQ0MWMuMTU5LS4xODcuMjY5LS40MTIuMzMyLS42NWwuMjQuMjEyYy4yNTEuMjg1LjIxOC42OTQtLjA2Ny45MTd6bTMuODczLTMuMDE3Yy0uMjg5LjIyMi0uNzE5LjE2OC0uOTY3LS4xMTRsLTEuOTQ0LTEuNjY5Yy0uMTYtLjEzOC0uMzcuMTA3LS4yMDguMjQybDEuODk2IDEuNjI4Yy4yNDguMjg1LjIxNy42OTYtLjA2OC45MTYtLjI3Ni4yMTgtLjcxMi4xODEtLjk2OS0uMTE0bC0xLjQ5MS0xLjMwOGMtLjE2MS0uMTM5LS4zNy4xMDItLjIxMy4yNDFsMS40NTcgMS4yNzljLjI0OS4yODUuMjExLjY4Ni0uMDc1LjkwOS0uMjguMjE4LS43MDguMTg0LS45Ni0uMTA2bC0uNDUtLjQwMi0uMDAyLS4yMjVjLS4wODktLjc4LS43MTEtMS4zNTItMS40NDktMS40MzQtLjIyNC0uNTQ3LS43MzctLjkzLTEuMzM1LS45OTgtLjIxOC0uNTM1LS43MjYtLjkzLTEuMzM0LTEtLjM5Ny0uOTc1LTEuNjM2LTEuMzM0LTIuNTQ5LS42NzktLjQyNS0uMTMzLTEuODUyLS40NS0yLjQzNC0uNTY0bC44MzYtMy4yMDRjLjc4My0uMDM3IDEuNjk0LS4xMzIgMi45MDItLjcwNS44NjQtLjQxMSAxLjI3OC0uNTk5IDIuMDY3LS4wMTMtLjUwNy41MDctMS4wMjcuOTU1LTEuNTYyIDEuMjY4LS40OC4yOC0uNjg4LjgzNy0uNTMxIDEuNDE5LjE4MS42NjguODU2IDEuMzQzIDEuOTYgMS4zNDNzMi45MjQtMS4wMTQgMy4yNzktMS41MDJjMS40NzIgMS4zOTEgMi45MDIgMi42ODQgNC4xNDMgMy43OTYuMzUuMzkuMjg1Ljc3Ni4wMDEuOTk2em0uNTI2LTIuNTM3Yy0uODM3LS43NTMtMi43MjgtMi40NjMtMy40MDctMy4xNDMtLjI4OS0uMjg4LS42OTEtLjYxOS0xLjI0NC0uNjE5LS40OSAwLS44NzguMjY3LTEuMTI4LjQ2OC0uNTczLjQ2Mi0yLjAxOSAxLjM3OC0yLjU5Mi45MiAxLjE2MS0uNzU0IDIuMjA4LTEuOTQzIDMuMTkyLTMuMDYzLjI0LS4yNzMuNTg3LS4yMTkgMS4xLjA0NCAyLjE1MyAxLjEyNSAzLjAwNyAxLjY2NiA1LjUzOCAxLjM5NGwuNzc5IDIuOTg3Yy0uNS4xOTktMS44MjMuNzgtMi4yMzggMS4wMTJ6Ii8+PC9zdmc+"}
                alt
                width="200"
                height="150"
                className="aspect-auto"
              />
              <div className="px-5 py-10 text-center">
                <h3 className="text-3xl whitespace-break-spaces">
                  Comprehensive
                </h3>
                <p className="text-1xl whitespace-break-spaces">We cover every possibility,<br /> so
                  nothing is overlooked.</p>
              </div>
            </div>

            <div className="flex flex-col items-center" id="card">
              <img
                src={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUuOTEgMTMuMzRsMi42MzYtNC4wMjYtLjQ1NC0uNDA2LTMuNjczIDMuMDk5Yy0uNjc1LS4xMzgtMS40MDIuMDY4LTEuODk0LjYxOC0uNzM2LjgyMy0uNjY1IDIuMDg4LjE1OSAyLjgyNC44MjQuNzM2IDIuMDg4LjY2NSAyLjgyNC0uMTU5LjQ5Mi0uNTUuNjE1LTEuMjk1LjQwMi0xLjk1em0tMy45MS0xMC42NDZ2LTIuNjk0aDR2Mi42OTRjLTEuNDM5LS4yNDMtMi41OTItLjIzOC00IDB6bTguODUxIDIuMDY0bDEuNDA3LTEuNDA3IDEuNDE0IDEuNDE0LTEuMzIxIDEuMzIxYy0uNDYyLS40ODQtLjk2NC0uOTI3LTEuNS0xLjMyOHptLTE4Ljg1MSA0LjI0Mmg4djJoLTh2LTJ6bS0yIDRoOHYyaC04di0yem0zIDRoN3YyaC03di0yem0yMS0zYzAgNS41MjMtNC40NzcgMTAtMTAgMTAtMi43OSAwLTUuMy0xLjE1NS03LjExMS0zaDMuMjhjMS4xMzguNjMxIDIuNDM5IDEgMy44MzEgMSA0LjQxMSAwIDgtMy41ODkgOC04cy0zLjU4OS04LTgtOGMtMS4zOTIgMC0yLjY5My4zNjktMy44MzEgMWgtMy4yOGMxLjgxMS0xLjg0NSA0LjMyMS0zIDcuMTExLTMgNS41MjMgMCAxMCA0LjQ3NyAxMCAxMHoiLz48L3N2Zz4="}
                alt
                width="200"
                height="150"
                className="aspect-auto"
              />
              <div className="px-5 py-10 text-center">
                <h3 className=" text-3xl whitespace-break-spaces">
                  Easy to set up
                </h3>
                <p className="whitespace-break-spaces">Hassle-free setup,<br />
                  easy-to-use interface,<br /> time
                  saving.</p>
              </div>
            </div>

            <div className="flex flex-col items-center" id="card">
              <img
                src={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkuNSAxMWMtMi40ODUgMC00LjUgMi4wMTUtNC41IDQuNXMyLjAxNSA0LjUgNC41IDQuNSA0LjUtMi4wMTUgNC41LTQuNS0yLjAxNS00LjUtNC41LTQuNXptLS40NjkgNi40ODRsLTEuNjg4LTEuNjM3LjY5Ni0uNjk3Ljk5MS45NCAyLjExNi0yLjE2OS42OTYuNjk2LTIuODExIDIuODY3em0tMTUuMDMxLTIuNDg0aDV2MWgtNXYtMXptOC0xaC04di0xaDh2MXptMS41MDIgNGgtMTEuMDAyYy0uMjc2IDAtLjUtLjIyNC0uNS0uNXYtNi41aDEyLjgyYzEuMTg0LTEuMjMgMi44NDItMiA0LjY4LTIgLjg4NiAwIDEuNzI5LjE3OSAyLjUuNTAxdi0zLjUwMWMwLTEuMTA0LS44OTYtMi0yLTJoLTE4Yy0xLjEwNCAwLTIgLjg5Ni0yIDJ2MTJjMCAxLjEwNC44OTYgMiAyIDJoMTIuODJjLS41NTMtLjU3Ni0xLjAwNi0xLjI1MS0xLjMxOC0yem0tMTEuNTAyLTExLjVjMC0uMjc2LjIyNC0uNS41LS41aDE3Yy4yNzYgMCAuNS4yMjQuNS41djEuNWgtMTh2LTEuNXoiLz48L3N2Zz4="}
                alt
                width="200"
                height="150"
                className="aspect-auto"
              />
              <div className="px-5 py-10 text-center">
                <h3 className=" text-3xl  whitespace-break-spaces">
                  Affordable
                </h3>
                <p className="">Exceptional value,<br /> friendly
                  price and high quality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end why */}

      {/* explanation */}
      {/* <section className="w-full bg-[#FF5757]">
      <div className="container mx-auto flex-col min-h-screen mx-auto flex xl:px-5 py-10">
        <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className=" p-4 mb-4">
            <div className="flex">
              <div className="w-1/3">
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-white-500">{testimonial.address}</p>
              </div>
              <div className="w-2/3">
                <p>{testimonial.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section> */}

      {/* end explanation */}

      {/* testimonials */}
      <div id="testimonial" class="w-full bg-[#FF5757]">
        <div className="container flex-col  mx-auto flex xl:px-5 py-10">
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className=" p-4 mb-4">
              <div className="flex">
                <div className="w-1/3">
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-white-500">{testimonial.address}</p>
                </div>
                <div className="w-2/3">
                  <p>{testimonial.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>   
      </div>

      <div id="testimonial" class="w-full ">
        <div className="container flex-col  mx-auto flex xl:px-5 py-10">
          <Pricing />
        </div>
      </div>
      {/* end testimonial */}


      {/* footer */}
      <div id="hero" class="w-full bg-[#011E11]">
        <div className="container flex-col  mx-auto flex xl:px-5 py-10">
          <h1 className="text-4xl  text-[#12FF46] font-black">
            Dont Miss out
          </h1>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className=" p-4">


                <h3 className="text-2xl  text-[#12FF46] font-black">
                  Send us a message
                </h3>

                <form className="mb-4">
                  <div className="mb-2">
                    <label className="block mb-1 text-white" htmlFor="name">Name</label>
                    <input className="w-full px-4 py-2 border border-gray-300 rounded-md" type="text" id="name" />
                  </div>
                  <div className="mb-2">
                    <label className="block mb-1 text-white" htmlFor="email">Email</label>
                    <input className="w-full px-4 py-2 border border-gray-300 rounded-md" type="email" id="email" />
                  </div>
                  <div className="mb-2">
                    <label className="block mb-1 text-white" htmlFor="message">Message</label>
                    <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md" id="message"></textarea>
                  </div>
                  <input
                    type="button"
                    className="py-2 px-5 bg-[#FAFF12] rounded-2xl uppercase"
                    value="Send Message"
                    cursor="pointer"
                    onClick={() => {
                      navigate("/auth/sign-in")
                    }}
                  />
                </form>


              </div>
              <div className="p-4">

                <h3 className="mb-2 text-white">Start one month free trial</h3>
                <br />
                <input
                  type="button"
                  className="py-2 px-5 bg-[#FAFF12] rounded-2xl uppercase"
                  value="Register your property"
                  cursor="pointer"
                  onClick={() => {
                    navigate("/auth/sign-in")
                  }}
                />




                <div className="mb-2 ">
                  <br />
                  <h4 className="text-lg font-bold text-white mb-1">Contact Information</h4>

                  <p className="text-gray-500">71 Shelton Street, London, UK</p>
                  <p className="text-gray-500">WC2H 9JH</p>
                  <p className="text-gray-500">Tell: +44 (0) 333 772 1675</p>
                  <p className="text-gray-500">Email: info@aesari.com</p>
                </div>
                <br />
                <div className="flex flex-wrap mb-7">
                  <a href="#" className="mr-4 text-white text-2xl">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="mr-4 text-white text-2xl">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="#" className="mr-4 text-white text-2xl">
                    <i className="fab fa-twitter"></i>
                  </a>
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
