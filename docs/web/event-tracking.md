---
id: event-tracking
title: Event Tracking
sidebar_label: Event Tracking
---

An event could be tracked by userndot. For tracking an event, you need to add a small javascript code.
An event is identified by its name, so its name should be unique and case sensitive.
An event could also have attributes. Attributes are nothing but the properties of an event.
The same event could be tracked with different attribute values. For example,
if an event is Searched, it could have an attribute searchTerm and categoryOfSearch, which may have different value each time a search action is performed.

Tracking an event through javascript

Prerequisites for tracking an event.

Step 1: Initialize the SDK.


Code snppet to track an event

```js
_und('event',{
    "name": "Searched",
    "attributes": {
        "term": "Laptop",
        "category": "Electonic Items"
    }
});
```

Special parameters for charged event
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

Sending events using Angular framework:
