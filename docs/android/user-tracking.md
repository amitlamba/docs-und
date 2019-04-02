---
id: user-tracking
title: User Tracking
sidebar_label: User Tracking
---

UserNDot provides a seamless way to track your user's properties as attributes. These attributes are important as it helps you segment your users and initiate targeted campaign. A user profile is created automatically for each user launching your Android application. It all starts with a blank profile which does not contain any useful information, this anonymous profile needs to be filled with identifiable information like username, email, phone number, gender, location which could be used for your future campaigns. UserNDot sets all the attributes to the user. Once the user is identified i.e all the given attributes are known, events related with the user is associated with the given profile.

This doc will guide you through a detailed process to integrate the Android SDK to track users on your app. A complete list of user property that this SDK stores is presented below. You can also add your custom property for tracking which can give you some more information about the user. 
  
see [User Properties](/d/docs/introduction/users#predefined-user-attributes)

> **Important** All the attributes in the above table are case sensitive

All well-known properties such as uid, city, address associated with a profile are already pre-defined by UserNDot. To use this you need to create an object of EventUser by using the following code.

```kotlin
 var user = EventUser()
```

For updating these properties you can take the help of below example   

```kotlin
        user.uid="user50"
            user.city="Gurugram"
            user.address="gurgaon"
            user.country="India"
            user.countryCode="91"
            user.email="jogendertemp@gmail.com"

```
> **Important** You can also use custom attributes to store user information.

The data of the user profile could also be defined by the sources like Facebook, Google Plus etc.

To send user profile to userNDot you need to add: 

```kotlin
defaultInstance?.onUserLogin(user)
```