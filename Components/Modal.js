import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
  Button,
} from "react-native";
import { useContext } from "react";
import { ModalContext } from "../Context/Booking";
import { Avatar } from "react-native-elements";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import modalCar from "../assets/modalCar.png";
import BackArrow from "../assets/back-arrow.png";
import ModalAvatar from "../assets/modalAvatar.png";
import calendarModal from "../assets/calendarModal.png";
import clockModal from "../assets/clockModal.png";
const ModalView = () => {
  const { ModalVisible, setModalVisible } = useContext(ModalContext);
  console.log(ModalVisible);
  let [] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });
  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={ModalVisible}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => {setModalVisible(false)}}>
              <Image source={BackArrow} style={styles.backArrow} />
            </TouchableOpacity>
          </View>
          <Image source={modalCar} />
          <Text style={styles.modalText}>
            Naozaj sa chceš prihlásiť na túto jazdu?
          </Text>
          <View
            style={{
              backgroundColor: "#F3F4F5",
              paddingVertical: 20,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              width: "92%",
            }}
          >
            <Avatar rounded source={ModalAvatar} size="medium" />
            <Text style={{ fontSize: 16, fontFamily: "Roboto_500Medium" }}>
              Michal Novák
            </Text>
            <Text style={{ fontSize: 14, color: "#797D83" }}>Škoda Fabia</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                paddingHorizontal: 40,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ width: 13, height: 13, marginTop: 2.2 }}
                  source={calendarModal}
                />
                <Text style={styles.innerText}>Piatok 28.4.2022</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ width: 13, height: 13, marginTop: 2.8 }}
                  source={clockModal}
                />
                <Text style={styles.innerText}>13:00 - 14:30</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={()=>setModalVisible(false)}>
            <Text style={{ fontSize: 18, color: "white", fontWeight: "400" }}>
              Prihlásiť sa na jazdu
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6EBF0",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 35,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", //Here is the trick
    bottom: 0, //Here is the trick
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeader: {
    width: "100%",
  },
  modalText: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
    paddingHorizontal: 50,
  },
  bottomView: {
    backgroundColor: "#EE5407",
  },
  innerText: {
    color: "#03045E",
    fontSize: 13,
    fontFamily: "Roboto_700Bold",
    paddingLeft: 5,
  },
  button: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#03045E",
    paddingVertical: 15,
    justifyContent: "center",
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
  },
});
export default ModalView;
