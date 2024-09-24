import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div class="drawer__content p-0">
    <ul class="mobile-nav list--unstyled" style="padding-bottom:10rem" role="list"><li class="mobile-nav__item" data-level="1" style="opacity: 1;"><button is="toggle-button" class="mobile-nav__link heading h5" aria-controls="mobile-menu-1" aria-expanded="true">Categories<span class="animated-arrow menu-arrow">
                
                
              </span>
            </button>

            <collapsible-content id="mobile-menu-1" class="collapsible " style="overflow: visible;" open="">
                <ul class="mobile-nav list--unstyled" role="list"><li class="mobile-nav__item collection_menu_item" data-level="2"><a href="/collections/true-wireless-earbuds" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Wireless Earbuds" src="//www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS_100x.png?v=1684827062" srcset="//www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS_100x.png?v=1684827062 100w">
                            </div>
                            <p>True Wireless Earbuds</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item" data-level="2"><a href="/collections/product-personalization" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Special Range — Personalised Products" src="//www.boat-lifestyle.com/cdn/shop/collections/Nirvana-ION-Black-_-1_-1.1_100x.png?v=1699269477" srcset="//www.boat-lifestyle.com/cdn/shop/collections/Nirvana-ION-Black-_-1_-1.1_100x.png?v=1699269477 100w">
                            </div>
                            <p>Personalised Products</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item" data-level="2"><a href="/collections/wireless-earphones" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="boAt Rockerz — Bluetooth Neckbands Earphones" src="//www.boat-lifestyle.com/cdn/shop/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1684828287" srcset="//www.boat-lifestyle.com/cdn/shop/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1684828287 100w">
                            </div>
                            <p>Neckbands</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item" data-level="2"><a href="/collections/smart-watches" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Smartwatches" src="//www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668" srcset="//www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668 100w">
                            </div>
                            <p>Smart Watches</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item" data-level="2"><a href="/collections/bluetooth-wireless-headphones" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Rockerz - Wireless Headphones" src="//www.boat-lifestyle.com/cdn/shop/collections/Rectangle271_100x.png?v=1701414051" srcset="//www.boat-lifestyle.com/cdn/shop/collections/Rectangle271_100x.png?v=1701414051 100w">
                            </div>
                            <p>Wireless Headphones</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item" data-level="2"><a href="/collections/wireless-speakers" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Wireless Speakers" src="//www.boat-lifestyle.com/cdn/shop/collections/box-5_100x.png?v=1684827751" srcset="//www.boat-lifestyle.com/cdn/shop/collections/box-5_100x.png?v=1684827751 100w">
                            </div>
                            <p>Wireless Speakers</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item" data-level="2"><a href="/collections/wired-headphones" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Wired Headphones" src="//www.boat-lifestyle.com/cdn/shop/collections/wiredheadphones_100x.webp?v=1705400196" srcset="//www.boat-lifestyle.com/cdn/shop/collections/wiredheadphones_100x.webp?v=1705400196 100w">
                            </div>
                            <p>Wired Headphones</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item" data-level="2"><a href="/collections/wired-earphones" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Wired Earphones" src="//www.boat-lifestyle.com/cdn/shop/collections/Wiredearphones_100x.webp?v=1705399424" srcset="//www.boat-lifestyle.com/cdn/shop/collections/Wiredearphones_100x.webp?v=1705399424 100w">
                            </div>
                            <p>Wired Earphones</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item" data-level="2"><a href="/collections/home-audio" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Home Theatre Systems &amp; Soundbars" src="//www.boat-lifestyle.com/cdn/shop/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1684827849" srcset="//www.boat-lifestyle.com/cdn/shop/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_100x.png?v=1684827849 100w">
                            </div>
                            <p>Soundbars</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item hide " data-level="2"><a href="/collections/immortal-gaming" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Immortal Gaming" src="//www.boat-lifestyle.com/cdn/shop/collections/Immortal_category_Image_100x.png?v=1684827903" srcset="//www.boat-lifestyle.com/cdn/shop/collections/Immortal_category_Image_100x.png?v=1684827903 100w">
                            </div>
                            <p>Gaming Headphones</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item hide " data-level="2"><a href="/collections/party-speakers" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Party Speakers" src="//www.boat-lifestyle.com/cdn/shop/collections/sound_bar_4f111a6a-2482-41c8-87f2-db7e0ee19e69_1_100x.webp?v=1684827961" srcset="//www.boat-lifestyle.com/cdn/shop/collections/sound_bar_4f111a6a-2482-41c8-87f2-db7e0ee19e69_1_100x.webp?v=1684827961 100w">
                            </div>
                            <p>Party Speakers</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item hide " data-level="2"><a href="/collections/misfit-by-boat" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Misfit - Best Trimmer for Men" src="//www.boat-lifestyle.com/cdn/shop/collections/MISFIT-shop_100x.png?v=1684827994" srcset="//www.boat-lifestyle.com/cdn/shop/collections/MISFIT-shop_100x.png?v=1684827994 100w">
                            </div>
                            <p>Misfit Trimmers</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item hide " data-level="2"><a href="/collections/chargers" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Portable Mobile Chargers &amp; Adapters" src="//www.boat-lifestyle.com/cdn/shop/collections/Charger_100x.png?v=1684828017" srcset="//www.boat-lifestyle.com/cdn/shop/collections/Charger_100x.png?v=1684828017 100w">
                            </div>
                            <p>Chargers</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item hide " data-level="2"><a href="/collections/power-banks" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Power Banks" src="//www.boat-lifestyle.com/cdn/shop/collections/powerbank_100x.png?v=1684828045" srcset="//www.boat-lifestyle.com/cdn/shop/collections/powerbank_100x.png?v=1684828045 100w">
                            </div>
                            <p>Power Banks</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item hide " data-level="2"><a href="/collections/cables" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Premium Charging USB Cables" src="//www.boat-lifestyle.com/cdn/shop/collections/cables_cd468fe0-9b41-4eef-b686-0785c6478534_100x.png?v=1704789523" srcset="//www.boat-lifestyle.com/cdn/shop/collections/cables_cd468fe0-9b41-4eef-b686-0785c6478534_100x.png?v=1704789523 100w">
                            </div>
                            <p>Cables</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item hide " data-level="2"><a href="/collections/car-accessories" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Car Accessories" src="//www.boat-lifestyle.com/cdn/shop/collections/Car-accessories_07e4e533-2b59-4597-aa3f-110552541f0f_100x.png?v=1684828103" srcset="//www.boat-lifestyle.com/cdn/shop/collections/Car-accessories_07e4e533-2b59-4597-aa3f-110552541f0f_100x.png?v=1684828103 100w">
                            </div>
                            <p>Car Accessories</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item hide " data-level="2"><a href="/collections/boat-super-sale" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Superhero Collection" src="//www.boat-lifestyle.com/cdn/shop/collections/imageedit_1_7038353159_100x.png?v=1684828134" srcset="//www.boat-lifestyle.com/cdn/shop/collections/imageedit_1_7038353159_100x.png?v=1684828134 100w">
                            </div>
                            <p>Superhero Collection</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item hide " data-level="2"><a href="/collections/trebel-for-women" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="T.Rebel" src="//www.boat-lifestyle.com/cdn/shop/collections/New-Category-Banners_with-Trebal_09_100x.png?v=1684828168" srcset="//www.boat-lifestyle.com/cdn/shop/collections/New-Category-Banners_with-Trebal_09_100x.png?v=1684828168 100w">
                            </div>
                            <p>Trebel for Women</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item hide " data-level="2"><a href="/collections/limited-edition" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Limited Edition" src="//www.boat-lifestyle.com/cdn/shop/collections/dropdown-limited-edition_100x.png?v=1684828200" srcset="//www.boat-lifestyle.com/cdn/shop/collections/dropdown-limited-edition_100x.png?v=1684828200 100w">
                            </div>
                            <p>Limited Edition</p>
                          </a></li>
                    
