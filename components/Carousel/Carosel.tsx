import React, { useState, useRef } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import * as _ from 'lodash'
import { Image } from 'react-native-elements'

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  pagination: {
    position: 'absolute',
    bottom: 0
  },
  inactiveDotStyle: {
    width: 7,
    height: 7,
    borderRadius: 7,
    marginHorizontal: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  paginationDotStyle: {
    width: 12,
    height: 7,
    borderRadius: 7,
    backgroundColor: 'rgba(0, 0, 0, 0.35)'
  },
  carouselItem: {
    width: '100%',
    height: '100%'
  }
})

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
    <View style={styles.carousel}>
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
        containerStyle={styles.pagination}
        dotStyle={styles.paginationDotStyle}
        inactiveDotOpacity={1.0}
        inactiveDotStyle={styles.inactiveDotStyle}
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
    style={styles.carouselItem}
    PlaceholderContent={<ActivityIndicator />}
  />
}

export default ProductCarousel;
