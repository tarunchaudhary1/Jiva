import {ContactCard} from "../../components/ContctCard/ContactCard";
import ContactForm from '../../components/ContactForm/ContactForm';


export const ContactPage = () => {
  const contactDetails = [
    { title: "Police Emergency Hotline", number: "118/119" },
    { title: "Ambulance / Fire & Rescue", number: "110" },
    { title: "Accident Service - General Hospital Colombo", number: "011-2691111" },
    { title: "Police Emergency", number: "011-2433333" }
  ];

  return (
    <div className="contact-page">
      <div className="wrapper">
        <div className="emergency">
          <h2>Emergency Contacts</h2>
          <div className="contact-cards">
            {contactDetails.map((contact, index) => (
              <ContactCard
                key={index}
                title={contact.title}
                number={contact.number}
              />
            ))}
          </div>
        </div>

        <div className="contact-us">
          <ContactForm />
          <p>
            If you have any queries, feel free to contact us via email or phone.
          </p>
          <ul>
            <li>
              <span>Email: </span>alert.jiva@gmail.com
            </li>
            <li>
              <span>Phone: </span>011-1234567
            </li>
            <li>
              <span>Address: </span>123 Main Street, Colombo, Sri Lanka
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

