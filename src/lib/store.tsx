import { create } from "zustand";
import { Socket } from "socket.io-client";

interface SocketStoreType {
  socket: Socket | null;
  set: (value: Socket) => void;
}

export const useSocketStore = create<SocketStoreType>((set) => ({
  socket: null,
  set: (value) => set(() => ({ socket: value })),
}));
