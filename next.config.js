const path = require('path')

module.exports = {
    async headers() {
      return [
        {
          source: "/favicon.ico",
          headers: [
            {
              key: "Content-Type",
              value: "image/x-icon",
            },
          ],
        },
      ];
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  };
  
  
  