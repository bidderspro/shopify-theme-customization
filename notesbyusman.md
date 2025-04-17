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

Math	String	Array	Other
plus	upcase	join	date
minus	downcase	first	default
times	capitalize	last	money
divided_by	strip_html	sort	json
 
 # shopify checks conditions from right to left i.e last condition will be checked first 
 # for example: 

 {% if product.title contains 'Snowboard' or oroduct.type == 'Snowboard' and product.price < 65000 %}
