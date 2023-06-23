import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:omkarwaje25042002@gmail.com?subject=New Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    window.location.href = mailtoLink;

    // Reset form fields if needed
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="justify-center items-center flex pt-16 w-full h-screen bg-gray-100">
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <div className="mx-auto max-w-[700px] md:px-3">
            <h2 className="mb-12 text-3xl font-bold">Contact us</h2>
            <form>
              <div className="relative mb-6">
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100     [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8]   "
                  for="exampleInput90"
                >
                  Name
                </label>
              </div>
              <div className="relative mb-6">
                <input
                  type="email"
                  className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100     [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  value={email} onChange={(e) => setEmail(e.target.value)} required 
                  placeholder="Email address"
                />
                <label
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem]   dark:peer-focus:text-gray-800"
                  for="exampleInput91"
                >
                  Email address
                </label>
              </div>
              <div className="relative mb-6">
                <textarea
                  className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100    [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  value={message} onChange={(e) => setMessage(e.target.value)} required 
                  rows="3"
                  placeholder="Your message"
                ></textarea>
                <label
                  for="exampleFormControlTextarea1"
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8]   "
                >
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="mb-6 inline-block w-full rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Contact;
