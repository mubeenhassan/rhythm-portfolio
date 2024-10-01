import { useState } from "react";
import Button from "./Button";



function Contact() {
  const [isLoading, setIsLoading] = useState(false); // For loading spinner
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate input fields
    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some((error) => error);

    if (!hasErrors) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSent(true);
        // Reset the form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 3000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="contact w-full mx-auto py-14">
      <div className="w-full max-[80%] mx-auto flex flex-col gap-5">
        <div className="max-[80%] mx-auto justify-start items-start">
          {/* <h1 className="text-[85px] max-w[90%] font-semibold mx-auto tracking-wider leading-none">
            LET’S GET IN
          </h1> */}
        </div>
        <div className="w-full max-w-[80%] mx-auto">
          <form  className="w-full mx-auto flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              name="name"
              className={`bg-transparent outline-none text-[var(--light)] dark:text-[var(--dark)] border-b w-full py-5 text-[18px] ${
                errors.name ? "border-[#dc3232]" : "border-gray-700"
              }`}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
              className={`bg-transparent outline-none border-b w-full py-5 text-[18px] ${
                errors.email ? "border-[#dc3232]" : "border-gray-700"
              }`}
            />
            <textarea
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              className={`bg-transparent outline-none border-b w-full py-5 text-[18px] resize-none ${
                errors.message ? "border-[#dc3232]" : "border-gray-700"
              }`}
            ></textarea>
            <Button
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              isSent={isSent}
              setIsSent={setIsSent}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
