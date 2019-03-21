---
id: event-tracking
title: Event Tracking
sidebar_label: Event Tracking
---

To make your marketing campaign successful you need to have a way to track all your events. In a broader sense events are triggers provided by your users which can be tracked. For example, in case of an e-commerce website when a user adds an item to its wish list, the website would want to record the "Added to Wish-List" event along with all the product details. Events can play an important role in segmenting users which in turn may provide you with a good rate of engagement from your campaign.

UserNDot provides one of a kind event tracking mechanism, to activate the same you need to add a small javascript code.
An event is identified by its name.

> **Important :** Name of an event is unique and case sensitive.

An event could also have attributes. Attributes are nothing but the properties of an event. The same event could be tracked with different attribute values. For example, if an event is searched, it could have an attribute searchTerm and categoryOfSearch, which may have different value each time a search action is performed.

Tracking an event happens through our javascript SDK. 

For example, if you need to track a "Searched" event of "Laptop" under "Electronic Items" category you could using the following code snippet - 

```js
_und('event',{
    "name": "Searched",
    "attributes": {
        "term": "Laptop",
        "category": "Electonic Items"
    }
});
```
Recording more properties with the event -   

```js
_und('event',{
    "name": "charged",
    "attributes": {
        "item": "Laptop",
        "at": new Date("2018-05-02T13:21:40.059Z")
    },
    "lineItem": [{
        "price": 200,
        "currency": "USD",
        "product": "CORE JAVA Volume 1",
        "categories": ["Book", "Programming"],
        "quantity": 2
    }],
    "state": "haryana"
});
```

Field `lineItem` could be sent in case of `charged` event.
A line item could contain price, currency, product, categories, and quantity.
It would help in generating revenue and sale reports.

You can also track some common events like user login, user logout, click, conversion etc.

Code snippet for tracking a user login action is given below - 

```js
_und('profile', {
            'firstName': 'jogendra singh',
            'gender': 'Male',
            'uid': 'user1',
            'email': 'jogendra@gmail.com',
            'mobile': 9999999999,
            'dob': 'yyyy-mm-dd'
        })
     ```   
