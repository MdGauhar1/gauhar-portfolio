import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  sendMessage(event: any) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch('https://darkslateblue-crane-217273.hostingersite.com/sendMail.php', {
      method: 'POST',
      body: formData
    })
      .then(res => res.text())
      .then(msg => {
        alert(msg);
        form.reset();
      })
      .catch(err => alert('Error sending message.'));
  }
}
