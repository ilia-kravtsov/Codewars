import React from 'react';
​
export const withTruncateParagraph = (WrappedComponent) => {
  const WithTruncateParagraph = (props) => {
    const { children, textLength = 10, ...rest } = props;
​
    let content = children;
​
    if (typeof children === 'string' && textLength !== -1) {
      if (children.length > textLength) {
        content = children.slice(0, textLength) + '...';
      }
    }
​
    return (
      <WrappedComponent {...rest}>
        {content}
      </WrappedComponent>
    );
  };
​
  const name =
    WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component';
​
  WithTruncateParagraph.displayName = `WithTruncateParagraph(${name})`;
​
  return WithTruncateParagraph;
};
​