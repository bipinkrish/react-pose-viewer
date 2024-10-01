# react-pose-viewer [![npm](https://img.shields.io/npm/v/react-pose-viewer.svg)](http://npm.im/react-pose-viewer)

React library for viewing [.pose files](https://github.com/sign-language-processing/pose) 

## Usage

Install it with

```bash
npm i react-pose-viewer
```
and use like

```jsx
import { PoseViewer } from 'react-pose-viewer';

<PoseViewer
    src="https://us-central1-sign-mt.cloudfunctions.net/spoken_text_to_signed_pose?spoken=en&signed=ase&text=hello"
    loop
    autoplay
/>
```

check the [Example](/tree/main/example) and available [Props](#props) for more understanding

## Props

| Prop Name      | Type              | Description                                                                 |
|----------------|-------------------|-----------------------------------------------------------------------------|
| `aspectRatio`  | `number`          | The aspect ratio of the element, typically width/height.                     |
| `autoplay`     | `boolean`         | Indicates whether the media should start playing automatically.              |
| `background`   | `string`          | The background color or image of the element.                                |                         |                              |                           |
| `height`       | `string`          | The height of the element (e.g., `px`, `%`, etc.).                           |
| `loop`         | `boolean`         | Indicates whether the media should loop after reaching the end.              |
| `padding`      | `string`          | The padding around the element (e.g., `px`, `%`, etc.).                      |                           |
| `playbackRate` | `number`          | The rate at which the media is played back (1.0 is normal speed).            |       |
| `src` (required)          | `string` \| `Buffer` | The source of the media, either as a URL string or binary data (Buffer).    |
| `thickness`    | `number`          | The thickness or stroke width of an element (if applicable).                 |
| `width`        | `string`          | The width of the element (e.g., `px`, `%`, etc.).                            |
