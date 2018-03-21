define({"140":{i:0.000827171103757066,u:"../developing_with_spryker/module_guide/mail/mail_register_type.html",a:"To add your MailType to the MailTypeCollection you need to add it in your MailDependencyProvider: \u003c?php\nnamespace Pyz\\Zed\\Mail;\n\n...\n\npublic function provideBusinessLayerDependencies(Container $container) \n{\n    ...\n    \n    $container-\u003eextend(self::MAIL_TYPE_COLLECTION, function ...",t:"Register a MailTypePlugin"},"141":{i:0.00552852130414454,u:"../developing_with_spryker/module_guide/navigation/navigation.html",a:"Overview The Navigation module manages multiple navigation menus that can be displayed on the frontend (Yves). Every navigation section can contain its own nested structure of navigation nodes. Navigation nodes have types that help define what kind of link they represent. The following node types ...",t:"Navigation"},"142":{i:0.00136998973407821,u:"../developing_with_spryker/module_guide/navigation/navigation_1.html",a:"Overview The Navigation module manages multiple navigation menus that can be displayed on the frontend (Yves). Every navigation section can contain its own nested structure of navigation nodes. Navigation nodes have types that help define what kind of link they represent. The following node types ...",t:"Navigation 1.*"},"143":{i:0.000586795801095682,u:"../developing_with_spryker/module_guide/products/about_products.html",a:"The following modules are used to establish product functionality. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes ...",t:"About Products"},"144":{i:0.00139226772357539,u:"../developing_with_spryker/module_guide/products/product/product.html",a:"Product data is central data for shops. It contains characteristics that describe the product as well as characteristics that control behavior of the shop. For example the color of a product is an important information that the customer might need, whereas the weight of the product can be used to ...",t:"Product"},"145":{i:0.000784035461468031,u:"../developing_with_spryker/module_guide/products/product/product_define_variants.html",a:"\n            Spryker’s data structure for products allows to design a product hierarchy.\n            The abstract product does not have stock, but defines various default properties for the descendant concrete products (product variants).\n            The concrete product (product variant) always ...",t:"Defining Variants with Abstract and Concrete Products"},"146":{i:0.000784035461468031,u:"../developing_with_spryker/module_guide/products/product/product_bundles.html",a:"A bundle represents two or more products, sold as a set; it is a distinct product that incorporates other concrete products. Example: Bundles are handled in different ways: For example, a marketing bundle of two items that gives a 20% discount is purchased as a single item and then split for ...",t:"Product Bundles"},"147":{i:0.000784035461468031,u:"../developing_with_spryker/module_guide/products/product/product_attributes.html",a:"One way to describe a characteristic of a product is the attribute mechanism. It allows to store a list of key value pairs. There are 4 possible locations where attributes can be stored. Common attributes to all variant are stored on the level of the abstract product. However if they contain ...",t:"Product Attributes"},"148":{i:0.00203971637546742,u:"../developing_with_spryker/module_guide/products/product/product_options_2.html",a:"\n    Product options allow to configure a product further. You can define option types and each option type can have 1 to n options values.\n    Furthermore, multiple prices can be attached to an option value depending on current currency and price mode.\n     Example \n            You want to sell a ...",t:"Product Options"},"149":{i:0.000784035461468031,u:"../developing_with_spryker/module_guide/products/product/product_domain_model.html",a:"The following domain model shows abstract product and concrete product. One abstract product has at least one up to n different products. A product belongs exactly to one abstract product. Both abstract and concrete product can have 0 to n product attributes. Remember a product attribute table ...",t:"Product Domain Model"},"150":{i:0.000784035461468031,u:"../developing_with_spryker/module_guide/products/product/product_lifecycle.html",a:"The touch tables are able create the snapshot of what’s currently loaded into the Yves data storages ( both key-value and search data storages) If a product was added into the Zed database after the last export, then there’s no corresponding entry in the touch table for that product. Once it’s ...",t:"Product Lifecycle"},"151":{i:0.000846207711493027,u:"../developing_with_spryker/module_guide/products/product_new.html",a:"Overview \n            New products feature extends product module by two date attributes: \"new from\" and \"new to\" dates. Between the\n            defined date range the product is considered new. New products on the frontend appear with a label on it that\n            displays this information for ...",t:"New Products"},"152":{i:0.00083618493243079,u:"../developing_with_spryker/module_guide/products/product_bundle.html",a:"Product bundles are two or more existing products combined into a new type of product for the sole purpose to be displayed as one product in the shop frontend and to be sold together. Typically the products are concrete products, because both need to be potential order items. The new (bundled) ...",t:"Product-Bundle Module"},"153":{i:0.00069056056525462,u:"../developing_with_spryker/module_guide/products/product_group/product_group.html",a:"The Product Groups feature allows to group together multiple abstract products for various reasons. One of the most common use cases of this feature is to group same products with different colors together to make user’s browsing more convenient. Once products are grouped together, on catalog and ...",t:"Product Group"},"154":{i:0.00088028516030463,u:"../developing_with_spryker/module_guide/products/product_group/product_group_feature_integration.html",a:"Prerequisites To prepare your project to work with Product groups: Require the Product Group bundles in your composer.json by running composer require spryker/product-group spryker/product-group-collector. Install the new database tables. By running vendor/bin/console propel:diff. Propel should ...",t:"Feature Integration - Product Group"},"155":{i:0.00088028516030463,u:"../developing_with_spryker/module_guide/products/product_group/product_group_under_the_hood.html",a:"Database schema The ProductGroup module provides spy_product_group table that stores product groups. Product group entities have only the id_product_group field, because we don’t need to display or refer to any groups in any way. The only necessary details for a group are the abstract products that ...",t:"Under The Hood"},"156":{i:0.0039116325815969,u:"../developing_with_spryker/module_guide/products/product_label/product_label.html",a:"Overview Product labels are used to show additional information for abstract products in shop front-ends. They can be managed through a dedicated Zed user interface and rendered in various ways in project implementations. Feature Integration Prerequisites To prepare your project for using Product ...",t:"Product Label"},"157":{i:0.0039116325815969,u:"../developing_with_spryker/module_guide/products/product_label/product_label_1_0.html",a:"The latest version of this module can be found here  Product Label Overview Product labels are used to show additional information for abstract products in shop front-ends. They can be managed through a dedicated Zed user interface and rendered in various ways in project implementations. Feature ...",t:"Product Label 1.0"},"158":{i:0.00175755995983658,u:"../developing_with_spryker/module_guide/products/product_option_2.html",a:"This module manages the product options. The product options are product additions that can be sold with the actual product. Each product abstract can have multiple product option groups attached. Each product option value has a price configuration, which changes the total price of the selected ...",t:"Product Option"},"159":{i:0.000846207711493027,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation.html",a:"E-Commerce shops maximize value for their shop visitors by helping them explore products that are related to the one they are currently interested in. These relations appear in different ways such as displaying similar products, upgrades of products (Product-relations), or simply products that fit ...",t:"Product Relation"},"160":{i:0.000706675701435585,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_types.html",a:"In Spryker currently there are two types of relations:\n\n Related-products, related products displayed in the product detail page for the currently selected abstract product.\n Up-selling, related products displayed in the cart overview page, related products are from a list of abstract product ids or ...",t:"Product Relation Types"},"161":{i:0.00130735238049228,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_yves_datatastore.html",a:"The product relation collector exports relations to the Yves data store.  This collector is located in the ProductRelationCollector module.\n \nInclude this module in your composer.json file and update. Then add the plugin ProductRelationCollectorPlugin from this module to ...",t:"Yves Datastore Collector - Product Relation"},"162":{i:0.000706675701435585,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_integration.html",a:"Register a new collector plugin. How to is in  Yves Datastore Collector - Product Relation .\n Then register a new twig service plugin  \\Spryker\\Yves\\ProductRelation\\Plugin\\ProductRelationTwigServiceProvider inside the \\Pyz\\Yves\\Application\\YvesBootstrap::registerServiceProviders plugin stack.  This ...",t:"Product Relation Integration"},"163":{i:0.000706675701435585,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_db_entity_relation.html",a:"spy_product_relation.fk_product_abstract - is the product for which relation is build.  spy_product_relation.is_active - if relation is not active it will still be exported, but not visible.  spy_product_relation_product_abstract.fk_product_abstract - is the related product.  ...",t:"Database Entity Relation Schema - Product"},"164":{i:0.000706675701435585,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_building_your_own.html",a:"To create a new relation type, modify the Yves and Zed applications:\n\n Zed:\n\n Create new relation type in \\Spryker\\Shared\\ProductRelation\\ProductRelationTypes as a new constant type for example TYPE_RELATION_NEW also include to getAvailableRelationTypes returned array. After this you can able select ...",t:"Building Your Own Product Relation Type"},"165":{i:0.000706675701435585,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_query_builder.html",a:"Query build in Zed allows to select and bulid a dynamic related product query. The query ships with pre-set rules:\n\n sku - filter by abstract product sku.\n name - filter by abstract product name. The locale is Zed’s default locale. If a product matches in that locale it will be related in both ...",t:"Query Builder - Product Relation"},"166":{i:0.000651648778695018,u:"../developing_with_spryker/module_guide/products/product_reviews/product_review.html",a:"\n            The Product Reviews feature allows customers to add reviews and ratings to abstract products.\n            A dedicated Zed Admin UI allows reviews and ratings to be supervised.\n            Rating information can be used for sorting and filtering products.\n            Product ratings and ...",t:"Product Reviews"},"167":{i:0.00146173326737691,u:"../developing_with_spryker/module_guide/products/product_reviews/product_review_feature_configuration.html",a:"Configuring the Maximum Rating To change the maximum allowed rating, alter the Client configuration by extending the \\Spryker\\Client\\ProductReview\\ProductReviewConfig class in your project directory. Override getMaximumRating method to return the desired selectable maximum rating value. \n        ...",t:"Feature Configuration - Product Reviews"},"168":{i:0.000790124665573147,u:"../developing_with_spryker/module_guide/products/product_reviews/product_review_feature_integration.html",a:"Prerequisites To prepare your project to work with Product Reviews: Require the Product Review modules in your composer by running\n             composer require spryker/product-review composer require spryker/product-review-collector composer require spryker/product-review-gui Install the new ...",t:"Feature Integration - Product Reviews"},"169":{i:0.000790124665573147,u:"../developing_with_spryker/module_guide/products/product_reviews/product_review_filter_and_sort.html",a:"Prerequisites \n                Configure your product collector query which provides the product data for your product page map and add the required average rating value.\n             \n                Amend product page map to make it possible to filter and sort by rating value. Normalize the rating ...",t:"Filter \u0026 Sort by Average Rating - Product Reviews"},"170":{i:0.00526701235189255,u:"../developing_with_spryker/module_guide/products/product_reviews/product_review_under_the_hood.html",a:"Database Schema The Product Review module adds a new table: spy_product_review. The table stores all product review related information such as description, rating, locale, customer, product, etc. Product Reviews in Search product-review type is defined under the already existing index in Search. ...",t:"Under the Hood - Product Reviews"},"171":{i:0.0031885106664786,u:"../developing_with_spryker/module_guide/products/product-store_relation/product_store_relation.html",a:"\n            In a multi-store environment it might be necessary to configure the abstract product appearance per store (by default, all abstract products are available in all stores).\n            A dedicated partial form in Zed Admin UI allows to manage abstract product-store relations.\n            ...",t:"Product-Store Relation"},"172":{i:0.00134874349438597,u:"../developing_with_spryker/module_guide/products/product-store_relation/product_store_relation_feature_integration.html",a:"General Information \n            By default abstract products are available in all stores. This feature provides additional configuration when:\n             you have multiple stores, and you want to manage the appearance of abstract products per store. Prerequisites To prepare your project to work ...",t:"Feature Integration - Multi-Store Products"},"173":{i:0.00134874349438597,u:"../developing_with_spryker/module_guide/products/product-store_relation/product_store_relation_under_the_hood.html",a:"Database Schema \n            The Product module introduces a new table: spy_product_abstract_store. The table stores all abstract product-store relations. An abstract product is available in a store when it has a\n            spy_product_abstract_store row for the given abstract product and store ...",t:"Under the Hood - Multi-Store Products"},"174":{i:0.00102051781405106,u:"../developing_with_spryker/module_guide/products/product_set.html",a:"Overview The Product Sets feature allows you to put together multiple products for the purpose of emphasizing that the set of products can be bought together. Product Sets usually have their own separate list and detail pages in the shop frontend where customers can add containing products to the ...",t:"Product Set"},"175":{i:0.000586795801095682,u:"../developing_with_spryker/module_guide/products/price.html",a:"A price can be attached to an abstract product as well as to a concrete product. The price is stored as an integer, in the smallest unit of the currency (e.g. for Euro that would be cents). Each price is assigned to a price type ( e.g. gross price, net price ) and for a price type there can be one ...",t:"Price"},"176":{i:0.0039116325815969,u:"../developing_with_spryker/module_guide/products/product_ttl/product_ttl.html",a:" With TTL  you can easily define from and till when your product(s) will be visible and available for purchase by your customers, without having to manually manage your inventory. This feature is extremely useful if you sell products with expiry date, seasonal products or products that are valid for ...",t:"Product TTL (Time To Live)"},"177":{i:0.0039116325815969,u:"../developing_with_spryker/module_guide/products/product_ttl/product_ttl_overview.html",a:"Product TTL (Time to Live) allows you to can define the when your products are available online and when they are not. To get the main idea of the TTL, go to the  general feature overview  for more detailed information of how it works as well as familiarize yourself with its usage scenarios. TTL For ...",t:"Product TTL"},"178":{i:0.00217537675823182,u:"../developing_with_spryker/module_guide/products/category/category.html",a:"Product Category The mechanisms that make finding a product easier are the most important features in a commerce business. If it\u0027s difficult for a customer to find the product that he needs, then he won\u0027t buy it even if that product is available in the shop. One of the features is organizing the ...",t:"Category"},"179":{i:0.00317614627892026,u:"../developing_with_spryker/module_guide/products/category/category_filter.html",a:"Category filters is a feature that provides full control over filters displayed in the catalog page. It allows reordering and removing of specific search filters from Yves based on some configuration per product category. This feature is especially useful in cases when a category has a lot of ...",t:"Category Filters"},"180":{i:0.00317614627892026,u:"../developing_with_spryker/module_guide/products/category/category_filter_feature_integration.html",a:"Prerequisites To prepare your project to work with the Category Filters: Require the Category Filters modules in your composer by running\n         composer require spryker/product-category-filter composer require spryker/product-category-filter-collector composer require ...",t:"Feature Integration - Category Filters"},"181":{i:0.00317614627892026,u:"../developing_with_spryker/module_guide/products/category/category_filter_under_the_hood.html",a:"Database Schema The ProductCategoryFilter module adds a new table: spy_product_category_filter. The table stores the filter data per category in JSON format.   See also: Category Category Filters Feature Integration - Category Filters Search and Filters Category Filters Overview Graphic User ...",t:"Under the Hood - Category Filters"},"182":{i:0.00526233854547013,u:"../developing_with_spryker/module_guide/queue/queue.html",a:"Concepts Sender\t -  a program that sends messages.\n Receiver\t- a program that waits to receive messages.\n Message - \ta string or binary data  passed from Sender to Receiver.\n Message Box\t- Similar to a Mailbox, here you can store, send and receive messages.\n Introduction\n The Queue module provides a ...",t:"Queue"},"183":{i:0.00505961659451475,u:"../developing_with_spryker/module_guide/queue/queue_adapter.html",a:"Default Queue Adapter Spryker includes a RabbitMQ adapter package in  spryker/rabbit-mq , if you have already installed the spryker demoshop on your machine, this package will be automatically downloaded for you.\n",t:"Default Queue Adapter"},"184":{i:0.00475642357795444,u:"../developing_with_spryker/module_guide/queue/queue_benefits.html",a:"The following is a list of the Queus System’s benefits:\n \nAsynchronous: Message processing can be offloaded to different times to prevent bottlenecks and run when necessary.\n Decoupling: The queue provides separate layers for data and processing\n Scalability: Adding more processes for receiving and ...",t:"Queue Benefits"},"185":{i:0.0051184624921402,u:"../developing_with_spryker/module_guide/queue/queue_engine.html",a:"The Spryker virtual machine is shipped with a ready to use RabbitMQ engine inside.\n\n To access the management UI:\n\n Go to http://zed.de.demoshop.local:15672/ (Replace demoshop with your project name if you customized it)\n Enter the default credentials: user: admin Password: mate20mg Click Login\n For ...",t:"Default Queue Engine"},"186":{i:0.00475642357795444,u:"../developing_with_spryker/module_guide/queue/queue_job_config.html",a:"You can also find the Worker configuration in jobs.php as part of the Demopshop and adjust the worker command to run every minute.\n\n To adjust the worker command to run every minute:\n \u003c?php\n\n$jobs[] = [\n    \u0027name\u0027 =\u003e \u0027queue-worker-start\u0027,\n    \u0027command\u0027 =\u003e \u0027$PHP_BIN vendor/bin/console ...",t:"Queue Job Configuration"},"187":{i:0.00475642357795444,u:"../developing_with_spryker/module_guide/queue/queue_msg_processor.html",a:"Plugins are used to enable developers to have more focus on message processing. This is achieved by handling the queue implementation as a background process, allowing developers to focus on messages and their processing logic.\n\n Example:\n\n \u003c?php\nnamespace ...",t:"Queue Message Processor Plugin"},"188":{i:0.00505961659451475,u:"../developing_with_spryker/module_guide/queue/queue_task.html",a:"The Queue module provides a specific command for listening to the queues, fetching messages and triggering registered processors, by running this command you will see what messages are going to be consumed and passed to the plugins.\n\n The command syntax is as follows:\n\n ./vendor/bin/console ...",t:"Queue Task"},"189":{i:0.00505961659451475,u:"../developing_with_spryker/module_guide/queue/queue_workers.html",a:"Queue Worker is another useful command that sends the Task to a background process and provides parallel processing. By adjusting the Worker config we can run tasks with different time slot and a different amount of processes.\n Command syntax:\n\n ./vendor/bin/console queue:worker:start -vvv\n",t:"Queue Workers"},"190":{i:0.00394207535007166,u:"../developing_with_spryker/module_guide/state_machine/state_machine.html",a:"The StateMachine module provides generic implementation for state machines (SM). This module provides functionality for drawing the SM graph, triggering events, initializing a new state machine or for getting the state history for a processed item.   If you are looking for information on the OMS ...",t:"State Machine"},"191":{i:0.00369299738074838,u:"../developing_with_spryker/module_guide/state_machine/state_machine_cronjob.html",a:"There are three console commands dedicated for the state machine: state-machine:check-condition - checks all the states that have a condition without event and triggers them. state-machine:check-timeout - check timeout expired items and triggers event for them. state-machine:clear-locks - clears ...",t:"Cron Jobs - State Machine"},"192":{i:0.00366626538248475,u:"../developing_with_spryker/module_guide/state_machine/state_machine_events.html",a:"There are two main triggers: first one StateMachineFacade::triggerForNewStateMachineItem() is used when first time triggering the state machine for an item; this trigger will initialize the state machine and start transition through states until a decision without event, timeout or manual event is ...",t:"Triggering Events - State Machine"},"193":{i:0.00366626538248475,u:"../developing_with_spryker/module_guide/state_machine/state_machine_implementing_plugin.html",a:"To start using state machine, you need create a new plugin by implementing the  StateMachineHandlerInterface. This plugin is used when there is need for additional information from client or some action happens and the client needs to be notified about it. List of interface methods that need to be ...",t:"Implementing the Plugin - State Machine"},"194":{i:0.00366626538248475,u:"../developing_with_spryker/module_guide/state_machine/state_machine_modelling.html",a:"States How are the states modelled in XML? A list of state elements can be easily defined in an XML file, as in the example below. A state is defined by a name. The display attribute allows to link a glossary key that contains the name of the state for the locales configured in the application, as ...",t:"Modelling - State Machine"},"195":{i:0.00366626538248475,u:"../developing_with_spryker/module_guide/state_machine/state_machine_persistence.html",a:"To persist the state of the item and make the connection with the state machine, you need to store related data into the database. For example, you can create two fields (idStateMachineState(int) and idStateMachineProcess(int)) and store their id’s when itemStateUpdated is being triggered.   See ...",t:"Persistence - State Machine"},"196":{i:0.00366626538248475,u:"../developing_with_spryker/module_guide/state_machine/state_machine_zed_presentation.html",a:"To add manual trigger button or history for items, you need to add some implementation. State machine provides methods for triggering events and for retrieving history. StateMachineFacade::processedStateMachine(StateMachineItemTransfer[]) updates the given array of items with data from state machine ...",t:"Updating Presentation in Zed - State Machine"},"197":{i:0.00202444917677773,u:"../developing_with_spryker/module_guide/search/search.html",a:"One of the most important features in an e-commerce application is to give the customer the ability to find the products that he needs. Depending on how easy it is to find the products the customer is searching for and how relevant the search results are, the search feature is a crucial aspect for ...",t:"Search"},"198":{i:0.00096102659714983,u:"../developing_with_spryker/module_guide/search/search_3_0.html",a:"The latest version of this module can be found in  Search  section One of the most important features in an e-commerce application is to give the customer the ability to find the products that he needs. Depending on how easy it is to find the products the customer is searching for and how relevant ...",t:"Search 3.0"},"199":{i:0.00176106883361321,u:"../developing_with_spryker/module_guide/search/search_4_0.html",a:"The latest version of this module can be found in  Search  section One of the most important features in an e-commerce application is to give the customer the ability to find the specific products. Depending on how easy it is to find the products the customer is searching for and how relevant the ...",t:"Search 4.0"},"200":{i:0.00253021286182418,u:"../developing_with_spryker/module_guide/search/search_collector_config.html",a:"In this section you’ll learn how to easily map collected data from the database to the default Elasticsearch page mapping type. If you need information about how collectors work in general, you can read more about it on the  Collector  documentation page. First, you need to implement ...",t:"Search Collector Configuration"},"201":{i:0.000873594912802545,u:"../developing_with_spryker/module_guide/search/search_configure_elasticsearch.html",a:"Elasticsearch is a NoSQL data store which allows us to predefine the structure of the data we’ll be storing in it. Since the data structure we use is static, we would like to define it in advance. The definitions of the indexes and mapping types are written in JSON format, just as you’ll find it in ...",t:"Configure Elasticsearch"},"202":{i:0.00213743091499433,u:"../developing_with_spryker/module_guide/search/search_configure_features.html",a:"In this section you’ll learn how to configure faceted navigation, filters, pagination and sorting, so all the important search features that are provided by the Search module. This configuration is only relevant if you enable the three query expanders and result formatters mentioned above. ...",t:"Configure Search Features"},"203":{i:0.000873594912802545,u:"../developing_with_spryker/module_guide/search/search_filter.html",a:"In Zed there’s a section (Search and Filters -\u003e Filter Preferences) for managing the product attributes that you’d like to filter by in the shop. There are several filter types that the framework supports at the moment: single-select: filter for one value at a time (e.g. radio group), multi-select: ...",t:"Filter Preferences - Search"},"204":{i:0.000615619346695387,u:"../developing_with_spryker/module_guide/search/search_multi_currency.html",a:"\n            If you don\u0027t have the multi-currency feature in you current project yet and want to migrate, you have to follow certain steps to migrate your system.\n\n            First  migrate Price  and  modules related to multi-currency  before proceeding with the search for multi-currency.\n\n        ...",t:"Multi-Currency - Search"},"205":{i:0.0019489451793387,u:"../developing_with_spryker/module_guide/search/search_preferences.html",a:"In Zed there’s a section (Search and Filters -\u003e Search Preferences) for managing searchable product attributes. To be able to search after a product in the shop that has a specific attribute (e.g. color, size, etc.), you can click on “Add attribute to search” to create new, or “Edit” if it already ...",t:"Search Preferences"},});