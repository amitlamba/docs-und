---
id: settings
title: Settings
sidebar_label: Settings
---
This guide will help you with the detailed steps to configure all the settings required to send Web Push Notifications before that, we would like you to go through [Web Push Notification Integration](/d/docs/integration/webpushnotification-integration) to have a basic idea about Push Notification and Integrating [Firebase base cloud messaging (FCM)](https://firebase.google.com/docs/cloud-messaging/) to it.

### Integrating UserNDot web push to your website

Once you have integrated FCM to your web push campaign you need to embed the following snippet to the header of your website’s ‘index.html’ file.

```js
<script>
(function (i, s, o, g, r, a, m) {
            i['UserNDotObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments);
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
        })(window, document, 'script', 'https://userndot.com/sdk/js/a.js', '_und');

_und('create', 'token that you get from userndot setting page', {
                urls: ['http://userndot.com'],
                location: {active: true},
                notification: {
                    message: 'Would you like to get Notifications?',
                    allowBtnTxt: 'Yes',
                    disallowBtnTxt: 'Later',
                    allowBtnColor: '#1a0008',
                    disallowBtnColor: '#1a0008'
                },
                firebaseconfig: {
                    apiKey: "",
                    messagingSenderId: "",
                    userPublicVapidKey: ""
                },
                serviceworker: "location of service worker in your project that you get from userndot"
            }
        );
</script>
```

The above script is responsible to control the look and feel of the web pop up which will be created by you through UserNDot’s campaign management system. It basically contains four-part definition of you web push notification. 

Let’s break it down and understand them one by one-

### 1. Web Push Definition
The following code defines a custom rendering listener. It is responsible for the creations of Web Popups.

```js
(function (i, s, o, g, r, a, m) {
            i['UserNDotObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments);
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
        })(window, document, 'script', 'https://userndot.com/sdk/js/a.js', '_und');
```

### 2. Defining the content and look 
The below snippet will help you define the message of your push web notification and give you access to control the look and feel of the popup. Things like defining the button text, defining the colour of the button etc could be set.

```js
_und('create', 'token that you get from userndot setting page', {
                urls: ['http://userndot.com'],
                location: {active: true},
                notification: {
                    message: 'Would you like to get Notifications?',
                    allowBtnTxt: 'Yes',
                    disallowBtnTxt: 'Later',
                    allowBtnColor: '#1a0008',
                    disallowBtnColor: '#1a0008'
                },
```

### 3. Integration of FCM 

A detailed info about FCM integration could be [found here](/docs/integration/WebPush-Integration).

```js
firebaseconfig: {
                    apiKey: "",
                    messagingSenderId: "",
                    userPublicVapidKey: ""
                }
```
*   API Key & Sender ID – These data could be found in your Firebase Developer Console under "project settings" in "Cloud Messaging Section".
*   "Voluntary Application Server Identification," or "VAPID" keys are web credentials used by FCM Web interface, to authorize send requests to supported web push services. The key could also be found in the Firebase Console.

### 4. Service Worker File

A Web browser like chrome can run scripts in the background separate from a webpage without the need of any interactions by the users these scripts are called [Service worker](https://developers.google.com/web/fundamentals/primers/service-workers/). Service worker can be implemented so as to send Web Push notification any time, even if the user is not present on the webpage. 

To implement it you need to first download the service worker file provided by UserNDot and copy it to the root document of your website. After copying it you need to specify the location of service worker here- 

```js
    serviceworker: "location of service worker in your project that you get from userndot"
```


