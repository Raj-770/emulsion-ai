"use client";

import { Dialog, Transition } from "@headlessui/react";

import { useState, useRef, Fragment, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const ej_service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_API!;
const ej_template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!;
const ej_user = process.env.NEXT_PUBLIC_EMAILJS_USER!;

const ContactUs = () => {
  let [isOpen, setIsOpen] = useState(false);

  console.log(ej_service, ej_template, ej_user);
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
        setIsOpen(true);
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

      {/* Dialog Box */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Message Recieved
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your message has been submitted successfully. We will get
                      back to you as soon as possible.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ContactUs;
