import { Modal } from "components/Modal";
import { rooms } from "constants";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

interface AdminProps {
  isModal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  roomName: string;
  indexRoom: number | undefined;
  placesRoom: any
}

const ControlPanel: FC<AdminProps> = ({
  isModal,
  setModal,
  roomName,
  indexRoom,
  placesRoom
}) => {

  function deleteRoom() {
    setModal(false);
    if (indexRoom !== undefined) {
      delete rooms[indexRoom];
    }
  }
  
  function roomPlace(place: number) {
    let randomPlace = Math.floor(Math.random() * place)
    return (randomPlace + ' / ' + placesRoom)
  }

  useEffect(() => {
  }, [indexRoom]);

  return (
    <Modal
      isVisible={isModal}
      title={roomName}
      content={roomPlace(placesRoom)}
      footer={
        <>
          <button
            className="w-1/2 text-gray-800 bg-green-500 rounded-md 
            outline-none border ring-offset-2"
            onClick={deleteRoom}
          >
            Да
          </button>
          <button
            className="w-1/2 text-gray-800 bg-red-500 rounded-md 
            outline-none border ring-offset-2"
            onClick={() => setModal(false)}
          >
            Нет
          </button>
        </>
      }
      onClose={() => setModal(false)
      }
    />
  );
};


export const Admin = () => {
  const [isModal, setIsModal] = useState(false);
  const [roomName, setRoomName] = useState<string>('');
  const [indexRoom, setRoomIndex] = useState<number>();
  const [placesRoom, setPlacesRoom] = useState<number>();

  function parseRoom(name: string, isModal: boolean, indexRoom: number, placesRoom: number) {
    console.log(name, isModal, indexRoom, placesRoom);
    setRoomName(name)
    setIsModal(isModal);
    setRoomIndex(indexRoom);
    setPlacesRoom(placesRoom)
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
        />
        {rooms.map((room, index) => (
          <>
            <div className="hover:bg-gray-200 cursor-pointer pb-4" onClick={() => {
              parseRoom(room.name, true, index, room.places);
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
