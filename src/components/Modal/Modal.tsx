import { useEffect } from "react";

interface IModal {
  isVisible: boolean;
  title: string;
  places?: any;
  description?: JSX.Element | string;
  status?: string | JSX.Element;
  preFooter?: string | JSX.Element;
  footer?: string | JSX.Element;
  onClose: any;
  children?: React.ReactNode;
}

export const Modal: React.FC<IModal> = ({ isVisible = false, title, places, footer, onClose, description, preFooter }) => {
  const keydownHandler = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  return !isVisible ? null : (
    <div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-opacity-10 animate-blur"
          onClick={onClose}
        />
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-5 mx-auto bg-black rounded-md shadow-lg border">
            <div className="sm:flex w-full">
              <div className="mt-2 text-center mx-auto w-full">
                <h4 className="text-lg font-medium text-gray-400">
                  {title}
                </h4>
                <p className="mt-2 text-[15px] w-full text-gray-400">
                  {description}
                  <br />{places}
                </p>
                <p className="flex my-6 gap-2">
                  {preFooter}
                </p>
                <div className="flex items-center gap-2 mt-3 sm:flex">
                  {footer}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};