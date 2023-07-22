import { rooms } from "constants";

export const ControlPanel = ({
  indexRoom,
  setModal,

}) => {
  

  function deleteRoom() {
    setModal(false);
    if (indexRoom !== undefined) {
      delete rooms[indexRoom];
    }
    console.log('deleted');
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
              className="w-1/2 text-gray-800 bg-green-500 rounded-md outline-none border ring-offset-2"
              onClick={deleteRoom}
            >
              Да
            </button>
            <button
              className="w-1/2 text-gray-800 bg-red-500 rounded-md outline-none border ring-offset-2"
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