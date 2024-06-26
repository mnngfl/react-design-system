# React design system w/ Storybook [![NPM Version](https://img.shields.io/npm/v/@mnngfl/learn-react-storybook-ds?style=flat)](https://www.npmjs.com/package/@mnngfl/learn-react-storybook-ds?activeTab=readme)

## Overview

이 디자인 시스템은 [Storybook Design System Tutorial](https://github.com/storybookjs/design-system/)의 내용을 기반으로 학습하기 위해 제작되었습니다.

여러 Best Practice를 기반으로 디자인 시스템을 작성하고 게시하는 방법에 대해 배우기 위한 목적으로 개발하였습니다.

오픈 소스로 만들어진 [@shadcn/ui - Design System](https://www.figma.com/community/file/1203061493325953101)에서 영감을 받아 만들어졌으며, 해당 디자인을 기반으로 React UI Components를 제공합니다.

## Tech stacks

- React
- TypeScript
- TailwindCSS
- Storybook
- Rollup

## Usage

Live Demo: https://stackblitz.com/edit/vitejs-vite-nej76g?file=src%2FApp.tsx

### Installation

#### Peer dependencies

본 라이브러리는 React UI Component Library로써
react 및 react-dom가 피어 디펜던시로 설정되어 있습니다. 시작하기 전에 해당 패키지가 설치되어 있는지 확인합니다.

```json
"peerDependencies": {
  "react": "^18.0.0",
  "react-dom": "^18.0.0"
},
```

#### Run Commands

```shell
npm i @mnngfl/learn-react-storybook-ds
```

### Example

```jsx
import { Button, Icon } from '@mnngfl/learn-react-storybook-ds'

function App() {
  return (
    <>
      <Button variant="outlined" label="Click me!" icon="mail" />
      <Button size="lg" label="Large" />
      <Icon name="mail" variant="primary" />
    </>
  )
}
```
