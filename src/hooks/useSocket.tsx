import { useSocketStore } from "@/lib/store";
import { useEffect } from "react";
import { io } from "socket.io-client";

const useSocket = (url: string) => {
  const { socket, set } = useSocketStore();

  useEffect(() => {
    if (socket) return;
    const socketIo = io(url);
    set(socketIo);
    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;
  }, []);

  return socket;
};

export default useSocket;
