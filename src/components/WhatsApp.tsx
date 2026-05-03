import './WhatsApp.css';

function WhatsApp() {
  const message = encodeURIComponent('Hi Sambika Healthcare! I have a question about your products.');
  const whatsappUrl = `https://wa.me/918097931971?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="fa fa-whatsapp whatsapp-icon"></i>
      <span className="whatsapp-label">Chat with us</span>
    </a>
  );
}

export default WhatsApp;
