"use strict";angular.module("App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ng-token-auth","angularModalService","ui.bootstrap","ui.bootstrap.collapse","naif.base64","ngFileUpload"]).run(["$rootScope","$location",function(a,b){a.$on("auth:login-success",function(a){console.log(a),b.path("/")})}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/sellmyproduct",{templateUrl:"views/sellmyproduct.html",controller:"ItemAddCtrl"}).when("/signin",{templateUrl:"views/user_sessions/new.html",controller:"UserSessionsCtrl"}).when("/signup",{templateUrl:"views/user_registrations/new.html",controller:"UserRegistrationsCtrl"}).when("/groups",{templateUrl:"views/groups.html",controller:"GroupsCtrl",resolve:{auth:["$auth",function(a){return a.validateUser()}]}}).when("/shoppingcart",{templateUrl:"views/shoppingcart.html",controller:"CartCtrl",resolve:{auth:["$auth","$location",function(a,b){return a.user.id?(console.log("user is logged in"),a.validateUser()):(console.log("express error msg!!!"),void b.path("/pleaselogin"))}]}}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/pricing",{templateUrl:"views/pricing.html",controller:"PricingCtrl"}).when("/list",{templateUrl:"views/list.html",controller:"ListCtrl"}).when("/list/:product",{templateUrl:"partials/product.html",controller:"StoreCtrl"}).when("/products",{templateUrl:"views/products.html",controller:"ProductCtrl"}).when("/products/:id",{templateUrl:"views/partials/product.html",controller:"ProductListCtrl"}).when("/mystore",{templateUrl:"views/mystore.html",controller:"MystoreCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).when("/favorites",{templateUrl:"views/favorites.html",controller:"FavoritesCtrl"}).when("/message",{templateUrl:"views/message.html",controller:"MessageCtrl"}).when("/account",{templateUrl:"views/account.html",controller:"AccountCtrl"}).when("/history",{templateUrl:"views/history.html",controller:"HistoryCtrl",resolve:{auth:["$auth","$location",function(a,b){return a.user.id?(console.log("user is logged in"),a.validateUser()):(console.log("express error msg!!!"),void b.path("/pleaselogin"))}]}}).when("/pleaselogin",{template:"<h3 class='container center mg-top-100 height-min600'>You must Log In or Sign Up to access the page.</h3>"}).when("/phones",{templateUrl:"views/partials/phone-list.html",controller:"PhoneListCtrl"}).when("/phones/:phoneId",{templateUrl:"views/partials/phone-detail.html",controller:"PhoneDetailCtrl"}).when("/items",{templateUrl:"views/partials/items.html",controller:"ItemListCtrl"}).when("/items/:id",{templateUrl:"views/partials/item-detail.html",controller:"ItemDetailCtrl"}).when("/item/new",{templateUrl:"views/partials/new.html",controller:"ItemAddCtrl"}).when("/items/:id",{templateUrl:"views/partials/item-detail.html",controller:"ItemDetailCtrl"}).when("/item/:id/edit",{templateUrl:"views/partials/edit.html",controller:"ItemUpdateCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("App").controller("MainCtrl",["$scope","ModalService","ListService","$rootScope",function(a,b,c,d){a.rotateBar=!0,a.loggedIn=!1,a.logo="images/delb.png",a.isCollapsed=!0,a.rotateUser=!0,a.rotateUserBar=!0,a.currentTabIndex=0,a.lists=[],a.selected=0,a.filters={},d.global={search:""},a.categories=[{title:"Item",icon:"glyphicon-th-large",id:1,link:"#/items"}],a.menuTabs=[{title:"menu1"},{title:"menu1"},{title:"menu1"},{title:"menu1"},{title:"menu1"},{title:"menu1"},{title:"menu1"},{title:"menu1"}],a.showLogin=function(){b.showModal({templateUrl:"login.html",controller:"UserSessionsCtrl"}).then(function(a){a.element.modal(),a.close.then(function(a){console.log("!!!")})})},a.showSignUp=function(){b.showModal({templateUrl:"signup.html",controller:"UserRegistrationsCtrl"}).then(function(a){a.element.modal(),a.close.then(function(a){console.log("registration modal")})})},a.subItems=[{title:"Design",detail:"innovation"},{title:"Entertainment",detail:"pleasure"},{title:"Living",detail:"happiness"},{title:"Balance",detail:"peace"}],a.showTab=function(b){a.currentTabIndex=b,a.selected=b},$("#offcanvasRight").on("hide.bs.offcanvas",function(){a.rotateUserBar=!0,a.rotateUser=!0,a.$apply()}),$("#offcanvasRight > ul > li > a").click(function(){$(".navmenu").offcanvas("hide")}),a.lists=[{title:"Apple Pie",price:89.99,description:"Normally, this would be where we would tell you how incredible this apple pie is. How it is so stuffed with perfectly cooked, incredibly juicy apples, the crust positively bulges. How, being baked in a paper bag makes the top crust uniquely crunchy while keeping the bottom crust amazingly light and flakey, a hallmark of the best old-fashioned crust. How the delicate, golden brown crust and hearty sweet-tart apples combine to make a deliciously perfect pie. But don’t trust us. Trust the Wall Street Journal. Trust Gourmet. Trust the Food Network. They have all awarded the Elegant Farmer’s Apple Pie Baked in a Paper Bag the “best pie in America.” And we couldn’t agree more.",image:"https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/dummy-applepie.jpg",subCategory:"featured",id:52},{title:"Gourmet Buckeyes",price:49.99,description:"If there’s one thing Ohio State and Michigan fans can agree on, it’s that these creamy dark chocolate and peanut butter Buckeyes are handcrafted perfection. Forty of these chocolate peanut butter gems are individually wrapped and presented in Brownie Points’ 20 oz. canister tied with their signature polka dot ribbon.",image:"https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/dummy-buckeyes.jpg",subCategory:"featured",id:53},{title:"Gourmet Sampler",price:109,description:"Celebrate with the best of the best when you send this gourmet gift basket! Brownie Points’ brown gift basket is filled with four 3×3 gourmet brownies, three – 3.5oz gourmet popcorn, one caramel pretzel rod, one package of hand dipped pretzel rods, four gourmet buckeyes, one turtle, one schmurtle, one 2pk of chocolate dipped grahams, twelve baby brownies, six chocolate dipped brownie pops and three half dipped cookies.",image:"https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/dummy-sampler.jpg",subCategory:"new",id:54},{title:"Blueberry Pancake Pie",price:59,description:"We crafted a wallet for a friend by keeping his requirements in mind and he was amazed in every aspect either its design or a quality or a purpose.",image:"https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/dummy-blueberry.jpg",subCategory:"featured",id:55},{title:"Gourmet Bagel & Coffee",price:23.22,description:"Enjoy a gourmet bagel for breakfast or lunch washed down with a bottle of water or coffee; upgrade to a smoothie in flavours like Berry Good",image:"https://img.grouponcdn.com/deal/joGN9JG3YE4i7yMUWwvF/gK-960x576/v1/c700x420.jpg",subCategory:"restaurant",id:56},{title:"Taco: All You Can Eat",price:9,description:"Feast on all-you-can-eat tacos with a classic margarita each; choose from wagyu brisket, chicken, pulled pork, fish, tofu, and veg options",image:"https://img.grouponcdn.com/deal/cMgtDMJ2uSemk6Dw7zrw/9P-2048x1229/v1/c700x420.jpg",subCategory:"Special",id:57},{title:"The Hummingbird Cake",price:1199,description:"If you aren’t familiar with a Hummingbird cake you will be soon! Each cake is baked to perfection and loaded with raisins, bananas, pecans, and pineapple, making this a very moist and irresistible cake. To top that, every cake is finished by hand with a smooth cream cheese icing that will keep you coming back for seconds, or thirds.",image:"https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/dummy-hbcake.jpg",subCategory:"Travel",id:58},{title:"Boozy Popcorn",price:48,description:"Celebrate the season with three 8 oz. bags the holidays most popular flavors: Vanilla Bean Cocoa Nib, Mayan Chile Chocolate and a special holiday 2015 flavor, Brandy Spiked Eggnog. The set comes in a black frame box finished with a festive red ribbon.",image:"https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/dummy-popcorn.jpg",subCategory:"featured",id:59},{title:"Turtle Pralines",price:49,description:"Fresh Georgia pecans are covered in silky hand-stirred caramel and rich chocolate to make our favorite chocolate nutty treats. This gift box includes an assortment of milk, dark and white chocolate turtles. It’s crunchy, creamy and chocolatey all in one bite.",image:"https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/dummy-sampler.jpg",subCategory:"Auto",id:60},{title:"Maine Lobster",price:199,description:"Best lobster you will ever eat!",image:"https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/dummy-lobster.jpg",subCategory:"featured",id:61}]}]),angular.module("App").controller("AboutCtrl",["$scope",function(a){a.currentTabIndex=0,a.showTab=function(b){a.currentTabIndex=b}}]).controller("PricingCtrl",["$scope",function(a){a.title="Pricing"}]),angular.module("App").controller("ListCtrl",["$http","$scope","ListService",function(a,b,c){b.heading="List",b.lists=[],b.successMsg="",b.errorMsg="",b.currentTabIndex=1,b.selectedCategory="Select Category",b.getList=function(){c.getListItems().success(function(a){b.lists=a}).error(function(){b.errorMsg="can't get the list"})},b.selectedCategory,b.dropdownCategorySelect=function(a){b.selectedCategory=a,b.category=a},b.addList=function(){c.postListItem(b.title,b.category,b.price,b.description).success(function(){b.successMsg="Uploaded successfully"}).error(function(){b.errorMsg="oops!"}),b.title="",b.category="",b.price="",b.description="",b.selectedCategory="Select a category",b.getList()},b.deleteList=function(c){a["delete"]("/api/v1/list/"+c).success(function(){console.log("success")}).error(function(){console.log("fail")}),b.getList()},b.showTab=function(a){b.currentTabIndex=a},b.items=["Accessories","Arts & Craft","Bags","Beauty","Clothing","Craft","Electronics","Home","Jewerly","Kids","Party","Pets","Shoes","Toys","Weddings"],b.getList()}]),angular.module("App").controller("ItemListCtrl",["$scope","Items",function(a,b){a.query=function(){a.items=b.query(),a.orderProp="age"},a.query()}]).controller("ItemDetailCtrl",["$scope","$routeParams","Item",function(a,b,c){console.log(b.id),a.loaderSource="images/default.gif",a.loading=!0,c.getItem({id:b.id}).success(function(c){angular.forEach(c,function(c){c.id==b.id&&(a.item=c),console.log(c)})}).error(function(){a.errorMsg="Oops, there's no item"})["finally"](function(){a.loading=!1}),a.setImage=function(b){a.mainImageUrl=b}}]).controller("ItemAddCtrl",["$scope","$location","Item","$rootScope","Upload",function(a,b,c,d,e){a.submit=function(){a.upload(a.image),a.item="",b.path("/mystore")},a.upload=function(b){a.item.user_id=d.user.id,e.upload({url:"/api/v1/item",data:{image:b,active:a.item.active,availability:a.item.availability,brand:a.item.brand,category_id:a.item.category_id,color:a.item.color,description:a.item.description,gender:a.item.gender,id:a.item.id,keywords:a.item.keywords,merchant_id:a.item.merchant_id,merchant_url:a.item.merchant_url,price:a.item.price,quantity:a.item.quantity,saletype:a.item.saletype,sku:a.item.sku,title:a.item.title,user_id:a.item.user_id}}).success(function(){console.log("success")}).error(function(){console.log("error")})},a.uploadMenu=[{name:"Product Name",model:"title",placeholder:"title",tag:"itemTitle"},{name:"Price",model:"price",placeholder:"price",tag:"itemPrice"},{name:"Description",model:"description",placeholder:"description",tag:"itemDescription"},{name:"Category",model:"category",placeholder:"category",tag:"itemCategory"},{name:"Sale",model:"sale",placeholder:"sale",tag:"itemSale"},{name:"Gender",model:"gender",placeholder:"gender",tag:"itemGender"},{name:"Color",model:"color",placeholder:"color",tag:"itemColor"},{name:"Size",model:"size",placeholder:"size",tag:"itemSize"},{name:"Active",model:"active",placeholder:"active",tag:"itemActive"},{name:"Availability",model:"availability",placeholder:"availability",tag:"itemAvailability"},{name:"Brand",model:"brand",placeholder:"brand",tag:"itemBrand"},{name:"Keywords",model:"keywords",placeholder:"keywords",tag:"itemKeywords"},{name:"Quantity",model:"quantity",placeholder:"quantity",tag:"itemQuantity"}]}]).controller("ItemUpdateCtrl",["$scope","$resource","Item","$location","$routeParams",function(a,b,c,d,e){a.item=User.get({id:e.id}),a.update=function(){a.itemForm.$valid&&c.update(a.item,function(){d.path("/")},function(a){console.log(a)})}}]),angular.module("App").controller("FormCtrl",["$scope",function(a){a.areaCode=["3000","3001","3002"]}]),angular.module("App").controller("ContactCtrl",["$scope",function(a){a.awesomeThings=["First Contact","Second Contact","Third Contact"]}]),angular.module("App").controller("GroupsCtrl",["$scope",function(a){a.groups=["Group 1","Group 2","Group 3"]}]),angular.module("App").controller("CarouselCtrl",["$scope",function(a){a.myInterval=9e3,a.noWrapSlides=!1;var b=a.slides=[{image:"https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/delb-img1.png"},{image:"https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/delb-img2.png"},{image:"https://s3-ap-southeast-2.amazonaws.com/delbfiles/assets/delb-img3.png"}];a.addSlide=function(){var a=600+b.length+1;b.push({image:"//placekitten.com/"+a+"/300",text:["More","Extra","Lots of","Surplus"][b.length%4]+" "+["Cats","Kittys","Felines","Cutes"][b.length%4]})};for(var c=0;0>c;c++)a.addSlide()}]),angular.module("App").controller("FavoritesCtrl",["$scope",function(a){a.awesomeThings=["Chocolate","Cake","Ice Cream"]}]),angular.module("App").controller("CartCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("App").controller("MystoreCtrl",["$scope","$rootScope","$timeout","Item","$http",function(a,b,c,d,e){null===b.user.name?a.user=b.user.email:null!==b.user.name?a.user=b.user.name:a.name="Your Store",a.getLists=function(){a.loading=!0,d.getItems().success(function(c){for(var d=[],e=0;e<c.length;e++)c[e].user_id==b.user.id&&d.push(c[e]);a.items=d}).error(function(){a.errorMsg="Sorry. You haven't added any products to sell."})["finally"](function(){a.loading=!1})},a.deleteItem=function(b){e["delete"]("/api/v1/item/"+b).success(function(){console.log("deleted")}).error(function(){console.log("could not delete")}),a.getLists()},a.random=function(a){return.5-Math.random()},a.getLists()}]),angular.module("App").controller("MessageCtrl",["$scope","$rootScope",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],console.log(b),a.user=b.user,a.name=b.user.name,a.email=b.user.email}]),angular.module("App").controller("HistoryCtrl",["$scope",function(a){a.awesomeThings=["January","February","March","April","May","June","July","August","September","October","November","December"]}]),angular.module("App").controller("AccountCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("App").controller("UserSessionsCtrl",["$scope",function(a){a.$on("auth:login-error",function(b,c){a.error="something wrong"})}]),angular.module("App").controller("UserRegistrationsCtrl",["$scope","$location","$auth",function(a,b,c){a.$on("auth:registration-email-error",function(b,c){a.error=c.errors[0]}),a.handleRegBtnClick=function(){c.submitRegistration(a.registrationForm).then(function(){c.submitLogin({email:a.registrationForm.email,password:a.registrationForm.password})})}}]),angular.module("App").factory("ListService",["$http",function(a){var b={GetListItems:"/api/v1/list.json",PostListItem:"/api/v1/list"};return{getListItems:function(c){return c=c||{},c.take=c.take||10,c.skip=c.skip||0,a.get(b.GetListItems)},getListItem:function(c){return c=c||{},a.get(b.GetListItems,{params:{id:id}})},postListItem:function(c,d,e,f){return a.post(b.PostListItem,{title:c,category:d,price:e,description:f})}}}]),angular.module("App").factory("Phone",["$resource",function(a){return a("scripts/phones/:phoneId.json",{},{query:{method:"GET",params:{phoneId:"phones"},isArray:!0}})}]),angular.module("App").factory("Items",["$resource",function(a){return a("/api/v1/item.json",{},{query:{method:"GET",isArray:!0},create:{method:"POST"}})}]),angular.module("App").factory("Item",["$http",function(a){var b={GetItems:"/api/v1/item.json",GetItem:"/api/v1/item/",PostItem:"/api/v1/item"};return{getItems:function(c){return c=c||{},c.take=c.take||10,c.skip=c.skip||0,a.get(b.GetItems)},getItem:function(c){return a.get(b.GetItem,{params:{id:c},withCredentials:!0,timeout:8e4})},postItem:function(c,d,e,f){return a.post(b.PostItem,{user_id:user_id,title:c,image:d,description:e,price:f})}}}]),angular.module("App").directive("loading",["$http",function(a){return{restrict:"A",link:function(b,c,d){b.isLoading=function(){return a.pendingRequests.length>0},b.$watch(b.isLoading,function(a){a?c.removeClass("ng-hide"):c.addClass("ng-hide")})}}}]),angular.module("App").filter("checkmark",function(){return function(a){return a?"✓":"✘"}}),angular.module("App").animation(".phone",function(){var a=function(a,b,c){return"active"==b?(a.css({position:"absolute",top:500,left:0,display:"block"}),jQuery(a).animate({top:0},c),function(b){b&&a.stop()}):void 0},b=function(a,b,c){return"active"==b?(a.css({position:"absolute",left:0,top:0}),jQuery(a).animate({top:-500},c),function(b){b&&a.stop()}):void 0};return{addClass:a,removeClass:b}}),angular.module("App").controller("ProductCtrl",["$scope","$routeParams",function(a,b){a.id=b.id}]).controller("PhoneListCtrl",["$scope","Phone",function(a,b){a.phones=b.query(),a.orderProp="age"}]).controller("PhoneDetailCtrl",["$scope","$routeParams","Phone",function(a,b,c){a.phone=c.get({phoneId:b.phoneId},function(b){a.mainImageUrl=b.images[0]}),a.setImage=function(b){a.mainImageUrl=b}}]);