<li class="mobile-nav__item collection_menu_item hide " data-level="2"><a href="/collections/mobile-accessories" class="">
                            <div class="cat_img_wrapper">
                              <img loading="lazy" height="100" width="100" alt="Mobile Accessories" src="//www.boat-lifestyle.com/cdn/shop/collections/cables_1_100x.png?v=1684828502" srcset="//www.boat-lifestyle.com/cdn/shop/collections/cables_1_100x.png?v=1684828502 100w">
                            </div>
                            <p>Product Add-Ons</p>
                          </a></li>
                    
</ul>
                
                <div class="sub_link_expand_container expand">
                  <span class="view-all">Expand More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                    <path id="Path_337386" data-name="Path 337386" d="M8.159,2.693a6.7,6.7,0,0,0,2.7-.551A7.172,7.172,0,0,0,13.095.625,7.133,7.133,0,0,0,14.608-1.6a6.735,6.735,0,0,0,.548-2.706,6.7,6.7,0,0,0-.551-2.7A7.216,7.216,0,0,0,13.087-9.25a7.041,7.041,0,0,0-2.234-1.513,6.781,6.781,0,0,0-2.7-.544,6.755,6.755,0,0,0-2.7.544A7.1,7.1,0,0,0,3.22-9.25,7.134,7.134,0,0,0,1.7-7.012a6.742,6.742,0,0,0-.548,2.7A6.7,6.7,0,0,0,1.706-1.6,7.184,7.184,0,0,0,3.223.625a7.184,7.184,0,0,0,2.23,1.517A6.7,6.7,0,0,0,8.159,2.693Zm0-1.283A5.609,5.609,0,0,1,5.932.968,5.741,5.741,0,0,1,4.109-.261,5.692,5.692,0,0,1,2.885-2.084a5.648,5.648,0,0,1-.44-2.226,5.648,5.648,0,0,1,.44-2.226A5.692,5.692,0,0,1,4.109-8.36,5.7,5.7,0,0,1,5.929-9.585a5.622,5.622,0,0,1,2.223-.44,5.675,5.675,0,0,1,2.23.44A5.681,5.681,0,0,1,12.208-8.36a5.692,5.692,0,0,1,1.225,1.823,5.648,5.648,0,0,1,.44,2.226,5.648,5.648,0,0,1-.44,2.226A5.692,5.692,0,0,1,12.208-.261,5.741,5.741,0,0,1,10.385.968,5.609,5.609,0,0,1,8.159,1.411Zm3.5-5.735a.637.637,0,0,0-.209-.44l-2.306-2.3a.541.541,0,0,0-.389-.144.5.5,0,0,0-.371.151.507.507,0,0,0-.148.367.526.526,0,0,0,.166.4l.843.821.793.648L8.62-4.887H5.183a.528.528,0,0,0-.4.162.557.557,0,0,0-.155.4.553.553,0,0,0,.155.4.535.535,0,0,0,.4.159H8.62l1.419-.058-.793.656L8.4-2.35a.5.5,0,0,0-.166.389.528.528,0,0,0,.148.378.491.491,0,0,0,.371.155.529.529,0,0,0,.389-.159l2.306-2.291A.627.627,0,0,0,11.661-4.325Z" transform="translate(-1.155 11.307)" fill="#2f5b96"></path>
                  </svg>
                </div>
                
