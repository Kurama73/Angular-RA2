export interface MessageModel {
  id: number;
  category: 'info' | 'validation' | 'warning';
  message: string;
}
