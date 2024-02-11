# File Compression

This is client-side file compression using web workers.

Greatly inspired by https://github.com/WangYuLue/image-conversion

Main function: `compress()`

## Parameters

1. file: File
2. config: `{ type: 'image/png' | 'image/jpeg' | 'image/gif' = 'image/jpeg', quality: number = 0.92 }`

## Return

Promise<Blob>

## Usage

```ts
import { compress } from './fileCompression';

async function compressFile() {
  const file = document.getElementById('file-input')?.files?.[0];
  if (!file) return;
  const quality = 0.9;
  const res = await compress(file, {
    quality,
    type: 'image/jpeg',
  });
  return new File([res], 'new filename.jpg', { type: 'image/jpeg' })
}
```

### Additional Export

```ts
import { imageTypes, compress } from './fileCompression';

```


## How it works

File -> ObjectURL & HTMLImageElement (width + height) -> imageBitMap -> Canvas -> Blob
