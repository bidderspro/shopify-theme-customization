# command to install shopify globally

npm install -g @shopify/cli@latest

# command to check version

shopify version

# shopify theme pull -h (give us flag values to perform other actions)

# shopify theme pull -e development

→ Fetches live theme files to your computer.

# shopify theme dev -e development

→ Live edits & auto-syncs changes.

# shopify theme pull -d

Command Purpose
shopify theme pull -d Download live theme changes (from admin or collaborators) to your local machine.
shopify theme push -d Upload local changes to your Shopify store.
shopify theme dev -d Start a live-sync dev server (auto-refreshes changes locally and on the store).
shopify theme serve Run a local preview server (no real-time sync with the store).

# simply run after changing your theme

git add .
git commit -m "any messaage here like hello"
git push origin Root

Let's if we have conflicts then how to handle that case
i.e we editted theme from admin and local development mode
admin customize link
https://admin.shopify.com/store/theme-development-store-v1/themes/134945701971/editor
local customize link
https://admin.shopify.com/store/theme-development-store-v1/themes/134925320275/editor?hr=9292
now in this case we will manage it like this using github

shopify theme pull -d
git add .
git commit -m "local2"
git push origin Root

<!-- above will say there is a conflict -->

git pull origin Root
git merge origin Root
select any of change you want in your file which is conflicted
then run
git add .
git commit
git push origin Root

<!-- rule for variable in liquid -->

Rule Example
Use {{ }} to display variables {{ product.title }}
Use {% %} for logic {% if user.logged_in %}
Filters work inside {{ }} `{{ price	money }}`
No {{ }} = treated as plain text myvariable → Literal text
Final Answer:
{{ myvariable }} tells Liquid: "Replace this with the value of myvariable."

Without {{ }}, Liquid treats it as plain text.

Always use {{ }} when displaying dynamic data.

Try it in your theme! Change {{ myvariable }} to myvariable and se

1. Liquid "Keywords" (Tags & Objects)
   Liquid has 3 main types of syntax:

Tags ({% %}) → Logic (if, for, assign, etc.)

Objects ({{ }}) → Output variables (e.g., product.title)

Filters (|) → Modify output (e.g., | plus: 5).

A. Liquid Tags (Logic Control)
These are reserved keywords like:

{% if %}, {% elsif %}, {% else %}

{% for ... in ... %}

{% assign %}, {% capture %}

{% comment %}, {% raw %}

✅ Official Shopify Filters Include:

Math String Array Other
plus upcase join date
minus downcase first default
times capitalize last money
divided_by strip_html sort json

# shopify checks conditions from right to left i.e last condition will be checked first

# for example:

{% if product.title contains 'Snowboard' or oroduct.type == 'Snowboard' and product.price < 65000 %}

# theme.liquid

this file is where we have the base structure of the theme, each page can use a different layout this
is why in this file over here you see theme.liquid. which is default layout that will be used unless you specify otherwise and then for example here we have password.liquid..

# content_for_layout

this is a special variable that is available to us in any layout file and this is what controls where the content of the page will render you will normally put these inside the main tag # content_for_header
it's important because this is where third party apps inject their javascript and once you discover this
in an attempt for imporving the performance of your site, you might be tempted to start parsing this variable and start replacing or removing things through liquid filters
shopify can change the structure of this variable without notifying you ahead of time therefore we should not rely on how it is structured now because tomorrow it might be different

# For General Content:

{{ content_for_layout }} → Renders the main page content (used in theme.liquid).

{{ content_for_index }} → Specific to the homepage (used in index.liquid).

# For Assets & Scripts:

{{ 'script.js' | asset_url | script_tag }} → Safe way to load JavaScript.
{{ 'style.css' | asset_url | stylesheet_tag }} → Safe way to load CSS.


One-line answer:
Use {% section 'template-name' %} or {% render 'snippet' %} for modular content instead of {{ content_for_layout }}, whose purpose is to dynamically load page-specific content (like product/page/blog templates) in theme.liquid.

(For detailed safety, avoid modifying content_for_layout directly—let Shopify handle it.) 🚀 
# A common limitation of liquid is 
at time of recording that can not access query parameters or arbitrary query parameters so we might face this issue and try to google it and you may end up in this case

Query parameters (?key=value) are used for tracking (UTMs), filtering collections, passing temporary data (e.g., ?variant=id), or theme previews (?preview_theme_id), not just for theme modifications—Shopify Liquid can’t natively access arbitrary params, requiring JavaScript/workarounds for dynamic changes.

(Example: ?view=grid triggers alternate layouts via Liquid’s {% if request.query_params.view == 'grid' %}—but only for whitelisted params.) 🛠️

# there is a missing file named checkout.liquid 
this file is not present with every theme, and this is basically a layout for the checkout page. it's only available for shopify plus store and that's why we don't see it in every theme and in layout folder. and one thing more even in plus mode checkout.liquid is deprecated 
# sections
sections are liquid files that allows us to create reusable modules of content that can be customized by Merchants. What this mean is that we will only create the HTML structure but the content itself will be added by the Merchant, they can be as customizeable as you need them to be.   