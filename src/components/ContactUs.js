const ContactUs = () => {
  return (
    <div class="contact" id="contact">
      <h2 class="heading">
        Contact <span>Us !!</span>
      </h2>
      <br />
      <form action="https://formspree.io/f/mqkvyjpw" method="POST">
        <div class="input">
          <input type="text" id="name" name="name" placeholder="Full Name" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
          />
        </div>
        <br />
        <div class="input">
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Contact Number"
          />
          <input
            type="text"
            id="subject"
            name="Subject"
            placeholder="Subject"
          />
        </div>
        <br />
        <textarea
          id="message"
          cols="30"
          rows="10"
          placeholder="Leave a message here ..."
          name="message"
        ></textarea>
        <br />
        <br />
        <button type="submit" class="btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
