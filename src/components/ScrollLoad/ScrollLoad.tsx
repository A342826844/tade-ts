import React from "react";
import { RefreshControl } from "react-native";
import { ScrollView, Spinner } from "../Themed";
import { ScrollViewProps } from "../Themed/types";

interface ScrollLoadProps extends ScrollViewProps {
  loadEnd: boolean;
  onRefresh?: () => void;
  loading: boolean;
  refreshing: boolean;
  onLoadMore?: () => void;
}
const ScrollLoad: React.FC<ScrollLoadProps> = ({
  loadEnd,
  loading,
  onRefresh,
  onLoadMore,
  refreshing,
  children,
  ...props
}) => {
  const contentViewScroll = React.useCallback(
    (e: any) => {
      if (loadEnd) return;
      if (refreshing) return;
      if (loading) return;
      var offsetY = e.nativeEvent.contentOffset.y; // 已经滚动的距离
      var oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; // 可滚动的可见区域高度
      var contentSizeHeight = Math.round(e.nativeEvent.contentSize.height); // 可滚动的总高度
      if (Math.round(offsetY + oriageScrollHeight) >= contentSizeHeight - 50) {
        onLoadMore && onLoadMore();
      }
    },
    [loadEnd, loading, refreshing, onLoadMore]
  );

  return (
    <ScrollView
      scrollEventThrottle={16}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      onScroll={contentViewScroll}
      {...props}
    >
      {children}
      {loading && <Spinner />}
    </ScrollView>
  );
};

export default ScrollLoad;
