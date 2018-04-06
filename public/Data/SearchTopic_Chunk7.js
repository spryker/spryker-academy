define({"476":{i:0.000711542346108398,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_search_.html",a:"Spryker provides a convenient way to search product data. You’re enabled to easily setup full-text and facet search. In this tutorial we will show how to implement a simple product search using Spryker. This tutorial will not cover all aspects in detail to keep it focused. There will be links ...",t:"Tutorial - Search"},"477":{i:0.000508004181384675,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_search_custom_setup.html",a:"There might be instances when you need to go beyond product search or you have very specific requirements regarding search. You’re not tied to the basic mapping that ships with Spryker. You can easily roll your own and set up custom analyzer very easily. The underlaying library that gets used by ...",t:"Tutorial - Search Custom Setup"},"478":{i:0.00082935526752134,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_transfer_data_yves_zed.html",a:"Yves gets most of its data from the client-side NoSQL data stores(data such as product details, product categories, prices, etc.). There are situations in which Yves needs to communicate with Zed either to submit data(e.g.: the customer has submitted a new order or subscribed to newsletter) or to ...",t:"Tutorial - Transfering Data Between Yves and Zed"},"479":{i:0.000629019904035964,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_twig_extensions.html",a:"As an example on how to implement a Twig extension, we’ll build a filter which can be used on displaying prices. Implement the filter Add the Twig extension Register the new Twig extension Test your Twig extension Implement the filter Add the logic in a dedicated class, in the module you’re ...",t:"Tutorial - Twig Extensions"},"480":{i:0.000508004181384675,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_using_translations.html",a:"The data stored in the key-value storage can be used for multiple purposes: URL mappings localized product details localized product categories details Translations - Using Twig Translator Twig Translator uses the data that comes from the Redis key-value storage. The glossary keys store static ...",t:"Tutorial - Using Translations"},"481":{i:0.000508004181384675,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_working_filter_facets.html",a:"A search engine is one of the most important functionalities in an online shops because it facilitates a better navigation, allowing the user to get to the products that are in his interest. The search engine should return a small number of items that match the query. Facets provide aggregated data ...",t:"Tutorial - Working with Filter Facets"},"482":{i:0.00386460773753123,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_working_forms.html",a:"Spryker uses Symfony forms; this tutorial will help you get started on working with forms. You will build a simple newsletter subscription form that contains a field for entering the email address and a submit button. Follow the steps described below to create the newsletter subscription form: ...",t:"Tutorial - Working with Forms"},"483":{i:0.00338509294379601,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_working_tables.html",a:"Spryker has a dedicated component to help you build tables for the Zed UI. This tutorial will help you get started on working with tables. Creating a New Table Configure the Table Prepare the Data Render the Table Creating a New Table To get started defining the new table, create a new class in your ...",t:"Tutorial - Working with Tables"},"484":{i:0.000508004181384675,u:"../enablement/tutorials_and_howtos/advanced_tutorials/t_yves_bootstrap.html",a:"Yves and Zed are both built upon the  Silex micro-framework . So most concepts about modern web frameworks apply here as well. In static/public/Yves/index.php you will find the entry for the front-end application. \u003c?php\n$errorHandlerEnvironment = new ...",t:"Tutorial - Yves Bootstrapping"},"485":{i:0.00077110273809891,u:"../enablement/tutorials_and_howtos/howtos/how_tos.html",a:"HowTos are simple instructions to guide you through the process of performing a single task.  Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  ...",t:"HowTos"},"486":{i:0.000508004181384675,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_direct_debit/ht_implement_dd.html",a:"This article describes the steps how to implement direct debit payment method without integrating with a third party payment service provider.\n For this example, we will add a new module called PaymentMethods.\n\n If it is your the first time creating a new module, check  Tutorial - Adding a New ...",t:"HowTo - Implement Direct Debit Payment"},"487":{i:0.000579972716011777,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_direct_debit/dd_fe_implementation.html",a:"Create a form\n In Yves, we start by building the form.  Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, inside the Form/DataProvider/ folder:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"Direct Debit Front-end Implementation"},"488":{i:0.000579972716011777,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_direct_debit/dd_checkout_implementation.html",a:"The next step is to integrate direct debit into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector, that will inject the direct debit form and handler into the Checkout module: Click to expand the code sample \u003c?php\n\nnamespace ...",t:"Integrate Direct Debit into Checkout"},"489":{i:0.000579972716011777,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_direct_debit/dd_be_implementation.html",a:"\nPersist payment details\nThe payment details for the direct debit payment method need to be persisted in the database. We’ll define a new table to store this data; inside the Persistence/Propel/Schema/ folder in Zed add the spy_directdebit_schema.xml file with the following content: \u003c?xml ...",t:"Direct Debit Back-End Implementation"},"490":{i:0.000579972716011777,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_direct_debit/dd_shared_implementation.html",a:"\nAs you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface under the Shared namespace, where you’ll define these constants.\n ...",t:"Direct Debit Shared Implementation"},"491":{i:0.000579972716011777,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_direct_debit/dd_test_implementation.html",a:"Testing the Direct Debit Implementation Now you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.",t:"Testing the Direct Debit Implementation"},"492":{i:0.000723489464754664,u:"../enablement/tutorials_and_howtos/howtos/ht_add_new_shipment_method_2.html",a:"\nThis article describes the steps to add a new shipment method, without integrating with the shipment provider.\n In this tutorial we’ll consider the case when you need to add a new shipment method, without the need to integrate it with the shipment providers system.\n \nWhat’s important for this ...",t:"HowTo - Add a New Shipment Method 2.0"},"493":{i:0.000508004181384675,u:"../enablement/tutorials_and_howtos/howtos/ht_cart.html",a:"This article describes how to add product variants and product pictures to an existing cart Prerequisites: Before starting make sure you are familiar with the concept of Spryker  Super Attributes .  UI Changes: Cart now supports changing the items in the cart by modifying their attributes. If we ...",t:"HowTo - Cart Integration"},"494":{i:0.000508004181384675,u:"../enablement/tutorials_and_howtos/howtos/ht_create_personalized_prices.html",a:"Personalized Prices This article describes the steps that you need to consider when you need to implement personalized prices for customer groups.\n \nOverview\n When implementing special prices that are according to the group the customer is part of, several steps need to be considered.\n Extend ...",t:"HowTo - Create Personalized Prices"},"495":{i:0.000732587048172157,u:"../enablement/tutorials_and_howtos/howtos/ht_data_import.html",a:"The following article describes with a real life example for importing product images how to build your own DataImport for a specific type. The Database Schema You should start by looking at the database tables you want to fill with data. The image below shows the table relation for product images. ...",t:"HowTo - Add a New DataImport Type"},"496":{i:0.000508004181384675,u:"../enablement/tutorials_and_howtos/howtos/ht_extend_inuse_core.html",a:"This topic describes how to extend a core module that is used by another core module.\n\n Extra consideration must be taken when extending core modules that are already in use by another module. In the following example we will extend the Cart  -\u003e Calculation modules.\n\n Step 1: Modify the Interface ...",t:"HowTo - Extend a Core Module That is Used by Another"},"497":{i:0.000508004181384675,u:"../enablement/tutorials_and_howtos/howtos/ht_force_https.html",a:"The following article describes how you can force to use HTTPS in your pages. Load balancer If your servers are behind a load balancer and the load balancer is doing the redirects from HTTP to HTTPS, you don\u0027t need to further configure the application.\n         Application Configuration Force HTTPS ...",t:"HowTo - Force HTTPS"},"498":{i:0.000534425695124379,u:"../enablement/tutorials_and_howtos/howtos/ht_case_sensitive_file_system_mac.html",a:"By default Mac OS uses a case-insensitive file system to support compatibility to applications (e.g. Photoshop) provided for the operating system. The file-system itself is capable of working in a case-sensitive mode. There are a number of options on how to change case sensitivity: Re-partition the ...",t:"HowTo - Handling Case Sensitive File-System on Mac OS"},"499":{i:0.000508004181384675,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_implement_invoice_payment.html",a:"Invoice Payment This article describes the steps that you need to consider when you need to implement invoice payment method without integrating with a third party payment service provider.\n In this HowTo, we will add a new module called PaymentMethods.\n\n If this is you first time creating a new ...",t:"HowTo - Implement Invoice Payment"},"500":{i:0.000744301329326368,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_invoice_payment_fe.html",a:"Creating the Form\n In Yves, we’ll start by building the form. Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, inside the Form/DataProvider/ folder:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"HowTo - Implement Invoice Payment Front End"},"501":{i:0.000579972716011777,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_invoice_payment_checkout.html",a:"The next step is to integrate the invoice payment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector that will inject the invoice form and handler into the Checkout module:\n Click here to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo — Integrate Invoice Payment into Checkout"},"502":{i:0.000744301329326368,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_invoice_payment_be.html",a:"Checkout Plugins\n To integrate the invoice payment method into the checkout, we need to provide implementations for these 2 plugins: CheckoutPreCondition PaymentSaveOrder Add the following 2 plugins in Zed, under the Communication/Plugin/Checkout/ folder of the new added module.\n\n ...",t:"HowTo - Implement Invoice Payment Back End"},"503":{i:0.000744301329326368,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_invoice_payment_fe_be_shared.html",a:"As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Invoice Payment - Shared Implementation"},"504":{i:0.000579972716011777,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_invoice_payment/ht_invoice_payment_test.html",a:"HowTo - Implement Invoice Payment - Test When you have completed the instructions on  front end ,  back end  and  shared  implementation, you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.",t:"HowTo - Implement Invoice Payment - Test"},"505":{i:0.000508004181384675,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_implement_prepayment.html",a:"Prepayment\n This article describes the steps that you need to consider when you need to implement the prepayment method without integrating with a third party payment service provider.\n In this HowTo we will add a new module called PaymentMethods.\n\n If this is you first time creating a new module, ...",t:"HowTo - Implement Prepayment"},"506":{i:0.000579972716011777,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_prepayment_fe.html",a:"Creating the Form\n In Yves, we’ll start by building the form. Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, under Form/DataProvider:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"HowTo - Implement Prepayment Front End"},"507":{i:0.000579972716011777,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_prepayment_checkout.html",a:"The next step is to integrate prepayment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector that will inject the prepayment form and handler into the Checkout module:\n Click to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo — Integrate Prepayment into Checkout"},"508":{i:0.000579972716011777,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_prepayment_be.html",a:"To integrate the prepayment method into the checkout, we are required to provide implementations for these 2 plugins:\n\n CheckoutPreCondition  PaymentSaveOrder  Add the following 2 plugins in Zed, inside the Communication/Plugin/Checkout folder of the new added module.\n\nPrepaymentPreCheckPlugin:\n ...",t:"HowTo - Implement Prepayment Back End"},"509":{i:0.000579972716011777,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_prepayment_shared.html",a:"As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Prepayment Shared"},"510":{i:0.000579972716011777,u:"../enablement/tutorials_and_howtos/howtos/how_to_implement_prepayment/ht_prepayment_test.html",a:"HowTo - Test Prepayment Implementation Now you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.\n\n",t:"HowTo - Test Prepayment Implementation"},"511":{i:0.00125197446246631,u:"../enablement/tutorials_and_howtos/howtos/ht_product_data_import_frontend.html",a:"Product Customization This article describes flow of the product data from importing it to the SQL database to showing it in the front-end view.\n Importing Products to the SQL Database\n Products are imported in the SQL database through the Importer module. The product details are parsed from CSV ...",t:"HowTo - Product Data from Import to Front-End View"},"512":{i:0.000508004181384675,u:"../enablement/tutorials_and_howtos/howtos/ht_mvp_project_structuring.html",a:"In this HowTo we will provide practical tips and guidelines for structuring MVP Projects.  The purpose of these guidelines is to help with the project planning stage.  In general, good products are built on strong foundations, and a cost-effective projects are managed through clarity, communication ...",t:"HowTo - MVP Project Structuring"},"513":{i:0.00338509294379601,u:"../enablement/tutorials_and_howtos/howtos/ht_replace_bundle_dependancies.html",a:"Spryker Dependencies This content describes how to identify module dependencies and replace a dependent module with another one. Each Spryker module might have several dependent modules that provide communication, utilities and added functionality. Usually adjustments are done via our plugin ...",t:"HowTo - Replace Spryker Module Dependencies"},"514":{i:0.000564149898081546,u:"../enablement/tutorials_and_howtos/howtos/ht_setup_spryker_with_mysql.html",a:"Spryker supports MySQL database and for installing it with this database, follow these instructions to adjust the configuration. MySQL Version Currently Spryker works only with MySQL version 5.7 or higher.  Adjusting Spryker to Run with MySQL \n    For running the Spryker Demoshop with MySQL, it is ...",t:"HowTo - Setup Spryker with MySQL"},"515":{i:0.00286094149439927,u:"../enablement/tutorials_and_howtos/howtos/ht_setup_stores_multi_store_projects.html",a:"For the case in which you must support multiple stores in your application, this can be achieved through configuration.\n\nYou can setup the stores together with their settings such as date format or currency and also you can setup the default store for your application.\n\n Configure Stores\n The stores ...",t:"HowTo - Setup Multi-Store Projects"},"516":{i:0.000508004181384675,u:"../enablement/tutorials_and_howtos/howtos/ht_setup_stores_multiple_locals.html",a:"Multiple Locales This article describes the steps that you need to consider when you have to setup stores with multiple locales.\n Configure Locales for Store\n The stores configuration can be found in the config/Shared/stores.php file. You can find out more about store configuration  here .\n\n For ...",t:"HowTo - Setup Stores with Multiple Locales"},"517":{i:0.00095780752280406,u:"../enablement/store_administration_guide/store_administration_guide.html",a:"The  features list  will give you an overview of what the Spryker Commerce OS offers and prospective extensions that you can add in your development process. Next, user manuals for the back-office application (Zed) are offered. The manuals include all bundles that are available to configure, namely ...",t:"Store Administration"},"518":{i:0.000508004181384675,u:"../enablement/store_administration_guide/bg_sales.html",a:"Sales Orders can be managed by the shop owner from the back-office application (Zed). In this document we’ll describe the functionality offered by the Sales module that will help you manage the orders submitted in your shop. The Order Management System strongly correlates with the state machines you ...",t:"Sales"},"519":{i:0.000508004181384675,u:"../enablement/store_administration_guide/customers/customers.html",a:"Managing your customers effectively is an important part of your e-commerce business. The whole customers management is done through the Customers menu in the Administration Interface, which is divided into two section: Customers and Customer Groups. Customers is the area where all the data of users ...",t:"Customers"},"520":{i:0.0020381186080184,u:"../enablement/store_administration_guide/customers/bg_customer.html",a:"Customer data can be managed either by the shop owner from the Administrator Interface, or by the customer from the shop interface. When managing customer data from the Administration Interface, you can add personal information like name and email address, as well as customer billing and shipping ...",t:"Customer"},"521":{i:0.000875186378581341,u:"../enablement/store_administration_guide/category/bg_about_category.html",a:"About Categories Managing volumes of products requires that you be able to group together items under specific criteria. With Categories, you can group and build hierarchies of products by category. This is how we create a structure to display products by, for example, Electronics. Under this ...",t:"Spryker Commerce OS"},"522":{i:0.0089681189403209,u:"../enablement/store_administration_guide/category/bg_ui_category.html",a:"A product category is a way to organize the products in your shop by the type of products you sell. The product categories can be created and update using the dedicated section in the back-office user interface. Category assigning A product can be assigned to one or more product categories. Next, we ...",t:"Category"},"523":{i:0.000848988221639125,u:"../enablement/store_administration_guide/cms/bg_cms.html",a:"In ZED Admin UI there is a dedicated section that enables you to create pages, blocks, as well as configure URL redirects. Both pages and blocks use Twig templates that must be already created. To find out more on how to use the Content Management System, please follow the following sections: CMS - ...",t:"CMS"},"524":{i:0.000654825078038394,u:"../enablement/store_administration_guide/cms/cms_pages/cms_pages.html",a:"CMS - Pages In Pages section you can create new CMS pages, publish, view, edit them as well as manage all their changes with the versioning functionality.",t:"CMS - Pages"},"525":{i:0.00221001398401149,u:"../enablement/store_administration_guide/cms/cms_pages/cms_creating_new_page.html",a:"To demonstrate how to add a new page in Yves using the CMS, we will create a page with contact information in the demo shop. Adding a Template For the New ‘Contact Us’ Page Create a new Twig template under the src/Pyz/Yves/Cms/Theme/default/template/ folder. We’ll call it contact_page.twig and it ...",t:"CMS - Creating a New Page"},"526":{i:0.00139832950507468,u:"../enablement/store_administration_guide/cms/cms_pages/cms_url_redirects.html",a:" CMS - URL Redirects URL redirects can be configured from the CMS interface. You must specify the URL you need to redirect, the new URL and the status code which plays a major role for search engines.   See also: CMS - Creating a New Page Preview Draft Page CMS Block CMS Glossary  CMS Versioning ...",t:" CMS - URL Redirects"},"527":{i:0.00120905996628735,u:"../enablement/store_administration_guide/cms/cms_pages/cms_versions.html",a:"With CMS versioning, you can manage all changes for a CMS page.  You can compare CMS versions, rollback or discard changes to a page.  To view versioning for a CMS page, click Version History from the top of the page. Rollback to CMS Version By selecting previous CMS versions, you will be able to ...",t:"CMS Versioning"},"528":{i:0.008066155440539,u:"../enablement/store_administration_guide/cms/cms_block.html",a:"How to Use Blocks \n        Blocks can be viewed as partial content snippets that can be embedded in other pages. From an SEO perspective\n        blocks are a real advantage.         \n        The CMS Block module supports flexible extension by adding a new connector.  Spryker provides two extensions\n ...",t:"CMS Block"},"529":{i:0.000545434659182589,u:"../enablement/store_administration_guide/products/products_overview.html",a:"Products are the core of your shop and deserve a great deal of your attention, as selling them is the whole reason behind your online store. Therefore, it is essential to know how to manage the products you present to your customers. The whole product management, from product creation to stock and ...",t:"Products Area Overview"},"530":{i:0.000545434659182589,u:"../enablement/store_administration_guide/products/products.html",a:"Product management begins with creation of products and building a product catalog.  Most products are not just a single item and often one product comes in different shapes and sizes. Therefore, the first level of the catalog is an abstract level where we set up the common attributes of a product. ...",t:"Products"},"531":{i:0.000508004181384675,u:"../enablement/store_administration_guide/customer_user_connector/bg_customer_user_connector.html",a:"\n            The Customer User Connector feature allows to connect a customer to 1 Zed user.\n         This feature is supported by 2 modules: CustomerUserConnector module:\n                Defines database schema requirements and CustomerTransferUsernameExpanderPlugin plugin to populate customer\u0027s ...",t:"Customer User Connector"},"532":{i:0.00108765896832747,u:"../enablement/store_administration_guide/customer_user_connector/bg_customer_user_connector_feature_integration.html",a:"Prerequisites To prepare your project to work with Customer User Connector: Require the Customer User Connector modules in your composer by running\n                 composer require spryker/customer-user-connector composer require spryker/customer-user-connector-gui \n                Install the ...",t:"Feature Integration - Customer User Connector"},"533":{i:0.00072390978526598,u:"../enablement/store_administration_guide/customer_user_connector/bg_customer_user_connector_under_the_hood.html",a:"Under the Hood - Customer User Connector Database Schema A new field (fk_user) is added to spy_customer to make it possible to connect a customer to 1 Zed user.   Last review date: Sep. 22, 2017 ",t:"Under the Hood - Customer User Connector"},"534":{i:0.000609773263746537,u:"../enablement/store_administration_guide/bg_glossary.html",a:"The translations can be handled from the back-office application from the Glossary section. A glossary consists of a glossary key (which is used in the templates contained in the shop application) a glossary value for each locale defined in the shop. Example: \t\tNext, we will help you create this ...",t:"Glossary"},"535":{i:0.00331503233751474,u:"../enablement/store_administration_guide/search_and_filters/search_and_filters.html",a:"Having a well-thought-out product search is a huge opportunity to provide an amazing shopping experience. It is one of the primary ways you can help customers find what they’re looking for. In our Zed Admin UI we have features that enable you to control search and filtering preferences and customize ...",t:"Search and Filters"},"536":{i:0.00388724326005701,u:"../enablement/store_administration_guide/search_and_filters/category_filters/category_filters.html",a:"An essential part of organizing products in a store is to arrange items into  categories . Category Filters allow you to refine and customize the way filters are listed when you search by category. With Category Filters you can improve and optimize how visitors to the store locate products. When a ...",t:"Category Filters Overview"},"537":{i:0.00372643692592046,u:"../enablement/store_administration_guide/search_and_filters/category_filters/gui_category_filters.html",a:"To access the Category Filters page, from the Administration Interface\u0027s main menu (on the left), click Search and Filters and then Category Filters. Category filters page has two 2 major areas: The Root nodes list The Category tree The Category Filters page consists of the following elements: ",t:"Graphic User Interface - Category Filters"},"538":{i:0.00425442545725368,u:"../enablement/store_administration_guide/search_and_filters/category_filters/creating_managing_category_filters.html",a:"In the following section we will show you how to  create a Category filter set and customize filter behavior. Creating a  Filter Set To create a new filter set: Go to the Search and Filters and click Category Filters. Select the root category\nfrom the Root nodes list table. \n                The ...",t:"Creating and Managing Category Filters"},"539":{i:0.00140148080005483,u:"../enablement/store_administration_guide/discounts/bg_discounts.html",a:"In Spryker, there are two types of discounts that can be defined : Vouchers To redeem this type of discount, the customer must enter a voucher code. Similar to cart rules discount, the discount is applied only if the linked decision rules are satisfied and if it’s active and valid. Cart Rules This ...",t:"Discounts"},"540":{i:0.000805829720941394,u:"../enablement/store_administration_guide/discounts/bg_discounts_creating_voucher.html",a:"The creation of a voucher consists of 4 steps: Define the general information (e.g. name, validity period) Define the rules and items on which the discount should be applied Define when to apply the discount Generate the voucher codes that can be used by the customers to redeem the discount Create ...",t:"Creating a Discount Voucher"},"541":{i:0.000805829720941394,u:"../enablement/store_administration_guide/discounts/bg_discounts_creating_cart_rule.html",a:"A cart rule is a discount that is contained in the cart and needs no input from the customer. If the discount is active, valid and the cart satisfies the linked conditions, then it’s automatically calculated for the order. Creating a Cart Rule The steps for creating a cart rule are similar to the ...",t:"Creating a Cart Rule Discount"},});