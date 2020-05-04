import bunyan from "bunyan";

const LoggerInstance = bunyan.createLogger({
  name: 'transaction-notifier',
  serializers: {
      req: require('bunyan-express-serializer'),
      res: bunyan.stdSerializers.res,
      err: bunyan.stdSerializers.err
  },
  level: 'info'
});

export default LoggerInstance