export interface Chat {
  id: number;
  userId: number;
  sender: string;
  message: string;
  createdAt: Date;
}
export interface SendChat {
  approvalKey: string;
  message: string;
}
