import { Modal } from "components/Modal";
import { rooms } from "constants";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

interface AdminProps {
  isModal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  roomName: string;
  indexRoom: number | undefined;
}

const ControlPanel: FC<AdminProps> = ({
  isModal,
  setModal,
  roomName,
  indexRoom
}) => {
  console.log(isModal);

  function deleteRoom() {
    setModal(false);
    if (indexRoom !== undefined) {
      delete rooms[indexRoom];
    }
  }

  useEffect(() => {
  }, [indexRoom]);

  return (
    <Modal
      isVisible={isModal}
      title={roomName}
      content={"Действительно удалить это?"}
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

  return (
    <>
      <div className="grid grid-cols-1 rounded-lg">
        <ControlPanel
          isModal={isModal}
          setModal={setIsModal}
          roomName={roomName}
          indexRoom={indexRoom}
        />
        {rooms.map((room, index) => (
          <>
            <div className="hover:bg-gray-200 cursor-pointer pb-4" onClick={() => {
              setRoomName(room.name);
              setIsModal(true);
              setRoomIndex(index);
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
