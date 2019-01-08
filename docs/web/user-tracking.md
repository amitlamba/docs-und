---
id: user-tracking
title: User Tracking
sidebar_label: User Tracking
---

User tracking on UserNDot is very simple and straight forward.
All you need to do is Login into you account. Initialize the javascript SDK, and send a profile request.
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

Logging out of the system.

```js

_und('logout');
```

Start Location tracking of the user
```js
_und('location',{active:true});
```

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