<div class="collection_item_drawer">
                <div class="collection_item-nav__link_container">
                <div class="collection_item-nav__link">
                  <span class="back_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8.27" height="14.473" viewBox="0 0 8.27 14.473">
                      <path data-name="Path 340747" d="M7.991.277a.961.961 0 0 0-1.349 0L.28 6.569a.936.936 0 0 0 0 1.331l6.362 6.3a.961.961 0 0 0 1.349 0 .935.935 0 0 0 0-1.334L2.3 7.237l5.691-5.626a.935.935 0 0 0 0-1.334z" style="fill:#1a2024;fill-rule:evenodd"></path>
                    </svg>
                  </span>
                  <span class="menu_drawer_nav_link">Back</span>
                </div>
                <div class="collection_item-nav_viewAll">
                  <a href="/" class="view-all">View All
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                    <path id="Path_337386" data-name="Path 337386" d="M8.159,2.693a6.7,6.7,0,0,0,2.7-.551A7.172,7.172,0,0,0,13.095.625,7.133,7.133,0,0,0,14.608-1.6a6.735,6.735,0,0,0,.548-2.706,6.7,6.7,0,0,0-.551-2.7A7.216,7.216,0,0,0,13.087-9.25a7.041,7.041,0,0,0-2.234-1.513,6.781,6.781,0,0,0-2.7-.544,6.755,6.755,0,0,0-2.7.544A7.1,7.1,0,0,0,3.22-9.25,7.134,7.134,0,0,0,1.7-7.012a6.742,6.742,0,0,0-.548,2.7A6.7,6.7,0,0,0,1.706-1.6,7.184,7.184,0,0,0,3.223.625a7.184,7.184,0,0,0,2.23,1.517A6.7,6.7,0,0,0,8.159,2.693Zm0-1.283A5.609,5.609,0,0,1,5.932.968,5.741,5.741,0,0,1,4.109-.261,5.692,5.692,0,0,1,2.885-2.084a5.648,5.648,0,0,1-.44-2.226,5.648,5.648,0,0,1,.44-2.226A5.692,5.692,0,0,1,4.109-8.36,5.7,5.7,0,0,1,5.929-9.585a5.622,5.622,0,0,1,2.223-.44,5.675,5.675,0,0,1,2.23.44A5.681,5.681,0,0,1,12.208-8.36a5.692,5.692,0,0,1,1.225,1.823,5.648,5.648,0,0,1,.44,2.226,5.648,5.648,0,0,1-.44,2.226A5.692,5.692,0,0,1,12.208-.261,5.741,5.741,0,0,1,10.385.968,5.609,5.609,0,0,1,8.159,1.411Zm3.5-5.735a.637.637,0,0,0-.209-.44l-2.306-2.3a.541.541,0,0,0-.389-.144.5.5,0,0,0-.371.151.507.507,0,0,0-.148.367.526.526,0,0,0,.166.4l.843.821.793.648L8.62-4.887H5.183a.528.528,0,0,0-.4.162.557.557,0,0,0-.155.4.553.553,0,0,0,.155.4.535.535,0,0,0,.4.159H8.62l1.419-.058-.793.656L8.4-2.35a.5.5,0,0,0-.166.389.528.528,0,0,0,.148.378.491.491,0,0,0,.371.155.529.529,0,0,0,.389-.159l2.306-2.291A.627.627,0,0,0,11.661-4.325Z" transform="translate(-1.155 11.307)" fill="#2f5b96"></path>
                  </svg>
                </a>
                </div>
                </div>
                <div class="collection_item_drawer_inner"></div>
              </div>
            </collapsible-content></li><li class="mobile-nav__item" data-level="1" style="opacity: 1;"><a href="https://www.boat-lifestyle.com/collections/product-personalization" class="mobile-nav__link heading h5">boAt Personalisation<span class="redirect_arrow">
                <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/next.svg?v=1686829773" alt="redirect arrow" width="83" height="150">
              </span>
            </a></li><li class="mobile-nav__item" data-level="1" style="opacity: 1;"><a href="https://www.boat-lifestyle.com/pages/quiz" class="mobile-nav__link heading h5">Gift with boAt<span class="redirect_arrow">
                <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/next.svg?v=1686829773" alt="redirect arrow" width="83" height="150">
              </span>
            </a></li><li class="mobile-nav__item" data-level="1" style="opacity: 1;"><a href="/pages/bulk-orders" class="mobile-nav__link heading h5">Corporate Orders<span class="redirect_arrow">
                <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/next.svg?v=1686829773" alt="redirect arrow" width="83" height="150">
              </span>
            </a></li><li class="mobile-nav__item" data-level="1" style="opacity: 1;"><button is="toggle-button" class="mobile-nav__link heading h5" aria-controls="mobile-menu-5" aria-expanded="false">More<span class="animated-arrow menu-arrow">
                
                
              </span>
            </button>

            <collapsible-content id="mobile-menu-5" class="collapsible  last">
                <ul class="mobile-nav list--unstyled" role="list"><li class="mobile-nav__item sub_menu_items" data-level="2"><a href="https://www.boat-lifestyle.com/collections/daily-deals" class="">Daily Deals</a></li>
                    
