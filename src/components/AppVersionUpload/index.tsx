import { Center, Image, Modal, ScrollView } from "native-base";
import React from "react";
import { Linking } from "react-native";
import { Box, Button, Heading, Text } from "../Themed";

const noData = require('@/assets/images/no-data.png');

interface AppVersionUploadProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  versionInfo?: any;

}
const AppVersionUpload: React.FC<AppVersionUploadProps> = ({ setShowModal, showModal, versionInfo }) => {
  return (
      <Modal  safeAreaTop={true} isOpen={showModal} onClose={setShowModal } size='lg' closeOnOverlayClick={false}>
          <Modal.Content style={{ width: '80%' }} maxH="500">
            {
              !(versionInfo?.forceUpdate) && (
                <Modal.CloseButton />
              )
            }
            <Modal.Header>版本更新 v{versionInfo?.displayVersion}</Modal.Header>
            <Modal.Body>
              <ScrollView>
                <Heading>{versionInfo?.title}</Heading>
                <Text>
                  {versionInfo?.desc}
                </Text>
              </ScrollView>
            </Modal.Body>
            <Modal.Footer>
              {
                !(versionInfo?.forceUpdate) && (
                  <Button style={{ width: 80, height: 40, paddingTop: 0 }} onPress={() => {
                    setShowModal(false);
                  }} textProps={{ textAlign: 'center', lineHeight: 40, marginBottom: 0 }} variant="outline" title="取消" />
                )
              }
              <Button onPress={() => {
                Linking.openURL(`${versionInfo?.downloadLink}`)
              }} style={{ width: 80, height: 40, marginLeft: 16 }} title="更新" />
            </Modal.Footer>
          </Modal.Content>
        </Modal>
  )
}

export default AppVersionUpload;
