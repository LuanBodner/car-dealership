import { Button } from '@mui/material'
import { ImageLoaderProps } from 'data/props/ImageLoaderProps'
import React, { useEffect, useRef, useState } from 'react'
import placeholderImage from '../../../images/placeholder.png'

export function ImageLoader(props: ImageLoaderProps) {
  const fileAnchor: any = useRef()
  const [image, setImage] = useState()
  const [renderedImage, setRenderedImage] = useState<any>(props.image)

  useEffect(() => {
    if (image) {
      const objectURL = URL.createObjectURL(image)
      setRenderedImage(objectURL)
    }
  }, [image])

  function openFileExplorer() {
    fileAnchor.current.click()
  }

  function onSelectFile(event: any) {
    setImage(event.target.files[0])
    props.onChangeImage(event.target.files[0].name)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: '15px' }}>
      <div style={{ width: '15vw', height: '15vh', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid', borderColor: 'black' }}>
        <img src={renderedImage === undefined ? placeholderImage : renderedImage} alt='Placeholder' style={{ width: '90%', height: '90%', objectFit: 'contain' }} />
      </div>
      <input ref={fileAnchor} type='file' onChange={onSelectFile} style={{ display: 'none' }} />

      <div style={{ height: '30%' }}>
        <Button variant='outlined' onClick={openFileExplorer}>
          Carregar imagem
        </Button>
      </div>
    </div>
  )
}
