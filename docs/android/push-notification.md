---
id: push-notification
title: Push Notification
sidebar_label: Push Notification
---

Push notification is a short message, an image, or a link which appears on the notification tray of the users who have installed your application on their mobile devices. To get your user engaged with your application it's necessary to interact with them at the right time. Sending [Push Notifications](/d/docs/fundamentals/push-campaign-creation) help you to re-engage and retain your users.
Currently, we support [Firebase Cloud Messaging (FCM)](https://firebase.google.com/docs/cloud-messaging/) to send a notification to the end user.

### A typical Push Notification looks like-

![Notification](https://developer.android.com/images/ui/notifications/notification-callouts_2x.png)

1. **Small icon**: This is required by default we use your app icon.(we can add here code snippt)

1. **App Name**: This is provided by the system.
1. **Time stamp**: This is provided by the system but we can hide it.
1. **Large icon**: This is when you would want to add a large image(Optional). 
1. **Title**: This is the title field.
1. **Text**: This is the body field it will contain the message content.

We recommend you adding action buttons to your notification.

> **Note**: Starting with Android 7.0 (API Level 24) we can add action on a notification.

## Push Notification in action

![Notification](https://developer.android.com/images/ui/notifications/notification-actions_2x.png)

This image basically has two action buttons

* **Reply:** User can directly send the reply of the notification without even opening the application. Hence, making it easier for the user to get engaged.
* **Archive:** User can put the message directly to his archive folder. Again, making it easier for the user to get engaged.

## Notification channel

Starting with android 8.0 API Level 26 all notifications must have a notification channel associated with them, else notification will not get displayed to the end user. By categorizing notifications into channels, users can disable specific notification channels for your app (instead of disabling all your notifications).

## List of Fcm payload

|Name|Description|
|---|---|
|channel_id|channel id of the channel on which we send notification|
|channel_name|Name of the channel on which we send notification |
|body|Notification Body, if absent or empty, ignore this notification.|
|title|Notification Title, if absent or empty, fall back to the app name.|
|big_pic|If present, the value will be a URL of an image, that needs to be displayed in the notification.|
|lg_icon|If present, the value will be a URL of an image, that needs to be displayed in the notification on the right side.|
|deep_link|If present, this is a deep link that must be followed at the time of notification open.|
|actions||
|sound|If present, it signifies that the default or custom Android notification sound must be played.|
|badge_icon|Starting with 8.0 (API level 26), notification badge icon (also known as notification dots) appear on a launcher icon when the associated app has an active notification.|
|priority|Priority is an indication of how much of the user’s valuable attention should be consumed by this notification|

## Basic Android Push Notification

### Title
This is the title you give to your Android Push Notification.

### Push Notification Body
This is the part where you define what you wanna send to your user. The body may contain a short message, web/app link, banner etc. 

## Advanced Android push notification

Apart from Title and Message, you have the below-mentioned options to add to your Android push notification. Please note that each of these is optional.

### Image URL

If an image link is specified, a large image is added to your push notification.

Recommended resolution: 600×300

Max size: 40 kb

Supported file formats are .jpg and .png

### Large Icon URL

If a large icon link is specified, the large icon will be appended to the push notification. Based on the device, the large icon will be displayed either far left or far right.

Max resolution – 72×72

Max size – 1 kb

### Deep Link/External URL

Deep link helps you open a particular activity in your app on click of the notification. If left empty, the notification on click will open the launcher activity of the app. If you wish to use external URLs, then please whitelist the IPs or provide http/https before the URL so that they can be handled properly by the SDK.

### Action Buttons

You can add up to 3 calls to action buttons for every push notification. For every action button, you have the following options:

**Label**: contains the Call to Action text (mandatory)

**Deep link**: the deep link that should open on click of that button

**Action ID**: a user-defined string (applicable to apps custom handling their Android push notifications: This string will be available as an extra on the notification click intent for you to identify the action button clicked) This is a mandatory field.

**Icon Resource Identifier**: A drawable icon in your app’s resources folder to display the icon along with the notification for Android devices below OS version Nougat. Android Nougat does not display icons by default to give more room for buttons.

### Sound Files ###

You can choose to have no notification sound, the default OS sound or use a custom sound. It has to be present in the resources folder of your app. Please see the Android sound guide to learn how to add a sound file to your android app. Android only supports .mp3, .ogg and .wav files.


### Setting Priority ###

Relative priority for this notification. Priority is an indication of how much of the user’s valuable attention should be consumed by this notification.


**HIGH**: Use primarily for important communication, such as message or chat events with content that is particularly interesting for the user. High-priority notifications trigger the heads-up notification display. A notification with priority set to high will be a heads up notification.

**NORMAL(Default)**: Use for all notifications that don’t fall into any of the other priorities. A notification with default priority will simply show up in the notification tray and its order in the notification tray is subject to the presence of other notifications.


```kotlin
var a = 0;
var b = a + 1;
```