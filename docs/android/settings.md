---
id: settings
title: Settings
sidebar_label: Settings
---
This guide will help you with the detailed steps to configure all the settings required to send Push Notifications before that, we would like you to go through [Push Notification Integration](/d/docs/integration/pushnotification-integration) to have a basic idea about Web push Notification and Integrating [Firebase base cloud messaging (FCM)](https://firebase.google.com/docs/cloud-messaging/) to it.

Below steps need to be followed for integrating Android SDK to your Android application. 

## **Step 1.** Installing SDK

There are basically two ways of installing Android SDK

1. Using Android Studio with Gradle
1. Manual

**`Using Android Studio and Gradle`**

Add the following dependency in `build.gradle` file -

```kotlin
dependencies{
    implementation "groupId:artificatId:version"
}
```

**`Manual`**

Download the UserNDot SDK the location to which will be provided later and unzip it. Copy all the jar files into the lib directory of your project.

## **Step 2.** Adding UserNDot credential in your AndroidManifest.xml file.

You need to define your credential of UserNDot in the AndroidManifest.xml file Copy and paste the following snippet to the file and you are good to go. 

```kotlin
<meta-data
    android:name="USERNDOT_USER_ID"
    android:value="userndot" />
<meta-data
    android:name="USERNDOT_TOKEN"
    android:value="ghjkl345678hgfghj9876543sdfghjy32456u5432" />
        
```

## **Step 3.** Instantiate UserNDot
In your main activity onCreate method add below code.

```kotlin
var userNDot:UserNdot
userNDot=UserNDot.getDefaultInstance(getApplicationContext())
```

## **Step 4.** Integrate Fcm

FCM is a cloud-based cross-platform messaging solution that lets you send push notifications to your [segmented users](/d/docs/fundamentals/segments) into their notifications tray. As you already know UserNdot doesn’t directly send Push Notifications. To do so you need to integrate [Firebase base cloud messaging (FCM)](https://firebase.google.com/docs/cloud-messaging/). 

### To register FCM messaging service

Add below code in AndroidManifest.xml file

```kotlin
<service android:name="com.userndot.sdk.FCMMessagingService">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
        <action android:name="com.google.firebase.INSTANCE_ID_EVENT" />
    </intent-filter>
</service>
```
> **Note :** Once you have registered the FCM messaging service you also need to register UserNDot push notification service and UserNDot push notification receiver. The code to do so is shared below. 

### Registering UserNDot push notification receiver

Add below code in AndroidManifest.xml file
```kotlin
<application>
    <receiver android:name=".UNDPushNotificationReceiver"
        android:enabled="true"
        android:exported="false"></receiver>
</application>
```

### Registering UsernDot push notification service

Add below code in AndroidManifest.xml file

```kotlin
<service
    android:name="com.userndot.sdk.UNDPushNotificationIntentService"
    android:exported="false">
    <intent-filter>
        <action android:name="com.userndot.PUSH_EVENT" />
    </intent-filter>
</service>
```


