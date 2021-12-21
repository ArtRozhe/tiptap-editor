import { IMenuItem } from '../../types';
import { IMenuItemId } from './types';

export const MENU_ITEMS: IMenuItem<IMenuItemId>[] = [
  {
    id: 'h1',
    name: 'H1',
    runCommand: editor =>
      editor.chain().focus().toggleHeading({ level: 1 }).run(),
    isActive: editor =>
      editor.isActive('heading', {
        level: 1,
      }),
  },
  {
    id: 'h2',
    name: 'H2',
    runCommand: editor =>
      editor.chain().focus().toggleHeading({ level: 2 }).run(),
    isActive: editor =>
      editor.isActive('heading', {
        level: 2,
      }),
  },
  {
    id: 'bulletList',
    name: 'Bullet List',
    runCommand: editor => editor.chain().focus().toggleBulletList().run(),
    isActive: editor => editor.isActive('bulletList'),
  },
];
