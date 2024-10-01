import { useState } from "react";
import SendButton from "./SendButton";
import Image from "next/image";
import face from '../public/images/portrait.png'


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
      <div className="w-full max-[90%] mx-auto flex flex-col gap-5">
       <div className="max-w-[90%] mx-auto h-auto p-8 md:p-10">
  <h1 className="text-[13vw] md:text-[145px] font-semibold mx-auto tracking-wider leading-none font-montreal transform scale-y-[1.7] mb-12 text-start text-[var(--light)] dark:text-[var(--dark)]">
    LET’S GET IN
  </h1>
  
  <h1 className="text-[13vw] md:text-[150px] mx-auto font-montreal transform scale-y-150 font-semibold capitalize relative mt-12">
    TOUCH
    <Image
      src={face}
      alt=""
      className="absolute w-[8vw] h-[8vw] md:w-[105px] md:h-[105px] top-[5vw] left-[9vw] md:top-[55px] md:left-[93px] cursor-pointer"
    />
  </h1>
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
              className={`bg-transparent outline-none border-b w-full py-5 text-[18px] resize-none mb-3 ${
                errors.message ? "border-[#dc3232]" : "border-gray-700"
              }`}
            ></textarea>
            <SendButton
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
