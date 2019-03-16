---
id: overview
title: Overview
sidebar_label: Overview
---

This doc will guide you through a detailed process of sending web push notification for your marketing campaign. UserNDot can easily be integrated with a web application or a website. This series of doc will help you integrate UserNDots JavaScript SDK on your web application which will help you in tracking users, tracking events send push notification etc.

Before going any further we would require you to follow some basic step to integrate JavaScript SDK with your website –

## 1. Set your domain name from UserNDot account:

**Step 1**: Once logged in navigate to Settings -> Account Settings. 

**Step 2**: Define your Website's URL.

![accountsettings-image1](/d/img/Web/Overview/Website-Overview-1.png)

## 2. Javascript code for SDK integration

Put the following code in the <head> section of each webpage on your website - 

```
<script type="text/javascript">
(function(i,s,o,g,r,a,m){i.UserNDotObject=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://userndot.com/sdk/js/a.js','_und');
_und('create', 'USERNDOT_ACTIVATION_CODE',{
            urls: ['https://userndot.com'],
            location: {active:true}
        });
</script>
``` 

> **Important** : Replace USERNDOT_ACTIVATION_CODE with the actual
activation code from your account, provided by UserNDot.

> **Important** : Replace https://userndot.com with the URL of your website.

The code is designed in a way which will not affect the performance of the website. You need not worry about any delay in your webpage because of the code, thanks to the asynchronous initialization of UserNDot's SDK. UserNDot's JavaScript library is not dependent on any third party library making it free from any external dependencies.

Next few docs will guide you through the process of User profile creation and Event Tracking.    