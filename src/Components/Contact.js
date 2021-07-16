import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'


class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_cyt1unu', 'template_o1xac1c', e.target, 'user_E4TxWs8mTdfbhl3SzyoRf')
      .then((result) => {
          Swal.fire({
            position: 'top',
            width: '40rem',
            icon: 'success',
            title: 'Email has been sent successfully!',
            showConfirmButton: true,
          })
      }, (error) => {
          Swal.fire({
            position: 'top',
            width: '40rem',
            icon: 'error',
            title: 'Error sending mail!',
            showConfirmButton: true,
          })
      });
  }

    

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form onSubmit={e=>sendEmail(e)} method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="name" onChange={this.handleChange} required/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="email" onChange={this.handleChange} required/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="subject" onChange={this.handleChange} required/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="message" required></textarea>
                  </div>

                  <div>
                     <button type='submit'>Submit</button>
                  </div>
					</fieldset>
				   </form>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone} <br /> {email}</span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
