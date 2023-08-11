import { Modal } from "components/Modal";
import { rooms } from "constants";
import { useEffect, useState } from "react";

import { ControlPanel } from "../components/controlPanel/ControlPanel";


interface IParseRooms {
  name: string,
  isModal: boolean,
  indexRoom: number,
  placesRoom: number,
  description: string,
}

export const Admin = () => {
  const [isModal, setIsModal] = useState(false);
  const [isSettingsModal, setSettingsModal] = useState<boolean>();

  //string states

  const [roomName, setRoomName] = useState<string>('');
  const [descriptionRoom, setDescriptionRoom] = useState<string>('');

  //number states

  const [indexRoom, setRoomIndex] = useState<number>();
  const [placesRoom, setPlacesRoom] = useState<number>(0);
  const randomPlaces = Math.floor(Math.random() * 12);

  function deleteRoom() {
    setIsModal(false);
    if (indexRoom !== undefined) {
      rooms.splice(indexRoom, 1);
    }
  }

  /// Функция которая задает рандомное значение и возвращает элемент
  function placesRooms(places: any) {
    console.log(`PLACES / 2 =  ${places / 2}`);
    console.log(`RANDOM PLACES ${randomPlaces}`);
    let bool = randomPlaces >= places / 2;
    return (
      <>
        <h1>{!bool ? `Свободных мест ${randomPlaces} / ${places}` : `Отель забронирован ${randomPlaces} / ${places}`}</h1>
        <div className="flex mt-2 justify-center ml-[5%] w-full text-center">
          Статус:
          <div className={`justify-center rounded-lg ml-2 border w-1/2
          ${!bool ? "border-green-500" : "border-red-500"} text-center`}>
            {!bool ? "Свободен" : "Забронирован"}
          </div>
        </div>
      </>
    );
  }

  useEffect(() => {
    console.log(placesRoom);
    console.log(isSettingsModal);
    console.log(randomPlaces);
  }, []);

  const parseRoom = ({
    name,
    isModal,
    indexRoom,
    placesRoom,
    description
  }: IParseRooms) => {
    // console.log(rooms[indexRoom]);
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
  };

  return (
    <>
      <div className="grid grid-cols-1 rounded-lg">
        {/* <ControlPanel
          isModal={isModal}
          setModal={setIsModal}
          isSettingsModal={isSettingsModal}
          setSettingsModal={setSettingsModal}
          roomName={roomName}
          indexRoom={indexRoom}
          placesRoom={placesRooms(placesRoom)}
          description={descriptionRoom}
        /> */}
        <Modal
          isVisible={isModal}
          title={roomName}
          description={descriptionRoom}
          places={placesRooms(placesRoom)}
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
                onClick={() => setIsModal(false)}>
                Нет
              </button>
            </>
          }
          preFooter={
            <button
              className="w-full text-gray-800 bg-gray-200 rounded-md 
            outline-none border ring-offset-2"
              onClick={() => setSettingsModal(true)}>
              Настройки
            </button>
          }
          onClose={() => setIsModal(false)}
        />
        {rooms.map((room, index) => (
          <>
            <div className="hover:bg-gray-200 cursor-pointer pb-4" key={index} onClick={() => {
              parseRoom({ name: room.name, isModal: true, placesRoom: room.places, description: room.description, indexRoom: index });
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

// room.name, true, index, room.places, room.description