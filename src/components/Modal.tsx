import { useEffect } from "react";

interface IModal {
  isVisible: boolean;
  title: string;
  places?: any;
  description?: string;
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
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={onClose}
        />
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-5 mx-auto bg-white rounded-md shadow-lg">
            <div className="sm:flex w-full">
              <div className="mt-2 text-center mx-auto w-full">
                <h4 className="text-lg font-medium text-gray-800">
                  {title}
                </h4>
                <p className="mt-2 text-[15px] w-full text-gray-500">
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
    </div>
  );
};