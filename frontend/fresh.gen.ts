// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $gallery from "./routes/gallery.tsx";
import * as $index from "./routes/index.tsx";
import * as $FileUpload from "./islands/FileUpload.tsx";
import * as $Header from "./islands/Header.tsx";
import * as $Home from "./islands/Home.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/gallery.tsx": $gallery,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/FileUpload.tsx": $FileUpload,
    "./islands/Header.tsx": $Header,
    "./islands/Home.tsx": $Home,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
