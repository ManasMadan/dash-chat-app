import { useEffect } from "react";
import { io } from "socket.io-client";
import { create } from "zustand";

const useStore = create((set) => ({
  socket: null,
  set: (value: any) => set(() => ({ socket: value })),
}));

const useSocket = (url: string) => {
  const { socket, set }: any = useStore();

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
