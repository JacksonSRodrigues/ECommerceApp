import React, { useState, useRef } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import * as _ from 'lodash'
import { Image } from 'react-native-elements'

import Carousel, { Pagination } from 'react-native-snap-carousel'

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
    <View style={{
      flex: 1,
      alignItems: 'center',
      height: '100%',
      justifyContent: 'center',
    }}>
      <Carousel
        ref={carouselRef}
        layout={'default'}
        data={items}
        renderItem={CarouselItem}
        sliderWidth={width}
        itemWidth={width}
        useScrollView={true}
        onSnapToItem={(_index) => setIndex(_index)}
      />
       <Pagination
        dotsLength={items.length}
        activeDotIndex={index}
        carouselRef={carouselRef}
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          left: 0,
          top:0
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
}


function CarouselItem(props) {
  const { item } = props
  return <Image
    source={{ uri: item?.backgroundImage }}
    style={{ width: '100%', height: 200 }}
    PlaceholderContent={<ActivityIndicator />}
  />
}

export default ProductCarousel;
