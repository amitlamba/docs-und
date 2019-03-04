---
id: pushnotification-integration
title: Push Notification Integration
sidebar_label: Push Notification Integration
---
## Overview

UserNdot doesn’t directly send Push Notifications. To do so you need to integrate [Firebase base cloud messaging (FCM)](https://firebase.google.com/docs/cloud-messaging/) to your Push Notification campaign. FCM is a cloud-based cross-platform messaging solution that lets you send push notifications to your [segmented users](/d/docs/fundamentals/segments) into their notifications tray. Sending [Push Notifications](/d/docs/fundamentals/push-campaign-creation) help you to re-engage and retain your users. UserNDot easily integrates FCM you just need to put in some details and then your Push Notification campaign will be ready to roll. 

Below are the steps you need to follow to integrate Firebase base cloud messaging (FCM) to your UserNDot Push Notification campaign –

> **Important :** The process to integrate Android push notification and iOS push notification are similar.

#### Step 1 – Once logged in Navigate to ***Setting*** under ***Campaign*** tab from the sidebar. 
![pushnotif-integration-image1](/d/img/PushNotifIntegration/PushNotif-Integration-1.png)

#### Step 2 – Click the ***Add Service Provider*** button and click either ***Android Push Service Provider*** or ***iOS Push Service Provider*** .
![pushnotif-integration-image2](/d/img/PushNotifIntegration/PushNotif-Integration-2.png)

#### Step 3 – Put in all the required information correctly –
![pushnotif-integration-image3](/d/img/PushNotifIntegration/PushNotif-Integration-3.png)

![pushnotif-integration-image4](/d/img/PushNotifIntegration/PushNotif-Integration-4.png)

* Name – It is a name that you will decide to identify the Service Provider.
* API Key & Sender ID – These data could be found in your Firebase Developer Console under "project settings" in "Cloud Messaging Section". 