import { Extension } from '@tiptap/react';

import Placeholder, { PlaceholderOptions } from '@tiptap/extension-placeholder';

const ConfiguredPlaceholder: Extension<PlaceholderOptions, any> =
  Placeholder.configure({
    placeholder: 'Напишите что-нибудь...',
  });

export default ConfiguredPlaceholder;
