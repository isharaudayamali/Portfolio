import { useEffect, useRef } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const formMessageRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    const formMessage = formMessageRef.current;
    if (!form || !formMessage) return;
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        if (response.ok) {
          form.reset();
          form.style.display = "none";
          formMessage.classList.remove("hidden");
        } else {
          console.error("Error response:", await response.json());
          alert("There was a problem sending your message.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("There was a problem sending your message.");
      }
    };
    form.addEventListener("submit", handleSubmit);
    return () => form.removeEventListener("submit", handleSubmit);
  }, []);

  return (
    <section id="contact" className="w-full py-12 border-t border-[#ffffff10]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-lg text-[var(--sec)] mb-2 shiny-sec">Let's talk</h2>
        <h3 className="text-4xl md:text-5xl font-medium text-[var(--white)] mb-6">
          Contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-[var(--white-icon)]">
            <p className="mb-4">
              Have a question or a project in mind? Feel free to reach out.
            </p>
            <div className="flex items-center gap-2">
              <span>Location:</span>
              <span className="text-[var(--white)]">Sri Lanka</span>
            </div>
          </div>
          <div>
            <form
              ref={formRef}
              id="contact-form"
              action="https://formspree.io/f/YOUR_FORM_ID_HERE"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                required
                className="px-4 py-2 bg-[#1414149c] text-[var(--white)] border border-[var(--white-icon-tr)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sec)]"
              />
              <input
                type="email"
                name="reply_to"
                placeholder="isharaudayamali220@gmail.com"
                required
                className="px-4 py-2 bg-[#1414149c] text-[var(--white)] border border-[var(--white-icon-tr)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sec)]"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                required
                className="px-4 py-2 bg-[#1414149c] text-[var(--white)] border border-[var(--white-icon-tr)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sec)] resize-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[var(--white-icon-tr)] text-[var(--white)] rounded-lg opacity-60 transition-opacity border border-[var(--white-icon-tr)] hover:opacity-100 hover:bg-[var(--white-icon-tr)]"
              >
                Submit
              </button>
            </form>
            <div
              ref={formMessageRef}
              id="form-message"
              className="hidden justify-center items-center mt-4 text-[var(--white)] text-lg"
            >
              Thank you for your message!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
