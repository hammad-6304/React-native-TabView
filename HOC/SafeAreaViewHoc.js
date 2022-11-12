import { SafeAreaView } from "react-native-safe-area-context";
const SafeAreaViewHoc = (Comp) => (props) =>
  (
    <SafeAreaView>
      <Comp {...props} />
    </SafeAreaView>
  );
export default SafeAreaViewHoc;
