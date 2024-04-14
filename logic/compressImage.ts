import { maxSize } from '../variables/fileCompression';
import { imageTypes, compressImage } from 'simple-image-compressor';
import { escapeFileName } from './fileNameEscape';

export async function compressFile(inputFile: File, quality: number = 1): Promise<File> {
  const sanitisedFileName = escapeFileName(inputFile.name);
  const file = new File([inputFile], sanitisedFileName, { type: inputFile.type });
  if (file.size < maxSize) return file; // if below 2 MB, don't do anything
  const type = imageTypes.WEBP;
  const newFileExtension = type.split('/').at(-1);
  const res = await compressImage(file, {
    quality,
    type,
  });
  const lowerQuality = quality - 0.01; // NoSonar reduce quality by 1%;
  if (res.size > maxSize) return await compressFile(file, lowerQuality); // compress original file with lower quality setting to avoid double compression
  const fileName = file.name.split('.').slice(0, -1).join('.');
  const newFileName = `${fileName}-min.${newFileExtension}`;
  return new File([res], newFileName, { type });
}
