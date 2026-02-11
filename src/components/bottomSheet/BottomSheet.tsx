import React from 'react';
import {Modal, Pressable, View} from 'react-native';
import {IBottomSheetProps} from './BottomSheetProps';
import styles from './BottomSheetStyles';

export const BottomSheet = ({
  visible,
  setVisible,
  children,
}: IBottomSheetProps) => {
  return (
    <Modal
      presentationStyle="overFullScreen"
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <Pressable onPress={() => setVisible(false)} style={styles.dim} />
      <View style={styles.modalOverlay}>{children}</View>
    </Modal>
  );
};
