const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

const NATIVE_ONLY_MODULES = ['react-native-purchases'];

const originalResolveRequest = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (platform === 'web' && NATIVE_ONLY_MODULES.includes(moduleName)) {
    return { type: 'sourceFile', filePath: require.resolve('./src/stubs/react-native-purchases.web.js') };
  }
  if (originalResolveRequest) {
    return originalResolveRequest(context, moduleName, platform);
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
