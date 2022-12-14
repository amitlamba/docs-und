---
id: events
title: Events
sidebar_label: Events
---

Events means any activity of the user like page view, click of a button, login, register,
etc or any other activity tracked for the user.
Apart from it activities like Email Sent, SMS sent, Email read, Notification sent, 
App Uninstalled, etc could also be tracked as events.

While tracking events, please be careful that the name of the events are unique and 
consistent over your application and across devices. 
> **For Example**:  An event named `Add to cart` in Android App should be named `Add to cart` and not `Add To Cart`
in Web application as well if the purpose of the event is same.

> **Caution**: Name of the Event is case sensitive. 
So, name of the event should always be used in the same case.

## Events Classification

Events could be classified as Custom Events and System Events. Custom Events could be 
defined as the events you define explicitly in your application, while System Events are the 
events UserNDot tracks automatically.

### System Events

System events are the events, which are tracked automatically by the system, without your intervention.

### List of System Events
| Event Name | Description |
|---|---|
|`App Uninstalled`| Event is triggered when a mobile app is uninstalled |
|`Notification Sent`| Event is triggered when an email / sms / notification is sent corresponding to any campaign |
|`Notification Received`| Event is triggered when an email / sms / notification is successfully received corresponding to any campaign |
|`Notification Clicked`| Event is triggered when an email / sms / notification is clicked |

### Custom Events

Custom events are the events which are tracked by you by inserting a small tracking code.
A custom event contains, name of the event (mandatory) and attributes (optional).
Event arrtibutes are key value pairs and could be any property you want to associate with the event.
For example, with an event `Searched` you may like to associate attributes like `searchTerm` : "Trouser",
`category`: "Clothes"

## Event Attributes
Event attributes can be defined as the property of an event. For Example an event `Charged` can have attributed
`Item`,`Quantity`,`Price` and `Amount`.

### List of Event Attributes

| Name | Type | Options | Description |
|---|---|---|---|
| `name` | String `mandatory` | | Name of the event (Should be unique) |
| `lineItem` | List of LineItem | | Fields of a single line item are: price (Integer), currency (String), product (String), categories(List of String), tags(List of String), quantity(Integer), properties(Map of <String, Any>) |
| `attributes` | Map of <String, Any> | | Key Value pairs for custom event attributes |

### Attributes which are automatically tracked with any event
- Date and time of the event
- Details of the user who performed the event.
- Technical details like Mobile App version, SDK version, OS, Browser etc.
- Location Details (if enabled in the mobile app or set with js sdk from website)


## Tracking an event
```js
//Tracking an Event
_und('event',{
    "name":"Searched",
    "attributes": {
        "searchTerm": "Shoes",
        "minPrice": 1000,
        "maxPrice": 2000
    }
});
```

Tracking a special event 'Charged' (May contain lineItem details (Would be useful for revenue reports))
```js
//Tracking Charged Event
_und('event',{
        "name": "Charged",
        "attributes": {
            "at": new Date("2018-05-02T13:21:40.059Z")
        },
        "lineItem": [{
            "price": 200,
            "currency": "USD",
            "product": "CORE JAVA Volume 1",
            "categories": ["Book", "Programming"],
            "quantity": 2
        }]
    });
```
