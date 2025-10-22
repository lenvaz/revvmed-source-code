/**
 * Logger utility to handle console statements properly in production
 */

type LogLevel = 'log' | 'warn' | 'error' | 'info' | 'debug';

interface Logger {
  log: (message: string, ...args: any[]) => void;
  warn: (message: string, ...args: any[]) => void;
  error: (message: string, ...args: any[]) => void;
  info: (message: string, ...args: any[]) => void;
  debug: (message: string, ...args: any[]) => void;
}

const createLogger = (): Logger => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  const log = (level: LogLevel, message: string, ...args: any[]) => {
    // In production, only show warnings and errors
    if (!isDevelopment && (level === 'log' || level === 'info' || level === 'debug')) {
      return;
    }
    
    // Use appropriate console method
    console[level](`[${level.toUpperCase()}]`, message, ...args);
  };

  return {
    log: (message: string, ...args: any[]) => log('log', message, ...args),
    warn: (message: string, ...args: any[]) => log('warn', message, ...args),
    error: (message: string, ...args: any[]) => log('error', message, ...args),
    info: (message: string, ...args: any[]) => log('info', message, ...args),
    debug: (message: string, ...args: any[]) => log('debug', message, ...args),
  };
};

export const logger = createLogger();

// Error reporting utility for production
export const reportError = (error: Error, context?: string) => {
  logger.error(`Error${context ? ` in ${context}` : ''}:`, error.message);
  
  // In production, you could send this to an error reporting service
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to error reporting service
    // analyticsService.reportError(error, context);
  }
};

