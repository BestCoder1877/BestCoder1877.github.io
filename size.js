if (window.innerWidth < 1524) {

    document.body.innerHTML=`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Error</title>
      <style>
      /* General styling for a striking error state */
      body {
        background-color: #f5f5f5; /* Lighter background for contrast */
        color: #333; /* Darker text for readability */
        font-family: sans-serif; /* Clear font for better message display */
        text-align: center; /* Align content centrally for visual impact */
      }
      
      /* Error message container */
      .error-container {
        position: absolute; /* Position independently of other content */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); /* Center horizontally and vertically */
        width: 80%; /* Adjust width as needed */
        padding: 30px;
        background-color: #fff; /* Distinct background for the message */
        border-radius: 10px; /* Soften edges */
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3); /* Add a subtle shadow */
      }
      
      /* Error message heading */
      .error-heading {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #d54e21; /* Reddish color for error indication */
      }
      
      /* Error message content */
      .error-message {
        font-size: 16px;
        line-height: 1.5;
      }
      
      /* Additional styling options */
      .error-icon {
        width: 80px;
        height: 80px;
        margin-bottom: 20px;
        /* Add an appropriate error icon here */
      }
      
      .error-button {
        background-color: #d54e21;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
      }
      
      </style>
       </head>
    <body>
    
      <div class="error-container">
        <div class="error-icon">
          <img src="https://cdn4.iconfinder.com/data/icons/web-hosting-2-2/32/Error_Page-256.png" alt="Error icon" width="80" height="80"> </div>
    
        <h2 class="error-heading">Oops! Your Screen Is To Small</h2>
        <p class="error-message">Please Switch To A Device With A Bigger Screen</p>
    
        <button class="error-button">Reload Page</button>
      </div>
    
    </body>
    </html>
    `
  }
  