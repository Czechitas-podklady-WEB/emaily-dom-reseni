import { EmailSection } from "./EmailSection/index.js";

document.getElementById('app').append(
  EmailSection({ heading: 'Nepřečtené', folder: 'unread' }),
  EmailSection({ heading: 'Přečtené', folder: 'read' }),
);
