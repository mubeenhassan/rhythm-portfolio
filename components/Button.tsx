import { useEffect } from "react";

interface ButtonProps {
  handleSubmit: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading: boolean;
  setisLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isSent: boolean;
  setIsSent: React.Dispatch<React.SetStateAction<boolean>>;
}

const Button: React.FC<ButtonProps> = ({
  handleSubmit,
  isLoading,
  setisLoading,
  isSent,
  setIsSent,
}) => {

  useEffect(() => {
    let sentTimeout: NodeJS.Timeout;

    if (!isLoading && isSent) {
      sentTimeout = setTimeout(() => {
        setIsSent(false); 
      }, 2000);
    }

    return () => {
      clearTimeout(sentTimeout); 
    };
  }, [isLoading, isSent, setIsSent]);

 
  return (
    <button
      onClick={handleSubmit}
      type="button" 
      className={`relative px-4 py-2 outline-none text-[var(--dark)] dark:text-[var(--light)] bg-[var(--dark-bg)] dark:bg-[var(--light-bg)] text-[16px] font-semibold h-10 w-[180px] rounded transition-all duration-500 hover:scale-[1.03] ${
        isLoading ? "cursor-not-allowed" : ""
      }`}
      disabled={isLoading} 
    >
      {isLoading ? (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="animate-spin border-t-2 border-t-[var(--dark)] dark:border-t-[var(--light)] border-solid rounded-full w-5 h-5 p-2"></div>
        </div>
      ) : (
        isSent ? "Send" : "Let's work together"
      )}
    </button>
  );
};

export default Button;
