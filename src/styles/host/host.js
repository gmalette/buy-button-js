export default ".shopify-buy-modal-is-active {\n  height: 100%;\n  overflow: auto;\n}\n\n.shopify-buy-frame {\n  display: inline-block\n}\n\n.shopify-buy-frame iframe {\n    width: 100%;\n    display: block;\n    height: 0;\n    overflow: hidden;\n  }\n\n.shopify-buy-frame--cart {\n  width: 100%;\n  max-width: 350px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100%;\n  z-index: 2147483647;\n  transform: translateX(100%);\n  -webkit-transform: translateX(100%)\n}\n\n.shopify-buy-frame--cart iframe {\n    height: 100%;\n  }\n\n.shopify-buy-frame--cart.is-initialized {\n    -webkit-transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1);\n  }\n\n.shopify-buy-frame--cart.is-active {\n    transform: translateX(0);\n    -webkit-transform: translateX(0);\n  }\n\n.shopify-buy-frame--product {\n  display: block\n}\n\n.shopify-buy-frame--product.shopify-buy__layout-horizontal {\n    display: block;\n    margin-left: auto;\n\n    margin-right: auto\n  }\n\n.shopify-buy-frame--product.shopify-buy__layout-horizontal iframe {\n      max-width: 100%\n    }\n\n@media (min-width: 950px) {\n\n.shopify-buy-frame--product.shopify-buy__layout-horizontal iframe {\n        max-width: 950px;\n        margin-left: auto;\n        margin-right: auto\n    }\n      }\n\n.shopify-buy-frame--toggle {\n  display: inline-block\n}\n\n.shopify-buy-frame--toggle:not(.is-sticky) {\n    overflow: hidden;\n    padding: 5px;\n  }\n\n.shopify-buy-frame--toggle.is-sticky {\n    display: none;\n    position: fixed;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    -webkit-transform: translateY(-50%);\n    z-index: 2147483645;\n  }\n\n.shopify-buy-frame--toggle.is-active.is-sticky {\n    display: block;\n  }\n\n.is-active .shopify-buy-frame--toggle iframe {\n      min-height: 67px;\n    }\n\n.shopify-buy-frame--productSet {\n  width: 100%;\n}\n\n.shopify-buy-frame--modal {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2147483646;\n  display: none;\n  -webkit-transition: background 300ms ease;\n  transition: background 300ms ease\n}\n\n.shopify-buy-frame--modal iframe {\n    height: 100%;\n    width: 100%;\n    max-width: none;\n  }\n\n.shopify-buy-frame--modal.is-active {\n    background: rgba(0,0,0,0.6);\n  }\n\n.shopify-buy-frame--modal.is-block {\n    display: block;\n  }\n"