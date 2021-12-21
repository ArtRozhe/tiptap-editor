import { Editor } from '@tiptap/react';

export interface IMenuItem<IdType> {
  id: IdType;
  name: string;
  isNameHidden?: boolean;
  runCommand: (editor: Editor) => boolean;
  isActive: (editor: Editor) => boolean;
}
