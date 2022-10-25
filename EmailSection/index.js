import { Email } from "../Email/index.js";

export const EmailSection = (props) => {
  const { heading, emails = [], folder } = props;

  const element = document.createElement('section');
  element.classList.add('inbox');
  element.innerHTML = `
    <h2>${heading}</h2>
    <div class="emails"></div>
  `;

  element.querySelector('.emails').append(...emails
    .map((email) => Email({ 
      id: email.id,
      senderName: email.sender.name,
      subject: email.subject,
      time: email.time,
      unread: email.unread,
    }))
  );

  if (emails.length === 0) {
    fetch(`https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=${folder}`)
      .then((response) => response.json())
      .then((data) => element.replaceWith(
        EmailSection({
          heading: heading,
          emails: data.emails,
          folder: folder,
        })
      ));
  }
  
  return element;
};