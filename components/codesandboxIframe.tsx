import React from 'react'

interface Props {
  src: string
  title: string
}

const CodesandboxIframe = ({ src, title = 'codesandbox' }: Props) => {
  return (
    <iframe
      src={src}
      style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden', margin: '30px 10px' }}
      title={title}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  )
}

export default CodesandboxIframe