<li class="mobile-nav__item sub_menu_items" data-level="2"><a href="/pages/boat-blogs" class="">Blogs</a></li>
                    
<li class="mobile-nav__item sub_menu_items" data-level="2"><a href="https://www.boat-lifestyle.com/pages/refer-and-earn" class="">Refer &amp; Earn</a></li>
                    
<li class="mobile-nav__item sub_menu_items" data-level="2"><a href="/pages/boat-careers" class="">Careers</a></li>
                    
<li class="mobile-nav__item sub_menu_items" data-level="2"><a href="/pages/social-responsibility" class="">Social Responsibility</a></li>
                    
<li class="mobile-nav__item sub_menu_items" data-level="2"><a href="https://www.boat-lifestyle.com/pages/find-store" class="">Store Locator</a></li>
                    
<li class="mobile-nav__item sub_menu_items" data-level="2"><a href="https://www.boat-lifestyle.com/pages/boat-community" class="">boAt Community</a></li>
                    
</ul>
                
<div class="collection_item_drawer">
                <div class="collection_item-nav__link_container">
                <div class="collection_item-nav__link">
                  <span class="back_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8.27" height="14.473" viewBox="0 0 8.27 14.473">
                      <path data-name="Path 340747" d="M7.991.277a.961.961 0 0 0-1.349 0L.28 6.569a.936.936 0 0 0 0 1.331l6.362 6.3a.961.961 0 0 0 1.349 0 .935.935 0 0 0 0-1.334L2.3 7.237l5.691-5.626a.935.935 0 0 0 0-1.334z" style="fill:#1a2024;fill-rule:evenodd"></path>
                    </svg>
                  </span>
                  <span class="menu_drawer_nav_link">Back</span>
                </div>
                <div class="collection_item-nav_viewAll">
                  <a href="/" class="view-all">View All
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                    <path id="Path_337386" data-name="Path 337386" d="M8.159,2.693a6.7,6.7,0,0,0,2.7-.551A7.172,7.172,0,0,0,13.095.625,7.133,7.133,0,0,0,14.608-1.6a6.735,6.735,0,0,0,.548-2.706,6.7,6.7,0,0,0-.551-2.7A7.216,7.216,0,0,0,13.087-9.25a7.041,7.041,0,0,0-2.234-1.513,6.781,6.781,0,0,0-2.7-.544,6.755,6.755,0,0,0-2.7.544A7.1,7.1,0,0,0,3.22-9.25,7.134,7.134,0,0,0,1.7-7.012a6.742,6.742,0,0,0-.548,2.7A6.7,6.7,0,0,0,1.706-1.6,7.184,7.184,0,0,0,3.223.625a7.184,7.184,0,0,0,2.23,1.517A6.7,6.7,0,0,0,8.159,2.693Zm0-1.283A5.609,5.609,0,0,1,5.932.968,5.741,5.741,0,0,1,4.109-.261,5.692,5.692,0,0,1,2.885-2.084a5.648,5.648,0,0,1-.44-2.226,5.648,5.648,0,0,1,.44-2.226A5.692,5.692,0,0,1,4.109-8.36,5.7,5.7,0,0,1,5.929-9.585a5.622,5.622,0,0,1,2.223-.44,5.675,5.675,0,0,1,2.23.44A5.681,5.681,0,0,1,12.208-8.36a5.692,5.692,0,0,1,1.225,1.823,5.648,5.648,0,0,1,.44,2.226,5.648,5.648,0,0,1-.44,2.226A5.692,5.692,0,0,1,12.208-.261,5.741,5.741,0,0,1,10.385.968,5.609,5.609,0,0,1,8.159,1.411Zm3.5-5.735a.637.637,0,0,0-.209-.44l-2.306-2.3a.541.541,0,0,0-.389-.144.5.5,0,0,0-.371.151.507.507,0,0,0-.148.367.526.526,0,0,0,.166.4l.843.821.793.648L8.62-4.887H5.183a.528.528,0,0,0-.4.162.557.557,0,0,0-.155.4.553.553,0,0,0,.155.4.535.535,0,0,0,.4.159H8.62l1.419-.058-.793.656L8.4-2.35a.5.5,0,0,0-.166.389.528.528,0,0,0,.148.378.491.491,0,0,0,.371.155.529.529,0,0,0,.389-.159l2.306-2.291A.627.627,0,0,0,11.661-4.325Z" transform="translate(-1.155 11.307)" fill="#2f5b96"></path>
                  </svg>
                </a>
                </div>
                </div>
                <div class="collection_item_drawer_inner"></div>
              </div>
            </collapsible-content></li><li class="mobile-nav__item" data-level="1" style="opacity: 1;">
        <a href="https://dtc.boat-lifestyle.com/track" class="mobile-nav__link heading h5">Track Your Order
        <span class="redirect_arrow">
          <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/next.svg?v=1686829773" alt="redirect arrow" width="83" height="150">
        </span>
        </a>
      </li>
      
      
    </ul>
    
<div class="drawer__footer drawer__footer--tight drawer__footer--bordered" style="opacity: 1;">
        <div class="mobile-nav__footer"></div>
      </div></div>
  );
};

export default Sidebar;
