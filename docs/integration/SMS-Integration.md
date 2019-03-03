---
id: sms-integration
title: SMS Integration
sidebar_label: SMS Integration
---
## Overview

To deliver SMS, UserNDot requires you to integrate a third party SMS Service Provider (SSPs). UserNdot doesn’t directly send SMSs to you [segmented user](/d/docs/fundamentals/segments). It is done so by an SSP like AWS, Exotel etc.

With UserNDot’s two step integration process you can integrate an SSP in no time and engage your users with personalized SMS campaigns.

Let’s look at the steps required to integrate an SSP to your campaign –

#### Step 1 – Once logged in Navigate to ***Setting*** under ***Campaign*** tab from the sidebar.
![sms-integration-image1](/d/img/SMSIntegration/SMS-Integration-1.png)

#### Step 2 – Click the ***Add Service Provider*** button and click ***SMS Service Provider***.
![sms-integration-image2](/d/img/SMSIntegration/SMS-Integration-2.png)

#### Step 3 - Put in all the required information correctly, the data you need to put in will depend on your SSP, for example –
*  If your SSP is AWS Simple Notification Service –
 ![sms-integration-image3](/d/img/SMSIntegration/SMS-Integration-3.png)

    * Name – It is a name that you will decide to identify the SSP.
    * AWS Region – These are separate geographic area you need to put in the region based on your geographical location. [Click here](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html) to know more.
    * AWS Access Key ID – This is the access key to your AWS account.
    * AWS Secret Access Key – As the name implies, this is the password to your AWS account.

* If your SSP is Exotel - 
![sms-integration-image3](/d/img/SMSIntegration/SMS-Integration-3.png)

    * Name – It is a name that you will decide to identify the SSP.
    * SID – It is the Exotel SID number you can find it on you Exotel Dashboard.
    * Token – It is the Exotel Token value you can also find this on your Exotel Dashboard.
