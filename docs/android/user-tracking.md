---
id: user-tracking
title: User Tracking
sidebar_label: User Tracking
---

UserNDot provides a seamless way to track your user's properties as attributes. These attributes are important as it helps you segment your users and initiate targeted campaign. A user profile is created automatically for each user launching your Android application. It all starts with a blank profile which does not contain any useful information, this anonymous profile needs to be filled with identifiable information like username, email, phone number, gender, location which could be used for your future campaigns. UserNDot sets all the attributes to the user. Once the user is identified i.e all the given attributes are known, events related with the user is associated with the given profile.

This doc will guide you through a detailed process to integrate the Android SDK to track users on your app. A complete list of user property that this SDK stores is presented below. 

#### Predefined User Attributes Table

| Attribute | Type | Options / Pattern | Description |
|---|---|---|---|
| `email` | String | A valid email address | Email of the User |
| `uid` | String | | Id of the user on the Your platform (website or app) |
| `undId` | String | | Auto-generated ID of user generated by UserNDot (never to be sent by you) |
| `fbId` | String | | Facebook Id of the user if Facebook Login is enabled |
| `googleId` | String | | Google Id of the user if Google Login is enabled |
| `mobile` | String | Digits `should start with country code` | Mobile number of the user |
| `firstName` | String | | First Name of the user |
| `lastName` | String | | Last Name of the user |
| `gender` | String | Male or Female or Other | Gender of the user |
| `dob` | String | YYYY-MM-DD | Date of birth of the user |
| `country` | String |  | Country name of the user |
| `city` | String | | City of the user |
| `address` | String | | Address of the user |
| `countryCode` | String | from the list | Country code of the user |
| `additionalInfo` | Map<String, String> | Both key and value are String | Key Value pair of the user |


> **Important :** Mobile number should start with country code e.g. For US if your contact number is **+1 (666) 666-6666** you
should send **16666666666** as a valid mobile number. Similarly in India if your contact number is +91 999 999 9999 you should send
919999999999 as a valid mobile number.

**You can also add your custom property for tracking, which can give you some more information about the user.**

The `additionalInfo` field could contain key value pairs, where both key and value could be strings.
An example of a custom user attribute could be
| Custom field Key | Custom field value |
|---|---|
| userType | Gold |
| profession | Architect |
| organization | ABC Associates |

While sending a message, there custom attributes could be used as fillers in your message. The template parser would
automatically parse these fillers and replace them with the specified values for that user. 

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