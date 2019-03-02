---
id: email-integration
title: Email Integration
sidebar_label: Email Integration
---
## Overview

To run an Email Campaign UserNDot requires you to set an SMTP server. UserNdot doesn’t directly send Emails. The Emails are delivered through a third-party service provider which needs to get integrated. An SMTP server is a server that looks after the email delivery process: Hence, you need to configure the correct SMTP settings in order to get your Email campaign running – in particular, the right SMTP address you’re using. (For instance, Gmail’s is smtp.gmail.com).

Below are the steps you need to follow to integrate your SMTP server to your UserNDot Email campaign – 

#### Step 1 – Once logged in Navigate to ***Setting*** under ***Campaign*** tab from the sidebar.
![email-integration-image1](/d/img/EmailIntegration/Email-Integration-1.png)

#### Step 2 – Click the ***Add Service Provider*** button and click ***Email Service Provider***.
![email-integration-image2](/d/img/EmailIntegration/Email-Integration-2.png)

#### Step 3 – Put in all the required information correctly –

![email-integration-image2](/d/img/EmailIntegration/Email-Integration-3.png)

*   Name: It is a name that you will decide to identify the server.
*   URL: It is the URL of the SMTP service provider, you could find a detailed list of server POP and SMTP URL [here](https://serversmtp.com/smtp-server-address).

![email-integration-image2](/d/img/EmailIntegration/Email-Integration-4.png)

 
*   Port: usually SMTP works with port 25 which in-turn is a default SMTP Port, but it could also work with port 587. 
*   User Name & Password: You need to put in your authentication details.
*   Connection security: SMTP email transfer doesn’t provide encryption. So if you want to make your connection more secure, you could use STARTTLS or SSL/TLS extension that employs a separate port for encrypted communication.