import { Modal } from "components/Modal";
import { rooms } from "constants";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface AdminProps {
  isModal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  isSettingsModal: boolean | undefined;
  setSettingsModal: Dispatch<SetStateAction<boolean | undefined>>;
  roomName: string;
  indexRoom?: number;
  placesRoom?: any;
  description?: string;
  settingsModal?: JSX.Element | null;
}

export const ControlPanel: FC<AdminProps> = ({
  isModal,
  setModal,
  isSettingsModal,
  setSettingsModal,
  roomName,
  indexRoom,
  placesRoom,
  description,
  settingsModal
}) => {

  /// Функция удаления комнаты при нажатии "Да"

  return (
    <>
      <Modal
        isVisible={isModal}
        title={roomName}
        description={description}
        places={placesRoom}
        preFooter={
          <button
            className="w-full text-gray-800 bg-gray-200 rounded-md 
            outline-none border ring-offset-2"
            onClick={() => setSettingsModal(true)}>
            Настройки
          </button>
        }
        footer={
          <>
            <button
              className="w-1/2 text-gray-800 bg-green-500 rounded-md 
            outline-none border ring-offset-2"
              onClick={deleteRoom}>
              Да
            </button>
            <button
              className="w-1/2 text-gray-800 bg-red-500 rounded-md 
            outline-none border ring-offset-2"
              onClick={() => setModal(false)}>
              Нет
            </button>
          </>
        }
        onClose={() => setModal(false)
        }
      />
      <Modal
        isVisible={isSettingsModal}
        title={`Настройки`}
        onClose={() => setSettingsModal(false)}
        places={settingsModal}
      />
    </>
  );
};