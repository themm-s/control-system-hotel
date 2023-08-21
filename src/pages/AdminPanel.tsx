import { Modal } from "components/Modal";
import { reserveItem, rooms, unreserveItem } from "constants";
import { useEffect, useState } from "react";

interface IParseRooms {
  name: string,
  isModal: boolean,
  indexRoom: number,
  placesRoom: number,
  description: string,
  reserved: boolean;
}

export const Admin = () => {
  const [isModal, setIsModal] = useState(false);
  const [isSettingsModal, setSettingsModal] = useState(false);

  //string states

  const [roomName, setRoomName] = useState<string>('');
  const [descriptionRoom, setDescriptionRoom] = useState<string>('');

  //number states

  const [indexRoom, setRoomIndex] = useState<number>(0);
  const [placesRoom, setPlacesRoom] = useState<number>(0);
  const [randomPlaces, setRandomPlaces] = useState(0);

  // reserve
  const [reserve, setReserve] = useState<boolean>();

  function deleteRoom() {
    setIsModal(false);
    if (indexRoom !== undefined) {
      rooms.splice(indexRoom, 1);
    }
  }

  useEffect(() => {
    setRandomPlaces(Math.floor(Math.random() * 8 + 1));
  }, []);

  const freeRoom = (index: number) => {
    unreserveItem(index);
    setReserve(false);
  };

  const reserveRoom = (index: number) => {
    reserveItem(index);
    setReserve(true);
  };

  const parseRoom = ({
    name,
    isModal,
    indexRoom,
    placesRoom,
    description,
    reserved,
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
    /// Зарезервированна ли комната
    setReserve(reserved);
  };

  /// Функция которая возвращает элемент
  function placesRooms(places: any) {
    return (
      <>
        <h1>{!reserve ? `Свободных мест${"\u00A0"} ${randomPlaces} / ${places}` : `Отель забронирован${"\u00A0"} ${randomPlaces} / ${places}`}</h1>
        <div className="flex mt-2 justify-center ml-[5%] w-full text-center">
          Статус:
          <div className={`justify-center rounded-lg ml-2 border w-1/2
          ${!reserve ? "border-green-500" : "border-red-500"} text-center`}>
            {!reserve ? "Свободен" : "Забронирован"}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Modal
        isVisible={isModal}
        title={roomName}
        description={descriptionRoom}
        footer={
          <>
            <button
              className="w-1/2 text-gray-800 bg-green-500 rounded-md 
            outline-none border ring-offset-2 hover:bg-green-400"
              onClick={deleteRoom}>
              Да
            </button>
            <button
              className="w-1/2 text-gray-800 bg-red-500 hover:bg-red-400 rounded-md 
            outline-none border ring-offset-2"
              onClick={() => setIsModal(false)}>
              Нет
            </button>
          </>
        }
        preFooter={
          <button
            className="w-full text-gray-200 bg-gray-700 rounded-md 
            outline-none border ring-offset-2"
            onClick={() => setSettingsModal(true)}>
            Настройки
          </button>
        }
        onClose={() => setIsModal(false)}
      />
      <Modal
        isVisible={isSettingsModal}
        title={"Настройки"}
        description={placesRooms(placesRoom)}
        places={
          <>
            <button
              className="w-full text-gray-300 bg-gray-700 rounded-md 
            outline-none border ring-offset-2 hover:bg-gray-600"
              onClick={() => setSettingsModal(false)}>
              Закрыть
            </button>
          </>
        }
        onClose={() => setSettingsModal(false)}
        footer={
          <>
            <button
              className="w-1/2 text-gray-800 bg-green-500 hover:bg-green-400 rounded-md 
            outline-none border ring-offset-2"
              onClick={() => freeRoom(indexRoom)}>
              Отменить бронь
            </button>
            <button
              className="w-1/2 text-gray-800 bg-red-500 hover:bg-red-400 rounded-md 
            outline-none border ring-offset-2"
              onClick={() => { reserveRoom(indexRoom); console.log(rooms[indexRoom]); }}>
              Забронировать
            </button>
          </>
        }
      />
      <div className="rounded-lg space-y-4 p-3">
        {rooms.map((room, index) => (
          <>
            <div className="hover:bg-[#2b1a6f] rounded-lg bg-[rgb(2,0,36)] cursor-pointer p-3" key={index} onClick={() => {
              parseRoom({
                name: room.name,
                isModal: true,
                placesRoom: room.places,
                description: room.description,
                indexRoom: index,
                reserved: room.reserved
              });
            }}>
              <h1 className="text-start">
                {room.name}
              </h1>
              <img src={room.icon} className="w-1/4 mt-3 rounded-lg" />
              <h1 className="text-center bg-black mx-auto w-28 rounded-lg p-1 justify-center">{randomPlaces} / {room.places}</h1>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

// room.name, true, index, room.places, room.description