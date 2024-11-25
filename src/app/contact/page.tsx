import "../../style/contact.css"

export default function Contact() {
  return (
    <div className="contact-box">
      <div className="contact-content">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        <div className="contact-links">
          <a
            href="https://github.com/TayyabAli92"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <img
              src="/github.png"
              alt="github-pic"
              width={300}
              height={300}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-tayyab-ali-121133339/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <img
              src="/linkedin.png"
              alt="linkedin-pic"
              width={300}
              height={300}
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=6155675898995"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <img
              src="/facebook.png"
              alt="facebook-pic"
              width={300}
              height={300}
            />
          </a>
          <a
            href="mailto:tayyabali.personal@gmail.com"
            className="link-item"
          >
            <img
              src="/gmail.png"
              alt="gmail-pic"
              width={300}
              height={300}
            />
          </a>
        </div>
      </div>
    </div>
  )
}
