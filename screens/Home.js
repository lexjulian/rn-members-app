import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//components
import { FocusedStatusBar, HomeHeader, UserList } from "../components";
import { COLORS } from "../constants";

const Home = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const url = "https://randomuser.me/api/?results=100";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  function renderUsersItem(itemData) {
    const item = itemData.item;
    const props = {
      first: item.name.first,
      last: item.name.last,
      gender: item.gender,
      id: item.login.uuid,
      imgUrl: item.picture.large,
      username: item.login.username,
    };

    return <UserList {...props} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <FlatList
        data={data.results}
        keyExtractor={(item) => item.login.uuid}
        renderItem={renderUsersItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HomeHeader />}
      />
    </SafeAreaView>
  );
};

export default Home;
