// Form submission
const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "72af4997-1628-4924-82ab-298afa0a9a3f"); // Public key for form

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  if (res.success) {
    console.log("Success", res);
  }
};

function Contact () {
    return (
        <div className="container text-center lh-lg" id="contact">
          {/* TODO Make this a card? 
          Removed container-fluid for container*/}
          <h1>Contact</h1>
          <p>
            Feel free to contact me with any questions or concerns.<br />
            I will get back to you as soon as possible.<br />
          </p>
          {/* Contact form */}
          <form className="d-flex flex-column align-items-center" onSubmit={onSubmit}>
            <div className="mb-3 w-50">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" name="name" className="form-control" id="name"/>
            </div>
            <div className="mb-3 w-50">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" name="email" className="form-control" id="email"/>
            </div>
            <div className="mb-3 w-50">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" name="message" id="message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <br />
        </div>
    );
}

export default Contact;