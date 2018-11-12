---
id: settings
title: Settings
sidebar_label: Settings
---

Adding UserNDot sdk to your app.

**Step 1.** Installing SDK

you can install sdk in two way.
1. Using Android Studio with gradle
1. Manual

**`Using Android Studio and gradle`**
```kotlin
dependencies{
implementation "groupId:artificatId:version"
}
```
**`Manual`**

Download the UserNDot SDK and unzip it.And copy the jar file into lib directory of your project.

**Step 2.** Adding UserNDot credential in your AndroidManifest file.
```kotlin
<meta-data
            android:name="USERNDOT_USER_ID"
            android:value="userndot" />
        <meta-data
            android:name="USERNDOT_TOKEN"
            android:value="ghjkl345678hgfghj9876543sdfghjy32456u5432" />
        <meta-data
```

**Step 3.** Instantiate the UserNDot
In you main activity onCreate method add below code.
```kotlin
var userNDot:UserNdot
userNDot=UserNDot.getDefaultInstance(getApplicationContext())
```

**Registering Fcm messaging service**

```kotlin
<service android:name="com.userndot.sdk.FCMMessagingService">
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT" />
                <action android:name="com.google.firebase.INSTANCE_ID_EVENT" />
            </intent-filter>
        </service>
```

**Registering Und push notification receiver**

```kotlin
<application>
        <receiver android:name=".UNDPushNotificationReceiver"
            android:enabled="true"
            android:exported="false"></receiver>
    </application>
```

**Registering und push notification service**

```kotlin
<service
            android:name="com.userndot.sdk.UNDPushNotificationIntentService"
            android:exported="false">
            <intent-filter>
                <action android:name="com.userndot.PUSH_EVENT" />
            </intent-filter>
        </service>
```


