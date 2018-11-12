---
id: push-notification
title: Push Notification
sidebar_label: Push Notification
---

To engage your user it necessary to interact with the your user at right time.Using push notification you can interact with your user or give them some usefull information .
Currently we support Fcm cloud messaging to send notification to end user.

![Notification](https://developer.android.com/images/ui/notifications/notification-callouts_2x.png)

1. **Small icon** :This is required by default we use your app icon.(we can add here code snippt)

1. **App Name** :This is provided by system.
1. **Time stamp** :This is provided by system but we can hide it.
1. **Large icon** :This is optional.(add code snippt)
1. **Title** :This is title field you provided in message.
1. **Text** :This is body field you provided in message.


`Starting with android 7.0 (Api Level 24) we can add action on notification.`

## Notification with action

![Notification](https://developer.android.com/images/ui/notifications/notification-actions_2x.png)

## Notification channel

Starting with android 8.0 Api Level 26 all notification must have a notification channel associated with them other wise notification is not displayed to end user.
By categorizing notifications into channels, users can disable specific notification channels for your app (instead of disabling all your notifications).

## List of Fcm payload

|Name|Description|
|---|---|
|channel_id|channel id of channel on which we send notification|
|channel_name|Name of channel on which we send notification |
|body|Notification Body, if absent or empty, ignore this notification.|
|title|Notification Title, if absent or empty, fallback to the app name.|
|big_pic|If present, the value will be a URL of an image, that needs to be displayed in the notification.|
|lg_icon|If present, the value will be a URL of an image, that needs to be displayed in the notification on right side.|
|deep_link|If present, this is a deep link that must be followed at the time of notification open.|
|actions||
|sound|If present, it signifies that the default or custom Android notification sound must be played.|
|badge_icon|Starting with 8.0 (API level 26), notification badge icon (also known as notification dots) appear on a launcher icon when the associated app has an active notification.|
|priority|Priority is an indication of how much of the user’s valuable attention should be consumed by this notification|


## Advanced Android push notification

Apart from Title and Message, you have the below mentioned options to add to your Android push notification. Please note that each of these are optional.

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

You can add upto 3 call to action buttons for every push notification. For every action button, you have the following options:

**Label**: contains the Call to Action text (mandatory)

**Deep link**: the deep link that should open on click of that button

**Action ID**: a user defined string (applicable to apps custom handling their android push notifications: This string will be available as an extra on the notification click intent for you to identify the action button clicked) This is a mandatory field.

**Icon Resource Identifier**: A drawable icon in your app’s resources folder to display the icon along with the notification for Android devices below OS version Nougat. Android Nougat does not display icons by default to give more room for buttons.

### Sound Files ###

You can choose to have no notification sound, the default OS sound or use a custom sound. It has to be present in the resources folder of your app. Please see the Android sound guide to learn how to add a sound file to your android app. Android only supports .mp3, .ogg and .wav files.


### Setting Priority ###

Relative priority for this notification. Priority is an indication of how much of the user’s valuable attention should be consumed by this notification.


**HIGH**: Use primarily for important communication, such as message or chat events with content that is particularly interesting for the user. High-priority notifications trigger the heads-up notification display. A notification with priority set to high will be a heads up notification.

**NORMAL(Default)**: Use for all notifications that don’t fall into any of the other priorities. A notification with default priority will simply show up in the notification tray and its order in the notification tray is subject to presence of other notifications.


```kotlin
var a = 0;
var b = a + 1;
```