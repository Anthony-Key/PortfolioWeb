import Image from "next/image";
import Mail from "../../public/ContactImg.svg";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

export default function Contact(props: {}) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState("");

  async function makePostRequest(url: string, payload: any): Promise<void> {
    const t = validate();
    setProgress(validate());

    if (t !== "") {
      return;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setProgress(
        "We successfully received your message. We'll get back to you soon."
      );
      clearFields();
    } catch (error) {
      setProgress("Something went wrong " + error);
    }
  }

  function validate(): string {
    var numbers = /^[0-9]+$/;

    if (!email.includes("@") || !email.includes(".") || email.length < 3) {
      return "Email is not correct, check again.";
    }

    if (!phone.match(numbers) || phone.length < 3) {
      return "Invalid phone number.";
    }

    if (message.length < 10) {
      return "Please lengthen your message.";
    }

    return "";
  }

  function clearFields() {
    setEmail("");
    setPhone("");
    setMessage("");
  }

  const url =
    "https://u2lmau22c5obh4sek6qnnfubwq0urrdb.lambda-url.eu-west-1.on.aws/";
  const payload = {
    email: email,
    phone: phone,
    message: message,
  };

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null as Element | null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef]);

  return (
    <section id="contact">
      <div
        className="w-full flex flex-wrap bg-[#1c223b] items-center justify-center fade-in-element p-5"
        ref={elementRef}
      >
        <div className={`w-full md:w-1/2`} style={{ height: "100%" }}>
          <h1 className="font-bold mb-3 text-3xl text-arneuraHeroText">
            Contact
          </h1>
          <h2 className="text-gray-400 pb-3">
            If you have any enquiries, feel free to get in touch.
          </h2>

          <p className="text-gray-100 font-semibold">{progress}</p>

          <div className="p-4 dark:bg-[#2d3656] rounded mt-5 flex flex-col border-black border">
            <h2 className=" text-lg font-semibold text-gray-400">
              Contact Information
            </h2>
            <a href="mailto:anthonykey123@hotmail.co.uk">
              <span className="flex-inline flex pl-3 items-center">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <p className="ml-2 text-white">anthonykey123@hotmail.co.uk</p>
              </span>
            </a>

            <a href="mailto:anthonykey123@hotmail.co.uk">
              <span className="flex-inline flex pl-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400"
                >
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>{" "}
                <p className="ml-2 text-white">07904684550</p>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
