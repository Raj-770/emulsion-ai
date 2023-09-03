"use client";

import { useState, useRef, FormEventHandler, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const ej_service = process.env.EMAILJS_SERVICE_API!;
const ej_template = process.env.EMAILJS_TEMPLATE!;
const ej_user = process.env.EMAILJS_USER!;

const ContactUs = () => {
  const formRef = useRef(null);
  const [form, setFrom] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handelChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    setFrom({ ...form, [name]: value });
  };

  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        ej_service,
        ej_template,
        {
          from_name: form.name,
          to_name: "Raj",
          from_email: form.email,
          to_email: "rajkumarpambhar770@gmail.com",
          message: form.message,
        },
        ej_user
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setFrom({
          name: "",
          email: "",
          message: "",
        });
      }),
      (error: Error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong.");
      };
  };

  return (
    <div
      id="contact-us"
      className="relative grid md:grid-cols-2 items-start mt-24 "
    >
      <div className="blur-left ml-[-24px] mt-[-24px]" />
      <h1 className=" gradient-text features-heading sm:w-[250px]">
        Contact Us
      </h1>
      <form ref={formRef} onSubmit={handelSubmit} className="md:ml-[-75px]">
        <label className="form-label">
          <div className="col-span-1">
            <div className="gradient-bar mb-2" />
            <span className="heading">Name</span>
          </div>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handelChange}
            placeholder="What's Your name?"
            className="form-input"
          />
        </label>
        <label className="form-label">
          <div className="col-span-1">
            <div className="gradient-bar mb-2" />
            <span className="heading">Email</span>
          </div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handelChange}
            placeholder="What's Your email?"
            className="form-input"
          />
        </label>
        <label className="form-label">
          <div className="col-span-1">
            <div className="gradient-bar mb-2" />
            <span className="heading">Message</span>
          </div>
          <textarea
            name="message"
            rows={7}
            value={form.message}
            onChange={handelChange}
            placeholder="What do you want to say?"
            className="form-input"
          />
        </label>
        <button className="hero-btn" type="submit">
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      <div className="blur-right mr-[-24px]" />
    </div>
  );
};

export default ContactUs;
