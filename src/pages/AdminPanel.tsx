import { Modal } from "components/Modal/Modal";
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
  const [isSettingsOutside, setOutside] = useState(false);

  //string states

  const [roomName, setRoomName] = useState<string>('');
  const [descriptionRoom, setDescriptionRoom] = useState<string>('');

  //number states

  const [indexRoom, setRoomIndex] = useState<number>(0);
  const [placesRoom, setPlacesRoom] = useState<number>(0);

  // reserve
  const [reserve, setReserve] = useState<boolean>();

  function deleteRoom() {
    setIsModal(false);
    if (indexRoom !== undefined) {
      rooms.splice(indexRoom, 1);
    }
  }

  const controlRoom = (index: number) => {
    if (reserve) {
      unreserveItem(index);
      setReserve(false);
    } else {
      reserveItem(index);
      setReserve(true);
    }
  };

  const freeRoom = (index: number) => {
    unreserveItem(index);
    setReserve(false);
  };

  const reserveRoom = (index: number) => {
    reserveItem(index);
    setReserve(true);
  };

  useEffect(() => {
    console.log(isSettingsOutside);
  }, [isSettingsOutside]);

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
  const placesRooms = (places: any) => {
    return (
      <>
        <h1>{!reserve ? `Свободных мест${"\u00A0"} ${places / 2} / ${places}` : `Отель забронирован${"\u00A0"} ${places / 2} / ${places}`}</h1>
        <div className="flex mt-2 justify-center ml-[5%] w-full text-center">
          Статус:
          <div className={`justify-center rounded-lg ml-2 border w-1/2
          ${!reserve ? "border-green-500" : "border-red-500"} text-center`}>
            {!reserve ? "Свободен" : "Забронирован"}
          </div>
        </div>
      </>
    );
  };

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
          !isSettingsOutside ?
            <h1 className="mx-auto bg-gradient-to-tr from-blue-900 to-purple-900 rounded-xl py-2 px-5">Удалить?</h1>
            :
            <>
              <button
                className="w-full text-gray-200 bg-gray-700 rounded-md 
            outline-none border ring-offset-2"
                onClick={() => setSettingsModal(true)}>
                Настройки
              </button>
              <h1 className="mx-auto bg-gradient-to-tr from-blue-900 to-purple-900 rounded-xl py-2 px-5">Удалить?</h1>
            </>
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
        <p className="">Расположение настроек:</p>
        <div className="flex">

          <input type="radio" id="settingsChoice" name="settings" value="inside" className="mx-2" onChange={() => setOutside(false)} />
          <label htmlFor="settingsChoice">На элементе</label>

          <input type="radio" id="settingsChoice2" name="settings" value="outside" className="mx-2" onChange={() => setOutside(true)} />
          <label htmlFor="settingsChoice2">Внутри модального окна</label>

        </div>
        {rooms.map((room, index) => (
          <>
            <div className={`rounded-lg bg-[rgb(2,0,36)] p-3 ${!isSettingsOutside ? "" : "hover:bg-[#2b1a6f] cursor-pointer"}`}
              onClick={!isSettingsOutside ?
                () => console.log(true)
                :
                () => {
                  parseRoom({
                    name: room.name,
                    isModal: true,
                    placesRoom: room.places,
                    description: room.description,
                    indexRoom: index,
                    reserved: room.reserved
                  });
                }} key={index}>
              <h1 className="flex text-start text-lg ">
                {room.name} <input type="button" id="settings" className="ml-auto bg-black" />
                <label htmlFor="settings" className={`hover:bg-[#2b1a6f] ${!isSettingsOutside ? "" : "hidden"} absolute right-8 px-3 cursor-pointer rounded-lg bg-blue-700 p-1`}
                  onClick={() => {
                    parseRoom({
                      name: room.name,
                      isModal: true,
                      placesRoom: room.places,
                      description: room.description,
                      indexRoom: index,
                      reserved: room.reserved
                    });
                  }}>Настройки</label>
              </h1>
              <img src={room.icon} className="w-1/4 mt-3 border-2 border-blue-400 rounded-lg" />
              <div className="grid grid-cols-2 text-center mx-auto w-1/3 justify-center">
                <div className="w-1/2">
                  <p>Места</p>
                  <h1 className="bg-gray-800 rounded-lg p-1 mt-1">{room.places / 2} / {room.places}</h1>
                </div>
                <div className="w-1/2">
                  <p className="">Статус</p>
                  <h1
                    onClick={
                      !isSettingsOutside ?
                        () => controlRoom(index)
                        :
                        () => { }
                    }
                    className={`rounded-lg ${!room.reserved ? `bg-green-500 ${!isSettingsOutside ? "hover:bg-green-700" : ""}` : `bg-red-500 ${!isSettingsOutside ? "hover:bg-red-700" : ""}`} p-1 mt-1 cursor-pointer`}>
                    {room.reserved ? "Забронирован" : "Свободен"}
                  </h1>
                </div>
              </div>
            </div >
          </>
        ))}
      </div >
    </>
  );
};