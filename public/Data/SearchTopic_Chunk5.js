define({"343":{i:0.000668984219372369,u:"../developing_with_spryker/industry_partner_integration/payone/v1_0/integration_payment_payone_prepayment.html",a:"Prepayment method is a safe alternative to payments involving credit cards or debit cards (such as online banking transfer). Usually bank transfer would require manual processing to mark transaction as cancelled or completed, but the process is fully automated through the integration with the Payone ...",t:"Pre-payment - Payone"},"344":{i:0.000668984219372369,u:"../developing_with_spryker/industry_partner_integration/payone/v1_0/integration_payment_payone_online_trans.html",a:"Supported online banking service providers are SofortBanking, Giropay, Electronic Payment Standard (Eps), PostFinance Card, PostFinance E-Finance, iDEAL, Przelewy24, and Bancontact. They are enabled  through the integration with Payone, using the online transfer payment type.\n\n Each payment method ...",t:"Online Transfer Payment- Payone"},"345":{i:0.00323353625498431,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay.html",a:"  Partner Information Amazon pay consists of client-side tools (widget, javascript etc.) and Amazon API with SDKs written for different\n            programming languages (PHP, Python, Ruby, Java, C#). Client-side tools are used for displaying GUI elements on some common pages of an internet shop, ...",t:"Payment Integration - Amazon Pay"},"346":{i:0.00323966957297944,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_configuration.html",a:"\n            Please refer to config/Shared/config.dist.php for example of module configuration.\n         To setup the Amazon Pay initial configuration, use the credentials you received after registering as an Amazon seller: \n$config[AmazonPayConstants::CLIENT_ID] = ...",t:"Amazon Pay - Configuration"},"347":{i:0.00288476482654862,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_email_notification.html",a:"Since Amazon Pay requires some emails being sent in specific situations, please implement on a project level following authorization status update logic. UpdateOrderAuthorizationStatusTransaction Once the order authorization state is Suspended, the customer should receive an email stating that the ...",t:"Amazon Pay - Email Notifications"},"348":{i:0.00323966957297944,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_rendering_pay.html",a:"Usually the checkout page includes information for the buyer to review, items in the cart, prices, total price information and some other order related details. From this page, the buyer can proceed to checkout by clicking a related GUI element (for example hyperlink or button). Amazon Pay provides ...",t:"Rendering a \"Pay with Amazon\" Button on the Cart Page"},"349":{i:0.00358385393383149,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_order_ref_info.html",a:"After successful authorization, a buyer will be redirected to an order details page to enter all the information necessary for placing an order: address of shipment, payment method, delivery method and some calculations about taxes, possible discounts, delivery cost, etc. Amazon Pay provides ...",t:"Obtaining an Amazon Order Reference and Information about Shipping Addresses"},"350":{i:0.00323966957297944,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_api.html",a:"So far we discussed the client side implementation provided by Amazon Pay. On the Spryker OS side, the module provides tools for rendering Amazon Pay widgets. Another part of the implementation is the Amazon Pay API function wrapper, implemented as a Facade. Each API call involves similar classes ...",t:"Amazon Pay API"},"351":{i:0.00323966957297944,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_refund.html",a:"After successful authorization and capture processes order should be closed. This blocks any modifications to\n            an order. From this state only Refund operation is possible. Refund can be partial if more than one item is\n            set to refund or full. Amazon only requires the amount of ...",t:"Amazon Pay - Refund"},"352":{i:0.00323966957297944,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_state_machine.html",a:"The state machine is different for synchronous and asynchronous flow. Although from status \"capture\n            completed\" it is the same and in the state machine, it\u0027s presented as a sub-process. State machine for the synchronous flow: State machine for the asynchronous flow: OMS Commands In order ...",t:"Amazon Pay - State Machine"},"353":{i:0.00323966957297944,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_simulations.html",a:"In order to reproduce some edge cases like declined payment or pending capture, Amazon provides two solutions. The first is special methods marked with red star on payment widget. It allows to reproduce different cases of \"decline\" payment workflow. But there are more edge cases like expired ...",t:"Amazon Pay Sandbox Simulations"},"354":{i:0.00110983342864226,u:"../developing_with_spryker/industry_partner_integration/billpay/integration_payment_billpay.html",a:"Payment Integration - Billpay (BETA) BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Payment Integration - Billpay (BETA)"},"355":{i:0.000779617689337399,u:"../developing_with_spryker/industry_partner_integration/billpay/integration_payment_billpay_integration.html",a:"Billpay offers multiple payment methods (Invoice, Direct Debit, PayLater, Instalment). Availability of payment methods differs from country to country. Please contact Billpay directly or visit the Billpay website ( https://www.billpay.de/en/business-clients/merchant-request/ ) for details. The ...",t:"Billpay Integration"},"356":{i:0.000702110732472858,u:"../developing_with_spryker/industry_partner_integration/billpay/integration_payment_billpay_payment_methods.html",a:"Refer to Billpay payment information ( https://www.billpay.de/en/business-clients/payment-information/ ) for information about payment methods. The identity and credit check are checked within a single \"pre-authorize\" call after summary page was submitted.\n           This may lead to the “rejection” ...",t:"Billpay Invoice Payment in Preauthorize Mode"},"357":{i:0.00320648981165913,u:"../developing_with_spryker/industry_partner_integration/braintree/integration_payment_braintree.html",a:"Braintree provides two methods of payment: Credit Card PayPal In order to integrate Braintree payments, a Braintree merchant account should be created and configuration data then could be obtained from Braintree. There are two types of accounts for the integration: test accounts live accounts Both ...",t:"Payment Integration — Braintree (BETA)"},"358":{i:0.00320648981165913,u:"../developing_with_spryker/industry_partner_integration/braintree/integration_payment_braintree_configuration.html",a:"\n    Add spryker-eco/braintree to your project by running composer require spryker-eco/braintree \n    Please refer to config/config.dist.php for example of module configuration.\n To setup the initial Braintree configuration, use the credentials you received after registering your Braintree merchant ...",t:"Braintree — Configuration"},"359":{i:0.00320648981165913,u:"../developing_with_spryker/industry_partner_integration/braintree/integration_payment_braintree_requests.html",a:"In order to perform the needed requests, you can easily use the implemented state machine commands and conditions. The next section gives a summary of them. You can also use the facade methods directly which, however, are invoked by the state machine. Braintree State Machine Commands and Conditions ...",t:"Braintree — Performing Requests"},"360":{i:0.00320648981165913,u:"../developing_with_spryker/industry_partner_integration/braintree/integration_payment_braintree_workflow.html",a:"Both credit card and PayPal utilize the same request flow. It basically consists of the following requests: Pre-check: to check the user information in order to make sure that all the needed information is correct before doing the actual pre-authorization. Authorize: to perform a payment risk check ...",t:"Braintree — Workflow"},"361":{i:0.000505721661524919,u:"../developing_with_spryker/industry_partner_integration/integration_payment_afterpay.html",a:"Payment Integration - AfterPay Partner Information   Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 6th, 2018 ",t:"Payment Integration - AfterPay"},"362":{i:0.000505721661524919,u:"../developing_with_spryker/industry_partner_integration/klarna/integration_payment_klarna.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information Klarna Invoice The option to pay after delivery makes buying quicker and easier for customers. With Klarna’s Pay Later, shoppers do not need to fill out lengthy ...",t:"Payment Integration  - Klarna"},"363":{i:0.000523505995559919,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information Payolution provides two methods of payment: Invoice Installment In order to integrate Payolution payments, a Payolution merchant account should be created and ...",t:"Payment Integration — Payolution"},"364":{i:0.000640888394163991,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_configuration.html",a:"\n            Add spryker-eco/payolution to your project by running composer require spryker-eco/payolution \n            Please refer to config/config.dist.php for example of module configuration.\n         To setup the initial Payolution configuration, use the credentials you received after ...",t:"Payolution — Configuration"},"365":{i:0.000570211929248979,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_invoice.html",a:"Workflow Scenarios Payments from Payolution to Merchant are not included in the sequence diagrams since they occur on a regular basis (e.g. every week). Standard Case Full Refund Before Payment Partial Refund Before Payment Full Refund After Payment Partial Refund After Payment Integrating ...",t:"Payolution — Invoice Payment"},"366":{i:0.000570211929248979,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_installment.html",a:"Installment Scenarios Standard Case Full Refund Partial Refund Integrating Payolution Installment Payment The In order to integrate installment payment, two simple steps are needed: setting Payolution installment payment configuration and calling the facade functions. Setting Payolution Installment ...",t:"Payolution — Installment Payment"},"367":{i:0.00105490151411836,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_requests.html",a:"In order to perform the needed requests, you can easily use the implemented state machine commands and conditions. The next section gives a summary of them. You can also use the facade methods directly which, however, are invoked by the state machine. Payolution State Machine Commands and Conditions ...",t:"Payolution — Performing Requests"},"368":{i:0.000640888394163991,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_workflow.html",a:"Both invoice and installment utilize the same request flow. It basically consists of the following requests: Calculation (for installment only): to calculate the installment amounts, dues, and durations. Pre-check (optional): to check the user information in order to make sure that all the needed ...",t:"Payolution — Workflow"},"369":{i:0.00342653510738031,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop.html",a:"  Partner Information \n            We integrate with a wide range of payment methods that can be configured according to your needs and convenience. Payment method flows are configured using state machines.\n         \n            Implementation details:\n         API details OMS details \n            ...",t:"Payment Integration - Computop"},"370":{i:0.00340213155014085,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_api_details.html",a:"Computop API  Authorization Call: \n        Authorize money.\n     \n        There is no partial authorization. Please make one API call to make authorization for all items in the order.\n     \n        It is not possible to Authorize a higher amount than in the ORDER.\n     Inquire Call: Status inquiries ...",t:"Computop - API details"},"371":{i:0.00337277295638743,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_oms_details.html",a:"The following plugins are used for performing calls to Paygate during OMS operation. Authorize Plugin: \n        Make an Authorize call to Computop.\n     Cancel Plugin: Follow these steps to cancel the item in the order in case all the items or the last possible one got canceled: Inquire a call to ...",t:"Computop - OMS"},"372":{i:0.00340213155014085,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_credit_card.html",a:"Example State Machine Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/credit_card.twig\n     State Machine Integration The Computop provides a demo state machine ...",t:"Computop - Credit Card"},"373":{i:0.00134898910275414,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_direct_debit.html",a:" Example State Machine Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/direct_debit.twig\n     State Machine Integration The Computop provides a demo state ...",t:"Computop - Direct Debit "},"374":{i:0.00337277295638743,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_easy_credit.html",a:" Computop - Easy Credit Example State Machine Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/easy_credit.twig\n     State Machine Integration The Computop ...",t:" Computop - Easy Credit"},"375":{i:0.00337277295638743,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_ideal.html",a:"The iDeal issuer simulation is not working anymore and therefore testing on  sandbox is currently not possible. We have sent a question to Computop about additional API call. Waiting for the answer. Example State Machine: Front-end Integration \n    To adjust the frontend appearance, provide the ...",t:"Computop - iDeal"},"376":{i:0.00337277295638743,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_paydirekt.html",a:" Computop - Paydirekt Example State Machine: Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/paydirekt.twig\n     State Machine Integration The Computop provides ...",t:" Computop - Paydirekt"},"377":{i:0.00335026665653643,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_paynow.html",a:"Example State Machine Front-end Integration To adjust the frontend appearance, provide the following templates in your theme directory: src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/paynow.twig. State Machine Integration The Computop provides a demo state machine for the PayNow payment ...",t:"Computop - PayNow"},"378":{i:0.00337277295638743,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_paypal.html",a:" Computop - PayPal Example State Machine Front-end Integration \n    To adjust frontend appearance, provide following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/paypal.twig\n     State Machine Integration The Computop provides a demo state ...",t:" Computop - PayPal"},"379":{i:0.00337277295638743,u:"../developing_with_spryker/industry_partner_integration/computop/integration_payment_computop_sofort.html",a:" Example State Machine: Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/sofort.twig\n     State Machine Integration The Computop provides a demo state machine ...",t:"Computop - Sofort "},"380":{i:0.00336921711075833,u:"../developing_with_spryker/industry_partner_integration/heidelpay/integration_payment_heidelpay.html",a:"Partner Information Integrating Heidelpay To integrate Hidelpay in your project, follow these steps: Install  Heidelpay Integrate  Heidelpay to your project \tConfigure selected payment methods: Paypal ( Paypal Authorize ,  Payal Debit ) Credit Card iDeal Build your own workflow (create a new OMS ...",t:"Payment Integration - Heidelpay"},"381":{i:0.00327951514535438,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_installation.html",a:"To install Heidelpay, if necessary, add  the Heidelpay repo to your repositories in composer.json: \"repositories\": [\n  ...\n  {\n    \"type\": \"git\",\n    \"url\": \"https://github.com/spryker-eco/Heidelpay.git\"\n  }\n    ], and simply do \u003e composer require spryker-eco/heidelpay   See also: Payment ...",t:"Heidelpay - Installation"},"382":{i:0.00291216343191461,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_integration.html",a:"Heidelpay - Integration to Your Project\n Configuration You can copy over configs to your config from the Heidelpay\u0027s moduleconfig.dist.php file.\n         \n        The most important configuration items are explained in the table below,\n        make sure to get the required configuration items from ...",t:"Heidelpay - Integration to Your Project\n"},"383":{i:0.000839213310358707,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_authorize.html",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_PAYPAL] = \u002731HA07BC8142C5A171749A60D979B6E4\u0027;\n This value should be taked from HEIDELPAY ...",t:"Heidelpay - Paypal Authorize"},"384":{i:0.00367776412491623,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_credit_card.html",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_IDEAL] = ...",t:"Heidelpay - Credit Card Secure"},"385":{i:0.00327951514535438,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_paypal_debit.html",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_PAYPAL] = \u002731HA07BC8142C5A171749A60D979B6E4\u0027;\n This value should be taken from HEIDELPAY ...",t:"Heidelpay - Paypal Debit Workflow"},"386":{i:0.00327951514535438,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_ideal.html",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_IDEAL] = \u002731HA07BC8142C5A171744B56E61281E5\u0027;\n This value should be taken from HEIDELPAY. ...",t:"Hedelpay - iDeal"},"387":{i:0.00327951514535438,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_sofortuberweisung.html",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_SOFORT] = \u002731HA07BC8142C5A171749CDAA43365D2\u0027;\n \n    Checkout Payment Step Display ...",t:"Heidelay - Sofort (Online Transfer)"},"388":{i:0.00290780358783361,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_error_workflow.html",a:"Heidelpay - Workflow for Errors\n     \n        From the user\u0027s perspective, there is almost no difference between successful and unsuccessful order flow. The only exception is a redirect to the URL after the placeOrderAction (/checkout/place-order) is complete.\n        Both urls can be configured as ...",t:"Heidelpay - Workflow for Errors\n    "},"389":{i:0.000523505995559919,u:"../developing_with_spryker/industry_partner_integration/hosting_continum.html",a:"Hosting Provider - Continum Partner Information   Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 6th, 2018 ",t:"Hosting Provider - Continum"},"390":{i:0.000505721661524919,u:"../developing_with_spryker/industry_partner_integration/hosting_claranet.html",a:"Hosting Provider - Claranet Partner Information   Copyright and Disclaimer See  Disclaimer . See also: Managed Services for eCommerce 2.0   Last review date: Jul. 6th, 2018 ",t:"Hosting Provider - Claranet"},"391":{i:0.000505721661524919,u:"../developing_with_spryker/industry_partner_integration/hosting_metaways.html",a:"Hosting Provider - Metaways Partner Information Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 6th, 2018 ",t:"Hosting Provider - Metaways"},"392":{i:0.000481214206295465,u:"../developing_with_spryker/industry_partner_integration/hosting_plusserver.html",a:"Hosting Provider - PlusServer Partner Information Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 6th, 2018 ",t:"Hosting Provider - PlusServer"},"393":{i:0.000505721661524919,u:"../developing_with_spryker/industry_partner_integration/hosting_root360.html",a:"Hosting Provider - Root 360 Partner Information Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 6th, 2018 ",t:"Hosting Provider - Root 360"},"394":{i:0.000906585763491918,u:"../developing_with_spryker/industry_partner_integration/integration_loggly_queue.html",a:"The Loggly module provides a plugin to read log messages from a queue and send the messages via https to  Loggly . To integrate this plugin you need to have the QueueHandler enabled in your Logger configuration as described  here . In addition you need to properly configure the queue setup for ...",t:"Queue Integration - Loggly"},"395":{i:0.000481214206295465,u:"../developing_with_spryker/development_concepts/development_concepts.html",a:"Spryker is a complex application. We have established certain concepts and implementation abstractions that help us to structure and optimise our application. Before getting your hands dirty and starting to work with Spryker, you should understand our concepts behind certain topics. For example you ...",t:"Development Concepts"},"396":{i:0.000481214206295465,u:"../developing_with_spryker/development_concepts/search_design/search_design_paterns.html",a:" Search Design Patterns for E-Commerce: Schema Structure, Data Driven Ranking \u0026 More Source:  http://project-a.github.io/on-site-search-design-patterns-for-e-commerce/ By  Dr. Martin Loetzsch  ( Project A ) and Krešimir Slugan ( Contorion ) Providing users with a proper on-site search user ...",t:"On-Site Search "},"397":{i:0.000481214206295465,u:"../developing_with_spryker/development_concepts/search_design/data_driven_ranking.html",a:"When a query returns hundreds or thousands of results, it is absolutely crucial that the products at the top of the search result page are the ones that are most relevant to the user. Getting this right will lead to a higher conversion probability and increase customer happiness. Implementing proper ...",t:"Data-Driven Ranking"},"398":{i:0.000481214206295465,u:"../developing_with_spryker/development_concepts/search_design/full_text_search.html",a:"Full-text search is a feature where a user enters arbitrary text into a search field and then gets documents that are relevant for that query. It is normally combined with faceted navigation. In the example below, a user searched for “hammer” and then further filtered for hammer weights of 2000 gram ...",t:"Full-Text Search"},"399":{i:0.000481214206295465,u:"../developing_with_spryker/development_concepts/search_design/generic_faceted_search.html",a:"Faceted search (sometimes also called faceted navigation) allows users to navigate through a web site by applying filters for categories, attributes, price ranges and so on. It’s probably the most basic feature of a search and users expect this to work. Unfortunately, we observed that this is also ...",t:"Generic Faceted Search"},"400":{i:0.000481214206295465,u:"../developing_with_spryker/development_concepts/search_design/multi_term_auto_completion.html",a:"Term completion is a feature where a user gets suggestions for search terms and matching search results as he types the query. We call a completion multi-term when it is able to combine terms from different attributes in an open-ended fashion. In the below example, a user entered “fortis” (a brand) ...",t:"Multi-Term Auto Completion"},"401":{i:0.000481214206295465,u:"../developing_with_spryker/development_concepts/search_design/naive_product_centric_approach.html",a:"A Naive Product Centric Approach Finding products on e-commerce website can be tricky, even when you know exactly what you are looking for. Throughout this document, we will assume a customer wants to buy a hammer that weighs 2kg. A product that would meet his needs might be this “Fäustel” by ...",t:"A Naive Product-Centric Approach"},"402":{i:0.000481214206295465,u:"../developing_with_spryker/development_concepts/search_design/other_best_practices.html",a:"Finally, we want to provide you with a list of some additional and potentially useful principles regarding the setup of an on-site search experience.\n \nIndex Pages, Not Products\n\n Each document we put in Elasticsearch corresponds to an URL  The mapping type in our schema is called page, not product ...",t:"Other Best Practices"},"403":{i:0.000481214206295465,u:"../developing_with_spryker/development_concepts/search_design/personalization_dymanic_pricing.html",a:"Especially in businesses with a B2B focus, customers expect to get discounts after they have been using the service/website for a longer period of time. The search infrastructure should be able to handle such use cases and customers should be able to see their own discounted prices while browsing ...",t:"Personalization: Dynamic Pricing"},"404":{i:0.000481214206295465,u:"../developing_with_spryker/development_concepts/search_design/simple_spelling_suggestions.html",a:"Spelling suggestions provide the users with alternative search terms when the search query does not return any results:\n Translation: Unfortunately there were 0 results for your exact search term “hammer holk”. Did you possibly mean hammer holz? This is one of the simplest features you can build ...",t:"Simple Spelling Suggestions"},"405":{i:0.000481214206295465,u:"../developing_with_spryker/development_concepts/search_design/usage_driven_schema_structure.html",a:"Both the schema and the query generator should not need to know that there is such a thing as as the weight of a hammer. We will argue for a document structure and schema design that is not built around the original data but around the usage of attributes in search operations.\n\n At Contorion, this ...",t:"Usage-Driven Schema \u0026 Document Structure"},"406":{i:0.000916271311178766,u:"../developing_with_spryker/development_concepts/state_machine_cookbook/state_machine_cookbook.html",a:"State machines are a model of computation used to automate processes. In Spryker you can use the OMS module to automate the management of orders or the StateMachine module to automate other processes you define in your shop. Both behave similar, but the OMS one is a customized solution to manage the ...",t:"State Machine Cookbook - Part I - State Machine Fundamentals"},});