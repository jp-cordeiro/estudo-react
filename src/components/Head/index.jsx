import React, { useEffect } from 'react';

export default function Head(props) {
  useEffect(() => {
    document.title = `Ranek | ${props.title}`;
  }, []);
  return <></>;
}
