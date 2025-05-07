# note

liquid runs on the server and that's has its pros and it's cons its biggest advantage over other wayss of having dynamic content like say it with javascript is that with liquid the html you send to the client already has the content in so you so your user won't have to wait for an extra api call to be done to get that content and you won't have to manage the complexity that comes with creating that interaction yourself through javascript on the other hand as it is only run on the server it has no information about the user device so if you wanted to do something like render a section based on whether the user was visiting from a mobile phone or from a desktop that's out of scope of what liquid can do and instead you'll have to do it with javascript after the content is loaded on the user's device

understanding above concept
shopify stores this data i.e provides api for data that is linked with shopify

1. Store data (products, orders, customers) → Shopify Admin API
2. Cart/checkout actions → Storefront API
3. Theme settings → Shopify Liquid
   When to Use Shopify APIs vs. External Backend?
   Use Case Shopify API External Backend
   Fetch products/customers ✅ Yes ❌ Not needed
   Save/process custom data (e.g., user profiles) ❌ No ✅ Yes (Hostinger server)
   Connect to payment gateways (outside Shopify) ❌ No ✅ Yes (Stripe, PayPal)
   Modify checkout logic ✅ (Checkout Extensions) ❌ Restricted

Shopify acts as a middleman between your theme and backend.

# Do You Always Need a Backend?

1. No! If you just need:
   Product listings → Use Liquid.
   Cart updates → Use Shopify AJAX API.
   Basic customization → Theme settings + Liquid.

2. But if you need:
   Custom databases → External backend (Hostinger).
   External payment systems → Backend required.

# What is Liquid?

1. Liquid is a Shopify server-side language (like PHP in WordPress).
2. It runs on Shopify’s servers (not your browser).
3. It pre-generates HTML before sending it to the visitor.
   <!-- This runs on Shopify’s server -->
   <h1>{{ product.title }}</h1> <!-- Gets replaced with real product name -->

→ When the page loads, the user sees:

<h1>Blue T-Shirt</h1> <!-- Already filled in! No waiting. -->

# How is Liquid Different from a "Backend"?

# Liquid (Shopify Server) Custom Backend (Node.js/PHP)

Only for Shopify data (products, cart, Can do anything (custom databases, APIs).
orders, customers etc).  
Runs automatically when a page loads. Needs manual API calls from JavaScript.
No databases/logic (just templates). Can process payments, save user data, etc.

# When to Use

# 1) When to Use Liquid?

# ✅ Use Liquid when:

Displaying Shopify data (products, collections, cart).
You want fast loading (no extra API calls).
You need SEO-friendly pages.

# 2) When to Use a Custom Backend?

# ✅ Use a backend (Hostinger, AWS) when:

You need custom features (e.g., loyalty points, external APIs).
You’re saving user data outside Shopify.
You’re processing payments not supported by Shopify.

# How to Know When to Use Liquid? (Flowchart)

Is the data coming from Shopify?

Yes → Use Liquid. (e.g., {{ product.price }})
No → Use JavaScript + Backend API.
Does it need real-time updates?
Yes → Use JavaScript (e.g., live cart count).
No → Liquid is fine.
Does it depend on user’s device/screen?
Yes → Only JavaScript can detect this.
No → Liquid can handle it.

# . Key Takeaways

Liquid = Pre-filled HTML (Shopify data only, fast load).
JavaScript = Dynamic updates (after page loads).
Backend = Custom logic (databases, external APIs).

# Remember:

Liquid is for Shopify content.
JavaScript is for interactivity.
Backend is for everything else.

# Questions if you need then search about these questions

1. could we integrate react while customizing a shopify theme? 2. is it accepatable? Will other clients take this from developers in market?
2. Will other clients integrate a separate backend while customizing shopify theme?
3. is it possible to remove liquid while customizing a theme and use react for designing theme and express or something else to implement backend?
4. Is client do this i.e do client ask to remove simple liquid and shopify provides apis that can be handled with using backend instead of shopify liquid language?

# when you create a snippets then it's required to add documentation of that file in form of comments

<!-- comment -->

Accepts
...
...
Usage:
...
...

<!-- endcomment -->

In Shopify, a metafield is a flexible way to store custom, detailed information about products, orders, customers, and other resources, going beyond the basic fields available in the Shopify admin


Shopify has a limit of 10 pinned metafield definitions visible on product pages, and a limit of 20 pinned customer metafields visible on customer details in the POS app. However, the total number of metafield definitions you can create is 200 for each resource type

# standard metafields definitions
when creating a meta field and filling/writtng name for a new definition, we get a list of suggestions these are known as standard metfields definitions.

shopify has created metafields to store data under specific cases, if you need to store data that follows under these cases usually use a standard meta field as they are interoperable between apps and themes 

# How to get newly added metafields in localhost code?
just run "shopify theme dev" again to see your changes