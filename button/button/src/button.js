import React, { useState } from 'react';
import './button.css';

const WebhookButton = () => {
  const [isSending, setIsSending] = useState(false);

  const webhookURL = 'https://milan.tomtom.link/api/webhook/-DGNSvZRvrx0HhdUaz1lOKDEO'; // Replace with your actual webhook URL

  const handleButtonClick = async () => {
    setIsSending(true);

    try {
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Button pressed!' }), // Replace with your desired payload
      });

      if (response.ok) {
        console.log('Webhook sent successfully');
        // You can perform additional actions upon successful webhook send
      } else {
        console.error('Failed to send webhook');
        // Handle the error or provide user feedback
      }
    } catch (error) {
      console.error('Error while sending webhook', error);
      // Handle network errors or other exceptions
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className='container'>
      <button className='btn' onClick={handleButtonClick} disabled={isSending}>
        
        {isSending ? 'Sending...' : 'Turn on the lights!!!'}
      </button>
    </div>
  );
};

export default WebhookButton;