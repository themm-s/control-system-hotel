import { Modal } from "components/Modal";
import { rooms } from "constants";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface AdminProps {
  isModal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  roomName: string;
  indexRoom?: number;
  placesRoom?: any;
  description?: string;
}

const ControlPanel: FC<AdminProps> = ({
  isModal,
  setModal,
  roomName,
  indexRoom,
  placesRoom,
  description
}) => {

  const [isSettingsModal, setSettingsModal] = useState<boolean>(false);
  const CheckStatus = (bool: boolean) => {
    return (
      <div className="flex mt-2 justify-center mx-auto w-full text-center">
        Статус:
        <div className={`justify-center rounded-lg border mx-2 w-1/3
          ${bool ? "border-green-500" : "border-red-500"} text-center`}>
          {bool ? "Свободен" : "Занят"}
        </div>
      </div>
    );
  };
  let randomPlace: number;

  /// Функция удаления комнаты при нажатии "Да"
  function deleteRoom() {
    setModal(false);
    if (indexRoom !== undefined) {
      delete rooms[indexRoom];
    }
  }

  /// Функиция которая генерирует рандомные занятые места в хостеле
  function roomPlace(place: number) {
    randomPlace = (Math.floor(Math.random() * place));
    hotelStatus();
    if (randomPlace == placesRoom) {
      return (`${randomPlace} / ${placesRoom} Места заполнены!`);
    }
    return (`Места: ${randomPlace} / ${placesRoom}`);
  }

  /// Функция которая определяет статус хостела
  function hotelStatus() {
    return CheckStatus(randomPlace <= 4);
  }

  return (
    <>
      <Modal
        isVisible={isModal}
        title={roomName}
        description={description}
        places={roomPlace(placesRoom)}
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
        places={hotelStatus()}
        onClose={() => setSettingsModal(false)}
        footer={""}
      />
    </>
  );
};

export const Admin = () => {
  const [isModal, setIsModal] = useState(false);

  //string states

  const [roomName, setRoomName] = useState<string>('');
  const [descriptionRoom, setDescriptionRoom] = useState<string>('');

  //number states

  const [indexRoom, setRoomIndex] = useState<number>();
  const [placesRoom, setPlacesRoom] = useState<number>(0);

  function parseRoom(
    name: string,
    isModal: boolean,
    indexRoom: number,
    placesRoom: number,
    description: string
  ) {
    console.log(rooms[indexRoom]);
    /// Имя комнаты
    setRoomName(name);
    /// Модальное окно активное или нет
    setIsModal(isModal);
    /// Индекс румы в объекте
    setRoomIndex(indexRoom);
    /// Места в руме
    setPlacesRoom(placesRoom);
    /// Описание румы в модалке
    setDescriptionRoom(description);
  }

  return (
    <>
      <div className="grid grid-cols-1 rounded-lg">
        <ControlPanel
          isModal={isModal}
          setModal={setIsModal}
          roomName={roomName}
          indexRoom={indexRoom}
          placesRoom={placesRoom}
          description={descriptionRoom}
        />
        {rooms.map((room, index) => (
          <>
            <div className="hover:bg-gray-200 cursor-pointer pb-4" onClick={() => {
              parseRoom(room.name, true, index, room.places, room.description);
            }}>
              <h1 className="text-center mt-3">
                {room.name}
              </h1>
              <div className="flex justify-center" >
                <img src={room.icon} className="w-1/4 mt-3" />
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
