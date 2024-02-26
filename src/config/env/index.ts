export default () => {
  return {
    application: {
      port: process.env.PORT || 3000,
      stage: process.env.STAGE || 'development',
    },
    whatsapp: {
      baseUrl: process.env.WHATSAPP_BASE_URL,
    },
  };
};
