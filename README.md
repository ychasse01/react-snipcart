# react-snipcart

WIP

Components for using Snipcart in React easily.

## Installation

With npm:

```bash
npm install --save react-snipcart
```

With Yarn:

```bash
yarn add react-snipcart
```

## Initiating

Initiating is no different than the standard Snipcart installation process. [Just include the usual Snipcart JS/CSS files](https://docs.snipcart.com/getting-started/installation)

## Components

### AddToCart

### CartHasQty

### CartQty

## Why?

Snipcart has a few issues with React 16. Newer versions of react don't like it when DOM manipulations happen within components that were not triggered by React. The purpose of these components is to mimic much of what Snipcart does with classes, but with React components.