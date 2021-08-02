import React, { useState, useRef, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import * as _ from 'lodash'
import { Image } from 'react-native-elements'

import { carouselStyles, carouselItemStyles } from './Carousel.styles'

interface CarouselProps {
  items: any[]
  width: number
}


function ProductCarousel(props: CarouselProps) {
  const carouselRef = useRef(null)
  const [index, setIndex] = useState(0)
  const { items, width = 400 } = props
  const item = _.first(items)

  return (
    <View style={carouselStyles.carousel}>
      <Carousel
        ref={carouselRef}
        layout={'default'}
        data={items}
        renderItem={CarouselItem}
        sliderWidth={width}
        itemWidth={width}
        useScrollView={true}
        onSnapToItem={(_index: number) => setIndex(_index)}
        autoplay={true}
        loop={true}
      />
      <Pagination
        dotsLength={items.length}
        activeDotIndex={index}
        carouselRef={carouselRef}
        containerStyle={carouselStyles.pagination}
        dotStyle={carouselStyles.paginationDotStyle}
        inactiveDotOpacity={1.0}
        inactiveDotStyle={carouselStyles.inactiveDotStyle}
        inactiveDotScale={1}
        tappableDots={true}
      />
    </View>
  );
}


function CarouselItem(props) {
  const { item } = props
  return <Image
    source={{ uri: item?.backgroundImage }}
    style={carouselItemStyles.image}
    PlaceholderContent={<ActivityIndicator />}
  />
}

export default ProductCarousel;
