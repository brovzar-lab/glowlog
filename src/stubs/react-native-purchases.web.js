// Web stub — RevenueCat is not available on web; demo mode bypasses all purchase calls.
const Purchases = {
  configure: () => {},
  getOfferings: async () => ({ current: null }),
  purchasePackage: async () => { throw new Error('Not supported on web'); },
  restorePurchases: async () => ({ customerInfo: { entitlements: { active: {} } } }),
  logIn: async () => {},
  logOut: async () => {},
  getCustomerInfo: async () => ({ customerInfo: { entitlements: { active: {} } } }),
};

module.exports = Purchases;
module.exports.default = Purchases;
