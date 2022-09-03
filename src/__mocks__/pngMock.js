import React from 'react';

const PngMock = React.forwardRef((props, ref) => <span ref={ref} {...props} />);

export const ReactComponent = PngMock;
export default PngMock;
