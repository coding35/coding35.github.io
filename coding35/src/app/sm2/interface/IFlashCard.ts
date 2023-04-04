import { SuperMemoItem } from "supermemo";


export interface IFlashCard extends SuperMemoItem {
    id: number;
    contentId: string;
    type: string;
    path: string;
    front: string;
    back: string;
    dueDate: string;
  }