# react-ig-indicator

[![Node.js CI](https://github.com/jimmy319/react-ig-indicator/actions/workflows/cd.yaml/badge.svg)](https://github.com/jimmy319/react-ig-indicator/actions/workflows/cd.yaml)

![react-ig-indicator-demo](https://user-images.githubusercontent.com/1024985/128050499-510526e3-293b-4a08-89b8-460ec6d7bb0c.gif)

An Instagram-like page indicator component.

## Installation

```shell
# npm
npm i react-ig-indicator

# yarn
yarn add react-ig-indicator
```

## Prerequisite

```
react@16.8.0 and above (the one with hook)
```

## Quick start

```js
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Indicator from "react-ig-indicator";

export default function MyCarousel() {
  const images = [
    "https://wallpaperaccess.com/full/2989884.jpg",
    "https://i.pinimg.com/originals/74/c6/bd/74c6bd677d433a565b2e142207623533.png",
    "https://pbs.twimg.com/profile_images/1383424793035231240/AHMq2F9e_400x400.jpg",
    "https://i.pinimg.com/originals/e9/51/fb/e951fb9ba3fa130ca4f672c29379ae88.jpg",
  ];
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="App">
      <Carousel
        className="slide"
        beforeChange={(_, newIndex) => setCurrentPage(newIndex)}
      >
        {images.map((imgUrl) => (
          <div>
            <img alt="" src={imgUrl} />
          </div>
        ))}
      </Carousel>
      <Indicator
        totalAmount={images.length}
        activeIndex={currentPage}
        wrapperStyleClass="dot-container"
        activeDotColor="#abc"
        dotColor="#111"
      />
    </div>
  );
}
```

## Props

| Property            | Description                                                                                                                                           | Default value | Type     | Required |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- | -------- |
| `totalAmount`       | total amount of dots                                                                                                                                  | 0             | number   | yes      |
| `activeIndex`       | index of the active dot (zero based)                                                                                                                  | 0             | number   |          |
| `dotSize`           | width and height of the dot (in pixels)                                                                                                               | 6             | number   |          |
| `dotColor`          | color of the dot (#hex code)                                                                                                                          | "#a8a8a8"     | string   |          |
| `activeDotColor`    | color of the active dot (#hex code)                                                                                                                   | "#0095f6"     | string   |          |
| `dotSpacing`        | spacing between dots                                                                                                                                  | 4             | number   |          |
| `wrapperStyleClass` | custom CSS class name for the wrapper element of Indicator                                                                                            |               | string   |          |
| `renderDot`         | a render props that is called with an object containing the following dot related properties: `spacing`, `position`, `scaleRatio`, `size` and `color` |               | function |          |

## License

MIT © [CR Jimmy](https://github.com/jimmy319)
