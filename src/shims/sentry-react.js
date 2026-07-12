export function init() {}

export function addBreadcrumb() {}

export function captureException() {
  return null;
}

export function withScope(callback) {
  const scope = {
    setTag() {},
    setContext() {},
  };

  return callback(scope);
}

export function wrapCreateBrowserRouterV7(createBrowserRouter) {
  return createBrowserRouter;
}

export function reactRouterV7BrowserTracingIntegration() {
  return null;
}

export function reactErrorHandler() {
  return () => {};
}
