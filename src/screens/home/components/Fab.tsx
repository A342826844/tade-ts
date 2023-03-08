import {
  Center,
  Image,
  Pressable,
  Modal,
  IconButton,
  CloseIcon,
  Row,
} from "native-base";
import { Box, Text } from "@/components/Themed";
import { StyleSheet, Linking, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppEventsLogger } from "react-native-fbsdk-next";
import React, { useRef } from "react";
import BaseUrl from "@/constants/BaseUrl";

// const dollar = require('@/assets/images/dollar.png')
// const profit = require('@/assets/images/profit.png')
const card = require("@/assets/images/card.png");
const cardBtn = require("@/assets/images/card-btn.png");
const closeBtn = require("@/assets/images/close-btn.png");
const chest = require("@/assets/images/chest.png");
const coin1 = require("@/assets/images/coin1.png");
const coin2 = require("@/assets/images/coin2.png");
const coin3 = require("@/assets/images/coin3.png");
const coin4 = require("@/assets/images/coin4.png");

interface FabProps {
  show: boolean;
  showBox: boolean; // 显示金币盒子
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Fab: React.FC<FabProps> = ({ show, setShow, showBox }) => {
  const topAnim = useRef(new Animated.Value(0)).current; // 透明度初始值设为0

  const startAnimated = React.useCallback(() => {
    const animationLider = Animated.sequence([
      Animated.timing(topAnim, {
        toValue: 10,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(topAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]);
    return animationLider;
  }, [topAnim]);

  React.useEffect(() => {
    const animationLider = startAnimated();
    Animated.loop(animationLider).start();
    return () => {
      Animated.loop(animationLider).stop();
    };
  }, [topAnim]);

  const [fristClose, setFristClose] = React.useState(false);

  return (
    <Box style={styles.cBox}>
      <Modal
        isOpen={show}
        onClose={() => setShow(false)}
        background="rgba(51, 15, 12, 0.73)"
      >
        <Modal.Content background="transparent" borderWidth={0}>
          <Center width="100%">
            <Image source={card} alt="card" width={300} height={442} />
            <Box position="absolute" top={0} width="100%">
              <Center>
                <Text
                  marginTop="146px"
                  textAlign="center"
                  color="#FFD5AE"
                  fontSize={15}
                  numberOfLines={1}
                  width="200px"
                  bold
                >
                  Obter bônus em dinheiro
                </Text>
                <Row
                  height="80px"
                  width="200px"
                  justifyContent="center"
                  marginTop={3}
                  alignItems="flex-end"
                >
                  <Text
                    paddingLeft="26px"
                    width="50px"
                    color="#FFD5AF"
                    bold
                    paddingBottom="13px"
                  >
                    R$
                  </Text>
                  <Text
                    color="#FFD5AF"
                    width="85px"
                    bold
                    fontSize="68px"
                    lineHeight="68px"
                    textAlign="center"
                  >
                    68
                  </Text>
                  <Box height="100%">
                    <Box
                      padding="2px"
                      borderColor="#FFD5AF"
                      borderWidth={1}
                      borderBottomLeftRadius={0}
                      borderBottomRightRadius="16px"
                      borderTopLeftRadius="16px"
                      borderTopRightRadius="16px"
                    >
                      <Text fontSize={10} color="#FFD5AE">
                        Máximo
                      </Text>
                    </Box>
                  </Box>
                </Row>
                <Text marginTop="72px" color="#FFD5AE" marginLeft={10} bold>
                  Tempo efetivo：10 min
                </Text>
                <Pressable
                  marginTop="32px"
                  onPress={() => {
                    Linking.openURL(BaseUrl.downloadAndroid);
                    AppEventsLogger.logEvent("Open 24H Notícias", {
                      date: new Date().toString(),
                    });
                  }}
                >
                  <Center>
                    <Image
                      source={cardBtn}
                      alt="btn"
                      width={220}
                      height="40px"
                    />
                    <Box position="absolute">
                      <Text
                        color="#854600"
                        width="220px"
                        textAlign="center"
                        fontSize={14}
                        bold
                      >
                        Faça login para receber
                      </Text>
                    </Box>
                  </Center>
                </Pressable>
              </Center>
            </Box>
          </Center>
        </Modal.Content>
        <Center marginTop={4}>
          <Pressable
            onPress={() => {
              // if (!fristClose) {
              //   setFristClose(true);
              //   Linking.openURL(BaseUrl.downloadAndroid);
              //   return;
              // }
              setShow(false);
            }}
          >
            <Image source={closeBtn} alt="close-btn" width={36} height={36} />
          </Pressable>
        </Center>
      </Modal>
      {showBox && (
        <Box>
          <Pressable
            onPress={() => {
              setShow(true);
            }}
          >
            <Center>
              <Image source={chest} alt="chest" width="52px" height="60px" />
              <Animated.View style={[styles.box1]}>
                <Animated.Image
                  source={coin2}
                  style={[
                    styles.image1,
                    {
                      top: topAnim,
                    },
                  ]}
                />
              </Animated.View>
              <Animated.View style={[styles.box2]}>
                <Animated.Image
                  source={coin1}
                  style={[
                    styles.image2,
                    {
                      top: topAnim,
                    },
                  ]}
                />
              </Animated.View>
              <Animated.View style={[styles.box3]}>
                <Animated.Image
                  source={coin3}
                  style={[
                    styles.image3,
                    {
                      top: topAnim,
                    },
                  ]}
                />
              </Animated.View>
              <Animated.View style={[styles.box4]}>
                <Animated.Image
                  source={coin4}
                  style={[
                    styles.image4,
                    {
                      top: topAnim,
                    },
                  ]}
                />
              </Animated.View>
            </Center>
          </Pressable>
        </Box>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  cBox: {
    position: "absolute",
    top: 88,
    zIndex: 999,
    right: 22,
  },
  box: {
    // width: 48,
    // // height: 48,
    // overflow: 'hidden',
    // // backgroundColor: 'red',
    // backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  btn: {
    position: "absolute",
    bottom: "5px",
    backgroundColor: "red",
  },
  closeBtn: {
    borderWidth: 1,
    borderColor: "#fff",
    width: 32,
    height: 32,
  },
  downloadBox: {
    position: "absolute",
    bottom: 22,
  },
  downloadBtn: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fc5531",
    borderRadius: 20,
  },

  box1: {
    position: "absolute",
    top: 7 - 5,
    left: 3,
  },
  box2: {
    position: "absolute",
    top: 6 - 5,
    right: 3,
  },
  box3: {
    position: "absolute",
    top: 19 - 5,
    left: -3.5,
  },
  box4: {
    position: "absolute",
    top: 17 - 5,
    right: -3,
  },

  image1: {
    position: "relative",
    width: 16,
    height: 15,
  },
  image2: {
    position: "relative",
    width: 16.2,
    height: 13.5,
  },
  image3: {
    position: "relative",
    width: 12.5,
    height: 11,
  },
  image4: {
    position: "relative",
    width: 15,
    height: 12,
  },
});

export default Fab;
