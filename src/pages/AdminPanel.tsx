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

  //string states

  const [roomName, setRoomName] = useState<string>('');
  const [descriptionRoom, setDescriptionRoom] = useState<string>('');

  //number states

  const [indexRoom, setRoomIndex] = useState<number>();
  const [placesRoom, setPlacesRoom] = useState<number>(0);

  /// Функция которая задает рандомное значение и возвращает элемент
  function placesRooms(places: number) {
    let randomPlaces = Math.floor(Math.random() * places + 1);
    if (randomPlaces == null) {
      return null;
    }
    // console.log(`PLACES / 2 =  ${places / 2}`);
    // console.log(`RANDOM PLACES ${randomPlaces}`);
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
    // console.log(placesRoom);
  }, [placesRoom]);

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
        <ControlPanel
          isModal={isModal}
          setModal={setIsModal}
          roomName={roomName}
          indexRoom={indexRoom}
          placesRoom={placesRooms(placesRoom)}
          description={descriptionRoom}
          settingsModal={}
        />
        {rooms.map((room, index) => (
          <>
            <div className="hover:bg-gray-200 cursor-pointer pb-4" key={index} onClick={() => {
              parseRoom({name: room.name, isModal: true, placesRoom: room.places, description: room.description, indexRoom: index});
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