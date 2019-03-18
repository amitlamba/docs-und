---
id: user-tracking
title: User Tracking
sidebar_label: User Tracking
---

UserNDot provides a seamless way to track your user's properties as attributes. A user profile is created automatically for each user visiting your website. It all starts with a blank profile which does not contain any useful information, this anonymous profile needs to be filled with identifiable information like username, email, phone number which could be used further for your future campaigns. UserNDot sets all the attributes to the user. These attributes are important as it helps you to segment your users and initiate targeted campaign. 

All you need to do is Login into your account. Initialize the javascript SDK, and send a profile request.

The code for sending the profile request would look like:

```js
_und('profile',{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "uid": "ID In Your Platform",
    "fbId": "Facebook ID if any",
    "googleId": "Google Id of user",
    "mobile": "919999999999",
    "gender": "Male",
    "dob": "1980-01-01",
    "country": "India",
    "city": "Delhi",
    "address": "A-404, Dalal Street, Delhi - 110001",
    "additionalInfo": {"key1":"value1","key2":"value2"}
});
```
In the above code, email, uid, firstName are mandatory fields.
However, if you give more information, you can get more out of the system.
We recommend giving as much information as possible in the user profile.
The additionalInfo attribute helps you define your custom user attribute. 

Clicking this button will make the user logout from our system.
To enable this client needs to call - 

```js

_und('logout');
```

When you want to track a user location then you need to add

```js
_und('location',{active:true});
```
on appropriate button where chance of location allowed is max. 

When you want users to subscribe to your notification you need to use the following code - 

```js
_und('notification-allow',{
message:'Would you like to get Notifications?',
allowBtnTxt:'Allow',
disallowBtnTxt:'Disallow',
allowBtnColor:'#ff3377',
disallowBtnColor:'#ff3377'
})
```
* message : That client want to show on click of this action.
* allowBtnTxt : Text that he want to show on allow button
* disallowBtnTxt : Text that he want to show on disallow button
* allowBtnColor : Color code of allow button
* disallowBtnColor : color code of disallow button. eg for red #FF0000

Below is an example code to give you some more idea - 

```js
<script type="text/javascript">
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
    })(window, document, 'script', 'loader.js', '_und');
    
    _und('create', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJldmVudF9hbWl0QHVzZXJuZG90LmNvbSIsInVzZXJJZCI6IjEwMDEiLCJjbGllbnRJZCI6IjEwMDAiLCJyb2xlcyI6WyJST0xFX1VTRVIiLCJST0xFX0VWRU5UIl0sImNyZWF0ZWQiOjE1MzEzMDUzNjU4NzQsImV4cCI6OTIyMzM3MjAzNjg1NDc3NX0.UO49c1HoKKEbEbv3bXVrvxZCO5NnJ4u1sWl19gyrc5YDrUWYY3t1mDwCmg8Uwoq9v338RrLSKWj4zXgLlj5S9A',{
        urls: ['https://userndot.com'],
        location: {active:true}
    });
</script>
```