---
id: overview
title: Overview
sidebar_label: Overview
---

This doc will guide you through a detailed process of managing your users' profile, track user events, how to integrate UserNDots's campaign management system so that you could send push notifications to your users which in turn will help you reach your marketing goals. UserNDot can easily be integrated with an Android application. 

This series of doc will help you integrate UserNDot's SDK to your Android application, help you track your users, track events and also help you send push notifications to your users.

## Integrate UserNDot's Android SDK.

There are basically two options to integrate Android SDK to your application - 

### Option 1. 

Manually: Download and copy the jar file from a path given to you by UserNDot to the `/libs` directory of your Android application.

### Option 2.

Automatically: You need to include the below dependency in your build.gradle file.

``
dependencies
{
    implementation "groupId:artificatId:version"
}
``

> **Note :** "groupId", "artifcatid" and "version" will be provided to you by userndot later.

Once finished with the integration of Android SDK you have to instantiate UserNDot in your app main activity. Use the following code snippet to do the same - 

```
var defaultInstance:UserNdot
userNDot=UserNDot.getDefaultInstance(getApplicationContext())
```

The object thus created will help you track your users and events. The detailed guide will follow in the subsequent docs.
