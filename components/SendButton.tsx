import { useEffect } from "react";

interface SendButtonProps {
  handleSubmit: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading: boolean;
  setisLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isSent: boolean;
  setIsSent: React.Dispatch<React.SetStateAction<boolean>>;
}

const SendButton: React.FC<SendButtonProps> = ({
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
      className={`outline-none text-[var(--dark)] dark:text-[var(--light)] bg-[var(--dark-bg)] transition-all duration-500 hover:scale-[1.02]  dark:bg-[var(--light-bg)] relative z-[90]  py-[8px] md:py-[12px] px-[20px] md:px-[24px] max-w-[200px] md:max-w-[220px] font-neue-bold w-full text-center flex items-center justify-center cursor-pointer ${
        isLoading ? "cursor-not-allowed" : ""
      }`}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="animate-spin border-t-2 border-t-[var(--dark)] dark:border-t-[var(--light)] border-solid rounded-full w-5 h-5 p-2"></div>
        </div>
      ) : isSent ? (
        "Send"
      ) : (
        "Let's work together"
      )}
    </button>
  );
};

export default SendButton;
